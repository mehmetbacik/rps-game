'use client';

import { useGame } from '@/context/GameContext';
import { motion } from 'framer-motion';

const GameModeToggle = () => {
  const { state, toggleGameMode } = useGame();

  return (
    <div className="game-mode-toggle">
      <motion.span
        className={state.gameMode === 'classic' ? 'active' : ''}
        animate={{ opacity: state.gameMode === 'classic' ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        CLASSIC
      </motion.span>
      <motion.button
        className={`toggle ${state.gameMode}`}
        onClick={toggleGameMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="toggle-handle"
          animate={{
            x: state.gameMode === 'classic' ? 0 : 24,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      </motion.button>
      <motion.span
        className={state.gameMode === 'advanced' ? 'active' : ''}
        animate={{ opacity: state.gameMode === 'advanced' ? 1 : 0.5 }}
        transition={{ duration: 0.3 }}
      >
        ADVANCED
      </motion.span>
    </div>
  );
};

export default GameModeToggle; 