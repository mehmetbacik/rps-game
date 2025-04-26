'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import Image from 'next/image';
import ChoiceButton from './ChoiceButton';
import Result from './Result';

const GameBoard = () => {
  const { state, setPlayerChoice } = useGame();

  return (
    <div className="game-board">
      <AnimatePresence mode="wait">
        {!state.playerChoice ? (
          <motion.div
            key={state.gameMode}
            className="choices"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <div className={state.gameMode === 'classic' ? 'triangle' : 'pentagon'}>
              <Image
                src={`/images/bg-${state.gameMode === 'classic' ? 'triangle' : 'pentagon'}.svg`}
                alt="Game mode"
                width={state.gameMode === 'classic' ? 313 : 400}
                height={state.gameMode === 'classic' ? 278 : 400}
                priority
              />
            </div>
            <motion.div
              className={`${state.gameMode === 'classic' ? 'triangle-wrapper' : 'pentagon-wrapper'} choice-buttons`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ChoiceButton
                type="paper"
                position="paper-position"
                onClick={() => setPlayerChoice('paper')}
              />
              <ChoiceButton
                type="scissors"
                position="scissors-position"
                onClick={() => setPlayerChoice('scissors')}
              />
              <ChoiceButton
                type="rock"
                position="rock-position"
                onClick={() => setPlayerChoice('rock')}
              />
              {state.gameMode === 'advanced' && (
                <>
                  <ChoiceButton
                    type="lizard"
                    position="lizard-position"
                    onClick={() => setPlayerChoice('lizard')}
                  />
                  <ChoiceButton
                    type="spock"
                    position="spock-position"
                    onClick={() => setPlayerChoice('spock')}
                  />
                </>
              )}
            </motion.div>
          </motion.div>
        ) : (
          <Result />
        )}
      </AnimatePresence>
    </div>
  );
};

export default GameBoard; 