"use client";

import React from "react";

type MobileSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MobileSection({
  children,
  className = "",
}: MobileSectionProps) {
  return (
    <section
      className={`
        relative
        w-full
        min-w-0

        overflow-hidden

        py-4
        sm:py-5
        md:py-6

        mobile-section

        ${className}
      `}
    >
      {children}
    </section>
  );
}