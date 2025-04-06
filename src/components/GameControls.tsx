import { useGame } from "../context/GameContext";

const GameControls = () => {
  const { resetGame } = useGame();

  return (
    <div className="game-controls">
      <button onClick={resetGame} className="reset-btn">
        🔄 Restart Game
      </button>
    </div>
  );
};

export default GameControls;