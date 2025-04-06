"use client";

import { motion } from "framer-motion";
import { useGame } from "../context/GameContext";
import Result from "../components/Result";

const Home = () => {
  const {
    userChoice,
    computerChoice,
    result,
    userScore,
    computerScore,
    handleUserChoice,
  } = useGame();
  const choices = ["rock", "paper", "scissors"];

  return (
    <div className="game-container">
      <h1>Rock, Paper, Scissors</h1>

      <div className="scoreboard">
        <p>
          👤 You: {userScore} - 🤖 Computer: {computerScore}
        </p>
      </div>

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
    </div>
  );
};

export default Home;
