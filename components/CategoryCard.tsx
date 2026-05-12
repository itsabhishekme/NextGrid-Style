"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  image: string;
  href: string;
}

export default function CategoryCard({
  title,
  image,
  href,
}: Props) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{
          y: -14,
        }}
        transition={{
          duration: 0.5,
        }}
        className="
          group
          relative
          overflow-hidden
          rounded-[45px]
          border
          border-white/10
          bg-black
          cursor-pointer
        "
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
          <div className="absolute inset-0 bg-white/[0.03]" />

          <div className="absolute -left-20 top-0 h-[300px] w-[300px] rounded-full bg-white/10 blur-[120px]" />

          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-zinc-500/10 blur-[120px]" />
        </div>

        {/* BIG IMAGE */}
        <div className="relative h-[750px] overflow-hidden">
          <img
            src={
              image ||
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2600&auto=format&fit=crop"
            }
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition
              duration-[1200ms]
              group-hover:scale-110
            "
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* EXTRA SHADOW */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-10">
          <div className="flex items-end justify-between gap-6">
            {/* LEFT */}
            <div>
              {/* LINE */}
              <div className="mb-6 h-[2px] w-24 bg-white" />

              {/* TITLE */}
              <h3
                className="
                  text-5xl
                  font-black
                  uppercase
                  tracking-[0.25em]
                  text-white
                  md:text-6xl
                "
              >
                {title}
              </h3>

              {/* MINI DOTS */}
              <div className="mt-8 flex gap-3">
                <div className="h-3 w-3 rounded-full bg-white" />

                <div className="h-3 w-3 rounded-full bg-zinc-500" />

                <div className="h-3 w-3 rounded-full bg-zinc-700" />
              </div>
            </div>

            {/* BUTTON */}
            <motion.div
              whileHover={{
                rotate: 45,
                scale: 1.1,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                shadow-[0_20px_60px_rgba(255,255,255,0.25)]
              "
            >
              <ArrowRight size={34} />
            </motion.div>
          </div>
        </div>

        {/* BOTTOM BLUR */}
        <div className="absolute bottom-0 left-0 h-[250px] w-full bg-gradient-to-t from-black to-transparent" />

        {/* BORDER LIGHT */}
        <div className="absolute inset-0 rounded-[45px] border border-white/5" />
      </motion.div>
    </Link>
  );
}