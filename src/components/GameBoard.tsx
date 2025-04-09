'use client';

import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import Image from 'next/image';
import ChoiceButton from './ChoiceButton';
import Result from './Result';

const GameBoard = () => {
  const { state, setPlayerChoice } = useGame();

  return (
    <div className="game-board">
      {!state.playerChoice ? (
        <motion.div
          className="choices"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="triangle">
            <Image
              src="/images/bg-triangle.svg"
              alt="Triangle"
              width={313}
              height={278}
            />
          </div>
          <ChoiceButton
            type="paper"
            position="top"
            onClick={() => setPlayerChoice('paper')}
          />
          <ChoiceButton
            type="scissors"
            position="right"
            onClick={() => setPlayerChoice('scissors')}
          />
          <ChoiceButton
            type="rock"
            position="bottom"
            onClick={() => setPlayerChoice('rock')}
          />
        </motion.div>
      ) : (
        <Result />
      )}
    </div>
  );
};

export default GameBoard; 