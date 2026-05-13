"use client";

import { motion } from "framer-motion";

export default function LoadingBar() {

  return (
    <div className="mt-12">

      <div
        className="
          relative
          h-[5px]
          w-[320px]
          overflow-hidden
          rounded-full
          bg-white/10
        "
      >
        <motion.div
          initial={{
            x: "-100%",
          }}
          animate={{
            x: "100%",
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-y-0
            w-1/2
            rounded-full
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
          "
        />
      </div>

      <motion.p
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
          mt-6
          text-center
          text-[10px]
          uppercase
          tracking-[0.5em]
          text-zinc-500
        "
      >
        Preparing Experience
      </motion.p>
    </div>
  );
}