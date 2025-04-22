import React from "react";
import { motion } from "framer-motion";
import "../styles/components/_popup.scss";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <motion.div
      className="popup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="popup-content"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="cat-container">
          <div className="cat">
            <div className="ear left"></div>
            <div className="ear right"></div>
            <div className="face">
              <div className="eye left"></div>
              <div className="eye right"></div>
              <div className="nose"></div>
              <div className="mouth"></div>
              <div className="whiskers left"></div>
              <div className="whiskers right"></div>
            </div>
            <motion.div
              className="tail"
              animate={{ rotate: [0, 20, -20, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </div>
        <h3>Congratulations!</h3>
        <p>You’ve scored more than 3 points!</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default Popup;
