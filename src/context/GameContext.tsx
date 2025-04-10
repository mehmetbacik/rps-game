"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { GameContextType, GameState, Choice } from "../types/types";

const GameContext = createContext<GameContextType | undefined>(undefined);

const getRandomChoice = (): Choice => {
  const choices: Choice[] = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
};

const getResult = (
  player: Choice,
  computer: Choice
): "win" | "lose" | "draw" => {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }

  return "lose";
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = useState<GameState>({
    score: 0,
    playerChoice: null,
    computerChoice: null,
    result: null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedScore = localStorage.getItem("rps-score");
      if (savedScore) {
        setState((prev) => ({ ...prev, score: parseInt(savedScore) }));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("rps-score", state.score.toString());
    }
  }, [state.score]);

  const setPlayerChoice = (choice: Choice) => {
    const computerChoice = getRandomChoice();
    const result = getResult(choice, computerChoice);

    setState((prev) => ({
      ...prev,
      playerChoice: choice,
      computerChoice,
      result,
      score:
        result === "win"
          ? prev.score + 1
          : result === "lose"
          ? Math.max(0, prev.score - 1)
          : prev.score,
    }));
  };

  const resetGame = () => {
    setState((prev) => ({
      ...prev,
      playerChoice: null,
      computerChoice: null,
      result: null,
    }));
  };

  return (
    <GameContext.Provider value={{ state, setPlayerChoice, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
