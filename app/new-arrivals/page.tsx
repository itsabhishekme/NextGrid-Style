"use client";

import Image from "next/image";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

import {
  Sparkles,
  ArrowRight,
  ShoppingBag,
  Star,
  Heart,
  Crown,
  Flame,
  Gem,
  Shirt,
  Footprints,
  Watch,
  Filter,
  SlidersHorizontal,
  Truck,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

const categories = [
  {
    title: "Luxury Fashion",
    image: "/women/women.jpg",
    icon: Crown,
  },

  {
    title: "Streetwear",
    image: "/men/men.jpg",
    icon: Flame,
  },

  {
    title: "Accessories",
    image: "/children/children.jpg",
    icon: Gem,
  },
];

const products = [
  {
    name: "Premium Leather Jacket",
    category: "Luxury Men",
    price: "$299",
    image: "/men/men.jpg",
  },

  {
    name: "Designer Fashion Dress",
    category: "Luxury Women",
    price: "$349",
    image: "/women/women.jpg",
  },

  {
    name: "Urban Street Sneakers",
    category: "Streetwear",
    price: "$199",
    image: "/men/men.jpg",
  },

  {
    name: "Luxury Watch Collection",
    category: "Accessories",
    price: "$599",
    image: "/women/women.jpg",
  },

  {
    name: "Premium Kids Collection",
    category: "Children",
    price: "$149",
    image: "/children/children.jpg",
  },

  {
    name: "Exclusive Fashion Hoodie",
    category: "Streetwear",
    price: "$189",
    image: "/men/men.jpg",
  },
];

const stats = [
  {
    number: "500+",
    label: "New Products",
  },

  {
    number: "120+",
    label: "Luxury Brands",
  },

  {
    number: "24H",
    label: "Fast Delivery",
  },

  {
    number: "4.9★",
    label: "Premium Rating",
  },
];

export default function NewArrivalsPage() {
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
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-0 top-20 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative px-6 pb-20 pt-[160px] lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* TOP */}
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
            className="max-w-4xl"
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
                backdrop-blur-2xl
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
                New Fashion Collection
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
                xl:text-[9rem]
              "
            >
              NEW
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
                ARRIVALS
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-10
                max-w-3xl
                text-lg
                leading-9
                text-zinc-400
                md:text-xl
              "
            >
              Discover futuristic luxury fashion, premium
              streetwear and exclusive designer collections
              crafted for the next generation of style.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-col gap-5 sm:flex-row">
              <button
                className="
                  flex
                  items-center
                  justify-center
                  gap-4
                  rounded-full
                  bg-white
                  px-8
                  py-5
                  text-sm
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
                  gap-4
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-8
                  py-5
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  backdrop-blur-xl
                "
              >
                <ShoppingBag size={18} />
                Shop Now
              </button>
            </div>
          </motion.div>

          {/* STATS */}
          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-2xl
                "
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
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* TITLE */}
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-zinc-500
                "
              >
                Categories
              </p>

              <h2 className="mt-5 text-5xl font-black md:text-7xl">
                Trending Styles
              </h2>
            </div>

            <button
              className="
                hidden
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-4
                text-sm
                uppercase
                tracking-[0.2em]
                lg:flex
              "
            >
              <SlidersHorizontal size={18} />
              Filter
            </button>
          </div>

          {/* GRID */}
          <div className="grid gap-8 md:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
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
                    src={category.image}
                    alt={category.title}
                    width={800}
                    height={1000}
                    className="
                      h-[550px]
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black
                      via-black/20
                      to-transparent
                    "
                  />

                  {/* CONTENT */}
                  <div className="absolute bottom-8 left-8 right-8">
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

                    <h3 className="mt-6 text-4xl font-black">
                      {category.title}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.4em]
                  text-zinc-500
                "
              >
                Latest Collection
              </p>

              <h2 className="mt-5 text-5xl font-black md:text-7xl">
                Premium Products
              </h2>
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap gap-4">
              {[
                "All",
                "Luxury",
                "Streetwear",
                "Accessories",
                "Trending",
              ].map((item) => (
                <button
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-6
                    py-3
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    transition-all
                    hover:bg-white
                    hover:text-black
                  "
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCTS GRID */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-2xl
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={1000}
                    className="
                      h-[450px]
                      w-full
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  {/* TOP */}
                  <div className="absolute left-6 top-6 flex items-center gap-3">
                    <div
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-4
                        py-2
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        backdrop-blur-xl
                      "
                    >
                      New
                    </div>

                    <div
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-4
                        py-2
                        text-xs
                        uppercase
                        tracking-[0.2em]
                        backdrop-blur-xl
                      "
                    >
                      Trending
                    </div>
                  </div>

                  {/* WISHLIST */}
                  <button
                    className="
                      absolute
                      right-6
                      top-6
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-black/40
                      backdrop-blur-xl
                    "
                  >
                    <Heart size={18} />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  {/* CATEGORY */}
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-zinc-500
                    "
                  >
                    {product.category}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-4 text-3xl font-black">
                    {product.name}
                  </h3>

                  {/* RATING */}
                  <div className="mt-5 flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="
                          fill-yellow-400
                          text-yellow-400
                        "
                      />
                    ))}

                    <span className="ml-2 text-sm text-zinc-400">
                      4.9 Rating
                    </span>
                  </div>

                  {/* PRICE */}
                  <div className="mt-8 flex items-center justify-between">
                    <h4 className="text-4xl font-black">
                      {product.price}
                    </h4>

                    <button
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-black
                      "
                    >
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM BANNER */}
      <section className="relative px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div
            className="
              relative
              overflow-hidden
              rounded-[60px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-3xl
              lg:p-20
            "
          >
            {/* GLOW */}
            <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />

            <div className="grid items-center gap-20 lg:grid-cols-2">
              {/* LEFT */}
              <div>
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
                    Premium Experience
                  </span>
                </div>

                <h2
                  className="
                    mt-10
                    text-5xl
                    font-black
                    leading-tight
                    md:text-7xl
                  "
                >
                  The Future
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
                    Of Fashion
                  </span>
                </h2>

                <p
                  className="
                    mt-8
                    max-w-2xl
                    text-lg
                    leading-9
                    text-zinc-400
                  "
                >
                  Discover futuristic shopping experiences,
                  luxury collections and premium digital
                  fashion crafted for the next generation.
                </p>

                <button
                  className="
                    mt-10
                    flex
                    items-center
                    gap-4
                    rounded-full
                    bg-white
                    px-8
                    py-5
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-black
                  "
                >
                  Explore Premium
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* RIGHT */}
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: Truck,
                    title: "Fast Delivery",
                  },

                  {
                    icon: ShieldCheck,
                    title: "Secure Checkout",
                  },

                  {
                    icon: BadgeCheck,
                    title: "Premium Quality",
                  },

                  {
                    icon: Sparkles,
                    title: "Luxury Experience",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className="
                        rounded-[34px]
                        border
                        border-white/10
                        bg-white/[0.04]
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

                      <h3 className="mt-6 text-2xl font-black">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-zinc-400">
                        Premium shopping experience for
                        modern fashion customers.
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}