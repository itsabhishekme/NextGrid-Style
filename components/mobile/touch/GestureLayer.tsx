"use client";

import React, {
  useEffect,
  useRef,
} from "react";

type GestureLayerProps = {
  children?: React.ReactNode;
};

export default function GestureLayer({
  children,
}: GestureLayerProps) {
  const layerRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;

    if (!layer) return;

    let startY = 0;
    let startX = 0;

    const handleTouchStart = (
      e: TouchEvent
    ) => {
      startY =
        e.touches[0].clientY;

      startX =
        e.touches[0].clientX;
    };

    const handleTouchMove = (
      e: TouchEvent
    ) => {
      const moveY =
        e.touches[0].clientY;

      const moveX =
        e.touches[0].clientX;

      const deltaY =
        Math.abs(moveY - startY);

      const deltaX =
        Math.abs(moveX - startX);

      if (deltaX > deltaY) {
        e.stopPropagation();
      }
    };

    layer.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    layer.addEventListener(
      "touchmove",
      handleTouchMove,
      {
        passive: true,
      }
    );

    return () => {
      layer.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      layer.removeEventListener(
        "touchmove",
        handleTouchMove
      );
    };
  }, []);

  return (
    <div
      ref={layerRef}
      className="
        relative
        w-full
        min-h-screen
        overflow-x-hidden

        touch-pan-y

        md:touch-auto
      "
      style={{
        WebkitTapHighlightColor:
          "transparent",

        WebkitOverflowScrolling:
          "touch",

        touchAction:
          "pan-y pinch-zoom",
      }}
    >
      {children}
    </div>
  );
}