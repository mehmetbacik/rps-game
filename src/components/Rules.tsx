"use client";

import { useState } from "react";
import { useGame } from "../context/GameContext";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Rules = () => {
  const { state } = useGame();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        className="rules-button"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        RULES
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="rules-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="rules-content">
              <div className="rules-header">
                <h2>RULES</h2>
                <button
                  className="close-button"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/images/icon-close.svg"
                    alt="Close"
                    width={20}
                    height={20}
                  />
                </button>
              </div>
              <Image
                src={
                  state.gameMode === "classic"
                    ? "/images/image-rules.svg"
                    : "/images/image-rules-bonus.svg"
                }
                alt="Game Rules"
                width={304}
                height={270}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Rules;
