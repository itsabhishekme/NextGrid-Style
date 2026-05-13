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
  Send,
  ChevronRight,
  Star,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";

import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Express worldwide shipping with real-time tracking support.",
    href: "/shipping",
  },

  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Advanced encrypted payment systems with complete protection.",
    href: "/payments",
  },

  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Premium customer support available all day for assistance.",
    href: "/support",
  },

  {
    icon: BadgeCheck,
    title: "Premium Quality",
    desc: "Luxury verified collections with high-quality standards.",
    href: "/quality",
  },
];

const footerLinks = {
  Shop: [
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Kids", href: "/kids" },
    { name: "Luxury", href: "/luxury" },
    { name: "Trending", href: "/trending" },
    { name: "Accessories", href: "/accessories" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Streetwear", href: "/streetwear" },
  ],

  Company: [
    { name: "About", href: "/company/about" },
    { name: "Careers", href: "/company/careers" },
    { name: "Stores", href: "/company/stores" },
    { name: "Contact", href: "/company/contact" },
    { name: "Investors", href: "/company/investors" },
    { name: "Press Media", href: "/company/press-media" },
    { name: "Blog", href: "/company/blog" },
    { name: "Partners", href: "/company/partners" },
  ],

  Support: [
    { name: "Help Center", href: "/support/help-center" },
    { name: "Shipping", href: "/support/shipping" },
    { name: "Returns", href: "/support/returns" },
    { name: "Privacy Policy", href: "/support/privacy" },
    { name: "Terms & Conditions", href: "/support/terms" },
    { name: "Track Order", href: "/support/track-order" },
    { name: "FAQs", href: "/support/faqs" },
    { name: "Customer Care", href: "/support/customer-care" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="
        relative
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
          z-0
        "
      >
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            pointer-events-none
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
            backgroundSize: "80px 80px",
          }}
        />

        <div
          className="
            pointer-events-none
            absolute
            left-[-120px]
            top-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-fuchsia-500/20
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[-120px]
            right-[-120px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-cyan-500/20
            blur-[120px]
          "
        />
      </div>

      {/* TOP TAGS */}
      <section
        className="
          relative
          z-10
          border-b
          border-white/10
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-wrap
            items-center
            justify-center
            gap-4
            px-4
            py-5
          "
        >
          {[
            "Premium Fashion",
            "Luxury Streetwear",
            "Secure Checkout",
            "Express Delivery",
            "Exclusive Collections",
            "Worldwide Shipping",
            "Luxury Experiences",
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-5
                py-3
                text-sm
                text-zinc-300
                backdrop-blur-xl
              "
            >
              <div className="flex items-center gap-2">
                <Star size={14} />
                {item}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section
        className="
          relative
          z-10
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
            py-12
            md:grid-cols-2
            xl:grid-cols-4
          "
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                href={item.href}
                className="block"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group
                    relative
                    cursor-pointer
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-7
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-white/20
                    hover:bg-white/[0.06]
                  "
                >
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-white/[0.03]
                        via-white/[0.07]
                        to-white/[0.03]
                      "
                    />
                  </div>

                  <div
                    className="
                      relative
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white
                      text-black
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <h3
                    className="
                      relative
                      mt-6
                      text-2xl
                      font-black
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      relative
                      mt-3
                      text-sm
                      leading-7
                      text-zinc-400
                    "
                  >
                    {item.desc}
                  </p>

                  <div
                    className="
                      relative
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Explore
                    <ExternalLink size={16} />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MAIN */}
      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          py-16
        "
      >
        <div
          className="
            grid
            gap-16
            xl:grid-cols-[1.3fr_1fr]
          "
        >
          {/* LEFT */}
          <div>
            <Link
              href="/"
              className="inline-flex"
            >
              <motion.div
                whileHover={{
                  rotate: 4,
                  scale: 1.05,
                }}
                className="flex items-center gap-5"
              >
                <div
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
                    shadow-[0_0_40px_rgba(255,255,255,0.18)]
                  "
                >
                  <Image
                    src="/favicon.ico"
                    alt="logo"
                    width={54}
                    height={54}
                  />
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
                      tracking-[0.15em]
                      text-transparent
                    "
                  >
                    NextGrid Style
                  </h2>

                  <p
                    className="
                      mt-2
                      text-xs
                      uppercase
                      tracking-[0.4em]
                      text-zinc-500
                    "
                  >
                    Fashion Studio
                  </p>
                </div>
              </motion.div>
            </Link>

            <p
              className="
                mt-8
                max-w-3xl
                text-base
                leading-9
                text-zinc-400
                md:text-lg
              "
            >
              Experience futuristic luxury fashion with modern ecommerce,
              premium collections, exclusive limited editions, advanced
              shopping experience, and beautifully designed fashion journeys.
            </p>

            {/* CONTACT */}
            <div
              className="
                mt-10
                grid
                gap-5
                md:grid-cols-2
              "
            >
              {[
                {
                  icon: Mail,
                  text: "support@nextgrid.com",
                  href: "mailto:support@nextgrid.com",
                },

                {
                  icon: Phone,
                  text: "+91 1120 0000",
                  href: "tel:+919876543210",
                },

                {
                  icon: MapPin,
                  text: "Bangalore, India",
                  href: "/stores",
                },

                {
                  icon: Globe,
                  text: "www.nextgrid.com",
                  href: "/",
                },
              ].map((item, i) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={i}
                    href={item.href}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="
                        group
                        flex
                        cursor-pointer
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-5
                        py-4
                        transition-all
                        duration-300
                        hover:border-white/20
                        hover:bg-white/[0.05]
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          bg-white/[0.06]
                          transition-all
                          group-hover:bg-white
                          group-hover:text-black
                        "
                      >
                        <Icon size={18} />
                      </div>

                      <span
                        className="
                          text-sm
                          text-zinc-300
                        "
                      >
                        {item.text}
                      </span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              grid
              grid-cols-2
              gap-10
              lg:grid-cols-3
            "
          >
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3
                  className="
                    mb-6
                    text-2xl
                    font-black
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
                          gap-3
                          rounded-xl
                          px-3
                          py-2
                          text-zinc-400
                          transition-all
                          duration-300
                          hover:bg-white/[0.04]
                          hover:text-white
                        "
                      >
                        <ChevronRight
                          size={16}
                          className="
                            transition-transform
                            group-hover:translate-x-1
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
      </div>

      {/* NEWSLETTER + APP DOWNLOAD */}
      <section
        className="
          relative
          z-10
          border-t
          border-white/10
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-10
            px-4
            py-20
            lg:grid-cols-2
          "
        >
          {/* SUBSCRIBE */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-white/10
              bg-white/[0.04]
              p-8
              backdrop-blur-2xl
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
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  text-black
                "
              >
                <Send size={28} />
              </div>

              <div>
                <h3 className="text-3xl font-black">
                  Subscribe Newsletter
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  Get exclusive offers, premium collections, rewards,
                  and fashion updates directly in your inbox.
                </p>
              </div>
            </div>

            <div
              className="
                mt-8
                flex
                flex-col
                gap-4
                md:flex-row
              "
            >
              <div className="relative flex-1">
                <Mail
                  size={18}
                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-zinc-500
                  "
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    h-16
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    pl-14
                    pr-5
                    text-white
                    outline-none
                    placeholder:text-zinc-500
                  "
                />
              </div>

              <button
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
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
              >
                Subscribe
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* APP DOWNLOAD */}
          <motion.div
            whileHover={{ y: -4 }}
            className="
              relative
              overflow-hidden
              rounded-[34px]
              border
              border-white/10
              bg-white/[0.04]
              p-8
              backdrop-blur-2xl
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
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  text-black
                "
              >
                <Sparkles size={28} />
              </div>

              <div>
                <h3 className="text-3xl font-black">
                  Get The App
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  Download the NextGrid mobile app for premium shopping
                  experiences and exclusive rewards.
                </p>
              </div>
            </div>

            <div
              className="
                mt-10
                grid
                gap-5
                md:grid-cols-2
              "
            >
              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="
                    flex
                    items-center
                    gap-5
                    rounded-3xl
                    border
                    border-white/10
                    bg-black/40
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white
                      text-black
                    "
                  >
                    <Apple size={34} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Download on the
                    </p>

                    <h4 className="mt-1 text-2xl font-black">
                      App Store
                    </h4>
                  </div>
                </motion.div>
              </Link>

              <Link href="/">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="
                    flex
                    items-center
                    gap-5
                    rounded-3xl
                    border
                    border-white/10
                    bg-black/40
                    p-5
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-white
                      text-black
                    "
                  >
                    <Play size={30} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Available on
                    </p>

                    <h4 className="mt-1 text-2xl font-black">
                      Play Store
                    </h4>
                  </div>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COPYRIGHT */}
      <section
        className="
          relative
          z-10
          border-t
          border-white/10
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-5
            px-4
            py-8
            text-sm
            text-zinc-500
            md:flex-row
          "
        >
          <p>
            © 2026 NextGrid Fashion Studio. All rights reserved.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-6
            "
          >
            <Link href="/support/privacy">Privacy</Link>
            <Link href="/support/terms">Terms</Link>
            <Link href="/support/cookies">Cookies</Link>
            <Link href="/support/security">Security</Link>
          </div>
        </div>
      </section>
    </footer>
  );
}