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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_45%)]" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* PINK GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
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

      {/* CYAN GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
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
          via-white/70
          to-transparent
        "
      />

      {/* CENTER */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6">

        {/* LIGHT BEAM */}
        <motion.div
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scaleY: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
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
            shadow-[0_0_80px_rgba(255,255,255,0.05)]
          "
        />

        {/* INNER RING */}
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

        {/* PARTICLE */}
        <motion.div
          animate={floatingAnimation.animate}
          transition={floatingAnimation.transition}
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

        {/* PARTICLE */}
        <motion.div
          animate={{
            y: [15, -15, 15],
            x: [5, -5, 5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
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

        {/* MAIN CARD */}
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
            ease: "easeOut",
          }}
          className="
            relative
            overflow-hidden
            rounded-[42px]
            border
            border-white/10
            bg-white/[0.05]
            px-10
            py-14
            backdrop-blur-3xl
            shadow-[0_0_120px_rgba(255,255,255,0.06)]
          "
        >

          {/* SHINE */}
          <motion.div
            animate={{
              x: ["-120%", "220%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
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

          {/* TITLE */}
          <motion.h1
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
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
              tracking-[0.45em]
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
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
              duration: 1,
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
          <div
            className="
              relative
              mt-12
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

          {/* LOADING TEXT */}
          <motion.p
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
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
        </motion.div>
      </div>
    </div>
  );
}