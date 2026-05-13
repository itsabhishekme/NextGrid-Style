"use client";

import { motion } from "framer-motion";

const floatingAnimation = {
  animate: {
    y: [-15, 15, -15],
    x: [-5, 5, -5],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-black">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_40%)]" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* PINK GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[150px]"
      />

      {/* CYAN GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
        className="absolute right-0 top-[20%] h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]"
      />

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

      {/* BOTTOM LIGHT */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[1px]
          w-[70%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      {/* CENTER */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6">
        {/* LIGHT BEAM */}
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="
            absolute
            h-[420px]
            w-[2px]
            bg-gradient-to-b
            from-transparent
            via-white
            to-transparent
            blur-sm
          "
        />

        {/* OUTER RING */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "linear" as const,
          }}
          className="
            absolute
            h-[320px]
            w-[320px]
            rounded-full
            border
            border-white/10
            border-t-fuchsia-400/60
            border-r-cyan-400/40
            shadow-[0_0_80px_rgba(255,255,255,0.05)]
          "
        />

        {/* INNER RING */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear" as const,
          }}
          className="
            absolute
            h-[220px]
            w-[220px]
            rounded-full
            border
            border-white/5
            border-b-cyan-300/70
            border-l-fuchsia-300/50
          "
        />

        {/* FLOATING PARTICLES */}
        <motion.div
          animate={floatingAnimation.animate}
          transition={floatingAnimation.transition}
          className="
            absolute
            left-[35%]
            top-[35%]
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
            ease: "easeInOut" as const,
          }}
          className="
            absolute
            right-[35%]
            bottom-[35%]
            h-4
            w-4
            rounded-full
            bg-cyan-400
            shadow-[0_0_30px_rgba(34,211,238,1)]
          "
        />

        {/* GLASS CARD */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut" as const,
          }}
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.05]
            px-12
            py-14
            backdrop-blur-3xl
            shadow-[0_0_100px_rgba(255,255,255,0.05)]
          "
        >
          {/* SHINE EFFECT */}
          <motion.div
            animate={{
              x: ["-120%", "220%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear" as const,
            }}
            className="
              absolute
              top-0
              h-full
              w-[120px]
              rotate-12
              bg-white/10
              blur-2xl
            "
          />

          {/* BRAND NAME */}
          <motion.h1
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
            className="
              relative
              z-10
              bg-gradient-to-r
              from-white
              via-zinc-200
              to-zinc-500
              bg-clip-text
              text-center
              text-4xl
              font-black
              uppercase
              tracking-[0.5em]
              text-transparent
              sm:text-6xl
            "
          >
            NEXTGRID
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
              ease: "easeOut" as const,
            }}
            className="
              mt-5
              text-center
              text-[11px]
              uppercase
              tracking-[0.9em]
              text-zinc-400
            "
          >
            STYLE • FASHION • LUXURY
          </motion.p>

          {/* LOADING BAR */}
          <div className="relative mt-12 h-[5px] w-[320px] overflow-hidden rounded-full bg-white/10">
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
                ease: "easeInOut" as const,
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
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut" as const,
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
            Loading Experience
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}