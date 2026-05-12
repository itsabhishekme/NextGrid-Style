"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  Search,
  ShoppingBag,
  Heart,
} from "lucide-react";

const categories = [
  {
    title: "Men",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },

  {
    title: "Women",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },

  {
    title: "Children",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
  },
];

const products = [
  {
    name: "Men Streetwear",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },

  {
    name: "Women Luxury Fashion",
    price: "$240",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },

  {
    name: "Kids Collection",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
  },

  {
    name: "Premium Jacket",
    price: "$310",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },

  {
    name: "Urban Outfit",
    price: "$190",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
  },

  {
    name: "Modern Style",
    price: "$280",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
];

export default function SearchFashionPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative h-[90vh] w-full">
        <Image
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
          alt="Fashion"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="text-6xl font-black md:text-8xl">
            SEARCH
            <span className="block text-zinc-300">
              FASHION
            </span>
          </h1>

          {/* SEARCH BAR */}
          <div
            className="
              mt-10
              flex
              w-full
              max-w-3xl
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
            <Search size={24} />

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

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-5xl font-black">
          Categories
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-[30px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={700}
                className="
                  h-[500px]
                  w-full
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-6 left-6">
                <h3 className="text-4xl font-black">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
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
                    h-[420px]
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