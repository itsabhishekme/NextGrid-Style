"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

interface SwipeAreaProps {
  children?: React.ReactNode;

  onSwipeLeft?: () => void;

  onSwipeRight?: () => void;

  onSwipeUp?: () => void;

  onSwipeDown?: () => void;

  threshold?: number;

  className?: string;
}

export default function SwipeArea({
  children,

  onSwipeLeft,

  onSwipeRight,

  onSwipeUp,

  onSwipeDown,

  threshold = 70,

  className = "",
}: SwipeAreaProps) {
  const areaRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const touchStartX =
    useRef<number>(0);

  const touchStartY =
    useRef<number>(0);

  const touchEndX =
    useRef<number>(0);

  const touchEndY =
    useRef<number>(0);

  const [isSwiping, setIsSwiping] =
    useState(false);

  const [swipeDirection, setSwipeDirection] =
    useState<
      | "left"
      | "right"
      | "up"
      | "down"
      | null
    >(null);

  useEffect(() => {
    const area =
      areaRef.current;

    if (!area) return;

    /* =========================================
       TOUCH START
    ========================================= */

    const handleTouchStart = (
      event: TouchEvent
    ) => {
      touchStartX.current =
        event.touches[0].clientX;

      touchStartY.current =
        event.touches[0].clientY;

      setIsSwiping(true);
    };

    /* =========================================
       TOUCH MOVE
    ========================================= */

    const handleTouchMove = (
      event: TouchEvent
    ) => {
      touchEndX.current =
        event.touches[0].clientX;

      touchEndY.current =
        event.touches[0].clientY;

      const deltaX =
        touchEndX.current -
        touchStartX.current;

      const deltaY =
        touchEndY.current -
        touchStartY.current;

      /* DETECT DIRECTION */
      if (
        Math.abs(deltaX) >
        Math.abs(deltaY)
      ) {
        if (deltaX > 0) {
          setSwipeDirection(
            "right"
          );
        } else {
          setSwipeDirection(
            "left"
          );
        }
      } else {
        if (deltaY > 0) {
          setSwipeDirection(
            "down"
          );
        } else {
          setSwipeDirection(
            "up"
          );
        }
      }
    };

    /* =========================================
       TOUCH END
    ========================================= */

    const handleTouchEnd =
      () => {
        const deltaX =
          touchEndX.current -
          touchStartX.current;

        const deltaY =
          touchEndY.current -
          touchStartY.current;

        const absX =
          Math.abs(deltaX);

        const absY =
          Math.abs(deltaY);

        /* =====================================
           HORIZONTAL SWIPE
        ===================================== */

        if (
          absX > absY &&
          absX > threshold
        ) {
          if (
            deltaX > 0
          ) {
            onSwipeRight?.();
          } else {
            onSwipeLeft?.();
          }
        }

        /* =====================================
           VERTICAL SWIPE
        ===================================== */

        if (
          absY > absX &&
          absY > threshold
        ) {
          if (
            deltaY > 0
          ) {
            onSwipeDown?.();
          } else {
            onSwipeUp?.();
          }
        }

        /* RESET */
        setTimeout(() => {
          setIsSwiping(false);

          setSwipeDirection(
            null
          );
        }, 120);
      };

    /* =========================================
       ADD EVENTS
    ========================================= */

    area.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: true,
      }
    );

    area.addEventListener(
      "touchmove",
      handleTouchMove,
      {
        passive: true,
      }
    );

    area.addEventListener(
      "touchend",
      handleTouchEnd,
      {
        passive: true,
      }
    );

    /* =========================================
       CLEANUP
    ========================================= */

    return () => {
      area.removeEventListener(
        "touchstart",
        handleTouchStart
      );

      area.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      area.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    threshold,
  ]);

  return (
    <div
      ref={areaRef}
      className={`
        relative
        w-full

        overflow-visible

        touch-pan-y

        ${className}
      `}
      style={{
        WebkitOverflowScrolling:
          "touch",

        touchAction:
          "pan-y pinch-zoom",
      }}
    >
      {/* =====================================
          SWIPE INDICATOR
      ===================================== */}

      {isSwiping && (
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-[999]
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-6

              -translate-x-1/2

              rounded-full

              border
              border-white/10

              bg-black/70
              px-4
              py-2

              text-xs
              font-medium
              uppercase
              tracking-[0.2em]
              text-white/80

              backdrop-blur-xl
            "
          >
            {swipeDirection}
          </div>
        </div>
      )}

      {/* =====================================
          CONTENT
      ===================================== */}

      <div
        className="
          relative
          w-full
          min-h-screen
        "
      >
        {children}
      </div>
    </div>
  );
}