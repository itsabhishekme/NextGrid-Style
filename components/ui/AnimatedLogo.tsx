"use client";

import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F8EBDD] overflow-hidden">

      {/* Glowing Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        className="absolute w-64 h-64 rounded-full border border-pink-200"
      />

      {/* Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute w-52 h-52 rounded-full bg-pink-100 blur-3xl"
      />

      {/* Logo */}
      <motion.img
        src="/logo/nextgrid-logo.svg"
        alt="NextGrid Style"
        initial={{
          scale: 0.7,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 w-36 h-36"
      />

      {/* Floating Ball */}
      <motion.div
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="absolute right-[30%] top-[35%] w-5 h-5 rounded-full bg-pink-400"
      />

      {/* Loading Text */}
      <motion.p
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-32 text-neutral-600 text-lg tracking-wide"
      >
        NextGrid Style
      </motion.p>

    </div>
  );
}