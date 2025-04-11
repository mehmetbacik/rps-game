"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { GameContextType, GameState, Choice, GameMode } from "../types/types";

const GameContext = createContext<GameContextType | undefined>(undefined);

const getRandomChoice = (gameMode: GameMode): Choice => {
  const classicChoices: Choice[] = ["rock", "paper", "scissors"];
  const advancedChoices: Choice[] = [...classicChoices, "lizard", "spock"];
  const choices = gameMode === "classic" ? classicChoices : advancedChoices;
  return choices[Math.floor(Math.random() * choices.length)];
};

const getResult = (player: Choice, computer: Choice): "win" | "lose" | "draw" => {
  if (player === computer) return "draw";

  const winConditions = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["rock", "scissors"]
  };

  if (!player || !computer) return "draw";
  return winConditions[player]?.includes(computer) ? "win" : "lose";
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>({
    score: 0,
    playerChoice: null,
    computerChoice: null,
    result: null,
    gameMode: "classic",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedScore = localStorage.getItem("rps-score");
      const savedMode = localStorage.getItem("rps-mode") as GameMode;
      setState(prev => ({
        ...prev,
        score: savedScore ? parseInt(savedScore) : 0,
        gameMode: savedMode || "classic",
      }));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("rps-score", state.score.toString());
      localStorage.setItem("rps-mode", state.gameMode);
    }
  }, [state.score, state.gameMode]);

  const setPlayerChoice = (choice: Choice) => {
    const computerChoice = getRandomChoice(state.gameMode);
    const result = getResult(choice, computerChoice);

    setState(prev => ({
      ...prev,
      playerChoice: choice,
      computerChoice,
      result,
      score: result === "win" ? prev.score + 1 : result === "lose" ? Math.max(0, prev.score - 1) : prev.score,
    }));
  };

  const resetGame = () => {
    setState(prev => ({
      ...prev,
      playerChoice: null,
      computerChoice: null,
      result: null,
    }));
  };

  const toggleGameMode = () => {
    setState(prev => {
      const newMode = prev.gameMode === "classic" ? "advanced" : "classic";
      return {
        ...prev,
        gameMode: newMode,
        playerChoice: null,
        computerChoice: null,
        result: null,
      };
    });
  };

  return (
    <GameContext.Provider value={{ state, setPlayerChoice, resetGame, toggleGameMode }}>
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
