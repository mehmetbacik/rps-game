'use client';

import { useGame } from '@/context/GameContext';
import Image from 'next/image';

const ScoreBoard = () => {
  const { state } = useGame();

  return (
    <div className="score-board">
      <div className="logo">
        <Image
          src="/images/logo.svg"
          alt="Rock Paper Scissors"
          width={162}
          height={99}
          priority
        />
      </div>
      <div className="score">
        <span>SCORE</span>
        <h2>{state.score}</h2>
      </div>
    </div>
  );
};

export default ScoreBoard;
