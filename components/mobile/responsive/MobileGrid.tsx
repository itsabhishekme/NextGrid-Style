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
        w-full
        min-w-0

        grid
        grid-cols-1

        gap-4
        sm:gap-5
        md:gap-6

        overflow-x-hidden

        ${className}
      `}
    >
      {children}
    </div>
  );
}