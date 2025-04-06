"use client";

import React, { createContext, useContext, useState } from "react";

interface GameContextType {
  userChoice: string;
  computerChoice: string;
  result: string;
  userScore: number;
  computerScore: number;
  handleUserChoice: (choice: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userChoice, setUserChoice] = useState<string>("");
  const [computerChoice, setComputerChoice] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [userScore, setUserScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  const choices = ["rock", "paper", "scissors"];

  const handleUserChoice = (choice: string) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user: string, computer: string) => {
    if (user === computer) {
      setResult("It's a draw!");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      setResult("You win!");
      setUserScore((prev) => prev + 1);
    } else {
      setResult("You lose!");
      setComputerScore((prev) => prev + 1);
    }
  };

  return (
    <GameContext.Provider
      value={{
        userChoice,
        computerChoice,
        result,
        userScore,
        computerScore,
        handleUserChoice,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) throw new Error("useGame must be used within a GameProvider");
  return context;
};
