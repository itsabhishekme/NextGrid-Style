"use client";

import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  Globe,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const privacySections = [
  {
    icon: Database,
    title: "Information Collection",
    desc:
      "We collect necessary information to provide premium fashion experiences, secure shopping and personalized recommendations.",
  },

  {
    icon: Lock,
    title: "Data Protection",
    desc:
      "Your personal information is protected using advanced encryption and modern security technologies.",
  },

  {
    icon: Eye,
    title: "Transparency",
    desc:
      "We maintain complete transparency regarding how your data is used and managed across our platform.",
  },

  {
    icon: Globe,
    title: "Global Compliance",
    desc:
      "NextGrid follows international privacy standards and modern digital compliance practices.",
  },
];

export default function PrivacyPage() {
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
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[180px]" />

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
            <ShieldCheck size={16} />

            <span
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-zinc-400
              "
            >
              Privacy & Security
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
            PRIVACY
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
              POLICY
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
            At NextGrid Style, protecting your privacy
            and securing your personal information is
            our highest priority. This Privacy Policy
            explains how we collect, use and safeguard
            your information across our premium fashion
            platform.
          </motion.p>
        </div>
      </section>

      {/* POLICY CARDS */}
      <section className="relative mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {privacySections.map((item, index) => {
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

      {/* MAIN CONTENT */}
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
          {/* SECTION */}
          <div className="space-y-14">
            {/* ITEM */}
            <div>
              <h2 className="text-4xl font-black">
                Information We Collect
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                We may collect your name, email
                address, shipping information,
                payment details and account activity
                to improve your shopping experience
                and deliver premium fashion services.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-4xl font-black">
                How We Use Information
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                Your information helps us personalize
                recommendations, process orders,
                improve security and provide customer
                support across the NextGrid ecosystem.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-4xl font-black">
                Data Security
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                We implement advanced security
                measures including encryption,
                secure payment gateways and access
                protection to ensure your data remains
                safe and protected.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-4xl font-black">
                Cookies & Analytics
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                Cookies and analytics technologies are
                used to improve website performance,
                optimize user experiences and analyze
                fashion trends across our platform.
              </p>
            </div>

            {/* ITEM */}
            <div>
              <h2 className="text-4xl font-black">
                Policy Updates
              </h2>

              <p
                className="
                  mt-6
                  leading-9
                  text-zinc-400
                "
              >
                NextGrid Style may update this Privacy
                Policy periodically to reflect changes
                in technology, legal requirements and
                premium platform improvements.
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
              Learn More

              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}