"use client";

import Image from "next/image";

import {
  motion,
} from "framer-motion";

import {
  ShoppingBag,
  Heart,
  Star,
  Truck,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Minus,
  Plus,
} from "lucide-react";

const relatedProducts = [
  {
    name: "Luxury Black Hoodie",
    price: "$189",
    image: "/streetwear/hoodie.jpg",
  },

  {
    name: "Premium Sneakers",
    price: "$320",
    image: "/streetwear/shoes.jpg",
  },

  {
    name: "Urban Cargo Pants",
    price: "$160",
    image: "/streetwear/cargo.jpg",
  },

  {
    name: "Designer Jacket",
    price: "$420",
    image: "/streetwear/jacket.jpg",
  },
];

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "Worldwide premium delivery",
  },

  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "100% secure checkout process",
  },

  {
    icon: Sparkles,
    title: "Premium Quality",
    desc: "Luxury verified fashion product",
  },
];

export default function ProductPage() {
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
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      {/* PRODUCT SECTION */}
      <section
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          pb-28
          pt-[150px]
          lg:px-10
        "
      >
        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            className="relative"
          >
            {/* IMAGE */}
            <div
              className="
                overflow-hidden
                rounded-[50px]
                border
                border-white/10
              "
            >
              <Image
                src="/streetwear/hoodie.jpg"
                alt="Product"
                width={800}
                height={1000}
                className="
                  h-[850px]
                  w-full
                  object-cover
                "
              />
            </div>

            {/* FLOAT CARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                -bottom-8
                left-10
                rounded-[30px]
                border
                border-white/10
                bg-black/50
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

              <h3 className="mt-4 text-2xl font-black">
                Premium Quality
              </h3>

              <p className="mt-3 text-zinc-400">
                Luxury verified fashion collection
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
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
                Premium Streetwear
              </span>
            </div>

            {/* TITLE */}
            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-tight
                md:text-7xl
              "
            >
              Luxury Black Hoodie
            </h1>

            {/* PRICE */}
            <div className="mt-8 flex items-center gap-6">
              <h2 className="text-5xl font-black">
                $189
              </h2>

              <span
                className="
                  rounded-full
                  bg-white
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-black
                "
              >
                Trending
              </span>
            </div>

            {/* RATING */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-zinc-400">
                4.9 Rating • 2,400 Reviews
              </p>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-10
                max-w-2xl
                text-lg
                leading-9
                text-zinc-400
              "
            >
              Experience futuristic premium fashion
              with oversized luxury silhouettes,
              premium fabric and next-generation
              urban aesthetics crafted for modern
              streetwear culture.
            </p>

            {/* SIZE */}
            <div className="mt-12">
              <h3
                className="
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-zinc-500
                "
              >
                Select Size
              </h3>

              <div className="mt-5 flex flex-wrap gap-4">
                {["S", "M", "L", "XL"].map(
                  (size) => (
                    <button
                      key={size}
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        font-bold
                        transition-all
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      {size}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mt-12">
              <h3
                className="
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-zinc-500
                "
              >
                Quantity
              </h3>

              <div
                className="
                  mt-5
                  flex
                  w-fit
                  items-center
                  gap-8
                  rounded-full
                  border
                  border-white/10
                  px-6
                  py-4
                "
              >
                <button>
                  <Minus size={18} />
                </button>

                <span className="text-xl font-bold">
                  1
                </span>

                <button>
                  <Plus size={18} />
                </button>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-14 flex flex-col gap-5 sm:flex-row">
              {/* ADD TO CART */}
              <button
                className="
                  flex
                  flex-1
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
                <ShoppingBag size={20} />

                Add To Cart

                <ArrowRight size={18} />
              </button>

              {/* WISHLIST */}
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
                <Heart size={18} />

                Wishlist
              </button>
            </div>

            {/* FEATURES */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="
                      rounded-[30px]
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-6
                    "
                  >
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
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-6 text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="relative border-t border-white/10 py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* HEADER */}
          <div className="mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
              Related Products
            </p>

            <h2 className="mt-5 text-5xl font-black md:text-7xl">
              You May
              <span className="block text-zinc-500">
                Also Like
              </span>
            </h2>
          </div>

          {/* GRID */}
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((product, index) => (
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
                <div className="overflow-hidden">
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
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-2xl font-black">
                    {product.name}
                  </h3>

                  <div className="mt-5 flex items-center justify-between">
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
        </div>
      </section>
    </main>
  );
}