"use client";

import React from "react";

type ResponsiveLayoutProps = {
  children: React.ReactNode;
};

export default function ResponsiveLayout({
  children,
}: ResponsiveLayoutProps) {
  return (
    <div
      className="
        relative
        w-full
        min-h-screen
        overflow-x-hidden
      "
    >
      {children}
    </div>
  );
}