"use client";

import React, {
  useEffect,
  useState,
} from "react";

type MobileViewportProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MobileViewport({
  children,
  className = "",
}: MobileViewportProps) {
  const [
    viewportHeight,
    setViewportHeight,
  ] = useState(0);

  useEffect(() => {

    const updateViewport =
      () => {

        const vh =
          window.innerHeight *
          0.01;

        document.documentElement.style.setProperty(
          "--vh",
          `${vh}px`
        );

        setViewportHeight(
          window.innerHeight
        );
      };

    updateViewport();

    window.addEventListener(
      "resize",
      updateViewport
    );

    window.addEventListener(
      "orientationchange",
      updateViewport
    );

    return () => {

      window.removeEventListener(
        "resize",
        updateViewport
      );

      window.removeEventListener(
        "orientationchange",
        updateViewport
      );
    };
  }, []);

  return (
    <div
      className={`
        mobile-viewport

        relative

        w-full
        max-w-full
        min-w-0

        min-h-dvh

        overflow-x-hidden

        touch-pan-y

        ${className}
      `}
      style={{
        minHeight:
          "calc(var(--vh, 1vh) * 100)",

        WebkitOverflowScrolling:
          "touch",

        overscrollBehaviorX:
          "none",

        touchAction: "pan-y",
      }}
      data-viewport-height={
        viewportHeight
      }
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