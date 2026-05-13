"use client";

import { motion } from "framer-motion";

import {
  User,
  ShoppingBag,
  Heart,
  CreditCard,
  Settings,
  Bell,
  ShieldCheck,
  ArrowRight,
  Crown,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    title: "Orders",
    value: "28",
    icon: ShoppingBag,
  },

  {
    title: "Wishlist",
    value: "14",
    icon: Heart,
  },

  {
    title: "Payments",
    value: "12",
    icon: CreditCard,
  },
];

const accountItems = [
  {
    title: "Account Settings",
    icon: Settings,
  },

  {
    title: "Notifications",
    icon: Bell,
  },

  {
    title: "Security & Privacy",
    icon: ShieldCheck,
  },

  {
    title: "Premium Membership",
    icon: Crown,
  },
];

export default function ProfilePage() {
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
          className="
            mb-10
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="flex items-center gap-5">
            {/* PROFILE IMAGE */}
            <div
              className="
                relative
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.05]
                backdrop-blur-3xl
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[30px]
                  bg-white/[0.04]
                  blur-2xl
                "
              />

              <User
                size={40}
                className="
                  relative
                  z-10
                "
              />
            </div>

            {/* INFO */}
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-zinc-500
                "
              >
                NextGrid Member
              </p>

              <h1
                className="
                  mt-2
                  text-3xl
                  font-black
                  uppercase
                  tracking-[0.12em]
                  sm:text-5xl
                "
              >
                Abhishek
              </h1>

              <p
                className="
                  mt-3
                  text-sm
                  text-zinc-400
                "
              >
                Premium futuristic fashion member
              </p>
            </div>
          </div>

          {/* PREMIUM CARD */}
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              p-6
              backdrop-blur-3xl
            "
          >
            {/* LIGHT */}
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

            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  text-black
                "
              >
                <Sparkles size={24} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-zinc-500
                  "
                >
                  Premium Status
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-bold
                    uppercase
                    tracking-[0.1em]
                  "
                >
                  Luxury Member
                </h3>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* STATS */}
        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-3xl
                "
              >
                {/* LIGHT */}
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

                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-zinc-500
                      "
                    >
                      {item.title}
                    </p>

                    <h2
                      className="
                        mt-4
                        text-5xl
                        font-black
                      "
                    >
                      {item.value}
                    </h2>
                  </div>

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.05]
                    "
                  >
                    <Icon size={28} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ACCOUNT SECTION */}
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
            delay: 0.3,
          }}
          className="
            mt-10
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.03]
            p-6
            backdrop-blur-3xl
          "
        >
          {/* HEADER */}
          <div
            className="
              mb-8
              flex
              items-center
              justify-between
            "
          >
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-zinc-500
                "
              >
                Account
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-black
                  uppercase
                  tracking-[0.1em]
                "
              >
                Settings
              </h2>
            </div>
          </div>

          {/* ITEMS */}
          <div className="space-y-4">
            {accountItems.map(
              (item, index) => {
                const Icon = item.icon;

                return (
                  <motion.button
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay:
                        index * 0.06,
                    }}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-[26px]
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-5
                      py-5
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-white/[0.05]
                          transition-all
                          duration-300
                          group-hover:bg-black/10
                        "
                      >
                        <Icon size={24} />
                      </div>

                      <div className="text-left">
                        <h3
                          className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-[0.15em]
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-xs
                            text-zinc-500
                            group-hover:text-black/60
                          "
                        >
                          Manage your account settings
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </motion.button>
                );
              }
            )}
          </div>
        </motion.div>

        {/* FOOTER TEXT */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          className="
            mt-12
            text-center
          "
        >
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-zinc-600
            "
          >
            NextGrid Premium Fashion Experience
          </p>
        </motion.div>
      </div>

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