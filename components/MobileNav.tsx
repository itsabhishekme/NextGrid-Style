"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  Home,
  ShoppingBag,
  Heart,
  User,
  Search,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  Star,
  Bell,
  Crown,
  Shirt,
  Gem,
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
    name: "Home",
    href: "/",
    icon: Home,
  },

  {
    name: "Search",
    href: "/search",
    icon: Search,
  },

  {
    name: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },

  {
    name: "Luxury",
    href: "/luxury",
    icon: Crown,
  },

  {
    name: "Profile",
    href: "/login",
    icon: User,
  },
];

const dropdownItems = [
  {
    title: "Men Fashion",
    href: "/men",
    icon: Shirt,
    description:
      "Luxury streetwear collection",
  },

  {
    title: "Women Fashion",
    href: "/women",
    icon: Sparkles,
    description:
      "Elegant premium styles",
  },

  {
    title: "Children",
    href: "/children",
    icon: Star,
    description:
      "Modern kids fashion",
  },

  {
    title: "Streetwear",
    href: "/streetwear",
    icon: Gem,
    description:
      "Urban latest collection",
  },

  {
    title: "Luxury Collection",
    href: "/luxury",
    icon: Crown,
    description:
      "Exclusive premium edition",
  },

  {
    title: "New Arrivals",
    href: "/new-arrivals",
    icon: Bell,
    description:
      "Fresh drops every week",
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
    if (menuOpen) {
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

              bg-black/90

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
              y: 120,
              scale: 0.88,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 120,
              scale: 0.88,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              fixed
              bottom-28
              left-1/2

              z-[9990]

              w-[94%]
              max-w-md

              -translate-x-1/2

              overflow-hidden

              rounded-[42px]

              border
              border-white/10

              bg-gradient-to-b
              from-zinc-900
              via-black
              to-zinc-950

              p-5

              shadow-[0_20px_120px_rgba(0,0,0,0.85)]

              backdrop-blur-3xl

              md:hidden
            "
          >
            {/* PANEL BG */}
            <div
              className="
                absolute
                inset-0

                bg-black/70
              "
            />

            {/* TOP LINE */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0

                h-[1px]
                w-[80%]

                -translate-x-1/2

                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
              "
            />

            {/* GLOW */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-0

                h-52
                w-60

                -translate-x-1/2

                rounded-full

                bg-white/[0.04]

                blur-[120px]
              "
            />

            {/* HEADER */}
            <div
              className="
                relative
                z-10

                mb-7

                flex
                items-center
                justify-between
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    uppercase

                    tracking-[0.35em]

                    text-zinc-500
                  "
                >
                  NEXTGRID
                </p>

                <h2
                  className="
                    mt-2

                    text-3xl
                    font-black
                    uppercase

                    tracking-[0.15em]

                    text-white
                  "
                >
                  Explore
                </h2>
              </div>

              {/* CLOSE BUTTON */}
              <motion.button
                whileTap={{
                  scale: 0.92,
                }}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="
                  relative

                  flex
                  h-14
                  w-14

                  items-center
                  justify-center

                  overflow-hidden

                  rounded-3xl

                  border
                  border-white/10

                  bg-white/[0.05]

                  text-white

                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-white/[0.12]
                    to-transparent
                  "
                />

                <X
                  size={24}
                  className="
                    relative
                    z-10
                  "
                />
              </motion.button>
            </div>

            {/* MENU ITEMS */}
            <div className="space-y-3">
              {dropdownItems.map(
                (item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        x: 30,
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
                          relative

                          flex
                          items-center
                          gap-4

                          overflow-hidden

                          rounded-[28px]

                          border
                          border-white/5

                          bg-white/[0.03]

                          p-4

                          transition-all
                          duration-300

                          hover:border-white/20
                          hover:bg-white
                          hover:text-black
                        "
                      >
                        {/* HOVER LIGHT */}
                        <div
                          className="
                            absolute
                            inset-0

                            opacity-0

                            transition-opacity
                            duration-500

                            group-hover:opacity-100

                            bg-gradient-to-r
                            from-white/[0.08]
                            to-transparent
                          "
                        />

                        {/* ICON */}
                        <div
                          className="
                            relative
                            z-10

                            flex
                            h-14
                            w-14

                            items-center
                            justify-center

                            rounded-2xl

                            bg-white/[0.06]

                            transition-all
                            duration-300

                            group-hover:bg-black
                            group-hover:text-white
                          "
                        >
                          <Icon size={24} />
                        </div>

                        {/* TEXT */}
                        <div
                          className="
                            relative
                            z-10

                            min-w-0
                            flex-1
                          "
                        >
                          <h3
                            className="
                              break-words

                              text-sm
                              font-bold
                              uppercase

                              tracking-[0.15em]

                              leading-tight
                            "
                          >
                            {item.title}
                          </h3>

                          <p
                            className="
                              mt-1

                              text-xs

                              text-zinc-500

                              group-hover:text-zinc-700
                            "
                          >
                            {item.description}
                          </p>
                        </div>

                        <ArrowRight
                          size={18}
                          className="
                            relative
                            z-10

                            transition-transform
                            duration-300

                            group-hover:translate-x-1
                          "
                        />
                      </Link>
                    </motion.div>
                  );
                }
              )}
            </div>

            {/* LOGIN BUTTON */}
            <Link
              href="/login"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                relative

                mt-6

                flex
                h-16

                items-center
                justify-center

                overflow-hidden

                rounded-[28px]

                bg-white

                text-sm
                font-black
                uppercase

                tracking-[0.18em]

                text-black

                transition-all
                duration-300

                hover:scale-[1.02]
              "
            >
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-r
                  from-transparent
                  via-black/[0.03]
                  to-transparent
                "
              />

              <span
                className="
                  relative
                  z-10
                "
              >
                Open Account
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <motion.nav
        initial={{
          y: 120,
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
          bottom-0
          left-0
          right-0

          z-[9999]

          overflow-hidden

          border-t
          border-white/10

          bg-black

          supports-[backdrop-filter]:bg-black/90

          backdrop-blur-2xl
          backdrop-saturate-150

          shadow-[0_-10px_40px_rgba(0,0,0,0.8)]

          md:hidden
        "
        style={{
          WebkitTransform:
            "translateZ(0)",

          transform:
            "translateZ(0)",

          WebkitBackfaceVisibility:
            "hidden",

          backfaceVisibility:
            "hidden",
        }}
      >
        {/* NAVBAR BACKGROUND */}
        <div
          className="
            absolute
            inset-0

            -z-10

            bg-gradient-to-t
            from-black
            via-black/95
            to-black/80
          "
        />

        {/* TOP LIGHT */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0

            h-[1px]
            w-[75%]

            -translate-x-1/2

            bg-gradient-to-r
            from-transparent
            via-white/40
            to-transparent
          "
        />

        {/* BOTTOM GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2

            h-32
            w-[70%]

            -translate-x-1/2

            rounded-full

            bg-white/[0.04]

            blur-[100px]
          "
        />

        {/* NAV ITEMS */}
        <div
          className="
            relative
            z-10

            mx-auto

            flex
            h-[90px]
            w-full
            max-w-lg

            items-center
            justify-around

            px-2
          "
        >
          {/* MENU BUTTON */}
          <motion.button
            whileTap={{
              scale: 0.92,
            }}
            onClick={() => {
              setMenuOpen(
                (prev) => !prev
              );
            }}
            className="
              relative

              flex
              flex-col

              items-center
              justify-center

              min-w-[68px]

              select-none
            "
          >
            {/* ACTIVE GLOW */}
            {menuOpen && (
              <motion.div
                layoutId="menuButtonGlow"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  absolute
                  inset-0

                  rounded-[28px]

                  bg-white/[0.06]

                  blur-xl
                "
              />
            )}

            {/* BUTTON */}
            <motion.div
              animate={{
                borderRadius:
                  menuOpen
                    ? "26px"
                    : "20px",

                rotate: menuOpen
                  ? 180
                  : 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className={`
                relative

                flex
                h-14
                w-14

                items-center
                justify-center

                overflow-hidden

                border

                transition-all
                duration-500

                ${
                  menuOpen
                    ? `
                    border-white/20

                    bg-white

                    text-black

                    shadow-[0_0_40px_rgba(255,255,255,0.45)]
                  `
                    : `
                    border-white/10

                    bg-white/[0.05]

                    text-zinc-300

                    backdrop-blur-2xl
                  `
                }
              `}
            >
              {/* BG */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-white/[0.14]
                  via-transparent
                  to-transparent
                "
              />

              {/* SHINE */}
              <motion.div
                animate={{
                  x: menuOpen
                    ? "180%"
                    : "-180%",
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-0

                  h-full
                  w-10

                  rotate-[20deg]

                  bg-white/20

                  blur-md
                "
              />

              {/* ICON */}
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {menuOpen ? (
                  <motion.div
                    key="close-icon"
                    initial={{
                      rotate: -180,
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotate: 180,
                      opacity: 0,
                      scale: 0.5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      relative
                      z-10
                    "
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu-icon"
                    initial={{
                      rotate: 180,
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotate: -180,
                      opacity: 0,
                      scale: 0.5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      relative
                      z-10
                    "
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* LABEL */}
            <span
              className={`
                mt-2

                text-[10px]
                font-medium
                uppercase

                tracking-[0.24em]

                transition-all
                duration-300

                ${
                  menuOpen
                    ? "text-white"
                    : "text-zinc-500"
                }
              `}
            >
              {menuOpen
                ? "Close"
                : "Menu"}
            </span>
          </motion.button>

          {/* NAVIGATION ITEMS */}
          {navItems.map((item) => {
            const Icon = item.icon;

            const active =
              pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative

                  flex
                  flex-1

                  items-center
                  justify-center
                "
              >
                <motion.div
                  whileTap={{
                    scale: 0.92,
                  }}
                  className="
                    relative

                    flex
                    flex-col

                    items-center
                    justify-center
                  "
                >
                  {active && (
                    <>
                      {/* ACTIVE BG */}
                      <motion.div
                        layoutId="activeTab"
                        className="
                          absolute
                          inset-0

                          -z-10

                          rounded-3xl

                          bg-white/[0.08]
                        "
                      />

                      {/* TOP BAR */}
                      <div
                        className="
                          absolute
                          -top-1

                          h-1
                          w-8

                          rounded-full

                          bg-white
                        "
                      />
                    </>
                  )}

                  {/* ICON */}
                  <div
                    className={`
                      relative

                      flex
                      h-12
                      w-12

                      items-center
                      justify-center

                      overflow-hidden

                      rounded-2xl

                      transition-all
                      duration-300

                      ${
                        active
                          ? `
                          bg-white
                          text-black

                          shadow-[0_0_25px_rgba(255,255,255,0.45)]
                        `
                          : `
                          bg-white/[0.04]
                          text-zinc-400
                        `
                      }
                    `}
                  >
                    <div
                      className="
                        absolute
                        inset-0

                        bg-gradient-to-br
                        from-white/[0.08]
                        to-transparent
                      "
                    />

                    <Icon
                      size={20}
                      className="
                        relative
                        z-10
                      "
                    />
                  </div>

                  {/* LABEL */}
                  <span
                    className={`
                      mt-1

                      text-[10px]
                      uppercase

                      tracking-[0.18em]

                      ${
                        active
                          ? "text-white"
                          : "text-zinc-500"
                      }
                    `}
                  >
                    {item.name}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* SAFE AREA */}
        <div
          className="
            h-[env(safe-area-inset-bottom)]

            bg-black
          "
        />
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
          right-5

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
              h-[68px]
              w-[68px]

              items-center
              justify-center

              overflow-hidden

              rounded-full

              border
              border-white/10

              bg-white

              text-black

              shadow-[0_10px_60px_rgba(255,255,255,0.25)]
            "
          >
            {/* LIGHT */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-br
                from-white
                via-white
                to-zinc-200
              "
            />

            <ShoppingBag
              size={26}
              className="
                relative
                z-10
              "
            />

            {/* COUNT */}
            <div
              className="
                absolute
                -right-1
                -top-1

                z-20

                flex
                h-7
                w-7

                items-center
                justify-center

                rounded-full

                bg-red-500

                text-[11px]
                font-black

                text-white

                shadow-lg
              "
            >
              5
            </div>
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
}