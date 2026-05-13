"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {

  return (
    <>
      {/* PINK */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-40
          top-0
          h-[520px]
          w-[520px]
          rounded-full
          bg-fuchsia-500/20
          blur-[160px]
        "
      />

      {/* CYAN */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          right-0
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[150px]
        "
      />
    </>
  );
}