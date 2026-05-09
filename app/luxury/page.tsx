"use client";

import Image from "next/image";

import {
  motion,
} from "framer-motion";

import {
  Crown,
  Gem,
  Star,
  ArrowRight,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
} from "lucide-react";

const luxuryProducts = [
  {
    name: "Royal Black Blazer",
    price: "$540",
    image: "/luxury/luxury1.jpg",
    tag: "Exclusive",
  },

  {
    name: "Premium Leather Shoes",
    price: "$390",
    image: "/luxury/luxury2.jpg",
    tag: "Luxury",
  },

  {
    name: "Diamond Edition Watch",
    price: "$890",
    image: "/luxury/luxury3.jpg",
    tag: "Limited",
  },

  {
    name: "Designer White Suit",
    price: "$720",
    image: "/luxury/luxury4.jpg",
    tag: "Premium",
  },
];

const features = [
  {
    icon: Truck,
    title: "Global Shipping",
    desc: "Worldwide luxury delivery",
  },

  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    desc: "Protected premium payments",
  },

  {
    icon: Crown,
    title: "Exclusive Fashion",
    desc: "Luxury designer collections",
  },
];

export default function LuxuryPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
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
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-yellow-500/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-purple-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/5 blur-[180px]" />
      </div>

      {/* HERO */}
      <section
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pt-[120px]
          lg:px-10
        "
      >
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
              <Crown size={16} />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-zinc-400
                "
              >
                Premium Luxury Collection
              </span>
            </motion.div>

            {/* TITLE */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                mt-10
                text-6xl
                font-black
                leading-[0.95]
                md:text-8xl
              "
            >
              LUXURY
              <span
                className="
                  block
                  bg-gradient-to-r
                  from-white
                  via-zinc-300
                  to-yellow-400
                  bg-clip-text
                  text-transparent
                "
              >
                FASHION
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
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
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-zinc-400
              "
            >
              Explore elite luxury collections crafted
              with premium materials, modern elegance
              and timeless designer aesthetics for the
              next generation.
            </motion.p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-white
                  px-8
                  py-5
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-black
                "
              >
                Explore Luxury

                <ArrowRight size={18} />
              </button>

              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-8
                  py-5
                  font-bold
                  uppercase
                  tracking-[0.2em]
                "
              >
                <Sparkles size={18} />

                Premium Collection
              </button>
            </div>

            {/* STATS */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
              {[
                {
                  number: "180+",
                  label: "Luxury Brands",
                },

                {
                  number: "2M+",
                  label: "Premium Users",
                },

                {
                  number: "4.9★",
                  label: "Luxury Rating",
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
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="relative"
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[50px]
                border
                border-white/10
              "
            >
              <Image
                src="/luxury/hero.jpg"
                alt="Luxury Fashion"
                width={700}
                height={900}
                className="
                  h-[850px]
                  w-full
                  object-cover
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* CARD */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  rounded-[34px]
                  border
                  border-white/10
                  bg-black/40
                  p-6
                  backdrop-blur-3xl
                "
              >
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <h3 className="mt-5 text-3xl font-black">
                  Timeless Luxury
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  Discover premium handcrafted luxury
                  fashion for elite modern lifestyles.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
        {/* HEADER */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
            Featured Luxury
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            Premium
            <span className="block text-zinc-500">
              Collections
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {luxuryProducts.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.03]
              "
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={600}
                  className="
                    h-[420px]
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-110
                  "
                />

                {/* TAG */}
                <div className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-black">
                  {product.tag}
                </div>

                {/* WISHLIST */}
                <button
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-black/40
                    backdrop-blur-xl
                  "
                >
                  <Heart size={18} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-2xl font-black">
                  {product.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl font-bold text-zinc-300">
                    {product.price}
                  </p>

                  <button
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      text-black
                    "
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative border-t border-white/10 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3 lg:px-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[36px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
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
                  <Icon size={28} />
                </div>

                <h3 className="mt-7 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}