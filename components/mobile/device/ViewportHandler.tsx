"use client";

import { useEffect, useState } from "react";

interface ViewportState {
  width: number;

  height: number;

  vh: number;

  vw: number;

  scrollY: number;

  scrollX: number;

  isScrolled: boolean;
}

export default function ViewportHandler() {
  const [viewport, setViewport] =
    useState<ViewportState>({
      width: 0,

      height: 0,

      vh: 0,

      vw: 0,

      scrollY: 0,

      scrollX: 0,

      isScrolled: false,
    });

  useEffect(() => {
    /* =========================================
       UPDATE VIEWPORT
    ========================================= */

    const updateViewport =
      () => {
        const width =
          window.innerWidth;

        const height =
          window.innerHeight;

        const vh =
          height * 0.01;

        const vw =
          width * 0.01;

        const scrollY =
          window.scrollY;

        const scrollX =
          window.scrollX;

        const isScrolled =
          scrollY > 10;

        /* =========================================
           UPDATE STATE
        ========================================= */

        setViewport({
          width,

          height,

          vh,

          vw,

          scrollY,

          scrollX,

          isScrolled,
        });

        /* =========================================
           CSS VARIABLES
        ========================================= */

        document.documentElement.style.setProperty(
          "--vh",
          `${vh}px`
        );

        document.documentElement.style.setProperty(
          "--vw",
          `${vw}px`
        );

        document.documentElement.style.setProperty(
          "--window-width",
          `${width}px`
        );

        document.documentElement.style.setProperty(
          "--window-height",
          `${height}px`
        );

        document.documentElement.style.setProperty(
          "--scroll-y",
          `${scrollY}px`
        );

        document.documentElement.style.setProperty(
          "--scroll-x",
          `${scrollX}px`
        );

        /* =========================================
           BODY ATTRIBUTES
        ========================================= */

        document.body.setAttribute(
          "data-scrolled",
          isScrolled
            ? "true"
            : "false"
        );

        document.body.setAttribute(
          "data-scroll-y",
          String(scrollY)
        );

        /* =========================================
           ROOT CLASSES
        ========================================= */

        if (isScrolled) {
          document.documentElement.classList.add(
            "is-scrolled"
          );
        } else {
          document.documentElement.classList.remove(
            "is-scrolled"
          );
        }

        /* =========================================
           FIX MOBILE SCROLL
        ========================================= */

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

        /* =========================================
           SAFE AREA SUPPORT
        ========================================= */

        document.documentElement.style.setProperty(
          "--safe-top",
          "env(safe-area-inset-top)"
        );

        document.documentElement.style.setProperty(
          "--safe-bottom",
          "env(safe-area-inset-bottom)"
        );

        document.documentElement.style.setProperty(
          "--safe-left",
          "env(safe-area-inset-left)"
        );

        document.documentElement.style.setProperty(
          "--safe-right",
          "env(safe-area-inset-right)"
        );
      };

    /* =========================================
       HANDLE SCROLL
    ========================================= */

    const handleScroll =
      () => {
        updateViewport();
      };

    /* =========================================
       INITIAL RUN
    ========================================= */

    updateViewport();

    /* =========================================
       EVENTS
    ========================================= */

    window.addEventListener(
      "resize",
      updateViewport
    );

    window.addEventListener(
      "orientationchange",
      updateViewport
    );

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    /* =========================================
       VISUAL VIEWPORT API
    ========================================= */

    if (
      window.visualViewport
    ) {
      window.visualViewport.addEventListener(
        "resize",
        updateViewport
      );

      window.visualViewport.addEventListener(
        "scroll",
        updateViewport
      );
    }

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

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (
        window.visualViewport
      ) {
        window.visualViewport.removeEventListener(
          "resize",
          updateViewport
        );

        window.visualViewport.removeEventListener(
          "scroll",
          updateViewport
        );
      }
    };
  }, []);

  return (
    <div
      id="viewport-handler"
      className="
        hidden
        pointer-events-none
      "
      aria-hidden="true"
    >
      <span
        data-width={
          viewport.width
        }
      />

      <span
        data-height={
          viewport.height
        }
      />

      <span
        data-vh={viewport.vh}
      />

      <span
        data-vw={viewport.vw}
      />

      <span
        data-scroll-y={
          viewport.scrollY
        }
      />

      <span
        data-scroll-x={
          viewport.scrollX
        }
      />

      <span
        data-scrolled={
          viewport.isScrolled
        }
      />
    </div>
  );
}