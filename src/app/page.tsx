"use client";

import { GameProvider } from '@/context/GameContext';
import GameBoard from '@/components/GameBoard';
import Header from '@/components/Header';
import Rules from '@/components/Rules';
import GameModeToggle from '@/components/GameModeToggle';
import '@/styles/main.scss';

export default function Home() {
  return (
    <GameProvider>
      <main className="container">
        <Header />
        <GameBoard />
        <Rules />
        <GameModeToggle />
      </main>
    </GameProvider>
  );
}
