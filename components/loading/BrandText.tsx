"use client";

import { motion } from "framer-motion";

export default function BrandText() {

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="
        relative
        z-10
        text-center
      "
    >
      <motion.h1
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          bg-gradient-to-r
          from-white
          via-zinc-200
          to-zinc-500
          bg-clip-text
          text-4xl
          font-black
          uppercase
          tracking-[0.45em]
          text-transparent
          sm:text-6xl
        "
      >
        NEXTGRID
      </motion.h1>

      <p
        className="
          mt-5
          text-[11px]
          uppercase
          tracking-[0.9em]
          text-zinc-400
        "
      >
        STYLE • FASHION • LUXURY
      </p>
    </motion.div>
  );
}