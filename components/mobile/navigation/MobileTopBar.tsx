"use client";

import Link from "next/link";

export default function MobileTopBar() {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-[300]

        flex
        h-[68px]
        w-full
        items-center
        justify-center

        border-b
        border-white/10

        bg-black/70
        backdrop-blur-2xl

        px-4

        md:hidden
      "
    >
      <Link
        href="/"
        className="
          flex
          flex-col
          items-center
          justify-center

          leading-none
          text-center
        "
      >
        <span
          className="
            text-[16px]
            font-black

            tracking-[0.35em]

            text-white
          "
        >
          NEXTGRID
        </span>

        <span
          className="
            mt-[3px]

            text-[9px]
            font-medium

            tracking-[0.45em]

            text-white/45
          "
        >
          STYLE STUDIO
        </span>
      </Link>
    </header>
  );
}