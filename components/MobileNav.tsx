"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  Home,
  Search,
  Heart,
  User,
  ShoppingBag,
  Crown,
  Sparkles,
  Bell,
  Shirt,
  Menu,
  X,
  Star,
  ChevronRight,
  Compass,
  Flame,
  Briefcase,
  Watch,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

const navItems = [
  {
    href: "/",
    icon: Home,
  },

  {
    href: "/search",
    icon: Search,
  },

  {
    href: "/wishlist",
    icon: Heart,
  },

  {
    href: "/luxury",
    icon: Crown,
  },

  {
    href: "/profile",
    icon: User,
  },
];

const categories = [
  {
    title: "Men",
    subtitle: "Premium Essentials",
    href: "/men",
    icon: Shirt,
  },

  {
    title: "Women",
    subtitle: "Luxury Collection",
    href: "/women",
    icon: Sparkles,
  },

  {
    title: "Streetwear",
    subtitle: "Urban Culture",
    href: "/streetwear",
    icon: Flame,
  },

  {
    title: "Accessories",
    subtitle: "Minimal Fashion",
    href: "/accessories",
    icon: Watch,
  },

  {
    title: "Luxury",
    subtitle: "Exclusive Pieces",
    href: "/luxury",
    icon: Crown,
  },

  {
    title: "Explore",
    subtitle: "Trending Styles",
    href: "/explore",
    icon: Compass,
  },
];

const quickActions = [
  {
    title: "Orders",
    href: "/orders",
    icon: Briefcase,
  },

  {
    title: "Alerts",
    href: "/notifications",
    icon: Bell,
  },

  {
    title: "Featured",
    href: "/featured",
    icon: Star,
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [menuOpen]);

  if (!mounted) return null;

  return (
    <>
      {/* BACKDROP */}
      <AnimatePresence>
        {menuOpen && (
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
            transition={{
              duration: 0.25,
            }}
            onClick={() =>
              setMenuOpen(false)
            }
            className="
              fixed
              inset-0
              z-[9980]
              bg-black/85
              backdrop-blur-2xl
              md:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* MENU PANEL */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 80,
              scale: 0.92,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              bottom-[105px]
              left-1/2
              z-[9990]
              w-[94%]
              max-w-md
              -translate-x-1/2
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-gradient-to-b
              from-zinc-900
              via-black
              to-zinc-950
              shadow-[0_25px_100px_rgba(0,0,0,0.9)]
              backdrop-blur-3xl
              md:hidden
            "
          >
            {/* HEADER */}
            <div
              className="
                relative
                overflow-hidden
                border-b
                border-white/10
                p-5
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-white/[0.05]
                  via-transparent
                  to-white/[0.02]
                "
              />

              <div
                className="
                  relative
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.38em]
                      text-zinc-500
                    "
                  >
                    Fashion Space
                  </p>

                  <h2
                    className="
                      mt-2
                      text-2xl
                      font-black
                      uppercase
                      tracking-[0.14em]
                      text-white
                    "
                  >
                    Discover
                  </h2>
                </div>

                <motion.button
                  whileTap={{
                    scale: 0.92,
                  }}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.05]
                    text-white
                  "
                >
                  <X size={22} />
                </motion.button>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="px-4 pt-4">
              <div className="grid grid-cols-3 gap-3">
                {quickActions.map(
                  (item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.05,
                        }}
                      >
                        <Link
                          href={item.href}
                          className="
                            flex
                            flex-col
                            items-center
                            justify-center
                            gap-2
                            rounded-[24px]
                            border
                            border-white/10
                            bg-white/[0.04]
                            px-3
                            py-4
                            transition-all
                            duration-300
                            hover:bg-white
                            hover:text-black
                          "
                        >
                          <Icon size={20} />

                          <span
                            className="
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-[0.14em]
                            "
                          >
                            {item.title}
                          </span>
                        </Link>
                      </motion.div>
                    );
                  }
                )}
              </div>
            </div>

            {/* CATEGORY LIST */}
            <div className="space-y-3 px-4 py-5">
              {categories.map(
                (item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.05,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() =>
                          setMenuOpen(
                            false
                          )
                        }
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          rounded-[24px]
                          border
                          border-white/10
                          bg-white/[0.03]
                          p-4
                          transition-all
                          duration-300
                          hover:bg-white
                          hover:text-black
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-4
                          "
                        >
                          <div
                            className="
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-2xl
                              bg-white/[0.05]
                              transition-all
                              duration-300
                              group-hover:bg-black
                              group-hover:text-white
                            "
                          >
                            <Icon size={22} />
                          </div>

                          <div>
                            <h3
                              className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.12em]
                              "
                            >
                              {item.title}
                            </h3>

                            <p
                              className="
                                mt-1
                                text-[11px]
                                text-zinc-500
                                group-hover:text-zinc-700
                              "
                            >
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        <ChevronRight
                          size={18}
                        />
                      </Link>
                    </motion.div>
                  );
                }
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM NAV */}
      <motion.nav
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.45,
        }}
        className="
          fixed
          bottom-3
          left-1/2
          z-[9999]
          flex
          h-[82px]
          w-[94%]
          max-w-md
          -translate-x-1/2
          items-center
          justify-between
          rounded-[32px]
          border
          border-white/10
          bg-black/75
          px-2
          shadow-[0_15px_70px_rgba(0,0,0,0.8)]
          backdrop-blur-3xl
          md:hidden
        "
        style={{
          paddingBottom:
            "env(safe-area-inset-bottom)",
        }}
      >
        {/* MENU */}
        <motion.button
          whileTap={{
            scale: 0.92,
          }}
          onClick={() =>
            setMenuOpen(
              (prev) => !prev
            )
          }
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-gradient-to-br
            from-white/[0.1]
            to-white/[0.03]
            text-white
          "
        >
          <AnimatePresence
            mode="wait"
          >
            {menuOpen ? (
              <motion.div
                key="close"
                initial={{
                  rotate: -180,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: 180,
                  opacity: 0,
                }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{
                  rotate: 180,
                  opacity: 0,
                }}
                animate={{
                  rotate: 0,
                  opacity: 1,
                }}
                exit={{
                  rotate: -180,
                  opacity: 0,
                }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* NAV ITEMS */}
        {navItems.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
            >
              <motion.div
                whileTap={{
                  scale: 0.92,
                }}
                className="
                  relative
                  flex
                  items-center
                  justify-center
                "
              >
                {active && (
                  <motion.div
                    layoutId="activeTab"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.5,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-2xl
                      bg-white
                    "
                  />
                )}

                <div
                  className={`
                    relative
                    z-10
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    transition-all
                    duration-300

                    ${
                      active
                        ? `
                        text-black
                      `
                        : `
                        text-zinc-400
                      `
                    }
                  `}
                >
                  <Icon size={22} />
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.nav>

      {/* FLOATING CART */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="
          fixed
          bottom-28
          right-4
          z-[9999]
          md:hidden
        "
      >
        <Link href="/cart">
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            className="
              relative
              flex
              h-[64px]
              w-[64px]
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white
              text-black
              shadow-[0_12px_50px_rgba(255,255,255,0.28)]
            "
          >
            <ShoppingBag
              size={24}
            />

            <div
              className="
                absolute
                -right-1
                -top-1
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-red-500
                text-[10px]
                font-black
                text-white
              "
            >
              8
            </div>
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
}