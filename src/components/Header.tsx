import React from 'react';
import { useGame } from '../context/GameContext';
import '../styles/components/_header.scss';

const Header: React.FC = () => {
  const { state } = useGame();

  return (
    <header className="header">
      <div className="logo">
        <img 
          src={state.gameMode === 'classic' ? '/images/logo.svg' : '/images/logo-bonus.svg'} 
          alt="Rock Paper Scissors" 
        />
      </div>
      <div className="score-board">
        <span className="score-label">Score</span>
        <span className="score-value">{state.score}</span>
      </div>
    </header>
  );
};

export default Header; 