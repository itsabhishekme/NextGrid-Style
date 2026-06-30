"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import CompanyAbout from "@/components/company/CompanyAbout";

import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Globe,
  Truck,
  Star,
  ShoppingBag,
  Gem,
  Layers3,
  Users,
  BadgeCheck,
  Building2,
  Rocket,
  MonitorSmartphone,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    icon: ShoppingBag,
    title: "Luxury Collections",
  },

  {
    icon: Globe,
    title: "Worldwide Platform",
  },

  {
    icon: Layers3,
    title: "Modern Experience",
  },

  {
    icon: BadgeCheck,
    title: "Trusted Shopping",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Payments",
  },

  {
    icon: Truck,
    title: "Fast Delivery",
  },

  {
    icon: Users,
    title: "Premium Community",
  },

  {
    icon: MonitorSmartphone,
    title: "Modern Technology",
  },
];

const stats = [
  {
    number: "50K+",
    label: "Customers",
  },

  {
    number: "120+",
    label: "Collections",
  },

  {
    number: "25+",
    label: "Countries",
  },

  {
    number: "4.9★",
    label: "Rating",
  },
];

export default function AboutPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div
          className="
            absolute
            left-0
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-fuchsia-500/10
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-0
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/10
            blur-[180px]
          "
        />
      </div>

      {/* HERO */}
      <section
        className="
          relative
          px-6
          pt-36
          pb-28
        "
      >
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-20
              lg:grid-cols-2
              lg:items-center
            "
          >
            {/* LEFT */}
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
                duration: 0.8,
              }}
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
                  px-5
                  py-3
                  backdrop-blur-3xl
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
                  Company Overview
                </span>
              </div>

              {/* TITLE */}
              <h1
                className="
                  mt-8
                  text-5xl
                  sm:text-6xl
                  lg:text-7xl
                  font-black
                  uppercase
                  leading-tight
                  tracking-[0.12em]
                "
              >
                About
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-white
                    via-zinc-300
                    to-zinc-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  NextGrid
                </span>
              </h1>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-10
                  max-w-2xl
                  text-base
                  leading-9
                  text-zinc-400
                  sm:text-lg
                "
              >
                NextGrid is a premium futuristic
                fashion company focused on luxury
                ecommerce experiences, modern
                design systems and immersive
                shopping technology.

                Built with modern web technologies,
                NextGrid combines premium
                aesthetics with responsive user
                experience to create a next
                generation fashion platform for
                global audiences.
              </p>

              {/* BUTTONS */}
              <div
                className="
                  mt-12
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                "
              >
                <Link href="/shop">
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                      rounded-3xl
                      bg-white
                      px-8
                      py-5
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-black
                    "
                  >
                    Shop Now

                    <ArrowRight size={18} />
                  </motion.button>
                </Link>

                <Link href="/collections">
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-8
                      py-5
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      transition-all
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    Explore

                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              <div
                className="
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-3xl
                "
              >
                {/* TOP */}
                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >
                  <div>
                    <p className="text-zinc-500">
                      Premium Company
                    </p>

                    <h3 className="mt-2 text-3xl font-black">
                      NextGrid
                    </h3>
                  </div>

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-3xl
                      bg-white
                      text-black
                    "
                  >
                    <Building2 size={30} />
                  </div>
                </div>

                {/* IMAGE AREA */}
                <div
                  className="
                    mt-10
                    flex
                    h-[360px]
                    items-center
                    justify-center
                    rounded-[32px]
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-zinc-900
                    to-black
                  "
                >
                  <Gem
                    size={120}
                    className="text-zinc-700"
                  />
                </div>

                {/* MINI GRID */}
                <div
                  className="
                    mt-8
                    grid
                    gap-5
                    sm:grid-cols-2
                  "
                >
                  <div
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                    "
                  >
                    <Rocket
                      size={30}
                      className="text-white"
                    />

                    <h4 className="mt-4 text-xl font-bold">
                      Innovation
                    </h4>
                  </div>

                  <div
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                    "
                  >
                    <HeartHandshake
                      size={30}
                      className="text-white"
                    />

                    <h4 className="mt-4 text-xl font-bold">
                      Customer First
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CompanyAbout />

      {/* COMPANY SECTION */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              gap-8
              lg:grid-cols-2
            "
          >
            {/* MISSION */}
            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-10
                backdrop-blur-3xl
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white
                  text-black
                "
              >
                <Rocket size={30} />
              </div>

              <h2 className="mt-8 text-4xl font-black">
                Our Mission
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-9
                  text-zinc-400
                "
              >
                Deliver premium digital fashion
                experiences through modern
                ecommerce technology, responsive
                interfaces and luxury aesthetics.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              whileHover={{
                y: -6,
              }}
              className="
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-10
                backdrop-blur-3xl
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white
                  text-black
                "
              >
                <Star size={30} />
              </div>

              <h2 className="mt-8 text-4xl font-black">
                Our Vision
              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-9
                  text-zinc-400
                "
              >
                Build a global luxury ecommerce
                ecosystem focused on futuristic
                design, immersive experiences and
                premium customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <h2
              className="
                text-4xl
                md:text-5xl
                font-black
                uppercase
                tracking-[0.15em]
              "
            >
              Company Services
            </h2>
          </div>

          <div
            className="
              mt-16
              grid
              gap-6
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    text-center
                    backdrop-blur-3xl
                  "
                >
                  <div
                    className="
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-3xl
                      bg-white
                      text-black
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative px-6 pb-24">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <h2
              className="
                text-4xl
                md:text-5xl
                font-black
                uppercase
                tracking-[0.15em]
              "
            >
              Why NextGrid
            </h2>
          </div>

          <div
            className="
              mt-16
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-3xl
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-3xl
                      bg-white
                      text-black
                    "
                  >
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative px-6 pb-28">
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-6
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            p-10
            backdrop-blur-3xl
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
              }}
              className="text-center"
            >
              <h3 className="text-5xl font-black">
                {item.number}
              </h3>

              <p className="mt-4 text-zinc-400">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}