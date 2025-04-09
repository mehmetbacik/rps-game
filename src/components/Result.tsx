'use client';

import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";
import ChoiceButton from './ChoiceButton';

const Result = () => {
  const { state, resetGame } = useGame();

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
          />
        </div>
        <div className="result-text">
          <h2>
            {state.result === 'win' && 'YOU WIN'}
            {state.result === 'lose' && 'YOU LOSE'}
            {state.result === 'draw' && 'DRAW'}
          </h2>
          <motion.button
            className="play-again"
            onClick={resetGame}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            PLAY AGAIN
          </motion.button>
        </div>
        <div className="choice">
          <h3>THE HOUSE PICKED</h3>
          <ChoiceButton
            type={state.computerChoice!}
            position="center"
            onClick={() => {}}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Result;
