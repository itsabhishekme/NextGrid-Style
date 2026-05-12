"use client";

import React from "react";

import { motion } from "framer-motion";

interface ResponsiveLayoutProps {
  children: React.ReactNode;

  className?: string;

  contentClassName?: string;

  fluid?: boolean;

  glassEffect?: boolean;

  animated?: boolean;

  glowEffect?: boolean;

  floatingOrbs?: boolean;

  borderEffect?: boolean;

  premiumShadow?: boolean;

  hoverEffect?: boolean;

  centered?: boolean;

  spacing?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

  maxWidth?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "full";

  rounded?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl";

  animationType?:
    | "fade"
    | "slide-up"
    | "slide-down"
    | "zoom";

  animationDuration?: number;
}

export default function ResponsiveLayout({
  children,

  className = "",

  contentClassName = "",

  fluid = false,

  glassEffect = false,

  animated = true,

  glowEffect = true,

  floatingOrbs = true,

  borderEffect = true,

  premiumShadow = true,

  hoverEffect = false,

  centered = false,

  spacing = "md",

  maxWidth = "2xl",

  rounded = "2xl",

  animationType = "slide-up",

  animationDuration = 0.55,
}: ResponsiveLayoutProps) {
  const spacingClasses = {
    xs: `
      px-2
      py-3
      sm:px-3
      sm:py-4
      md:px-4
      md:py-5
    `,

    sm: `
      px-3
      py-4
      sm:px-4
      sm:py-5
      lg:px-5
      lg:py-6
    `,

    md: `
      px-3
      py-5
      sm:px-4
      sm:py-6
      md:px-5
      md:py-7
      lg:px-6
      lg:py-8
    `,

    lg: `
      px-4
      py-6
      sm:px-5
      sm:py-7
      md:px-6
      md:py-8
      lg:px-8
      lg:py-10
    `,

    xl: `
      px-5
      py-8
      sm:px-6
      sm:py-10
      md:px-8
      md:py-12
      lg:px-10
      lg:py-14
    `,

    "2xl": `
      px-6
      py-10
      sm:px-8
      sm:py-12
      md:px-10
      md:py-14
      lg:px-14
      lg:py-16
    `,
  };

  const maxWidthClasses = {
    sm: "max-w-3xl",

    md: "max-w-5xl",

    lg: "max-w-6xl",

    xl: "max-w-7xl",

    "2xl": "max-w-[1920px]",

    "3xl": "max-w-[2100px]",

    "4xl": "max-w-[2400px]",

    full: "max-w-full",
  };

  const roundedClasses = {
    sm: "rounded-2xl",

    md: "rounded-[28px]",

    lg: "rounded-[32px]",

    xl: "rounded-[38px]",

    "2xl": "rounded-[42px]",

    "3xl": "rounded-[48px]",
  };

  const animationVariants = {
    fade: {
      initial: {
        opacity: 0,
      },
      whileInView: {
        opacity: 1,
      },
    },

    "slide-up": {
      initial: {
        opacity: 0,
        y: 30,
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
    },

    "slide-down": {
      initial: {
        opacity: 0,
        y: -30,
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
    },

    zoom: {
      initial: {
        opacity: 0,
        scale: 0.95,
      },
      whileInView: {
        opacity: 1,
        scale: 1,
      },
    },
  };

  const content = (
    <motion.div
      whileHover={
        hoverEffect
          ? {
              y: -3,
            }
          : {}
      }
      transition={{
        duration: 0.3,
      }}
      className={`
        relative
        mx-auto
        w-full

        ${
          fluid
            ? "max-w-full"
            : maxWidthClasses[maxWidth]
        }

        overflow-hidden

        ${spacingClasses[spacing]}

        transition-all
        duration-500

        ${className}
      `}
    >
      {/* MAIN CONTAINER */}
      <div
        className={`
          relative
          overflow-hidden

          ${roundedClasses[rounded]}

          ${
            glassEffect
              ? `
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-3xl
            `
              : ""
          }

          ${
            premiumShadow
              ? `
              shadow-[0_10px_120px_rgba(0,0,0,0.35)]
            `
              : ""
          }

          ${
            borderEffect
              ? `
              before:absolute
              before:left-1/2
              before:top-0
              before:h-[1px]
              before:w-[80%]
              before:-translate-x-1/2
              before:bg-gradient-to-r
              before:from-transparent
              before:via-white/30
              before:to-transparent
              before:content-['']
            `
              : ""
          }

          ${
            centered
              ? `
              flex
              flex-col
              items-center
              justify-center
            `
              : ""
          }

          ${contentClassName}
        `}
      >
        {/* TOP GLOW */}
        {glowEffect && (
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-0
              h-52
              w-52
              rounded-full
              bg-pink-500/10
              blur-[110px]
            "
          />
        )}

        {/* RIGHT GLOW */}
        {glowEffect && (
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-1/3
              z-0
              h-72
              w-72
              rounded-full
              bg-cyan-500/10
              blur-[120px]
            "
          />
        )}

        {/* CENTER LIGHT */}
        {glowEffect && (
          <div
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
        )}

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
          "
        >
          {children}
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
            w-[70%]
            -translate-x-1/2
            rounded-full
            bg-white/[0.04]
            blur-[110px]
          "
        />

        {/* SIDE LINES */}
        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-12
            hidden
            h-[80%]
            w-[1px]
            bg-gradient-to-b
            from-transparent
            via-white/10
            to-transparent
            xl:block
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-12
            hidden
            h-[80%]
            w-[1px]
            bg-gradient-to-b
            from-transparent
            via-white/10
            to-transparent
            xl:block
          "
        />
      </div>
    </motion.div>
  );

  if (!animated) {
    return (
      <section
        className="
          relative
          w-full
        "
      >
        {content}
      </section>
    );
  }

  return (
    <motion.section
      initial={
        animationVariants[
          animationType
        ].initial
      }
      whileInView={
        animationVariants[
          animationType
        ].whileInView
      }
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: animationDuration,
      }}
      className="
        relative
        w-full
        overflow-hidden
      "
    >
      {/* FLOATING ORBS */}
      {floatingOrbs && (
        <>
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="
              pointer-events-none
              absolute
              left-[-100px]
              top-[-100px]
              z-0
              h-72
              w-72
              rounded-full
              bg-pink-500/10
              blur-[130px]
            "
          />

          <motion.div
            animate={{
              y: [0, 25, 0],
              x: [0, -20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
            className="
              pointer-events-none
              absolute
              bottom-[-120px]
              right-[-120px]
              z-0
              h-80
              w-80
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
              duration: 7,
              repeat: Infinity,
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.03]
              blur-[180px]
            "
          />
        </>
      )}

      {/* OUTER LIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          rounded-[50px]
          bg-white/[0.01]
          blur-[140px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
        "
      >
        {content}
      </div>
    </motion.section>
  );
}