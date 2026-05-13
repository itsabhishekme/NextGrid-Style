"use client";

import { motion } from "framer-motion";

export default function FloatingParticles() {

  return (
    <>
      <motion.div
        animate={{
          y: [-15, 15, -15],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          left-[36%]
          top-[36%]
          h-3
          w-3
          rounded-full
          bg-fuchsia-400
          shadow-[0_0_30px_rgba(217,70,239,1)]
        "
      />

      <motion.div
        animate={{
          y: [15, -15, 15],
          x: [5, -5, 5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="
          absolute
          right-[36%]
          bottom-[36%]
          h-4
          w-4
          rounded-full
          bg-cyan-400
          shadow-[0_0_30px_rgba(34,211,238,1)]
        "
      />
    </>
  );
}