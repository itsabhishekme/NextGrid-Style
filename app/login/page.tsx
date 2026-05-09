"use client";

import Link from "next/link";

import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {/* GRID */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",

            backgroundSize: "80px 80px",
          }}
        />

        {/* GLOW */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[160px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[160px]" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          justify-center
          px-6
          py-24
        "
      >
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
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
            className="hidden lg:block"
          >
            {/* BADGE */}
            <div
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3
              "
            >
              <Sparkles size={16} />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-zinc-400
                "
              >
                Premium Fashion Platform
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                mt-10
                text-6xl
                font-black
                leading-[0.95]
                md:text-8xl
              "
            >
              WELCOME
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-zinc-300
                  to-zinc-500
                  bg-clip-text
                  text-transparent
                "
              >
                BACK
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-zinc-400
              "
            >
              Access your premium fashion account and
              continue exploring futuristic luxury
              collections designed for the next generation.
            </p>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {[
                {
                  number: "2M+",
                  label: "Users",
                },

                {
                  number: "180+",
                  label: "Brands",
                },

                {
                  number: "24/7",
                  label: "Support",
                },
              ].map((item) => (
                <div key={item.label}>
                  <h3 className="text-4xl font-black">
                    {item.number}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-zinc-500
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.6,
            }}
            className="
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-3xl
              md:p-12
            "
          >
            {/* GLOW */}
            <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />

            {/* HEADER */}
            <div className="relative">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-zinc-500
                "
              >
                Sign In
              </p>

              <h2 className="mt-5 text-5xl font-black">
                Login Account
              </h2>

              <p className="mt-5 text-zinc-400">
                Enter your credentials to continue your
                luxury fashion experience.
              </p>
            </div>

            {/* FORM */}
            <form className="relative mt-12 space-y-6">
              {/* EMAIL */}
              <div>
                <label
                  className="
                    mb-3
                    block
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-zinc-500
                  "
                >
                  Email Address
                </label>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-6
                    py-5
                  "
                >
                  <Mail size={20} />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="
                      w-full
                      bg-transparent
                      outline-none
                      placeholder:text-zinc-500
                    "
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label
                  className="
                    mb-3
                    block
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-zinc-500
                  "
                >
                  Password
                </label>

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-6
                    py-5
                  "
                >
                  <Lock size={20} />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Enter password"
                    className="
                      w-full
                      bg-transparent
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
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* OPTIONS */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-3 text-sm text-zinc-400">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                  />

                  Remember me
                </label>

                <Link
                  href="/forgot-password"
                  className="
                    text-sm
                    text-zinc-400
                    transition-all
                    hover:text-white
                  "
                >
                  Forgot Password?
                </Link>
              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-5
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-black
                "
              >
                Login Account

                <ArrowRight size={18} />
              </motion.button>
            </form>

            {/* FOOTER */}
            <div className="mt-10 text-center">
              <p className="text-zinc-400">
                Don't have an account?{" "}

                <Link
                  href="/register"
                  className="
                    font-semibold
                    text-white
                  "
                >
                  Create Account
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}