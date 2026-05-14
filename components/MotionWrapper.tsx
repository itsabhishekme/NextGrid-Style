"use client";

import React, {
  useEffect,
  useState,
} from "react";

type MotionWrapperProps = {
  children: React.ReactNode;
};

export default function MotionWrapper({
  children,
}: MotionWrapperProps) {
  const [
    isTouchDevice,
    setIsTouchDevice,
  ] = useState(false);

  useEffect(() => {
    /* =========================================
       DETECT TOUCH DEVICE
    ========================================= */

    const touchDevice =
      typeof window !==
        "undefined" &&
      (
        "ontouchstart" in
          window ||
        navigator.maxTouchPoints >
          0
      );

    setIsTouchDevice(
      touchDevice
    );

    /* =========================================
       ROOT HTML FIX
    ========================================= */

    document.documentElement.style.width =
      "100%";

    document.documentElement.style.minHeight =
      "100%";

    document.documentElement.style.overflowX =
      "hidden";

    document.documentElement.style.overflowY =
      "auto";

    document.documentElement.style.scrollBehavior =
      "smooth";

    document.documentElement.style.setProperty(
      "-webkit-overflow-scrolling",
      "touch"
    );

    /* =========================================
       BODY FIX
    ========================================= */

    document.body.style.width =
      "100%";

    document.body.style.minHeight =
      "100vh";

    document.body.style.height =
      "auto";

    document.body.style.position =
      "relative";

    document.body.style.overflowX =
      "hidden";

    document.body.style.overflowY =
      "auto";

    document.body.style.background =
      "#000000";

    document.body.style.setProperty(
      "-webkit-overflow-scrolling",
      "touch"
    );

    /* =========================================
       TOUCH DEVICE FIX
    ========================================= */

    if (touchDevice) {
      document.body.classList.add(
        "touch-device"
      );

      document.documentElement.classList.add(
        "touch-device"
      );

      document.body.style.touchAction =
        "pan-y";

      document.body.style.overscrollBehaviorY =
        "contain";
    }

    /* =========================================
       DESKTOP FIX
    ========================================= */

    else {
      document.body.classList.add(
        "desktop-device"
      );

      document.documentElement.classList.add(
        "desktop-device"
      );

      document.body.style.touchAction =
        "auto";

      document.body.style.overscrollBehavior =
        "auto";
    }

    /* =========================================
       VIEWPORT HEIGHT FIX
    ========================================= */

    const updateViewport =
      () => {
        const vh =
          window.innerHeight *
          0.01;

        document.documentElement.style.setProperty(
          "--vh",
          `${vh}px`
        );

        document.documentElement.style.setProperty(
          "--window-height",
          `${window.innerHeight}px`
        );

        document.documentElement.style.setProperty(
          "--window-width",
          `${window.innerWidth}px`
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

    /* =========================================
       REMOVE SCROLL BLOCKERS
    ========================================= */

    const removeScrollLocks =
      () => {
        const elements =
          document.querySelectorAll(
            "*"
          );

        elements.forEach(
          (element) => {
            const htmlElement =
              element as HTMLElement;

            const computed =
              window.getComputedStyle(
                htmlElement
              );

            /* FIX OVERFLOW */
            if (
              computed.overflow ===
                "hidden" &&
              !htmlElement.classList.contains(
                "modal"
              ) &&
              !htmlElement.classList.contains(
                "drawer"
              )
            ) {
              htmlElement.style.overflowX =
                "hidden";

              htmlElement.style.overflowY =
                "visible";
            }

            /* FIX HEIGHT */
            if (
              computed.height ===
              "100vh"
            ) {
              htmlElement.style.height =
                "auto";

              htmlElement.style.minHeight =
                "100vh";
            }

            /* FIX TOUCH */
            if (
              computed.touchAction ===
              "none"
            ) {
              htmlElement.style.touchAction =
                "auto";
            }

            /* FIX H-SCREEN */
            if (
              htmlElement.classList.contains(
                "h-screen"
              )
            ) {
              htmlElement.style.height =
                "auto";

              htmlElement.style.minHeight =
                "100vh";
            }

            /* FIX OVERFLOW-HIDDEN */
            if (
              htmlElement.classList.contains(
                "overflow-hidden"
              )
            ) {
              htmlElement.style.overflowX =
                "hidden";

              htmlElement.style.overflowY =
                "visible";
            }
          }
        );
      };

    removeScrollLocks();

    const timeout =
      setTimeout(() => {
        removeScrollLocks();
      }, 1000);

    /* =========================================
       CLEANUP
    ========================================= */

    return () => {
      window.removeEventListener(
        "resize",
        updateViewport
      );

      window.removeEventListener(
        "orientationchange",
        updateViewport
      );

      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      id="motion-wrapper"
      className="
        relative
        w-full

        min-h-screen

        overflow-x-hidden
        overflow-y-visible

        bg-transparent
      "
      style={{
        minHeight:
          "calc(var(--vh, 1vh) * 100)",

        WebkitOverflowScrolling:
          "touch" as "touch",

        touchAction:
          isTouchDevice
            ? "pan-y"
            : "auto",
      }}
    >
      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <div
        className="
          relative
          z-[1]

          w-full

          min-h-screen

          overflow-visible
        "
      >
        {children}
      </div>

      {/* =====================================
          PREMIUM BACKGROUND
      ===================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          -z-10

          overflow-hidden
        "
      >
        {/* GRID */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,0.06) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,0.06) 1px,
                transparent 1px
              )
            `,

            backgroundSize:
              "70px 70px",
          }}
        />

        {/* TOP PINK LIGHT */}
        <div
          className="
            absolute
            left-[-140px]
            top-[-140px]

            h-[360px]
            w-[360px]

            rounded-full

            bg-pink-500/10

            blur-[120px]

            md:h-[600px]
            md:w-[600px]
          "
        />

        {/* RIGHT CYAN LIGHT */}
        <div
          className="
            absolute
            right-[-140px]
            top-[15%]

            h-[320px]
            w-[320px]

            rounded-full

            bg-cyan-500/10

            blur-[120px]

            md:h-[560px]
            md:w-[560px]
          "
        />

        {/* CENTER WHITE LIGHT */}
        <div
          className="
            absolute
            left-1/2
            top-1/2

            h-[240px]
            w-[240px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-white/[0.04]

            blur-[100px]

            md:h-[480px]
            md:w-[480px]
          "
        />

        {/* BOTTOM VIOLET LIGHT */}
        <div
          className="
            absolute
            bottom-[-120px]
            left-1/2

            h-[300px]
            w-[300px]

            -translate-x-1/2

            rounded-full

            bg-violet-500/10

            blur-[120px]
          "
        />

        {/* NOISE */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.02]
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",

            backgroundSize:
              "4px 4px",
          }}
        />
      </div>

      {/* =====================================
          SAFE AREA
      ===================================== */}

      <div
        className="
          fixed
          bottom-0
          left-0
          z-[20]

          w-full

          pointer-events-none
        "
        style={{
          height:
            "env(safe-area-inset-bottom)",

          background:
            "rgba(0,0,0,0.7)",

          backdropFilter:
            "blur(10px)",
        }}
      />
    </div>
  );
}