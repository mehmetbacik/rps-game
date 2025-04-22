"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useGame } from "@/context/GameContext";
import ChoiceButton from "./ChoiceButton";
import Image from "next/image";

const Result = () => {
  const { state, resetGame, updateScore } = useGame();
  const [isComputerLoading, setIsComputerLoading] = useState(true);
  const [currentAnimationChoice, setCurrentAnimationChoice] = useState<
    "rock" | "paper" | "scissors" | "lizard" | "spock"
  >("rock");
  const [showResultText, setShowResultText] = useState(false);
  const [showWave, setShowWave] = useState(false);
  const [scoreUpdated, setScoreUpdated] = useState(false);

  const animationPool = useMemo(() => {
    return state.gameMode === "classic"
      ? ["rock", "paper", "scissors"]
      : ["rock", "paper", "scissors", "lizard", "spock"];
  }, [state.gameMode]);

  useEffect(() => {
    if (!state.playerChoice || scoreUpdated) return;

    let index = 0;
    const interval = setInterval(() => {
      setCurrentAnimationChoice(
        animationPool[index % animationPool.length] as
          | "rock"
          | "paper"
          | "scissors"
          | "lizard"
          | "spock"
      );
      index++;
    }, 150);

    const loadingTimeout = setTimeout(() => {
      clearInterval(interval);
      setIsComputerLoading(false);
      setTimeout(() => {
        setShowResultText(true);
        setShowWave(true);
        if (!scoreUpdated) {
          updateScore();
          setScoreUpdated(true);
        }
      }, 300);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, [animationPool, updateScore, state.playerChoice, scoreUpdated]);

  const handlePlayAgain = () => {
    setScoreUpdated(false);
    resetGame();
  };

  return (
    <motion.div
      className="result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="choices">
        <div className="choice">
          <h3>YOU PICKED</h3>
          <ChoiceButton
            type={state.playerChoice!}
            position="center"
            onClick={() => {}}
            isWinner={state.result === "win" && showWave}
          />
        </div>
        <div className="result-text">
          {showResultText && (
            <motion.div
              className="result-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>
                {state.result === "win" && "YOU WIN"}
                {state.result === "lose" && "YOU LOSE"}
                {state.result === "draw" && "DRAW"}
              </h2>
              <motion.button
                className="play-again"
                onClick={handlePlayAgain}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                PLAY AGAIN
              </motion.button>
            </motion.div>
          )}
        </div>
        <div className="choice">
          <h3>THE HOUSE PICKED</h3>
          {isComputerLoading ? (
            <motion.div
              className="choice-button loading center"
              initial={{ scale: 0.8 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <div className="inner">
                <Image
                  src={`/images/icon-${currentAnimationChoice}.svg`}
                  alt={currentAnimationChoice}
                  width={50}
                  height={50}
                />
              </div>
            </motion.div>
          ) : (
            <ChoiceButton
              type={state.computerChoice!}
              position="center"
              onClick={() => {}}
              isWinner={state.result === "lose" && showWave}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Result;
