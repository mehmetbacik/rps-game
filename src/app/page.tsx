"use client";

import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";
import Result from "@/components/Result";
import Scoreboard from "@/components/Scoreboard";
import GameControls from "@/components/GameControls"; 

const Home = () => {
  const {
    userChoice,
    computerChoice,
    handleUserChoice,
  } = useGame();
  const choices = ["rock", "paper", "scissors"];

  return (
    <div className="game-container">
      <h1>Rock, Paper, Scissors</h1>
      <Scoreboard />
      <div className="choices">
        {choices.map((choice) => (
          <motion.button
            key={choice}
            className="choice-btn"
            onClick={() => handleUserChoice(choice)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </motion.button>
        ))}
      </div>
      <div className="result">
        <p>Your choice: {userChoice}</p>
        <p>Computer&apos;s choice: {computerChoice}</p>
      </div>
      <Result />
      <GameControls />
    </div>
  );
};

export default Home;
