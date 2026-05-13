"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
      "
    >
      {/* BACKGROUND GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* PINK GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          left-[-200px]
          top-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-pink-500/10
          blur-[140px]
        "
      />

      {/* CYAN GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="
          absolute
          right-[-150px]
          top-[20%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* CENTER CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          px-6
        "
      >
        {/* OUTER ROTATING RING */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="
            absolute
            h-56
            w-56
            rounded-full
            border
            border-white/10
            border-t-pink-400/60
          "
        />

        {/* INNER ROTATING RING */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "linear",
          }}
          className="
            absolute
            h-40
            w-40
            rounded-full
            border
            border-white/5
            border-b-cyan-400/60
          "
        />

        {/* FLOATING PARTICLES */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="
            absolute
            left-[-30px]
            top-[20px]
            h-3
            w-3
            rounded-full
            bg-pink-400
            shadow-[0_0_20px_rgba(255,105,180,0.8)]
          "
        />

        <motion.div
          animate={{
            y: [10, -10, 10],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
            absolute
            right-[-20px]
            bottom-[10px]
            h-4
            w-4
            rounded-full
            bg-cyan-400
            shadow-[0_0_20px_rgba(34,211,238,0.8)]
          "
        />

        {/* LOGO */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="
            relative
            flex
            h-32
            w-32
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-3xl
            shadow-[0_0_60px_rgba(255,255,255,0.08)]
          "
        >
          {/* INNER GLOW */}
          <div
            className="
              absolute
              inset-0
              rounded-full
              bg-white/[0.04]
              blur-2xl
            "
          />

          {/* BRAND INITIAL */}
          <h1
            className="
              relative
              z-10
              bg-gradient-to-r
              from-white
              via-zinc-300
              to-zinc-500
              bg-clip-text
              text-3xl
              font-black
              uppercase
              tracking-[0.3em]
              text-transparent
            "
          >
            NG
          </h1>
        </motion.div>

        {/* BRAND NAME */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="
            mt-12
            bg-gradient-to-r
            from-white
            via-zinc-300
            to-zinc-500
            bg-clip-text
            text-3xl
            font-black
            uppercase
            tracking-[0.3em]
            text-transparent
            sm:text-5xl
          "
        >
          NextGrid
        </motion.h2>

        {/* SUBTITLE */}
        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            mt-4
            text-[11px]
            uppercase
            tracking-[0.5em]
            text-zinc-500
          "
        >
          Style • Fashion • Luxury
        </motion.p>

        {/* LOADING BAR */}
        <div
          className="
            relative
            mt-10
            h-[4px]
            w-[260px]
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
              repeat: Infinity,
              duration: 1.2,
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

        {/* LOADING TEXT */}
        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="
            mt-5
            text-[10px]
            uppercase
            tracking-[0.4em]
            text-zinc-600
          "
        >
          Loading Experience
        </motion.p>
      </div>

      {/* TOP LIGHT */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[1px]
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/60
          to-transparent
        "
      />
    </div>
  );
}