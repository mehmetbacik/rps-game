import React from "react";
import { motion } from "framer-motion";

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
  return (
    <motion.div
      className="popup"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.7 }}
    >
      <div className="popup-content">
        <h3>🎉 Congratulations!</h3>
        <p>You’ve scored more than 3 points!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </motion.div>
  );
};

export default Popup;