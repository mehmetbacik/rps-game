import { useGame } from "../context/GameContext";

const Scoreboard = () => {
  const { userScore, computerScore } = useGame();

  return (
    <div className="scoreboard">
      <p>👤 You: {userScore} - 🤖 Computer: {computerScore}</p>
    </div>
  );
};

export default Scoreboard;
