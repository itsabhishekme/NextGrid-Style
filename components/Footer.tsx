"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Apple,
  Play,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  CreditCard,
  ShieldCheck,
  Truck,
  Headphones,
  Globe,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Express worldwide shipping",
  },

  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "100% protected checkout",
  },

  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Premium customer care",
  },
];

const footerLinks = {
  Shop: [
    {
      name: "Men",
      href: "/men",
    },

    {
      name: "Women",
      href: "/women",
    },

    {
      name: "Kids",
      href: "/kids",
    },

    {
      name: "Luxury",
      href: "/luxury",
    },
  ],

  Company: [
    {
      name: "About",
      href: "/about",
    },

    {
      name: "Careers",
      href: "/careers",
    },

    {
      name: "Stores",
      href: "/stores",
    },

    {
      name: "Contact",
      href: "/contact",
    },
  ],

  Support: [
    {
      name: "Help Center",
      href: "/help",
    },

    {
      name: "Shipping",
      href: "/shipping",
    },

    {
      name: "Returns",
      href: "/returns",
    },

    {
      name: "Privacy Policy",
      href: "/privacy",
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden

        border-t
        border-white/10

        bg-black
        text-white
      "
    >
      {/* BACKGROUND */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.06) 1px,
                transparent 1px
              ),

              linear-gradient(
                to bottom,
                rgba(255,255,255,0.06) 1px,
                transparent 1px
              )
            `,

            backgroundSize:
              "80px 80px",
          }}
        />

        {/* LEFT GLOW */}
        <div
          className="
            absolute
            left-[-100px]
            top-[-100px]

            h-[260px]
            w-[260px]

            rounded-full
            bg-fuchsia-500/20

            blur-[100px]

            md:h-[420px]
            md:w-[420px]
          "
        />

        {/* RIGHT GLOW */}
        <div
          className="
            absolute
            bottom-[-120px]
            right-[-120px]

            h-[280px]
            w-[280px]

            rounded-full
            bg-cyan-500/20

            blur-[100px]

            md:h-[420px]
            md:w-[420px]
          "
        />
      </div>

      {/* FEATURES */}
      <section
        className="
          relative
          border-b
          border-white/10
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl

            gap-5

            px-4
            py-10

            sm:px-6

            md:grid-cols-3

            lg:px-8
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  rounded-[28px]

                  border
                  border-white/10

                  bg-white/[0.04]

                  p-6

                  backdrop-blur-xl

                  transition-all

                  hover:border-white/20
                  hover:bg-white/[0.06]
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

                <h3
                  className="
                    mt-5

                    text-xl
                    font-bold

                    md:text-2xl
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2

                    text-sm
                    text-zinc-400

                    md:text-base
                  "
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MAIN */}
      <div
        className="
          relative
          mx-auto
          max-w-7xl

          px-4
          py-14

          sm:px-6

          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            grid
            gap-14

            lg:grid-cols-2
          "
        >
          {/* LEFT */}
          <div className="min-w-0">
            {/* LOGO */}
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <motion.div
                whileHover={{
                  rotate: 4,
                  scale: 1.03,
                }}
                className="
                  flex
                  h-16
                  w-16

                  items-center
                  justify-center

                  overflow-hidden

                  rounded-[22px]

                  border
                  border-white/10

                  bg-white

                  shadow-[0_0_30px_rgba(255,255,255,0.15)]

                  md:h-20
                  md:w-20
                "
              >
                <Image
                  src="/favicon.ico"
                  alt="logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </motion.div>

              <div className="min-w-0">
                <h2
                  className="
                    bg-gradient-to-r
                    from-white
                    via-zinc-300
                    to-zinc-500

                    bg-clip-text

                    text-2xl
                    font-black

                    uppercase

                    tracking-[0.12em]

                    text-transparent

                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  NextGrid Style
                </h2>

                <p
                  className="
                    mt-1

                    text-xs
                    uppercase

                    tracking-[0.25em]

                    text-zinc-500
                  "
                >
                  Fashion Studio
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-7

                max-w-2xl

                text-base
                leading-8

                text-zinc-400

                md:text-lg
              "
            >
              Experience futuristic fashion
              with luxury collections,
              premium styling, and a
              world-class ecommerce
              experience.
            </p>

            {/* CONTACT */}
            <div
              className="
                mt-8
                space-y-4
              "
            >
              {[
                {
                  icon: Mail,
                  text: "support@nextgrid.com",
                },

                {
                  icon: Phone,
                  text: "+91 98765 43210",
                },

                {
                  icon: MapPin,
                  text: "Bangalore, India",
                },

                {
                  icon: Globe,
                  text: "www.nextgrid.com",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={i}
                    className="
                      flex
                      items-center
                      gap-4

                      text-sm
                      text-zinc-400

                      md:text-base
                    "
                  >
                    <Icon size={18} />

                    <span className="break-all">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* APP BUTTONS */}
            <div
              className="
                mt-10

                flex
                flex-col
                gap-4

                sm:flex-row
                sm:flex-wrap
              "
            >
              {/* APP STORE */}
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  relative

                  flex
                  min-h-[84px]
                  w-full

                  items-center
                  justify-center

                  gap-4

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-white/10

                  bg-black

                  px-7
                  py-5

                  text-white

                  transition-all

                  hover:border-white/20
                  hover:bg-zinc-900

                  sm:w-auto
                  sm:min-w-[260px]
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
                  <Apple size={28} />
                </div>

                <div className="text-left">
                  <p
                    className="
                      text-[10px]
                      font-semibold

                      uppercase

                      tracking-[0.28em]

                      text-zinc-400
                    "
                  >
                    Download on the
                  </p>

                  <h4
                    className="
                      mt-1

                      text-xl
                      font-black
                    "
                  >
                    App Store
                  </h4>
                </div>
              </motion.a>

              {/* GOOGLE PLAY */}
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  relative

                  flex
                  min-h-[84px]
                  w-full

                  items-center
                  justify-center

                  gap-4

                  overflow-hidden

                  rounded-[28px]

                  border
                  border-white/10

                  bg-black

                  px-7
                  py-5

                  text-white

                  transition-all

                  hover:border-white/20
                  hover:bg-zinc-900

                  sm:w-auto
                  sm:min-w-[260px]
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

                    bg-white/[0.08]

                    transition-all

                    group-hover:bg-white
                    group-hover:text-black
                  "
                >
                  <Play size={26} />
                </div>

                <div className="text-left">
                  <p
                    className="
                      text-[10px]
                      font-semibold

                      uppercase

                      tracking-[0.28em]

                      text-zinc-400
                    "
                  >
                    Get it on
                  </p>

                  <h4
                    className="
                      mt-1

                      text-xl
                      font-black
                    "
                  >
                    Google Play
                  </h4>
                </div>
              </motion.a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              grid
              grid-cols-2
              gap-10

              sm:grid-cols-3
            "
          >
            {Object.entries(footerLinks).map(
              ([title, links]) => (
                <div
                  key={title}
                  className="min-w-0"
                >
                  <h3
                    className="
                      mb-5

                      text-lg
                      font-black

                      md:text-2xl
                    "
                  >
                    {title}
                  </h3>

                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="
                            group

                            flex
                            items-center
                            gap-2

                            text-sm
                            text-zinc-400

                            transition-all

                            hover:text-white

                            md:text-base
                          "
                        >
                          <ArrowRight
                            size={14}
                            className="
                              opacity-0

                              transition-all

                              group-hover:opacity-100
                            "
                          />

                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>

        {/* NEWSLETTER */}
        <div
          className="
            relative

            mt-20

            overflow-hidden

            rounded-[36px]

            border
            border-white/10

            bg-white/[0.04]

            p-6

            backdrop-blur-2xl

            md:p-10
          "
        >
          <div
            className="
              absolute
              right-0
              top-0

              h-40
              w-40

              rounded-full

              bg-fuchsia-500/10

              blur-[90px]
            "
          />

          <div
            className="
              relative

              flex
              flex-col
              gap-8

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            {/* LEFT */}
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-3

                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.04]

                  px-5
                  py-3
                "
              >
                <Sparkles size={16} />

                <span
                  className="
                    text-xs
                    uppercase

                    tracking-[0.3em]

                    text-zinc-300
                  "
                >
                  Newsletter
                </span>
              </div>

              <h2
                className="
                  mt-5

                  text-3xl
                  font-black

                  md:text-5xl
                "
              >
                Stay Updated
              </h2>

              <p
                className="
                  mt-4

                  text-zinc-400
                "
              >
                Receive premium fashion
                drops and exclusive offers.
              </p>
            </div>

            {/* RIGHT */}
            <form
              className="
                flex
                w-full
                max-w-xl

                flex-col
                gap-4

                sm:flex-row
              "
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-16
                  flex-1

                  rounded-2xl

                  border
                  border-white/10

                  bg-black/40

                  px-6

                  text-white

                  outline-none

                  placeholder:text-zinc-500

                  focus:border-white/30
                "
              />

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  flex
                  h-16

                  items-center
                  justify-center

                  gap-3

                  rounded-2xl

                  bg-white

                  px-8

                  font-bold

                  uppercase

                  tracking-[0.2em]

                  text-black
                "
              >
                Subscribe

                <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            mt-14

            border-t
            border-white/10

            pt-8
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6

              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <p
              className="
                text-sm
                text-zinc-500
              "
            >
              © 2026 NextGrid. All rights reserved.
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-5
              "
            >
              {[
                {
                  name: "Privacy",
                  href: "/privacy",
                },

                {
                  name: "Terms",
                  href: "/terms",
                },

                {
                  name: "Cookies",
                  href: "/cookies",
                },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    text-sm
                    text-zinc-500

                    transition-all

                    hover:text-white
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div
              className="
                flex
                items-center
                gap-3

                rounded-full

                border
                border-white/10

                bg-white/[0.04]

                px-5
                py-3
              "
            >
              <CreditCard size={18} />

              <span
                className="
                  text-sm
                  text-zinc-400
                "
              >
                Secure Payments
              </span>
            </div>
          </div>

          {/* DEVELOPER */}
          <div className="mt-8 text-center">
            <p
              className="
                text-xs

                uppercase

                tracking-[0.3em]

                text-zinc-600
              "
            >
              Developed by EchoSoul Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}