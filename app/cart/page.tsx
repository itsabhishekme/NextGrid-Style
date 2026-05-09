"use client";

import {
  ShoppingBag,
  Trash2,
  ArrowRight,
  CreditCard,
} from "lucide-react";

import { motion } from "framer-motion";

const cartItems = [
  {
    id: 1,
    name: "Premium Black Hoodie",
    size: "L",
    price: 189,
    quantity: 1,
    image: "/streetwear/hoodie.jpg",
  },

  {
    id: 2,
    name: "Luxury Sneakers",
    size: "42",
    price: 320,
    quantity: 1,
    image: "/streetwear/shoes.jpg",
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-14">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-zinc-500
            "
          >
            Shopping Cart
          </p>

          <h1
            className="
              mt-4
              text-5xl
              md:text-7xl
              font-black
            "
          >
            Your Cart
          </h1>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          {/* LEFT */}
          <div className="space-y-6">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{
                  y: -4,
                }}
                className="
                  flex
                  flex-col
                  gap-6
                  rounded-[36px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  md:flex-row
                "
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    h-[220px]
                    w-full
                    rounded-[28px]
                    object-cover
                    md:w-[220px]
                  "
                />

                {/* CONTENT */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h2 className="text-3xl font-black">
                          {item.name}
                        </h2>

                        <p className="mt-3 text-zinc-400">
                          Size: {item.size}
                        </p>
                      </div>

                      <button
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/[0.04]
                        "
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div className="mt-8 flex items-center justify-between">
                    <div
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-full
                        border
                        border-white/10
                        px-5
                        py-3
                      "
                    >
                      <button>-</button>

                      <span>{item.quantity}</span>

                      <button>+</button>
                    </div>

                    <h3 className="text-3xl font-black">
                      ${item.price}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT */}
          <div>
            <div
              className="
                sticky
                top-28
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
              "
            >
              <div className="flex items-center gap-3">
                <ShoppingBag size={22} />

                <h2 className="text-2xl font-black">
                  Order Summary
                </h2>
              </div>

              {/* PRICE */}
              <div className="mt-10 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">
                    Subtotal
                  </span>

                  <span>${subtotal}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">
                    Shipping
                  </span>

                  <span>Free</span>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-center justify-between text-2xl font-black">
                  <span>Total</span>

                  <span>${subtotal}</span>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className="
                  mt-10
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-5
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-black
                "
              >
                <CreditCard size={20} />

                Checkout

                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}