import { motion } from "framer-motion";
import { useGame } from "@/context/GameContext";

const Result = () => {
  const { result } = useGame();

  return (
    <motion.div
      className="result-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.p
        className={`result-text ${
          result === "You win!"
            ? "win"
            : result === "You lose!"
            ? "lose"
            : "draw"
        }`}
        animate={{
          scale: [1, 1.2, 1],
          transition: { duration: 0.5, repeat: 2, repeatType: "reverse" },
        }}
      >
        {result}
      </motion.p>
    </motion.div>
  );
};

export default Result;
