"use client";

import { GameProvider } from '@/context/GameContext';
import GameBoard from '@/components/GameBoard';
import ScoreBoard from '@/components/Scoreboard';
import Rules from '@/components/Rules';
import '@/styles/main.scss';

export default function Home() {
  return (
    <GameProvider>
      <main className="container">
        <ScoreBoard />
        <GameBoard />
        <Rules />
      </main>
    </GameProvider>
  );
}
