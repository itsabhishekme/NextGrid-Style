"use client";

import Link from "next/link";

import {
  ShoppingBag,
  Heart,
  User,
  Bell,
  Search,
} from "lucide-react";

import { motion } from "framer-motion";

const navItems = [
  {
    name: "Men",
    href: "/men",
  },
  {
    name: "Women",
    href: "/women",
  },
  {
    name: "Children",
    href: "/children",
  },
  {
    name: "New Arrivals",
    href: "/new-arrivals",
    badge: true,
  },
  {
    name: "Streetwear",
    href: "/streetwear",
  },
];

export default function Navbar() {
  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          border-white/10
          bg-black/40
          backdrop-blur-3xl
        "
      >
        <nav
          className="
            relative
            mx-auto
            flex
            h-[74px]
            w-full
            max-w-7xl
            items-center
            justify-between
            px-3
            sm:px-5
            lg:px-10
          "
        >
          {/* LEFT */}
          <div
            className="
              hidden
              lg:flex
              items-center
              gap-14
            "
          >
            {/* LOGO */}
            <Link href="/">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="cursor-pointer"
              >
                <h1
                  className="
                    bg-gradient-to-r
                    from-white
                    via-zinc-300
                    to-zinc-500
                    bg-clip-text
                    text-3xl
                    font-black
                    uppercase
                    tracking-[0.22em]
                    text-transparent
                    whitespace-nowrap
                  "
                >
                  NextGrid
                </h1>

                <p
                  className="
                    mt-1
                    text-[9px]
                    uppercase
                    tracking-[0.45em]
                    text-zinc-500
                  "
                >
                  Fashion Studio
                </p>
              </motion.div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="relative group"
                >
                  <Link
                    href={item.href}
                    className="
                      relative
                      flex
                      items-center
                      gap-2
                      text-sm
                      uppercase
                      tracking-[0.2em]
                      text-zinc-300
                      transition-all
                      hover:text-white
                    "
                  >
                    {item.name}

                    {item.badge && (
                      <span
                        className="
                          rounded-full
                          bg-white
                          px-2
                          py-1
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-black
                        "
                      >
                        New
                      </span>
                    )}
                  </Link>

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-[1px]
                      w-0
                      bg-white
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* MOBILE CENTER LOGO */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              lg:hidden
            "
          >
            <Link href="/">
              <motion.div
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                "
              >
                <h1
                  className="
                    bg-gradient-to-r
                    from-white
                    via-zinc-300
                    to-zinc-500
                    bg-clip-text
                    text-[20px]
                    font-black
                    uppercase
                    tracking-[0.24em]
                    text-transparent
                    whitespace-nowrap
                  "
                >
                  NextGrid
                </h1>

                <p
                  className="
                    mt-[2px]
                    text-[7px]
                    uppercase
                    tracking-[0.38em]
                    text-zinc-500
                  "
                >
                  Fashion Studio
                </p>
              </motion.div>
            </Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
            {/* DESKTOP SEARCH */}
            <Link
              href="/search"
              className="hidden lg:block"
            >
              <motion.button
                whileTap={{
                  scale: 0.95,
                }}
                whileHover={{
                  scale: 1.04,
                }}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-zinc-300
                  shadow-[0_8px_25px_rgba(0,0,0,0.35)]
                  backdrop-blur-2xl
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                <Search size={18} />
              </motion.button>
            </Link>

            {/* DESKTOP ONLY */}
            <div className="hidden md:flex items-center gap-3">
              {/* NOTIFICATION */}
              <Link href="/notifications">
                <motion.button
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                  "
                >
                  <Bell size={18} />

                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-red-500
                      text-[10px]
                      font-bold
                      text-white
                    "
                  >
                    3
                  </span>
                </motion.button>
              </Link>

              {/* WISHLIST */}
              <Link href="/wishlist">
                <motion.button
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                  "
                >
                  <Heart size={18} />
                </motion.button>
              </Link>

              {/* PROFILE */}
              <Link href="/login">
                <motion.button
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                  "
                >
                  <User size={18} />
                </motion.button>
              </Link>
            </div>

            {/* DESKTOP CART */}
            <Link
              href="/cart"
              className="hidden md:block"
            >
              <motion.button
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  flex
                  h-11
                  w-11
                  sm:h-12
                  sm:w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  shadow-2xl
                "
              >
                <ShoppingBag size={18} />

                <span
                  className="
                    absolute
                    -right-1
                    -top-1
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  5
                </span>
              </motion.button>
            </Link>
          </div>
        </nav>
      </motion.header>
    </>
  );
}