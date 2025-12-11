// src/components/PageTransition.jsx
import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}       // 처음에 투명도 0
      animate={{ opacity: 1 }}       // 나타날 때 투명도 1
      exit={{ opacity: 0 }}          // 사라질 때 투명도 0
      transition={{ duration: 0.3 }} // 0.5초 동안 부드럽게 전환
      style={{ width: "100%", height: "100%" }} // 전체 화면 채우기
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;