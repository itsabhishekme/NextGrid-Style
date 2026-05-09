"use client";

import Image from "next/image";

import {
  motion,
} from "framer-motion";

import {
  Heart,
  ShoppingBag,
  Trash2,
  Star,
  Sparkles,
  ArrowRight,
  Eye,
} from "lucide-react";

const wishlistProducts = [
  {
    id: 1,
    name: "Luxury Black Hoodie",
    price: "$189",
    image: "/streetwear/hoodie.jpg",
    tag: "Trending",
    rating: "4.9",
  },

  {
    id: 2,
    name: "Premium Sneakers",
    price: "$320",
    image: "/streetwear/shoes.jpg",
    tag: "Luxury",
    rating: "5.0",
  },

  {
    id: 3,
    name: "Urban Cargo Pants",
    price: "$160",
    image: "/streetwear/cargo.jpg",
    tag: "New",
    rating: "4.8",
  },

  {
    id: 4,
    name: "Designer Jacket",
    price: "$420",
    image: "/streetwear/jacket.jpg",
    tag: "Exclusive",
    rating: "4.9",
  },
];

export default function WishlistPage() {
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
          <Heart size={16} />

          <span
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-zinc-400
            "
          >
            Saved Luxury Collection
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
          YOUR
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
            WISHLIST
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
          Save your favorite premium fashion,
          futuristic streetwear and luxury products
          to revisit and shop later.
        </motion.p>
      </section>

      {/* PRODUCTS */}
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
              Saved Products
            </p>

            <h2 className="mt-5 text-5xl font-black">
              Premium Collection
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
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {wishlistProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              viewport={{
                once: true,
              }}
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
                  width={500}
                  height={650}
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

                {/* REMOVE */}
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
                    bg-black/50
                    backdrop-blur-xl
                  "
                >
                  <Trash2 size={18} />
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
                <div className="mt-5 flex items-center justify-between">
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

                {/* ACTIONS */}
                <div className="mt-6 flex gap-4">
                  <button
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-4
                      text-sm
                      uppercase
                      tracking-[0.2em]
                    "
                  >
                    <Eye size={16} />

                    View
                  </button>

                  <button
                    className="
                      flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-white
                      px-4
                      py-4
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-black
                    "
                  >
                    <Heart size={16} />

                    Saved
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t border-white/10 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          {/* ICON */}
          <div className="flex justify-center">
            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
              "
            >
              <Sparkles size={36} />
            </div>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-10
              text-5xl
              font-black
              md:text-7xl
            "
          >
            Discover More
          </h2>

          {/* DESC */}
          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-zinc-400
            "
          >
            Explore futuristic streetwear, luxury
            collections and premium fashion crafted
            for the next generation lifestyle.
          </p>

          {/* BUTTON */}
          <button
            className="
              mt-12
              inline-flex
              items-center
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
            Continue Shopping

            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}