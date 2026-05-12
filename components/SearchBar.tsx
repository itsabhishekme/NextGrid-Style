"use client";

import { useState } from "react";

import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { motion } from "framer-motion";

const trendingSearches = [
  "Men Fashion",
  "Women Fashion",
  "Kids Collection",
  "Streetwear",
  "Luxury",
  "Oversized",
];

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full">
      {/* SEARCH CONTAINER */}
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
          relative
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
        "
      >
        {/* GLOW */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-white/5
            via-transparent
            to-white/5
          "
        />

        {/* SEARCH BAR */}
        <div
          className="
            relative
            flex
            items-center
            gap-4
            px-6
            py-5
          "
        >
          {/* SEARCH ICON */}
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-white
              text-black
            "
          >
            <Search size={20} />
          </div>

          {/* INPUT */}
          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search fashion..."
            className="
              flex-1
              bg-transparent
              text-lg
              text-white
              outline-none
              placeholder:text-zinc-400
            "
          />

          {/* CLEAR BUTTON */}
          {search && (
            <button
              onClick={() => setSearch("")}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition
                hover:bg-white/20
              "
            >
              <X size={18} />
            </button>
          )}

          {/* FILTER */}
          <button
            className="
              hidden
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/10
              px-6
              py-3
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              transition
              hover:bg-white
              hover:text-black
              md:flex
            "
          >
            <SlidersHorizontal size={18} />

            Filter
          </button>
        </div>
      </motion.div>

      {/* TRENDING SEARCHES */}
      <div className="mt-6 flex flex-wrap gap-4">
        {trendingSearches.map((item) => (
          <button
            key={item}
            onClick={() => setSearch(item)}
            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              text-sm
              font-medium
              text-zinc-300
              transition-all
              hover:bg-white
              hover:text-black
            "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}