"use client";

import Image from "next/image";

import {
  Search,
  SlidersHorizontal,
  ShoppingBag,
  Heart,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

const trendingSearches = [
  "Streetwear",
  "Luxury Hoodies",
  "Sneakers",
  "Oversized Fashion",
  "Summer Collection",
  "Premium Jackets",
];

const searchProducts = [
  {
    name: "Luxury Black Hoodie",
    price: "$189",
    image: "/streetwear/hoodie.jpg",
    tag: "Trending",
    rating: "4.9",
  },

  {
    name: "Urban Sneakers",
    price: "$320",
    image: "/streetwear/shoes.jpg",
    tag: "Luxury",
    rating: "4.8",
  },

  {
    name: "Premium Cargo Pants",
    price: "$160",
    image: "/streetwear/cargo.jpg",
    tag: "New",
    rating: "4.7",
  },

  {
    name: "Designer Jacket",
    price: "$420",
    image: "/streetwear/jacket.jpg",
    tag: "Exclusive",
    rating: "5.0",
  },

  {
    name: "Future Streetwear Tee",
    price: "$110",
    image: "/streetwear/street1.jpg",
    tag: "Hot",
    rating: "4.8",
  },

  {
    name: "Oversized Urban Hoodie",
    price: "$210",
    image: "/streetwear/street2.jpg",
    tag: "Premium",
    rating: "4.9",
  },
];

export default function SearchPage() {
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
        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      {/* HERO */}
      <section
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          pb-20
          pt-[150px]
          lg:px-10
        "
      >
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
          <Sparkles size={16} />

          <span
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-zinc-400
            "
          >
            Premium Fashion Search
          </span>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
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
          SEARCH
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
            max-w-3xl
            text-lg
            leading-9
            text-zinc-400
          "
        >
          Discover futuristic streetwear, luxury
          fashion and premium collections designed
          for the next generation fashion culture.
        </motion.p>

        {/* SEARCH BAR */}
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
            delay: 0.3,
          }}
          className="
            mt-14
            flex
            flex-col
            gap-5
            md:flex-row
          "
        >
          {/* INPUT */}
          <div
            className="
              flex
              flex-1
              items-center
              gap-5
              rounded-[36px]
              border
              border-white/10
              bg-white/[0.03]
              px-7
              py-6
              backdrop-blur-3xl
            "
          >
            <Search size={24} />

            <input
              type="text"
              placeholder="Search premium fashion..."
              className="
                w-full
                bg-transparent
                text-lg
                outline-none
                placeholder:text-zinc-500
              "
            />
          </div>

          {/* FILTER */}
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
            <SlidersHorizontal size={18} />

            Filters
          </button>
        </motion.div>

        {/* TRENDING */}
        <div className="mt-10 flex flex-wrap gap-4">
          {trendingSearches.map((item) => (
            <button
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
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
      </section>

      {/* RESULTS */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        {/* HEADER */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p
              className="
                text-xs
                uppercase
                tracking-[0.4em]
                text-zinc-500
              "
            >
              Search Results
            </p>

            <h2 className="mt-5 text-5xl font-black">
              Trending Products
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
              bg-white/[0.03]
              px-6
              py-4
              text-sm
              uppercase
              tracking-[0.2em]
              md:flex
            "
          >
            View All

            <ArrowRight size={18} />
          </button>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {searchProducts.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
              }}
              className="
                overflow-hidden
                rounded-[40px]
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
                  width={600}
                  height={700}
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
                {/* RATING */}
                <div className="flex items-center gap-2">
                  <Star
                    size={16}
                    className="
                      fill-yellow-400
                      text-yellow-400
                    "
                  />

                  <span className="text-sm text-zinc-400">
                    {product.rating} Rating
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-3xl font-black">
                  {product.name}
                </h3>

                {/* PRICE */}
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-2xl font-black">
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
    </main>
  );
}