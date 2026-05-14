"use client";

import React from "react";

type MotionWrapperProps = {
  children: React.ReactNode;
};

export default function MotionWrapper({
  children,
}: MotionWrapperProps) {
  return (
    <div
      className="
        relative
        w-full
        overflow-x-hidden
      "
    >
      {children}
    </div>
  );
}