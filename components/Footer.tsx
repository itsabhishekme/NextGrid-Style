"use client";

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
  Sparkles,
  Headphones,
  BadgeCheck,
  Crown,
  Gem,
  Globe,
  Star,
  CheckCircle2,
  ShoppingBag,
  Flame,
  Layers3,
  Smartphone,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Fast Global Delivery",
    desc: "Worldwide premium express shipping",
  },

  {
    icon: ShieldCheck,
    title: "Secure Checkout",
    desc: "Advanced encrypted payment security",
  },

  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Luxury customer care support",
  },

  {
    icon: BadgeCheck,
    title: "Premium Quality",
    desc: "Verified luxury fashion collections",
  },
];

const shopLinks = [
  {
    name: "Men Fashion",
    href: "/men",
  },

  {
    name: "Women Fashion",
    href: "/women",
  },

  {
    name: "Children Collection",
    href: "/children",
  },

  {
    name: "Luxury Wear",
    href: "/luxury",
  },

  {
    name: "Streetwear",
    href: "/streetwear",
  },

  {
    name: "Trending Styles",
    href: "/trending",
  },
];

const companyLinks = [
  {
    name: "About Us",
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
    name: "Fashion Blog",
    href: "/blog",
  },

  {
    name: "Affiliates",
    href: "/affiliates",
  },

  {
    name: "Investors",
    href: "/investors",
  },
];

const supportLinks = [
  {
    name: "Support Center",
    href: "/support",
  },

  {
    name: "Track Order",
    href: "/orders",
  },

  {
    name: "Shipping Policy",
    href: "/shipping",
  },

  {
    name: "Returns & Refunds",
    href: "/returns",
  },

  {
    name: "FAQs",
    href: "/faq",
  },

  {
    name: "Contact Support",
    href: "/contact",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy",
  },

  {
    name: "Terms & Conditions",
    href: "/terms",
  },

  {
    name: "Cookies Policy",
    href: "/cookies",
  },

  {
    name: "Licenses",
    href: "/licenses",
  },
];

