"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

interface TouchPoint {
  id: number;

  x: number;

  y: number;
}

interface TouchEffectsProps {
  children?: React.ReactNode;

  enabled?: boolean;
}

export default function TouchEffects({
  children,

  enabled = true,
}: TouchEffectsProps) {
  const containerRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const [touches, setTouches] =
    useState<TouchPoint[]>([]);

  useEffect(() => {
    if (!enabled) return;

    const container =
      containerRef.current;

    if (!container) return;

    /* =========================================
       CREATE TOUCH EFFECT
    ========================================= */

    const createTouchEffect = (
      x: number,
      y: number
    ) => {
      const id =
        Date.now() +
        Math.random();

      const newTouch: TouchPoint =
        {
          id,

          x,

          y,
        };

      setTouches((prev) => [
        ...prev,
        newTouch,
      ]);

      /* REMOVE AFTER ANIMATION */
      setTimeout(() => {
        setTouches((prev) =>
          prev.filter(
            (touch) =>
              touch.id !== id
          )
        );
      }, 700);
    };

    /* =========================================
       TOUCH START
    ========================================= */

    const handleTouchStart = (
      event: TouchEvent
    ) => {
      Array.from(
        event.changedTouches
      ).forEach((touch) => {
        createTouchEffect(
          touch.clientX,
          touch.clientY
        );
      });
    };

    /* =========================================
       MOUSE CLICK
    ========================================= */

    const handleMouseDown = (
      event: MouseEvent
    ) => {
      createTouchEffect(
        event.clientX,
        event.clientY
      );
    };

    /* =========================================
       ADD EVENTS
    ========================================= */

    container.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    container.addEventListener(
      "mousedown",
      handleMouseDown
    );

    /* =========================================
       CLEANUP
    ========================================= */

    return () => {
      container.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      container.removeEventListener(
        "mousedown",
        handleMouseDown
      );
    };
  }, [enabled]);

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        min-h-screen

        overflow-visible
      "
      style={{
        touchAction:
          "pan-y pinch-zoom",

        WebkitOverflowScrolling:
          "touch",
      }}
    >
      {/* =====================================
          TOUCH EFFECTS
      ===================================== */}

      {enabled &&
        touches.map((touch) => (
          <div
            key={touch.id}
            className="
              pointer-events-none
              fixed
              z-[9999]
            "
            style={{
              left: touch.x,
              top: touch.y,

              transform:
                "translate(-50%, -50%)",
            }}
          >
            {/* OUTER RIPPLE */}
            <div
              className="
                absolute
                left-1/2
                top-1/2

                h-20
                w-20

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                border
                border-white/20

                animate-ping
              "
            />

            {/* INNER GLOW */}
            <div
              className="
                absolute
                left-1/2
                top-1/2

                h-10
                w-10

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-white/20

                blur-xl

                animate-pulse
              "
            />

            {/* CENTER DOT */}
            <div
              className="
                absolute
                left-1/2
                top-1/2

                h-3
                w-3

                -translate-x-1/2
                -translate-y-1/2

                rounded-full

                bg-white
              "
            />
          </div>
        ))}

      {/* =====================================
          CONTENT
      ===================================== */}

      <div
        className="
          relative
          z-[1]

          w-full
          min-h-screen
        "
      >
        {children}
      </div>
    </div>
  );
}