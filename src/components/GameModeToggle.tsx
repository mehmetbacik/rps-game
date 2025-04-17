"use client";

import React from "react";
import { useGame } from "../context/GameContext";
import "../styles/components/_game-mode-toggle.scss";

const GameModeToggle: React.FC = () => {
  const { state, toggleGameMode } = useGame();

  return (
    <div className="game-mode-toggle">
      <div className="toggle-container">
        <input
          type="checkbox"
          id="game-mode-switch"
          aria-label="Toggle game mode"
          checked={state.gameMode === "advanced"}
          onChange={toggleGameMode}
        />
        <label
          htmlFor="game-mode-switch"
          className={
            state.gameMode === "advanced" ? "mode-advanced" : "mode-classic"
          }
        >
          <span className="mode-label classic">CLASSIC</span>
          <span className="mode-label advanced">ADVANCED</span>
        </label>
      </div>
    </div>
  );
};

export default GameModeToggle;
