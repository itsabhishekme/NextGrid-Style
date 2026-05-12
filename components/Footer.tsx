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
  Gem,
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
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-[-120px] top-[-120px] h-[450px] w-[450px] rounded-full bg-fuchsia-500/20 blur-[180px]" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[180px]" />
      </div>

      {/* FEATURES */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-12 md:grid-cols-3 lg:px-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-7
                  backdrop-blur-2xl
                  transition-all
                  hover:border-white/20
                  hover:bg-white/[0.06]
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    from-white
                    to-zinc-300
                    text-black
                    shadow-2xl
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MAIN */}
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-5">
              <motion.div
                whileHover={{
                  rotate: 5,
                  scale: 1.05,
                }}
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white
                  shadow-[0_0_40px_rgba(255,255,255,0.2)]
                "
              >
                <Image
                  src="/favicon.ico"
                  alt="logo"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </motion.div>

              <div>
                <h2
                  className="
                    bg-gradient-to-r
                    from-white
                    via-zinc-300
                    to-zinc-500
                    bg-clip-text
                    text-4xl
                    font-black
                    uppercase
                    tracking-[0.25em]
                    text-transparent
                  "
                >
                  NextGrid Style
                </h2>

                <div className="mt-2 flex items-center gap-2 text-zinc-400">

                  <span className="text-sm tracking-[0.2em] uppercase">
                    Fashion Studio
                  </span>
                </div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
              Experience futuristic fashion with premium collections,
              luxury styling, modern streetwear, and world-class shopping.
            </p>

            {/* CONTACT */}
            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 text-zinc-400">
                <Mail size={18} />

                support@nextgrid.com
              </div>

              <div className="flex items-center gap-4 text-zinc-400">
                <Phone size={18} />

                +91 98765 43210
              </div>

              <div className="flex items-center gap-4 text-zinc-400">
                <MapPin size={18} />

                Bangalore, India
              </div>

              <div className="flex items-center gap-4 text-zinc-400">
                <Globe size={18} />

                www.nextgrid.com
              </div>
            </div>

            {/* APP BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="#"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-3xl
                  bg-white
                  px-7
                  py-5
                  text-black
                  shadow-2xl
                "
              >
                <Apple size={30} />

                <div>
                  <p className="text-xs font-medium">
                    Download on the
                  </p>

                  <h4 className="text-lg font-black">
                    App Store
                  </h4>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  items-center
                  gap-4
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  px-7
                  py-5
                  transition-all
                  hover:bg-white
                  hover:text-black
                "
              >
                <Play size={30} />

                <div>
                  <p className="text-xs font-medium">
                    GET IT ON
                  </p>

                  <h4 className="text-lg font-black">
                    Google Play
                  </h4>
                </div>
              </motion.a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-7 text-2xl font-black">
                  {title}
                </h3>

                <ul className="space-y-5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="
                          group
                          flex
                          items-center
                          gap-3
                          text-zinc-400
                          transition-all
                          hover:translate-x-2
                          hover:text-white
                        "
                      >
                        <ArrowRight
                          size={15}
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
            ))}
          </div>
        </div>

        {/* NEWSLETTER */}
        <div
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[42px]
            border
            border-white/10
            bg-white/[0.05]
            p-8
            backdrop-blur-3xl
            md:p-12
          "
        >
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-[120px]" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
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

                <span className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                  Newsletter
                </span>
              </div>

              <h2 className="mt-6 text-4xl font-black md:text-5xl">
                Stay Updated
              </h2>

              <p className="mt-4 text-lg text-zinc-400">
                Receive premium fashion drops and exclusive offers.
              </p>
            </div>

            {/* RIGHT */}
            <form className="flex w-full max-w-xl flex-col gap-4 sm:flex-row">
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
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
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
                  shadow-2xl
                "
              >
                Subscribe

                <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-zinc-500">
              © 2026 NextGrid. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
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

              <span className="text-sm text-zinc-400">
                Secure Payments
              </span>
            </div>
          </div>

          {/* DEVELOPER */}
          <div className="mt-8 text-center">
            <p className="text-sm tracking-[0.25em] text-zinc-600 uppercase">
              Developed by EchoSoul Developer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}