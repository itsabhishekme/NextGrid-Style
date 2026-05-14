"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

interface PullToRefreshProps {
  children?: React.ReactNode;

  onRefresh?: () => Promise<void> | void;

  threshold?: number;
}

export default function PullToRefresh({
  children,

  onRefresh,

  threshold = 100,
}: PullToRefreshProps) {
  const containerRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const startY =
    useRef<number>(0);

  const currentY =
    useRef<number>(0);

  const pulling =
    useRef<boolean>(false);

  const [pullDistance, setPullDistance] =
    useState(0);

  const [isRefreshing, setIsRefreshing] =
    useState(false);

  const [isPulling, setIsPulling] =
    useState(false);

  useEffect(() => {
    const container =
      containerRef.current;

    if (!container) return;

    /* =========================================
       TOUCH START
    ========================================= */

    const handleTouchStart = (
      event: TouchEvent
    ) => {
      if (
        window.scrollY <= 0 &&
        !isRefreshing
      ) {
        startY.current =
          event.touches[0].clientY;

        pulling.current = true;
      }
    };

    /* =========================================
       TOUCH MOVE
    ========================================= */

    const handleTouchMove = (
      event: TouchEvent
    ) => {
      if (
        !pulling.current ||
        isRefreshing
      ) {
        return;
      }

      currentY.current =
        event.touches[0].clientY;

      const distance =
        currentY.current -
        startY.current;

      /* ONLY PULL DOWN */
      if (
        distance > 0 &&
        window.scrollY <= 0
      ) {
        setIsPulling(true);

        /* SMOOTH DRAG */
        const reducedDistance =
          Math.min(
            distance * 0.5,
            threshold * 1.5
          );

        setPullDistance(
          reducedDistance
        );

        /* PREVENT BROWSER REFRESH */
        event.preventDefault();

        container.style.transform =
          `translateY(${reducedDistance}px)`;

        container.style.transition =
          "none";
      }
    };

    /* =========================================
       TOUCH END
    ========================================= */

    const handleTouchEnd =
      async () => {
        if (
          !pulling.current
        ) {
          return;
        }

        pulling.current = false;

        container.style.transition =
          "transform 0.35s ease";

        /* =====================================
           TRIGGER REFRESH
        ===================================== */

        if (
          pullDistance >=
            threshold &&
          !isRefreshing
        ) {
          setIsRefreshing(true);

          container.style.transform =
            `translateY(70px)`;

          try {
            if (onRefresh) {
              await onRefresh();
            } else {
              /* DEFAULT REFRESH */
              window.location.reload();
            }
          } catch (error) {
            console.error(
              "Refresh error:",
              error
            );
          }

          setTimeout(() => {
            container.style.transform =
              "translateY(0px)";

            setIsRefreshing(
              false
            );

            setIsPulling(
              false
            );

            setPullDistance(0);
          }, 800);
        }

        /* =====================================
           RESET
        ===================================== */

        else {
          container.style.transform =
            "translateY(0px)";

          setTimeout(() => {
            setIsPulling(
              false
            );

            setPullDistance(0);
          }, 300);
        }
      };

    /* =========================================
       ADD EVENTS
    ========================================= */

    container.addEventListener(
      "touchstart",
      handleTouchStart,
      {
        passive: false,
      }
    );

    container.addEventListener(
      "touchmove",
      handleTouchMove,
      {
        passive: false,
      }
    );

    container.addEventListener(
      "touchend",
      handleTouchEnd
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
        "touchmove",
        handleTouchMove
      );

      container.removeEventListener(
        "touchend",
        handleTouchEnd
      );
    };
  }, [
    isRefreshing,
    pullDistance,
    threshold,
    onRefresh,
  ]);

  return (
    <div
      className="
        relative
        w-full
        overflow-visible
      "
    >
      {/* =====================================
          REFRESH INDICATOR
      ===================================== */}

      <div
        className={`
          fixed
          left-1/2
          top-0
          z-[999]

          flex
          h-[70px]
          w-[70px]

          -translate-x-1/2

          items-center
          justify-center

          rounded-full

          border
          border-white/10

          bg-black/80
          backdrop-blur-xl

          transition-all
          duration-300

          ${
            isPulling ||
            isRefreshing
              ? "opacity-100 translate-y-5"
              : "opacity-0 -translate-y-20"
          }
        `}
      >
        {/* SPINNER */}
        <div
          className={`
            h-7
            w-7

            rounded-full

            border-2
            border-white/20
            border-t-white

            ${
              isRefreshing
                ? "animate-spin"
                : ""
            }
          `}
        />
      </div>

      {/* =====================================
          CONTENT
      ===================================== */}

      <div
        ref={containerRef}
        className="
          relative
          min-h-screen
          w-full

          overflow-visible

          will-change-transform
        "
        style={{
          touchAction:
            "pan-y",

          WebkitOverflowScrolling:
            "touch",
        }}
      >
        {children}
      </div>
    </div>
  );
}