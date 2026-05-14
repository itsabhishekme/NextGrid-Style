"use client";

import React from "react";

type TouchWrapperProps = {
  children: React.ReactNode;
};

export default function TouchWrapper({
  children,
}: TouchWrapperProps) {
  return (
    <div
      className="
        relative
        w-full
        min-h-screen
        overflow-x-hidden

        touch-pan-y
        select-none

        md:touch-auto
      "
      style={{
        WebkitTapHighlightColor: "transparent",
        WebkitTouchCallout: "none",
        WebkitOverflowScrolling: "touch",
        touchAction: "manipulation",
      }}
    >
      {children}
    </div>
  );
}