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
                  NextGrid Style
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
                NextGrid Style is a futuristic
                fashion company focused on luxury
                ecommerce experiences, modern
                design systems and immersive
                shopping technology.

                Built with modern web technologies,
                NextGrid Style combines premium
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

                    <h3 className="mt-2 text-3xl font-black">
                      NextGrid Style
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
              Why NextGrid Style
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

      {/* NextGrid Nexus */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 py-28 text-white">

        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6">

          {/* Header */}
          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
              NextGrid Style Innovation
            </span>

            <h2 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
              NextGrid Nexus
            </h2>

            <p className="mt-4 text-2xl font-medium text-violet-200">
              Building the Future of Fashion Technology
            </p>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              <span className="font-semibold text-white">
                NextGrid Nexus
              </span>{" "}
              is an innovative Fashion Technology ecosystem dedicated to
              transforming the future of fashion through Artificial Intelligence,
              Digital Fashion, Smart Fabrics, Wearable Technology, immersive
              digital experiences, sustainable innovation, and next-generation
              commerce. We combine technology, creativity, and design to build
              intelligent solutions that empower brands, creators, businesses,
              and consumers worldwide.
            </p>

          </div>

          {/* Technology Grid */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:border-violet-400/40 hover:bg-white/10">
              <div className="text-5xl">🤖</div>

              <h3 className="mt-6 text-2xl font-bold">
                Artificial Intelligence
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                AI-powered fashion design, intelligent recommendations,
                predictive analytics, personalization, and automated creative
                workflows that redefine how fashion is created and experienced.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10">
              <div className="text-5xl">👕</div>

              <h3 className="mt-6 text-2xl font-bold">
                Digital Fashion
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Creating virtual apparel, digital collections, and immersive
                fashion experiences that seamlessly connect physical and digital
                worlds.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/10">
              <div className="text-5xl">🧵</div>

              <h3 className="mt-6 text-2xl font-bold">
                Smart Fabrics
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Exploring intelligent textiles that integrate sensors,
                connectivity, performance materials, and sustainability into
                everyday fashion.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:border-pink-400/40 hover:bg-white/10">
              <div className="text-5xl">⌚</div>

              <h3 className="mt-6 text-2xl font-bold">
                Wearable Technology
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Bridging fashion with connected devices to create smarter,
                healthier, and more interactive lifestyles.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/10">
              <div className="text-5xl">🥽</div>

              <h3 className="mt-6 text-2xl font-bold">
                Immersive Experiences
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Building AR, VR, and mixed reality experiences that transform
                shopping, storytelling, virtual runways, and customer
                engagement.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/10">
              <div className="text-5xl">🌱</div>

              <h3 className="mt-6 text-2xl font-bold">
                Sustainable Innovation
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Driving responsible fashion through circular design,
                environmentally conscious materials, ethical production, and
                technology that supports a more sustainable future.
              </p>
            </div>

          </div>

          {/* Vision Statement */}
          <div className="mt-24 rounded-[40px] border border-violet-400/20 bg-white/5 p-12 text-center backdrop-blur-lg">

            <h3 className="text-4xl font-bold">
              Our Vision
            </h3>

            <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-slate-300">
              At NextGrid Nexus, we envision a future where fashion and
              technology evolve together to create intelligent, inclusive, and
              sustainable experiences. By embracing emerging technologies,
              fostering innovation, and collaborating across industries, we are
              shaping the next generation of fashion for creators, businesses,
              and consumers across the globe.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold">
                AI Innovation
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold">
                Digital Fashion
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold">
                Wearables
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold">
                Smart Textiles
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold">
                AR / VR
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold">
                Sustainability
              </span>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}