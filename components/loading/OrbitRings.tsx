"use client";

import { motion } from "framer-motion";

export default function OrbitRings() {

  return (
    <>
      {/* OUTER */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[340px]
          w-[340px]
          rounded-full
          border
          border-white/10
          border-t-fuchsia-400/60
          border-r-cyan-400/50
        "
      />

      {/* INNER */}
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          h-[240px]
          w-[240px]
          rounded-full
          border
          border-white/5
          border-b-cyan-300/70
          border-l-fuchsia-300/50
        "
      />
    </>
  );
}