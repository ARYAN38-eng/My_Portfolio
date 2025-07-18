// components/CustomCursor.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{ x: position.x - 15, y: position.y - 15 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className="w-[30px] h-[30px] bg-pink-500 opacity-60 rounded-full blur-md mix-blend-difference" />
    </motion.div>
  );
};

export default CustomCursor;
