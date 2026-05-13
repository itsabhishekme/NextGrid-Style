"use client";

import { motion } from "framer-motion";

import {
  ShoppingBag,
  CreditCard,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function CheckoutPage() {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        px-4
        py-24
        text-white
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
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",

          backgroundSize: "80px 80px",
        }}
      />

      {/* GLOW */}
      <div
        className="
          absolute
          left-[-200px]
          top-[-200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-pink-500/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-[-200px]
          top-[30%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-10"
        >
          <p
            className="
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
              text-4xl
              font-black
              uppercase
              tracking-[0.15em]
              sm:text-5xl
            "
          >
            Checkout
          </h1>
        </motion.div>

        {/* GRID */}
        <div
          className="
            grid
            gap-8
            lg:grid-cols-[1.2fr_0.8fr]
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-3xl
            "
          >
            <h2
              className="
                mb-6
                text-xl
                font-bold
                uppercase
                tracking-[0.15em]
              "
            >
              Shipping Details
            </h2>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  outline-none
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  outline-none
                "
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="
                  h-14
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  outline-none
                "
              />

              <textarea
                placeholder="Shipping Address"
                className="
                  min-h-[140px]
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-5
                  outline-none
                "
              />

              <button
                className="
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
                "
              >
                <CreditCard size={18} />

                Proceed Payment
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-6
              backdrop-blur-3xl
            "
          >
            <h2
              className="
                mb-6
                text-xl
                font-bold
                uppercase
                tracking-[0.15em]
              "
            >
              Order Summary
            </h2>

            {/* PRODUCT */}
            <div
              className="
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-4
              "
            >
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/[0.05]
                "
              >
                <ShoppingBag size={28} />
              </div>

              <div className="flex-1">
                <h3
                  className="
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.1em]
                  "
                >
                  Luxury Jacket
                </h3>

                <p className="mt-2 text-zinc-400">
                  Quantity: 1
                </p>
              </div>

              <h4
                className="
                  text-lg
                  font-bold
                "
              >
                ₹5999
              </h4>
            </div>

            {/* TOTAL */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">
                  Subtotal
                </span>

                <span>₹5999</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-zinc-400">
                  Shipping
                </span>

                <span>₹199</span>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex items-center justify-between">
                <span
                  className="
                    text-lg
                    font-bold
                  "
                >
                  Total
                </span>

                <span
                  className="
                    text-2xl
                    font-black
                  "
                >
                  ₹6198
                </span>
              </div>
            </div>

            {/* FEATURES */}
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <Truck size={18} />

                <span className="text-sm">
                  Fast Delivery
                </span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck size={18} />

                <span className="text-sm">
                  Secure Payment
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}