"use client";

import { GameProvider } from '@/context/GameContext';
import GameBoard from '@/components/GameBoard';
import ScoreBoard from '@/components/Scoreboard';
import '@/styles/main.scss';

export default function Home() {
  return (
    <GameProvider>
      <main className="container">
        <ScoreBoard />
        <GameBoard />
      </main>
    </GameProvider>
  );
}
