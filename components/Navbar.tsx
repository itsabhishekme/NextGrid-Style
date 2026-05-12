"use client";

import Link from "next/link";

import {
  ShoppingBag,
  Search,
  Heart,
  Menu,
  X,
  User,
  ChevronDown,
  Bell,
  ArrowRight,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useEffect, useState } from "react";

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
    name: "Luxury",
    href: "/luxury",
    dropdown: true,
  },
  {
    name: "Streetwear",
    href: "/streetwear",
  },
];

const luxuryDropdown = [
  {
    title: "Premium Jackets",
    href: "/luxury/jackets",
  },
  {
    title: "Designer Shoes",
    href: "/luxury/shoes",
  },
  {
    title: "Luxury Watches",
    href: "/luxury/watches",
  },
  {
    title: "Accessories",
    href: "/luxury/accessories",
  },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [searchOpen, setSearchOpen] =
    useState(false);

  const [luxuryOpen, setLuxuryOpen] =
    useState(false);

  const [searchQuery, setSearchQuery] =
    useState("");

  useEffect(() => {
    if (mobileMenu || searchOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [mobileMenu, searchOpen]);

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
          duration: 0.6,
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
            mx-auto
            flex
            h-[82px]
            max-w-7xl
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-10
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-5 lg:gap-14">

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
                    text-xl
                    sm:text-2xl
                    lg:text-3xl
                    font-black
                    uppercase
                    tracking-[0.28em]
                    text-transparent
                  "
                >
                  NextGrid
                </h1>

                <p
                  className="
                    mt-1
                    hidden
                    sm:block
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
            <div className="hidden items-center gap-8 lg:flex">
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
                  onMouseEnter={() => {
                    if (item.dropdown)
                      setLuxuryOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.dropdown)
                      setLuxuryOpen(false);
                  }}
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

                    {item.dropdown && (
                      <ChevronDown size={14} />
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

                  <AnimatePresence>
                    {item.dropdown &&
                      luxuryOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 20,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                          className="
                            absolute
                            left-0
                            top-12
                            w-[320px]
                            overflow-hidden
                            rounded-[32px]
                            border
                            border-white/10
                            bg-black/95
                            p-6
                            shadow-2xl
                            backdrop-blur-3xl
                          "
                        >
                          <div className="mb-5">
                            <p
                              className="
                                text-xs
                                uppercase
                                tracking-[0.3em]
                                text-zinc-500
                              "
                            >
                              Premium Collection
                            </p>

                            <h3 className="mt-3 text-2xl font-black text-white">
                              Luxury Fashion
                            </h3>
                          </div>

                          <div className="space-y-4">
                            {luxuryDropdown.map(
                              (drop) => (
                                <Link
                                  key={drop.title}
                                  href={drop.href}
                                  className="
                                    group
                                    flex
                                    items-center
                                    justify-between
                                    rounded-2xl
                                    border
                                    border-white/5
                                    bg-white/[0.03]
                                    px-5
                                    py-4
                                    transition-all
                                    hover:bg-white
                                    hover:text-black
                                  "
                                >
                                  <span>
                                    {drop.title}
                                  </span>

                                  <ArrowRight
                                    size={16}
                                  />
                                </Link>
                              )
                            )}
                          </div>
                        </motion.div>
                      )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">

            {/* SEARCH */}
            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                setSearchOpen(true)
              }
              className="
                flex
                h-10
                w-10
                sm:h-11
                sm:w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                transition-all
                hover:bg-white/10
              "
            >
              <Search size={18} />
            </motion.button>

            {/* NOTIFICATION */}
            <Link href="/notifications">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  hidden
                  md:flex
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
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  relative
                  hidden
                  md:flex
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
                    bg-white
                    text-[10px]
                    font-bold
                    text-black
                  "
                >
                  2
                </span>
              </motion.button>
            </Link>

            {/* PROFILE */}
            <Link href="/login">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  hidden
                  md:flex
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

            {/* CART */}
            <Link href="/cart">
              <motion.button
                whileHover={{
                  scale: 1.08,
                }}
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

            {/* MOBILE MENU BUTTON */}
            <motion.button
              whileTap={{
                scale: 0.9,
              }}
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="
                flex
                h-10
                w-10
                sm:h-11
                sm:w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                lg:hidden
              "
            >
              {mobileMenu ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* SEARCH MODAL */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setSearchOpen(false)
              }
              className="
                fixed
                inset-0
                z-[90]
                bg-black/70
                backdrop-blur-xl
              "
            />

            <motion.div
              initial={{
                y: -40,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -40,
                opacity: 0,
              }}
              className="
                fixed
                left-1/2
                top-24
                z-[100]
                w-[95%]
                max-w-2xl
                -translate-x-1/2
                rounded-[32px]
                border
                border-white/10
                bg-zinc-950
                p-5
                shadow-2xl
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <Search
                  size={20}
                  className="text-zinc-500"
                />

                <input
                  type="text"
                  placeholder="Search luxury fashion..."
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(
                      e.target.value
                    )
                  }
                  className="
                    h-14
                    w-full
                    bg-transparent
                    text-white
                    outline-none
                    placeholder:text-zinc-500
                  "
                />

                <button
                  onClick={() =>
                    setSearchOpen(false)
                  }
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-black
                  "
                >
                  <X size={18} />
                </button>
              </div>

              {/* SEARCH BUTTON */}
              <Link
                href={`/search?q=${searchQuery}`}
                className="
                  mt-5
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-black
                  transition-all
                  hover:scale-[1.01]
                "
              >
                Search Now
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setMobileMenu(false)
              }
              className="
                fixed
                inset-0
                z-40
                bg-black/60
                backdrop-blur-sm
                lg:hidden
              "
            />

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                fixed
                right-0
                top-0
                z-50
                h-screen
                w-[85%]
                max-w-sm
                overflow-y-auto
                border-l
                border-white/10
                bg-black/95
                p-6
                backdrop-blur-3xl
                lg:hidden
              "
            >
              <div className="mt-24 space-y-5">

                {/* MOBILE PROFILE */}
                <Link
                  href="/profile"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/5
                    bg-white/[0.03]
                    px-5
                    py-4
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    text-zinc-200
                    transition-all
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Profile
                  <ArrowRight size={16} />
                </Link>

                {/* MOBILE CART */}
                <Link
                  href="/cart"
                  onClick={() =>
                    setMobileMenu(false)
                  }
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/5
                    bg-white/[0.03]
                    px-5
                    py-4
                    text-sm
                    uppercase
                    tracking-[0.18em]
                    text-zinc-200
                    transition-all
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Cart
                  <ArrowRight size={16} />
                </Link>

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setMobileMenu(false)
                    }
                    className="
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/5
                      bg-white/[0.03]
                      px-5
                      py-4
                      text-sm
                      uppercase
                      tracking-[0.18em]
                      text-zinc-200
                      transition-all
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    {item.name}

                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}