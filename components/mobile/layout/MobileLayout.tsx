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
        relative
        flex
        min-h-screen
        w-full
        flex-col

        overflow-x-hidden

        bg-transparent

        mobile-layout

        ${className}
      `}
    >
      {children}
    </div>
  );
}