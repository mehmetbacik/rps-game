'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ChoiceButtonProps {
  type: 'rock' | 'paper' | 'scissors' | 'lizard' | 'spock';
  position: 'rock-position' | 'paper-position' | 'scissors-position' | 'lizard-position' | 'spock-position' | 'center' ;
  onClick: () => void;
}

const ChoiceButton = ({ type, position, onClick }: ChoiceButtonProps) => {
  return (
    <motion.button
      className={`choice-button ${type} ${position}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="inner">
        <Image
          src={`/images/icon-${type}.svg`}
          alt={type}
          width={50}
          height={50}
        />
      </div>
    </motion.button>
  );
};

export default ChoiceButton; 