"use client";

import { useEffect, useState } from "react";

type DeviceType =
  | "mobile"
  | "tablet"
  | "desktop";

interface DeviceState {
  type: DeviceType;

  isMobile: boolean;

  isTablet: boolean;

  isDesktop: boolean;

  isIOS: boolean;

  isAndroid: boolean;

  isTouch: boolean;

  width: number;

  height: number;

  orientation:
    | "portrait"
    | "landscape";
}

export default function DeviceDetector() {
  const [device, setDevice] =
    useState<DeviceState>({
      type: "desktop",

      isMobile: false,

      isTablet: false,

      isDesktop: true,

      isIOS: false,

      isAndroid: false,

      isTouch: false,

      width: 0,

      height: 0,

      orientation:
        "landscape",
    });

  useEffect(() => {
    /* =========================================
       DETECT DEVICE
    ========================================= */

    const detectDevice = () => {
      const width =
        window.innerWidth;

      const height =
        window.innerHeight;

      const userAgent =
        navigator.userAgent;

      const isTouch =
        typeof window !==
          "undefined" &&
        (
          "ontouchstart" in
            window ||
          navigator.maxTouchPoints >
            0
        );

      const isIOS =
        /iPad|iPhone|iPod/.test(
          userAgent
        );

      const isAndroid =
        /Android/.test(
          userAgent
        );

      const isMobile =
        width < 768;

      const isTablet =
        width >= 768 &&
        width < 1024;

      const isDesktop =
        width >= 1024;

      const orientation =
        width > height
          ? "landscape"
          : "portrait";

      let type: DeviceType =
        "desktop";

      if (isMobile) {
        type = "mobile";
      } else if (isTablet) {
        type = "tablet";
      }

      /* =====================================
         ROOT CLASSES
      ===================================== */

      document.documentElement.classList.remove(
        "mobile",
        "tablet",
        "desktop",
        "ios",
        "android",
        "touch",
        "portrait",
        "landscape"
      );

      document.documentElement.classList.add(
        type
      );

      document.documentElement.classList.add(
        orientation
      );

      if (isIOS) {
        document.documentElement.classList.add(
          "ios"
        );
      }

      if (isAndroid) {
        document.documentElement.classList.add(
          "android"
        );
      }

      if (isTouch) {
        document.documentElement.classList.add(
          "touch"
        );
      }

      /* =====================================
         BODY ATTRIBUTES
      ===================================== */

      document.body.setAttribute(
        "data-device",
        type
      );

      document.body.setAttribute(
        "data-orientation",
        orientation
      );

      /* =====================================
         CSS VARIABLES
      ===================================== */

      document.documentElement.style.setProperty(
        "--window-width",
        `${width}px`
      );

      document.documentElement.style.setProperty(
        "--window-height",
        `${height}px`
      );

      document.documentElement.style.setProperty(
        "--vh",
        `${height * 0.01}px`
      );

      document.documentElement.style.setProperty(
        "--vw",
        `${width * 0.01}px`
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

      if (isTouch) {
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

      /* =====================================
         UPDATE STATE
      ===================================== */

      setDevice({
        type,

        isMobile,

        isTablet,

        isDesktop,

        isIOS,

        isAndroid,

        isTouch,

        width,

        height,

        orientation,
      });
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

    return () => {
      window.removeEventListener(
        "resize",
        detectDevice
      );

      window.removeEventListener(
        "orientationchange",
        detectDevice
      );
    };
  }, []);

  return (
    <div
      id="device-detector"
      className="
        hidden
        invisible
        pointer-events-none
      "
      aria-hidden="true"
    />
  );
}