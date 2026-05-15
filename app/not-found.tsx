"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Home,
  Search,
  Sparkles,
  Compass,
} from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-white
        px-6
        py-20
      "
    >
      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* TOP GLOW */}
      <div
        className="
          absolute
          left-[-200px]
          top-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-pink-200/40
          blur-[120px]
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          right-[-180px]
          top-[20%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-200/40
          blur-[120px]
        "
      />

      {/* CENTER LIGHT */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-zinc-100
          blur-[120px]
        "
      />

      {/* FLOATING BLUR */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[10%]
          left-[10%]
          h-32
          w-32
          rounded-full
          bg-violet-200/30
          blur-[70px]
        "
      />

      {/* MAIN CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative
          z-10
          w-full
          max-w-4xl
          overflow-hidden
          rounded-[42px]
          border
          border-black/5
          bg-white/70
          p-8
          shadow-[0_25px_100px_rgba(0,0,0,0.08)]
          backdrop-blur-3xl
          sm:p-14
        "
      >
        {/* CARD LIGHT */}
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[1px]
            w-[80%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-black/30
            to-transparent
          "
        />

        {/* ICON */}
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.1,
          }}
          className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-[28px]
            border
            border-black/5
            bg-gradient-to-br
            from-zinc-50
            to-zinc-100
            shadow-xl
          "
        >
          <Compass className="h-10 w-10 text-black" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          className="
            mt-10
            text-center
            text-[90px]
            font-black
            leading-none
            tracking-[-0.08em]
            text-black
            sm:text-[170px]
          "
        >
          404
        </motion.h1>

        {/* TITLE */}
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
          }}
          className="
            mt-4
            text-center
            text-3xl
            font-black
            tracking-[-0.04em]
            text-black
            sm:text-6xl
          "
        >
          Page Not Found
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-center
            text-base
            leading-8
            text-zinc-600
            sm:text-lg
          "
        >
          The page you are looking for doesn’t exist or has been moved.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
            mt-14
            flex
            flex-col
            items-center
            justify-center
            gap-5
            sm:flex-row
          "
        >
          {/* HOME */}
          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                group
                relative
                flex
                h-14
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-2xl
                bg-black
                px-8
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-white
                shadow-2xl
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-zinc-800
                  via-black
                  to-zinc-900
                "
              />

              <div className="relative flex items-center gap-3">
                <Home size={18} />

                Back Home

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </div>
            </motion.button>
          </Link>

          {/* SEARCH */}
          <Link href="/search">
            <motion.button
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                group
                flex
                h-14
                items-center
                justify-center
                gap-3
                rounded-2xl
                border
                border-black/10
                bg-white
                px-8
                text-sm
                font-bold
                uppercase
                tracking-[0.18em]
                text-black
                shadow-lg
                transition-all
                duration-300
                hover:border-black/20
                hover:shadow-2xl
              "
            >
              <Search size={18} />

              Search

              <Sparkles
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
              />
            </motion.button>
          </Link>
        </motion.div>

        {/* BOTTOM BADGE */}
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
          className="
            mt-12
            flex
            justify-center
          "
        >
          <div
            className="
              rounded-full
              border
              border-black/10
              bg-zinc-50
              px-5
              py-2
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            Modern Interface
          </div>
        </motion.div>
      </motion.div>

      {/* NOISE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.02]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />
    </div>
  );
}