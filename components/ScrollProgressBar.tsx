import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] via-[#F5D061] to-[#E6C77B] origin-left z-50 shadow-[0_0_12px_rgba(212,175,55,0.8)] pointer-events-none"
      style={{ scaleX }}
    />
  );
};
