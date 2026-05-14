"use client";

import React from "react";

type MobileLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MobileLayout({
  children,
  className = "",
}: MobileLayoutProps) {
  return (
    <div
      className={`
        mobile-layout

        relative
        flex

        min-h-dvh
        w-full
        max-w-full
        min-w-0

        flex-col

        overflow-x-hidden

        bg-transparent

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

          flex
          flex-1
          flex-col

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