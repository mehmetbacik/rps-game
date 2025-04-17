"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ChoiceButtonProps {
  type: "rock" | "paper" | "scissors" | "lizard" | "spock";
  position:
    | "rock-position"
    | "paper-position"
    | "scissors-position"
    | "lizard-position"
    | "spock-position"
    | "center";
  onClick: () => void;
  isWinner?: boolean;
  loading?: boolean;
}

const ChoiceButton = ({
  type,
  position,
  onClick,
  isWinner = false,
  loading = false,
}: ChoiceButtonProps) => {
  return (
    <motion.button
      className={`choice-button ${type} ${position} ${
        isWinner ? "winner" : ""
      } ${loading ? "loading" : ""}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      disabled={loading}
    >
      {!loading && <div className="pulse-layer" />}
      <div className="inner">
        {loading ? (
          <div className="loader" />
        ) : (
          <Image
            src={`/images/icon-${type}.svg`}
            alt={type}
            width={50}
            height={50}
          />
        )}
      </div>
    </motion.button>
  );
};

export default ChoiceButton;
