"use client";

import Link from "next/link";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <div
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-4
        py-24
        text-white
      "
    >
      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* LEFT GLOW */}
      <div
        className="
          absolute
          left-[-220px]
          top-[-220px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-pink-500/10
          blur-[120px]
        "
      />

      {/* RIGHT GLOW */}
      <div
        className="
          absolute
          right-[-220px]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* CENTER GLOW */}
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
          bg-white/[0.04]
          blur-[120px]
        "
      />

      {/* CARD */}
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
          duration: 0.5,
        }}
        className="
          relative
          z-10
          w-full
          max-w-xl
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.03]
          p-6
          shadow-[0_0_80px_rgba(255,255,255,0.04)]
          backdrop-blur-3xl
          sm:p-10
        "
      >
        {/* TOP LIGHT */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-[1px]
            w-[70%]
            -translate-x-1/2
            bg-gradient-to-r
            from-transparent
            via-white/50
            to-transparent
          "
        />

        {/* HEADER */}
        <div className="text-center">
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
              h-20
              w-20
              items-center
              justify-center
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.04]
            "
          >
            <Sparkles size={34} />
          </motion.div>

          <p
            className="
              mt-6
              text-xs
              uppercase
              tracking-[0.35em]
              text-zinc-500
            "
          >
            NextGrid Fashion
          </p>

          <h1
            className="
              mt-3
              text-3xl
              font-black
              uppercase
              tracking-[0.15em]
              sm:text-5xl
            "
          >
            Register
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-md
              text-sm
              leading-7
              text-zinc-400
            "
          >
            Create your premium luxury fashion
            account and explore futuristic
            ecommerce experiences.
          </p>
        </div>

        {/* FORM */}
        <form className="mt-10 space-y-5">
          {/* NAME */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <div
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            >
              <User size={18} />
            </div>

            <input
              type="text"
              placeholder="Full Name"
              className="
                h-14
                w-full
                bg-transparent
                pl-14
                pr-5
                text-sm
                outline-none
                placeholder:text-zinc-500
              "
            />
          </div>

          {/* EMAIL */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <div
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            >
              <Mail size={18} />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="
                h-14
                w-full
                bg-transparent
                pl-14
                pr-5
                text-sm
                outline-none
                placeholder:text-zinc-500
              "
            />
          </div>

          {/* PASSWORD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <div
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            >
              <Lock size={18} />
            </div>

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              className="
                h-14
                w-full
                bg-transparent
                pl-14
                pr-14
                text-sm
                outline-none
                placeholder:text-zinc-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {/* CONFIRM PASSWORD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <div
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            >
              <Lock size={18} />
            </div>

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm Password"
              className="
                h-14
                w-full
                bg-transparent
                pl-14
                pr-14
                text-sm
                outline-none
                placeholder:text-zinc-500
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            type="submit"
            className="
              group
              flex
              h-14
              w-full
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-white
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-black
              shadow-2xl
            "
          >
            Create Account

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </motion.button>
        </form>

        {/* LOGIN */}
        <div className="mt-8 text-center">
          <p
            className="
              text-sm
              text-zinc-500
            "
          >
            Already have an account?
          </p>

          <Link
            href="/login"
            className="
              mt-3
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              uppercase
              tracking-[0.15em]
              text-white
            "
          >
            Login Account

            <ArrowRight size={16} />
          </Link>
        </div>

        {/* FOOTER */}
        <div className="mt-10 text-center">
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-zinc-600
            "
          >
            NextGrid Luxury Fashion Platform
          </p>
        </div>
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
          via-white/50
          to-transparent
        "
      />
    </div>
  );
}