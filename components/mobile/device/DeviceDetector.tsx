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
    const detectDevice = () => {
      const width =
        window.innerWidth;

      const height =
        window.innerHeight;

      const userAgent =
        navigator.userAgent;

      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints >
          0;

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

      /* =========================================
         UPDATE HTML CLASSES
      ========================================= */

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

      /* =========================================
         BODY ATTRIBUTES
      ========================================= */

      document.body.setAttribute(
        "data-device",
        type
      );

      document.body.setAttribute(
        "data-orientation",
        orientation
      );

      /* =========================================
         CSS VARIABLES
      ========================================= */

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

      /* =========================================
         UPDATE STATE
      ========================================= */

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
        pointer-events-none
      "
      aria-hidden="true"
    >
      <span
        data-device-type={
          device.type
        }
      />

      <span
        data-mobile={
          device.isMobile
        }
      />

      <span
        data-tablet={
          device.isTablet
        }
      />

      <span
        data-desktop={
          device.isDesktop
        }
      />

      <span
        data-ios={device.isIOS}
      />

      <span
        data-android={
          device.isAndroid
        }
      />

      <span
        data-touch={
          device.isTouch
        }
      />

      <span
        data-width={
          device.width
        }
      />

      <span
        data-height={
          device.height
        }
      />

      <span
        data-orientation={
          device.orientation
        }
      />
    </div>
  );
}