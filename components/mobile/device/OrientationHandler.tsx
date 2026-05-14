"use client";

import { useEffect, useState } from "react";

type OrientationType =
  | "portrait"
  | "landscape";

interface OrientationState {
  orientation: OrientationType;

  width: number;

  height: number;

  angle: number;

  isPortrait: boolean;

  isLandscape: boolean;
}

export default function OrientationHandler() {
  const [orientationState, setOrientationState] =
    useState<OrientationState>({
      orientation:
        "portrait",

      width: 0,

      height: 0,

      angle: 0,

      isPortrait: true,

      isLandscape: false,
    });

  useEffect(() => {
    /* =========================================
       DETECT ORIENTATION
    ========================================= */

    const detectOrientation =
      () => {
        const width =
          window.innerWidth;

        const height =
          window.innerHeight;

        const orientation =
          width > height
            ? "landscape"
            : "portrait";

        const isPortrait =
          orientation ===
          "portrait";

        const isLandscape =
          orientation ===
          "landscape";

        let angle = 0;

        /* =========================================
           SCREEN ORIENTATION API
        ========================================= */

        if (
          screen.orientation &&
          typeof screen.orientation
            .angle ===
            "number"
        ) {
          angle =
            screen.orientation
              .angle;
        }

        /* =========================================
           FALLBACK
        ========================================= */

        else if (
          typeof (
            window as Window & {
              orientation?: number;
            }
          ).orientation ===
          "number"
        ) {
          angle =
            (
              window as Window & {
                orientation?: number;
              }
            ).orientation || 0;
        }

        /* =========================================
           UPDATE STATE
        ========================================= */

        setOrientationState({
          orientation,

          width,

          height,

          angle,

          isPortrait,

          isLandscape,
        });

        /* =========================================
           HTML CLASSES
        ========================================= */

        document.documentElement.classList.remove(
          "portrait",
          "landscape"
        );

        document.documentElement.classList.add(
          orientation
        );

        /* =========================================
           BODY ATTRIBUTES
        ========================================= */

        document.body.setAttribute(
          "data-orientation",
          orientation
        );

        document.body.setAttribute(
          "data-orientation-angle",
          String(angle)
        );

        /* =========================================
           CSS VARIABLES
        ========================================= */

        document.documentElement.style.setProperty(
          "--orientation-width",
          `${width}px`
        );

        document.documentElement.style.setProperty(
          "--orientation-height",
          `${height}px`
        );

        document.documentElement.style.setProperty(
          "--orientation-angle",
          `${angle}`
        );

        document.documentElement.style.setProperty(
          "--vh",
          `${height * 0.01}px`
        );

        document.documentElement.style.setProperty(
          "--vw",
          `${width * 0.01}px`
        );

        /* =========================================
           FIX MOBILE VIEWPORT
        ========================================= */

        document.body.style.minHeight =
          "100vh";

        document.body.style.height =
          "auto";

        document.body.style.overflowX =
          "hidden";

        document.body.style.overflowY =
          "auto";

        /* =========================================
           SAFE AREA UPDATE
        ========================================= */

        const safeTop =
          getComputedStyle(
            document.documentElement
          ).getPropertyValue(
            "env(safe-area-inset-top)"
          );

        const safeBottom =
          getComputedStyle(
            document.documentElement
          ).getPropertyValue(
            "env(safe-area-inset-bottom)"
          );

        document.documentElement.style.setProperty(
          "--safe-top",
          safeTop || "0px"
        );

        document.documentElement.style.setProperty(
          "--safe-bottom",
          safeBottom || "0px"
        );
      };

    /* =========================================
       INITIAL RUN
    ========================================= */

    detectOrientation();

    /* =========================================
       WINDOW EVENTS
    ========================================= */

    window.addEventListener(
      "resize",
      detectOrientation
    );

    window.addEventListener(
      "orientationchange",
      () => {
        setTimeout(() => {
          detectOrientation();
        }, 200);
      }
    );

    /* =========================================
       SCREEN ORIENTATION API
    ========================================= */

    if (
      screen.orientation
    ) {
      screen.orientation.addEventListener(
        "change",
        detectOrientation
      );
    }

    /* =========================================
       VISUAL VIEWPORT
    ========================================= */

    if (
      window.visualViewport
    ) {
      window.visualViewport.addEventListener(
        "resize",
        detectOrientation
      );
    }

    /* =========================================
       CLEANUP
    ========================================= */

    return () => {
      window.removeEventListener(
        "resize",
        detectOrientation
      );

      if (
        screen.orientation
      ) {
        screen.orientation.removeEventListener(
          "change",
          detectOrientation
        );
      }

      if (
        window.visualViewport
      ) {
        window.visualViewport.removeEventListener(
          "resize",
          detectOrientation
        );
      }
    };
  }, []);

  return (
    <div
      id="orientation-handler"
      className="
        hidden
        pointer-events-none
      "
      aria-hidden="true"
    >
      <span
        data-orientation={
          orientationState.orientation
        }
      />

      <span
        data-width={
          orientationState.width
        }
      />

      <span
        data-height={
          orientationState.height
        }
      />

      <span
        data-angle={
          orientationState.angle
        }
      />

      <span
        data-portrait={
          orientationState.isPortrait
        }
      />

      <span
        data-landscape={
          orientationState.isLandscape
        }
      />
    </div>
  );
}