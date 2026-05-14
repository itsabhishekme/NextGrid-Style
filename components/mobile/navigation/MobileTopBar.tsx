"use client";

import Link from "next/link";

import {
  Menu,
  Search,
  ShoppingBag,
} from "lucide-react";

type MobileTopBarProps = {
  onMenuClick?: () => void;
};

export default function MobileTopBar({
  onMenuClick,
}: MobileTopBarProps) {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-[300]

        flex
        h-[64px]
        w-full
        items-center
        justify-between

        border-b
        border-white/10

        bg-black/70
        backdrop-blur-2xl

        px-4

        md:hidden
      "
    >
      {/* LEFT */}
      <div
        className="
          flex
          items-center
          gap-3
        "
      >
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open Menu"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-white/5

            transition-all
            duration-300

            active:scale-95
          "
        >
          <Menu
            size={20}
            className="text-white"
          />
        </button>

        <Link
          href="/"
          className="
            text-sm
            font-semibold
            tracking-[0.2em]
            text-white
          "
        >
          NEXTGRID
        </Link>
      </div>

      {/* RIGHT */}
      <div
        className="
          flex
          items-center
          gap-2
        "
      >
        <button
          type="button"
          aria-label="Search"
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-white/5

            transition-all
            duration-300

            active:scale-95
          "
        >
          <Search
            size={18}
            className="text-white"
          />
        </button>

        <button
          type="button"
          aria-label="Cart"
          className="
            relative

            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            border
            border-white/10

            bg-white/5

            transition-all
            duration-300

            active:scale-95
          "
        >
          <ShoppingBag
            size={18}
            className="text-white"
          />

          <span
            className="
              absolute
              right-2
              top-2

              h-2
              w-2

              rounded-full
              bg-white
            "
          />
        </button>
      </div>
    </header>
  );
}