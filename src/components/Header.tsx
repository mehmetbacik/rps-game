'use client';

import React from "react";
import { useGame } from "../context/GameContext";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "../styles/components/_header.scss";

const Header: React.FC = () => {
  const { state } = useGame();

  return (
    <header className="header">
      <AnimatePresence mode="wait">
        <motion.div
          key={state.gameMode}
          className="choices"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="logo">
            <Image
              src={
                state.gameMode === "classic"
                  ? "/images/logo.svg"
                  : "/images/logo-bonus.svg"
              }
              alt="Rock Paper Scissors"
              width={150}
              height={150}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="score-board">
        <span className="score-label">Score</span>
        <h2 className="score-value">{state.score}</h2>
      </div>
    </header>
  );
};

export default Header;
