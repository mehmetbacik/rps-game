"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useGame } from "@/context/GameContext";
import ChoiceButton from "./ChoiceButton";
import Image from "next/image";

const animatedChoices = [
  "rock",
  "paper",
  "scissors",
  "lizard",
  "spock",
] as const;

const Result = () => {
  const { state, resetGame } = useGame();
  const [isComputerLoading, setIsComputerLoading] = useState(true);
  const [currentAnimationChoice, setCurrentAnimationChoice] = useState<
    "rock" | "paper" | "scissors" | "lizard" | "spock"
  >("rock");
  const [showResultText, setShowResultText] = useState(false);
  const [showWave, setShowWave] = useState(false);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCurrentAnimationChoice(
        animatedChoices[index % animatedChoices.length]
      );
      index++;
    }, 150);
    const loadingTimeout = setTimeout(() => {
      clearInterval(interval);
      setIsComputerLoading(false);
      setTimeout(() => {
        setShowResultText(true);
        setShowWave(true);
      }, 300);
    }, 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, []);

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
            <>
              <h2>
                {state.result === "win" && "YOU WIN"}
                {state.result === "lose" && "YOU LOSE"}
                {state.result === "draw" && "DRAW"}
              </h2>
              <motion.button
                className="play-again"
                onClick={resetGame}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                PLAY AGAIN
              </motion.button>
            </>
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
