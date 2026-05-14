"use client";

import React, {
  useEffect,
  useState,
} from "react";

type ResponsiveLayoutProps = {
  children: React.ReactNode;
};

export default function ResponsiveLayout({
  children,
}: ResponsiveLayoutProps) {
  const [
    screenWidth,
    setScreenWidth,
  ] = useState(0);

  const [
    isMobile,
    setIsMobile,
  ] = useState(false);

  const [
    isTablet,
    setIsTablet,
  ] = useState(false);

  const [
    isDesktop,
    setIsDesktop,
  ] = useState(true);

  const [
    isTouchDevice,
    setIsTouchDevice,
  ] = useState(false);

  useEffect(() => {
    /* =========================================
       DETECT DEVICE
    ========================================= */

    const detectDevice =
      () => {
        const width =
          window.innerWidth;

        const touchDevice =
          typeof window !==
          "undefined" &&
          (
            "ontouchstart" in
            window ||
            navigator.maxTouchPoints >
            0
          );

        setScreenWidth(width);

        setIsTouchDevice(
          touchDevice
        );

        /* MOBILE */
        if (width < 768) {
          setIsMobile(true);

          setIsTablet(false);

          setIsDesktop(false);
        }

        /* TABLET */
        else if (
          width >= 768 &&
          width < 1024
        ) {
          setIsMobile(false);

          setIsTablet(true);

          setIsDesktop(false);
        }

        /* DESKTOP */
        else {
          setIsMobile(false);

          setIsTablet(false);

          setIsDesktop(true);
        }

        /* =====================================
           ROOT CLASSES
        ===================================== */

        document.documentElement.classList.remove(
          "mobile-layout",
          "tablet-layout",
          "desktop-layout"
        );

        if (width < 768) {
          document.documentElement.classList.add(
            "mobile-layout"
          );
        } else if (
          width >= 768 &&
          width < 1024
        ) {
          document.documentElement.classList.add(
            "tablet-layout"
          );
        } else {
          document.documentElement.classList.add(
            "desktop-layout"
          );
        }

        /* =====================================
           CSS VARIABLES
        ===================================== */

        document.documentElement.style.setProperty(
          "--screen-width",
          `${width}px`
        );

        document.documentElement.style.setProperty(
          "--screen-height",
          `${window.innerHeight}px`
        );

        document.documentElement.style.setProperty(
          "--vh",
          `${window.innerHeight *
          0.01
          }px`
        );

        /* =====================================
           BODY FIX
        ===================================== */

        document.body.style.overflowX =
          "hidden";

        document.body.style.overflowY =
          "auto";

        document.body.style.minHeight =
          "100vh";

        document.body.style.height =
          "auto";

        document.body.style.position =
          "relative";

        document.body.style.setProperty(
          "-webkit-overflow-scrolling",
          "touch"
        );

        /* =====================================
           TOUCH FIX
        ===================================== */

        if (touchDevice) {
          document.body.style.touchAction =
            "pan-y";

          document.body.style.overscrollBehaviorY =
            "contain";
        } else {
          document.body.style.touchAction =
            "auto";

          document.body.style.overscrollBehavior =
            "auto";
        }
      };

    detectDevice();

    window.addEventListener(
      "resize",
      detectDevice
    );

    window.addEventListener(
      "orientationchange",
      detectDevice
    );

    /* =========================================
       REMOVE SCROLL BLOCKERS
    ========================================= */

    const removeBadStyles =
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

            /* FIX HIDDEN */
            if (
              computed.overflow ===
              "hidden" &&
              !htmlElement.classList.contains(
                "modal"
              )
            ) {
              htmlElement.style.overflowX =
                "hidden";

              htmlElement.style.overflowY =
                "visible";
            }

            /* FIX 100VH */
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
          }
        );
      };

    removeBadStyles();

    const timeout =
      setTimeout(() => {
        removeBadStyles();
      }, 1200);

    /* =========================================
       CLEANUP
    ========================================= */

    return () => {
      window.removeEventListener(
        "resize",
        detectDevice
      );

      window.removeEventListener(
        "orientationchange",
        detectDevice
      );

      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      id="responsive-layout"
      data-mobile={
        isMobile
      }
      data-tablet={
        isTablet
      }
      data-desktop={
        isDesktop
      }
      data-touch={
        isTouchDevice
      }
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
          RESPONSIVE CONTAINER
      ===================================== */}

      <div
        className={`
          relative
          mx-auto

          w-full
          min-h-screen

          overflow-visible

          transition-all
          duration-300

          ${isDesktop
            ? "max-w-[1920px]"
            : "max-w-full"
          }
        `}
      >
        {/* =================================
            MOBILE OVERLAY
        ================================= */}

        {isMobile && (
          <div
            className="
              pointer-events-none
              fixed
              inset-0
              z-[1]

              overflow-hidden
            "
          >
            {/* TOP LIGHT */}
            <div
              className="
                absolute
                left-1/2
                top-[-140px]

                h-[260px]
                w-[260px]

                -translate-x-1/2

                rounded-full

                bg-pink-500/10

                blur-[120px]
              "
            />

            {/* BOTTOM LIGHT */}
            <div
              className="
                absolute
                bottom-[-140px]
                left-1/2

                h-[260px]
                w-[260px]

                -translate-x-1/2

                rounded-full

                bg-violet-500/10

                blur-[120px]
              "
            />
          </div>
        )}

        {/* =================================
            TABLET OVERLAY
        ================================= */}

        {isTablet && (
          <div
            className="
              pointer-events-none
              fixed
              inset-0
              z-[1]

              overflow-hidden
            "
          >
            <div
              className="
                absolute
                right-[-120px]
                top-[15%]

                h-[320px]
                w-[320px]

                rounded-full

                bg-cyan-500/10

                blur-[140px]
              "
            />
          </div>
        )}

        {/* =================================
            CONTENT
        ================================= */}

        <div
          className="
            relative
            z-[2]

            w-full
            min-h-screen

            overflow-visible
          "
        >
          {children}
        </div>

        {/* =================================
            SAFE AREA
        ================================= */}

        <div
          className="
            fixed
            bottom-0
            left-0
            z-[10]

            w-full

            pointer-events-none
          "
          style={{
            height:
              "env(safe-area-inset-bottom)",

            background:
              "rgba(0,0,0,0.7)",

            backdropFilter:
              "blur(12px)",
          }}
        />
      </div>

      {/* =====================================
          DEBUG INDICATOR
      ===================================== */}

      <div
        className="
          pointer-events-none
          fixed
          bottom-4
          right-4
          z-[9999]

          hidden
          md:flex

          items-center
          gap-2

          rounded-full

          border
          border-white/10

          bg-black/60
          px-3
          py-2

          text-[10px]
          font-medium
          uppercase
          tracking-[0.2em]
          text-white/60

          backdrop-blur-xl
        "
      >
        <span>

        </span>

        <span>

        </span>
      </div>
    </div>
  );
}