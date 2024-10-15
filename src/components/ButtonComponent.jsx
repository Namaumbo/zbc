import React from "react";
import { motion } from "framer-motion";

const ButtonComponent = ({ onClick, label, disabled, icon }) => {
  return (
    <>
      <motion.button
        className=" bg-orange-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {label || icon}
      </motion.button>
    </>
  );
};

export default ButtonComponent;
