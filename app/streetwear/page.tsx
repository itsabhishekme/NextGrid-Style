"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ShoppingBag,
  Heart,
  Search,
} from "lucide-react";

const products = [
  {
    name: "Black Hoodie",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },

  {
    name: "Luxury Jacket",
    price: "$320",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },

  {
    name: "Premium Suit",
    price: "$420",
    image:
      "https://images.unsplash.com/photo-1593032465171-8bdc1f4b6d0f",
  },

  {
    name: "Urban Style",
    price: "$260",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },

  {
    name: "Modern Outfit",
    price: "$210",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234",
  },

  {
    name: "Streetwear Fashion",
    price: "$300",
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59",
  },
];

export default function MenFashionPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative h-screen w-full">
        <Image
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
          alt="Men Fashion"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="text-6xl font-black md:text-8xl">
            MEN
            <span className="block text-zinc-300">
              FASHION
            </span>
          </h1>

          {/* SEARCH */}
          <div
            className="
              mt-10
              flex
              w-full
              max-w-2xl
              items-center
              gap-4
              rounded-full
              border
              border-white/10
              bg-white/10
              px-6
              py-5
              backdrop-blur-xl
            "
          >
            <Search size={22} />

            <input
              type="text"
              placeholder="Search fashion..."
              className="
                w-full
                bg-transparent
                text-lg
                outline-none
                placeholder:text-zinc-400
              "
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-14 text-center text-5xl font-black">
          Trending Products
        </h2>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-zinc-900
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
                    h-[450px]
                    w-full
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-110
                  "
                />

                {/* HEART */}
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
                  <Heart size={18} />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-3xl font-black">
                  {product.name}
                </h3>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-2xl font-bold">
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