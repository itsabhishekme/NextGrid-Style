"use client";

import React from "react";

type SafeAreaProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function SafeArea({
  children,
  className = "",
}: SafeAreaProps) {
  return (
    <div
      className={`
        safe-top
        safe-bottom
        safe-left
        safe-right

        relative
        w-full
        min-h-screen

        overflow-x-hidden

        ${className}
      `}
      style={{
        paddingTop:
          "env(safe-area-inset-top)",

        paddingBottom:
          "env(safe-area-inset-bottom)",

        paddingLeft:
          "env(safe-area-inset-left)",

        paddingRight:
          "env(safe-area-inset-right)",
      }}
    >
      {children}
    </div>
  );
}