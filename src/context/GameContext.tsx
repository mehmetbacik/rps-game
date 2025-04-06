"use client";

import { createContext, useContext, useState } from "react";

interface GameContextType {
  userScore: number;
  computerScore: number;
  userChoice: string | null;
  computerChoice: string | null;
  result: string | null;
  handleUserChoice: (choice: string) => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleUserChoice = (choice: string) => {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setComputerChoice(randomChoice);

    if (choice === randomChoice) {
      setResult("It's a tie! 🤝");
    } else if (
      (choice === "rock" && randomChoice === "scissors") ||
      (choice === "paper" && randomChoice === "rock") ||
      (choice === "scissors" && randomChoice === "paper")
    ) {
      setResult("You win! 🎉");
      setUserScore((prev) => prev + 1);
    } else {
      setResult("You lose! 😢");
      setComputerScore((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setUserScore(0);
    setComputerScore(0);
    setUserChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <GameContext.Provider
      value={{
        userScore,
        computerScore,
        userChoice,
        computerChoice,
        result,
        handleUserChoice,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
