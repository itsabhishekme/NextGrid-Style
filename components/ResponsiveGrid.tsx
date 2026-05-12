"use client";

import React from "react";

import { motion } from "framer-motion";

interface ResponsiveGridProps {
  children: React.ReactNode;

  className?: string;

  containerClassName?: string;

  cols?: {
    base?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    "2xl"?: number;
  };

  gap?: string;

  animated?: boolean;

  glassEffect?: boolean;

  glowEffect?: boolean;

  bordered?: boolean;

  hoverEffect?: boolean;

  floatingOrbs?: boolean;

  premiumShadow?: boolean;

  staggerChildren?: boolean;

  rounded?: string;

  padding?: string;

  animationDuration?: number;
}

export default function ResponsiveGrid({
  children,

  className = "",

  containerClassName = "",

  cols = {
    base: 2,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
    "2xl": 5,
  },

  gap = "gap-4 md:gap-6 xl:gap-7",

  animated = true,

  glassEffect = false,

  glowEffect = true,

  bordered = true,

  hoverEffect = true,

  floatingOrbs = true,

  premiumShadow = true,

  staggerChildren = false,

  rounded = "rounded-[32px]",

  padding = "p-3 sm:p-4 lg:p-5",

  animationDuration = 0.5,
}: ResponsiveGridProps) {
  const gridClasses = `
    relative
    grid
    w-full

    grid-cols-${cols.base || 2}

    sm:grid-cols-${cols.sm || 2}

    md:grid-cols-${cols.md || 3}

    lg:grid-cols-${cols.lg || 4}

    xl:grid-cols-${cols.xl || 4}

    2xl:grid-cols-${cols["2xl"] || 5}

    ${gap}

    overflow-hidden

    transition-all
    duration-500

    ${rounded}

    ${padding}

    ${
      bordered
        ? `
      border
      border-white/10
    `
        : ""
    }

    ${
      glassEffect
        ? `
      bg-white/[0.03]
      backdrop-blur-3xl
    `
        : ""
    }

    ${
      premiumShadow
        ? `
      shadow-[0_10px_80px_rgba(0,0,0,0.35)]
    `
        : ""
    }

    ${
      hoverEffect
        ? `
      hover:border-white/20
      hover:bg-white/[0.04]
    `
        : ""
    }

    ${className}
  `;

  const content = (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -2,
            }
          : {}
      }
      transition={{
        duration: 0.3,
      }}
      className={gridClasses}
    >
      {/* TOP LIGHT LINE */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[1px]
          w-[80%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/30
          to-transparent
        "
      />

      {/* GRID CHILDREN */}
      <div
        className={`
          relative
          z-10
          grid
          w-full

          grid-cols-${cols.base || 2}

          sm:grid-cols-${cols.sm || 2}

          md:grid-cols-${cols.md || 3}

          lg:grid-cols-${cols.lg || 4}

          xl:grid-cols-${cols.xl || 4}

          2xl:grid-cols-${cols["2xl"] || 5}

          ${gap}
        `}
      >
        {staggerChildren ? (
          <>
            {React.Children.map(
              children,
              (child, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay:
                      index * 0.05,
                    duration: 0.4,
                  }}
                >
                  {child}
                </motion.div>
              )
            )}
          </>
        ) : (
          children
        )}
      </div>

      {/* INNER GLOW */}
      {glowEffect && (
        <>
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-0
              h-40
              w-40
              rounded-full
              bg-pink-500/10
              blur-[100px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              z-0
              h-52
              w-52
              rounded-full
              bg-cyan-500/10
              blur-[120px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.03]
              blur-[140px]
            "
          />
        </>
      )}
    </motion.div>
  );

  if (!animated) {
    return (
      <div
        className={`
          relative
          w-full
          ${containerClassName}
        `}
      >
        {content}
      </div>
    );
  }

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: animationDuration,
      }}
      className={`
        relative
        w-full
        overflow-hidden

        ${containerClassName}
      `}
    >
      {/* BACKGROUND ORBS */}
      {floatingOrbs && (
        <>
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
              pointer-events-none
              absolute
              left-[-80px]
              top-[-80px]
              z-0
              h-64
              w-64
              rounded-full
              bg-pink-500/10
              blur-[120px]
            "
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="
              pointer-events-none
              absolute
              bottom-[-100px]
              right-[-100px]
              z-0
              h-72
              w-72
              rounded-full
              bg-cyan-500/10
              blur-[140px]
            "
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-[420px]
              w-[420px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.03]
              blur-[160px]
            "
          />
        </>
      )}

      {/* GRID CONTENT */}
      <div
        className="
          relative
          z-10
        "
      >
        {content}
      </div>

      {/* BOTTOM LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-0
          h-32
          w-[60%]
          -translate-x-1/2
          rounded-full
          bg-white/[0.04]
          blur-[100px]
        "
      />

      {/* SIDE LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          z-0
          h-52
          w-52
          -translate-y-1/2
          rounded-full
          bg-violet-500/10
          blur-[120px]
        "
      />

      {/* TOP LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-0
          h-44
          w-44
          rounded-full
          bg-emerald-500/10
          blur-[100px]
        "
      />
    </motion.section>
  );
}