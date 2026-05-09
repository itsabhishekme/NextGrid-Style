"use client";

import {
  FileText,
  ShieldCheck,
  Lock,
  Globe,
  ShoppingBag,
  CreditCard,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const termsSections = [
  {
    icon: ShoppingBag,
    title: "Use Of Platform",
    desc:
      "By using NextGrid Style, you agree to follow our platform policies, shopping guidelines and premium fashion marketplace standards.",
  },

  {
    icon: CreditCard,
    title: "Payments & Orders",
    desc:
      "All payments, transactions and order processing are securely managed through trusted and encrypted payment systems.",
  },

  {
    icon: ShieldCheck,
    title: "User Protection",
    desc:
      "We are committed to protecting user accounts, transactions and shopping experiences with modern security standards.",
  },

  {
    icon: Globe,
    title: "Global Access",
    desc:
      "NextGrid provides international fashion experiences while following digital compliance and platform regulations.",
  },
];

export default function TermsPage() {
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

        <div className="absolute bottom-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/5 blur-[180px]" />
      </div>

      {/* HERO */}
      <section
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          pb-24
          pt-[160px]
          lg:px-10
        "
      >
        <div className="max-w-4xl">
          {/* BADGE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
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
            <FileText size={16} />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-zinc-400
              "
            >
              Terms & Conditions
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              mt-10
              text-6xl
              font-black
              leading-[0.95]
              md:text-8xl
            "
          >
            TERMS
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
              OF USE
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              mt-10
              max-w-3xl
              text-lg
              leading-9
              text-zinc-400
            "
          >
            These Terms & Conditions govern your
            access and use of the NextGrid Style
            fashion platform, services, applications
            and premium shopping experiences.
          </motion.p>
        </div>
      </section>

      {/* CARDS */}
      <section className="relative mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {termsSections.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  rounded-[40px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-2xl
                "
              >
                {/* ICON */}
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

                {/* TITLE */}
                <h2 className="mt-8 text-3xl font-black">
                  {item.title}
                </h2>

                {/* DESC */}
                <p
                  className="
                    mt-5
                    leading-9
                    text-zinc-400
                  "
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CONTENT */}
      <section
        className="
          relative
          mx-auto
          max-w-5xl
          px-6
          py-28
        "
      >
        <div
          className="
            rounded-[50px]
            border
            border-white/10
            bg-white/[0.03]
            p-8
            backdrop-blur-3xl
            md:p-14
          "
        >
          <div className="space-y-14">
            {/* ITEM */}
            <div>
              <h2 className="text-4xl font-black">
                Acceptance Of Terms
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                By accessing or using NextGrid Style,
                you agree to comply with these Terms
                and all applicable platform policies.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-4xl font-black">
                User Responsibilities
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                Users are responsible for maintaining
                accurate account information and using
                the platform respectfully and legally.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-4xl font-black">
                Orders & Transactions
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                Orders placed through NextGrid are
                subject to availability, payment
                verification and delivery processing.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-4xl font-black">
                Intellectual Property
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                All content, branding, designs and
                visuals within NextGrid Style are
                protected intellectual property assets.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-4xl font-black">
                Account Security
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                Users must protect their login
                credentials and notify us immediately
                in case of unauthorized account access.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="flex items-center gap-4 text-4xl font-black">
                <AlertTriangle size={34} />

                Limitation Of Liability
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                NextGrid Style is not liable for
                indirect damages, interruptions or
                losses arising from misuse of the
                platform or third-party services.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="flex items-center gap-4 text-4xl font-black">
                <Lock size={34} />

                Policy Updates
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                We may update these Terms &
                Conditions periodically to reflect
                platform improvements, legal changes
                and security enhancements.
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-16">
            <button
              className="
                flex
                items-center
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
              Continue Shopping

              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}