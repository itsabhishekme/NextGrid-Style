"use client";

import React from "react";

type MobileGridProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MobileGrid({
  children,
  className = "",
}: MobileGridProps) {
  return (
    <div
      className={`
        mobile-grid

        relative

        grid
        grid-cols-1

        w-full
        max-w-full
        min-w-0

        gap-4
        sm:gap-5
        md:gap-6

        overflow-x-hidden

        touch-pan-y

        ${className}
      `}
      style={{
        WebkitOverflowScrolling:
          "touch",

        overscrollBehaviorX:
          "none",

        touchAction: "pan-y",
      }}
    >
      <div
        className="
          relative

          w-full
          max-w-full
          min-w-0

          overflow-x-hidden
        "
      >
        {children}
      </div>
    </div>
  );
}