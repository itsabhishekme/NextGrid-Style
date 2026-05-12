"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Heart,
  Star,
  Crown,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2000&auto=format&fit=crop",
];

const collections = [
  {
    title: "Luxury Menswear",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Street Fashion",
    image:
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Premium Style",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1600&auto=format&fit=crop",
  },
];

const products = [
  {
    name: "Black Luxury Jacket",
    price: "₹12,999",
    image:
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Modern Street Hoodie",
    price: "₹5,499",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Premium Oversized Tee",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Elite Fashion Suit",
    price: "₹18,999",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Urban Black Coat",
    price: "₹14,999",
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Premium Denim Style",
    price: "₹6,999",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function MensFashionPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
            src={heroImages[0]}
            alt="Men Fashion"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-6 py-3 backdrop-blur-xl">
              <Sparkles size={16} />
              <span className="text-xs uppercase tracking-[0.4em]">
                Premium Men Collection
              </span>
            </div>

            <h1 className="mt-10 text-7xl font-black leading-none md:text-9xl">
              MEN
              <span className="block bg-gradient-to-r from-white via-zinc-400 to-zinc-700 bg-clip-text text-transparent">
                FASHION
              </span>
            </h1>

            <div className="mt-12 flex flex-wrap gap-6">
              <button className="flex items-center gap-3 rounded-full bg-white px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black">
                Shop Now
                <ArrowRight size={18} />
              </button>

              <button className="rounded-full border border-white/20 bg-white/10 px-8 py-5 text-sm uppercase tracking-[0.2em] backdrop-blur-xl">
                New Arrival
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COLLECTION SECTION */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-5xl font-black md:text-7xl">
              TRENDING
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {collections.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-[40px] border border-white/10"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={1200}
                  className="h-[700px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-10 left-10">
                  <h3 className="text-4xl font-black">
                    {item.title}
                  </h3>

                  <button className="mt-6 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em] backdrop-blur-xl">
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-center justify-between">
            <h2 className="text-5xl font-black md:text-7xl">
              PRODUCTS
            </h2>

            <button className="rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm uppercase tracking-[0.2em]">
              View All
            </button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={1000}
                    className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <button className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-xl">
                    <Heart size={18} />
                  </button>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-black">
                    {product.name}
                  </h3>

                  <div className="mt-5 flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <h4 className="text-4xl font-black">
                      {product.price}
                    </h4>

                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BIG BANNER */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[50px] border border-white/10">
          <div className="relative h-[800px]">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2200&auto=format&fit=crop"
              alt="Luxury Men"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

            <div className="absolute left-10 top-1/2 max-w-3xl -translate-y-1/2">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-xl">
                <Crown size={16} />
                <span className="text-xs uppercase tracking-[0.3em]">
                  Luxury Collection
                </span>
              </div>

              <h2 className="mt-10 text-6xl font-black leading-tight md:text-8xl">
                MODERN
                <span className="block text-zinc-400">
                  MENSWEAR
                </span>
              </h2>

              <button className="mt-10 flex items-center gap-4 rounded-full bg-white px-8 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black">
                Explore Style
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}