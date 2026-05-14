"use client";

import React from "react";

type MobileContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MobileContainer({
  children,
  className = "",
}: MobileContainerProps) {
  return (
    <div
      className={`
        mobile-container

        relative

        w-full
        max-w-full
        min-w-0

        mx-auto

        px-4
        sm:px-5
        md:px-6
        lg:px-8

        overflow-x-hidden

        touch-pan-y

        ${className}
      `}
      style={{
        WebkitOverflowScrolling:
          "touch",

        overscrollBehaviorX:
          "none",
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