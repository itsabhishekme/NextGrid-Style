"use client";

import Image from "next/image";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

import {
  ArrowRight,
  Flame,
  Sparkles,
  ShoppingBag,
  Star,
  Crown,
  Zap,
  ShieldCheck,
  Truck,
  Gem,
  Heart,
} from "lucide-react";

const featuredProducts = [
  {
    name: "Oversized Black Hoodie",
    price: "$189",
    image: "/streetwear/hoodie.jpg",
    tag: "Trending",
  },

  {
    name: "Urban Street Jacket",
    price: "$240",
    image: "/streetwear/jacket.jpg",
    tag: "Luxury",
  },

  {
    name: "Premium Sneakers",
    price: "$320",
    image: "/streetwear/shoes.jpg",
    tag: "Exclusive",
  },

  {
    name: "Modern Cargo Pants",
    price: "$160",
    image: "/streetwear/cargo.jpg",
    tag: "New",
  },
];

const collections = [
  {
    title: "Luxury Streetwear",
    image: "/streetwear/street1.jpg",
  },

  {
    title: "Urban Culture",
    image: "/streetwear/street2.jpg",
  },

  {
    title: "Future Fashion",
    image: "/streetwear/street3.jpg",
  },
];

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Worldwide premium shipping",
  },

  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    desc: "100% protected payment system",
  },

  {
    icon: Crown,
    title: "Luxury Fashion",
    desc: "Exclusive designer collections",
  },

  {
    icon: Gem,
    title: "Premium Quality",
    desc: "Verified premium materials",
  },
];

export default function StreetwearPage() {
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
        <div className="absolute -left-40 top-0 h-[700px] w-[700px] rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-[120px] lg:px-10">
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
                backdrop-blur-2xl
              "
            >
              <Flame size={16} />

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.3em]
                  text-zinc-400
                "
              >
                Premium Streetwear Collection
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
              FUTURE
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
                STREETWEAR
              </span>
            </motion.h1>

            {/* DESC */}
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
              Discover futuristic urban fashion,
              oversized silhouettes and luxury
              streetwear collections designed for
              modern culture and next-generation
              fashion enthusiasts.
            </motion.p>

            {/* BUTTONS */}
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
                delay: 0.4,
              }}
              className="mt-12 flex flex-col gap-5 sm:flex-row"
            >
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
                Explore Collection

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

                Trending Fashion
              </button>
            </motion.div>

            {/* STATS */}
            <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">
              {[
                {
                  number: "150K+",
                  label: "Streetwear Customers",
                },

                {
                  number: "300+",
                  label: "Urban Collections",
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

                  <p className="mt-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
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
            {/* IMAGE */}
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
                src="/streetwear/hero.jpg"
                alt="Streetwear"
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
                  rounded-[32px]
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
                  Premium Urban Culture
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  Futuristic oversized streetwear
                  collections inspired by luxury
                  fashion and urban lifestyle.
                </p>
              </div>
            </div>

            {/* FLOAT CARD */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute
                -left-10
                top-20
                hidden
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
                backdrop-blur-2xl
                xl:block
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
                    bg-white
                    text-black
                  "
                >
                  <Zap size={24} />
                </div>

                <div>
                  <p className="text-sm text-zinc-400">
                    Trending Now
                  </p>

                  <h4 className="text-xl font-black">
                    Urban Luxury
                  </h4>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
        {/* TITLE */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
            Streetwear Collections
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            Trending
            <span className="block text-zinc-500">
              Fashion Drops
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                border
                border-white/10
              "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={700}
                className="
                  h-[520px]
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8">
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Premium Collection
                </p>

                <h3 className="mt-4 text-4xl font-black">
                  {item.title}
                </h3>

                <button
                  className="
                    mt-6
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.05]
                    px-6
                    py-3
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    backdrop-blur-xl
                  "
                >
                  Explore

                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
              Featured Products
            </p>

            <h2 className="mt-5 text-5xl font-black md:text-7xl">
              Urban
              <span className="block text-zinc-500">
                Essentials
              </span>
            </h2>
          </div>

          <button
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-7
              py-4
              text-sm
              uppercase
              tracking-[0.2em]
            "
          >
            View All Products

            <ArrowRight size={18} />
          </button>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="
                overflow-hidden
                rounded-[34px]
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
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[34px]
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