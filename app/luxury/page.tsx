"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  ArrowRight,
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
    name: "Men Jacket",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },

  {
    name: "Women Fashion",
    price: "$140",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },

  {
    name: "Kids Collection",
    price: "$90",
    image:
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4",
  },

  {
    name: "Luxury Style",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050",
  },
];

export default function FashionPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative h-screen w-full">
        <Image
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
          alt="Fashion"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <div>
            <h1 className="text-6xl md:text-8xl font-black">
              FASHION STORE
            </h1>

            <button className="mt-10 rounded-full bg-white px-8 py-4 text-black font-bold flex items-center gap-2 mx-auto">
              Shop Now
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-black mb-12 text-center">
          Categories
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={700}
                className="h-[500px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-black">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-black mb-12 text-center">
          Trending Products
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl bg-zinc-900"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={600}
                  className="h-[400px] w-full object-cover"
                />

                <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/50 flex items-center justify-center">
                  <Heart size={18} />
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-bold">
                  {product.name}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-xl">
                    {product.price}
                  </p>

                  <button className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center">
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