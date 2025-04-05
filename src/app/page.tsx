"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Home = () => {
  const [userChoice, setUserChoice] = useState<string>('');
  const [computerChoice, setComputerChoice] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const choices = ['rock', 'paper', 'scissors'];

  const handleUserChoice = (choice: string) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setComputerChoice(randomChoice);
    determineWinner(choice, randomChoice);
  };

  const determineWinner = (user: string, computer: string) => {
    if (user === computer) {
      setResult('It\'s a draw!');
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  return (
    <div className="game-container">
      <h1>Rock, Paper, Scissors</h1>
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
        <h2>{result}</h2>
      </div>
    </div>
  );
};

export default Home;