const stats = [
  {
    number: "2M+",
    label: "Global Customers",
  },

  {
    number: "180+",
    label: "Luxury Brands",
  },

  {
    number: "99%",
    label: "Secure Payments",
  },

  {
    number: "24/7",
    label: "Support Service",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
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

        {/* GLOW EFFECTS */}
        <div className="absolute -left-40 top-0 h-[700px] w-[700px] rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-0 top-20 h-[700px] w-[700px] rounded-full bg-purple-500/10 blur-[180px]" />

        <div className="absolute bottom-0 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      {/* FEATURES */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[34px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-7
                  backdrop-blur-2xl
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
                    bg-white
                    text-black
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-7 text-2xl font-black">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
        {/* APP CTA */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[60px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-3xl
            lg:p-16
          "
        >
          {/* LIGHT EFFECT */}
          <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />

          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT */}
            <div>
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
                <Smartphone size={16} />

                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-zinc-400
                  "
                >
                  Mobile Fashion Experience
                </span>
              </div>

              {/* TITLE */}
              <h2
                className="
                  mt-10
                  text-5xl
                  font-black
                  leading-tight
                  md:text-7xl
                "
              >
                Download
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-white
                    via-zinc-300
                    to-zinc-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  NextGrid App
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-9
                  text-zinc-400
                "
              >
                Experience futuristic shopping, immersive
                fashion discovery and ultra-fast mobile
                performance designed for premium customers.
              </p>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-col gap-5 sm:flex-row">
                {/* APP STORE */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
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
                  "
                >
                  <Apple size={36} />

                  <div className="text-left">
                    <p className="text-xs font-medium">
                      Download on the
                    </p>

                    <h4 className="text-xl font-black">
                      App Store
                    </h4>
                  </div>
                </motion.button>

                {/* PLAYSTORE */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex
                    items-center
                    gap-4
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-7
                    py-5
                    transition-all
                    hover:bg-white
                    hover:text-black
                  "
                >
                  <Play size={34} />

                  <div className="text-left">
                    <p className="text-xs font-medium">
                      GET IT ON
                    </p>

                    <h4 className="text-xl font-black">
                      Google Play
                    </h4>
                  </div>
                </motion.button>
              </div>

              {/* TAGS */}
              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  "PWA Ready",
                  "Android App",
                  "iOS App",
                  "Offline Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-5
                      py-3
                    "
                  >
                    <CheckCircle2 size={16} />

                    <span className="text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                  }}
                  className="
                    rounded-[34px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-8
                  "
                >
                  <h3 className="text-5xl font-black">
                    {item.number}
                  </h3>

                  <p className="mt-4 text-zinc-400">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER LINKS */}
        <div className="mt-24 grid gap-16 md:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
            {/* LOGO */}
            <div className="flex items-center gap-5">
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-3xl
                  bg-white
                  text-black
                "
              >
                <Crown size={30} />
              </div>

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
                    tracking-[0.2em]
                    text-transparent
                  "
                >
                  NextGrid
                </h2>

                <p
                  className="
                    mt-1
                    text-xs
                    uppercase
                    tracking-[0.3em]
                    text-zinc-500
                  "
                >
                  Luxury Fashion Studio
                </p>
              </div>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-10
                max-w-lg
                text-base
                leading-9
                text-zinc-400
              "
            >
              NextGrid Style combines futuristic fashion,
              premium streetwear and immersive shopping
              experiences into one next-generation luxury
              fashion platform.
            </p>

            {/* CONTACT */}
            <div className="mt-12 space-y-5">
              <div className="flex items-center gap-4 text-zinc-400">
                <Mail size={18} />

                <span>support@nextgridstyle.com</span>
              </div>

              <div className="flex items-center gap-4 text-zinc-400">
                <Phone size={18} />

                <span>+91 98765 43210</span>
              </div>

              <div className="flex items-center gap-4 text-zinc-400">
                <MapPin size={18} />

                <span>Bangalore, India</span>
              </div>

              <div className="flex items-center gap-4 text-zinc-400">
                <Globe size={18} />

                <span>www.nextgridstyle.com</span>
              </div>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-10 flex flex-wrap gap-4">
              {[
                "Luxury Verified",
                "Global Shipping",
                "Secure Payments",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-5
                    py-3
                    text-sm
                    text-zinc-300
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="mb-8 text-2xl font-black">
              Shop
            </h3>

            <ul className="space-y-5">
              {shopLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-zinc-400
                      transition-all
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

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-8 text-2xl font-black">
              Company
            </h3>

            <ul className="space-y-5">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      text-zinc-400
                      transition-all
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

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="mb-8 text-2xl font-black">
              Newsletter
            </h3>

            <p className="mb-6 text-sm leading-8 text-zinc-400">
              Subscribe for luxury drops, premium fashion
              collections and exclusive updates.
            </p>

            {/* FORM */}
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  text-white
                  outline-none
                  transition-all
                  placeholder:text-zinc-500
                  focus:border-white
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
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-5
                  py-4
                  text-sm
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

            {/* SUPPORT LINKS */}
            <div className="mt-10 space-y-4">
              {supportLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    block
                    text-sm
                    text-zinc-400
                    transition-all
                    hover:text-white
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* COPYRIGHT */}
          <div>
            <p className="text-sm text-zinc-500">
              © 2026 NextGrid Style Fashion. All rights
              reserved.
            </p>
          </div>

          {/* LEGAL */}
          <div className="flex flex-wrap items-center gap-6">
            {legalLinks.map((item) => (
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

          {/* PAYMENT */}
          <div
            className="
              flex
              items-center
              gap-4
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-6
              py-4
            "
          >
            <CreditCard size={20} />

            <span className="text-sm text-zinc-400">
              Secure Payments Enabled
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}