"use client";

import { motion } from "framer-motion";

import {
  Bell,
  ShoppingBag,
  Heart,
  Truck,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const notifications = [
  {
    title: "Luxury Jacket Order Confirmed",
    description:
      "Your premium luxury jacket order has been confirmed successfully.",

    icon: ShoppingBag,

    unread: true,

    time: "2 min ago",
  },

  {
    title: "Wishlist Item Back In Stock",
    description:
      "One of your saved luxury products is available again.",

    icon: Heart,

    unread: true,

    time: "10 min ago",
  },

  {
    title: "Order Shipped",
    description:
      "Your fashion package is now on the way to your address.",

    icon: Truck,

    unread: false,

    time: "1 hour ago",
  },

  {
    title: "Exclusive Fashion Drop",
    description:
      "New futuristic streetwear collection now available.",

    icon: Sparkles,

    unread: false,

    time: "Today",
  },

  {
    title: "Secure Payment Successful",
    description:
      "Your recent payment has been processed securely.",

    icon: ShieldCheck,

    unread: false,

    time: "Yesterday",
  },
];

export default function NotificationsPage() {
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

      {/* TOP GLOW */}
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
          h-[400px]
          w-[400px]
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
          max-w-5xl
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
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
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
              Notifications
            </h1>
          </div>

          {/* BADGE */}
          <div
            className="
              flex
              h-14
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              px-5
              backdrop-blur-3xl
            "
          >
            <Bell size={20} />

            <span
              className="
                text-sm
                uppercase
                tracking-[0.15em]
              "
            >
              2 New Alerts
            </span>
          </div>
        </motion.div>

        {/* NOTIFICATIONS */}
        <div className="space-y-5">
          {notifications.map(
            (item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-5
                    shadow-[0_0_40px_rgba(255,255,255,0.03)]
                    backdrop-blur-3xl
                    transition-all
                    duration-500
                    hover:border-white/20
                    hover:bg-white/[0.05]
                  "
                >
                  {/* LIGHT */}
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
                      via-white/40
                      to-transparent
                    "
                  />

                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      sm:flex-row
                      sm:items-center
                    "
                  >
                    {/* ICON */}
                    <div
                      className="
                        relative
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
                      {/* ICON GLOW */}
                      <div
                        className="
                          absolute
                          inset-0
                          rounded-3xl
                          bg-white/[0.03]
                          blur-2xl
                        "
                      />

                      <Icon
                        size={26}
                        className="
                          relative
                          z-10
                        "
                      />
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">
                      <div
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-3
                        "
                      >
                        <h2
                          className="
                            text-lg
                            font-bold
                            uppercase
                            tracking-[0.08em]
                          "
                        >
                          {item.title}
                        </h2>

                        {item.unread && (
                          <span
                            className="
                              rounded-full
                              bg-white
                              px-3
                              py-1
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-[0.15em]
                              text-black
                            "
                          >
                            New
                          </span>
                        )}
                      </div>

                      <p
                        className="
                          mt-3
                          max-w-2xl
                          text-sm
                          leading-7
                          text-zinc-400
                        "
                      >
                        {item.description}
                      </p>

                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <CheckCircle2
                          size={16}
                          className="
                            text-green-400
                          "
                        />

                        <span
                          className="
                            text-xs
                            uppercase
                            tracking-[0.2em]
                            text-zinc-500
                          "
                        >
                          {item.time}
                        </span>
                      </div>
                    </div>

                    {/* BUTTON */}
                    <button
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        transition-all
                        duration-300
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      <ArrowRight
                        size={18}
                        className="
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </button>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

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
            Real-Time Luxury Fashion Alerts
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