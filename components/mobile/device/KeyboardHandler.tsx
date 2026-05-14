"use client";

import { useEffect, useState } from "react";

interface KeyboardState {
  isOpen: boolean;

  keyboardHeight: number;

  viewportHeight: number;

  initialHeight: number;
}

export default function KeyboardHandler() {
  const [keyboardState, setKeyboardState] =
    useState<KeyboardState>({
      isOpen: false,

      keyboardHeight: 0,

      viewportHeight: 0,

      initialHeight: 0,
    });

  useEffect(() => {
    let initialHeight =
      window.innerHeight;

    let currentHeight =
      window.innerHeight;

    /* =========================================
       UPDATE KEYBOARD STATE
    ========================================= */

    const updateKeyboardState =
      () => {
        currentHeight =
          window.innerHeight;

        const keyboardHeight =
          initialHeight -
          currentHeight;

        const isOpen =
          keyboardHeight > 150;

        /* =========================================
           UPDATE STATE
        ========================================= */

        setKeyboardState({
          isOpen,

          keyboardHeight,

          viewportHeight:
            currentHeight,

          initialHeight,
        });

        /* =========================================
           BODY ATTRIBUTES
        ========================================= */

        document.body.setAttribute(
          "data-keyboard",
          isOpen
            ? "open"
            : "closed"
        );

        /* =========================================
           CSS VARIABLES
        ========================================= */

        document.documentElement.style.setProperty(
          "--keyboard-height",
          `${Math.max(
            keyboardHeight,
            0
          )}px`
        );

        document.documentElement.style.setProperty(
          "--viewport-height",
          `${currentHeight}px`
        );

        document.documentElement.style.setProperty(
          "--app-height",
          `${currentHeight}px`
        );

        document.documentElement.style.setProperty(
          "--vh",
          `${
            currentHeight * 0.01
          }px`
        );

        /* =========================================
           KEYBOARD CLASSES
        ========================================= */

        if (isOpen) {
          document.documentElement.classList.add(
            "keyboard-open"
          );

          document.documentElement.classList.remove(
            "keyboard-closed"
          );
        } else {
          document.documentElement.classList.remove(
            "keyboard-open"
          );

          document.documentElement.classList.add(
            "keyboard-closed"
          );
        }

        /* =========================================
           FIX SCROLL ISSUE
        ========================================= */

        document.body.style.overflowX =
          "hidden";

        document.body.style.overflowY =
          "auto";

        document.body.style.position =
          "relative";

        document.body.style.height =
          "auto";

        document.body.style.minHeight =
          "100vh";

        /* =========================================
           INPUT FIX
        ========================================= */

        const activeElement =
          document.activeElement as HTMLElement;

        if (
          activeElement &&
          (
            activeElement.tagName ===
              "INPUT" ||
            activeElement.tagName ===
              "TEXTAREA"
          )
        ) {
          setTimeout(() => {
            activeElement.scrollIntoView({
              behavior: "smooth",

              block: "center",
            });
          }, 200);
        }
      };

    /* =========================================
       VISUAL VIEWPORT SUPPORT
    ========================================= */

    const handleViewportResize =
      () => {
        updateKeyboardState();
      };

    if (
      window.visualViewport
    ) {
      window.visualViewport.addEventListener(
        "resize",
        handleViewportResize
      );

      window.visualViewport.addEventListener(
        "scroll",
        handleViewportResize
      );
    }

    /* =========================================
       WINDOW RESIZE
    ========================================= */

    window.addEventListener(
      "resize",
      updateKeyboardState
    );

    window.addEventListener(
      "orientationchange",
      () => {
        initialHeight =
          window.innerHeight;

        updateKeyboardState();
      }
    );

    /* =========================================
       INPUT FOCUS EVENTS
    ========================================= */

    const handleFocusIn =
      () => {
        setTimeout(() => {
          updateKeyboardState();
        }, 300);
      };

    const handleFocusOut =
      () => {
        setTimeout(() => {
          updateKeyboardState();
        }, 300);
      };

    document.addEventListener(
      "focusin",
      handleFocusIn
    );

    document.addEventListener(
      "focusout",
      handleFocusOut
    );

    /* =========================================
       INITIAL RUN
    ========================================= */

    updateKeyboardState();

    /* =========================================
       CLEANUP
    ========================================= */

    return () => {
      window.removeEventListener(
        "resize",
        updateKeyboardState
      );

      document.removeEventListener(
        "focusin",
        handleFocusIn
      );

      document.removeEventListener(
        "focusout",
        handleFocusOut
      );

      if (
        window.visualViewport
      ) {
        window.visualViewport.removeEventListener(
          "resize",
          handleViewportResize
        );

        window.visualViewport.removeEventListener(
          "scroll",
          handleViewportResize
        );
      }
    };
  }, []);

  return (
    <div
      id="keyboard-handler"
      className="
        hidden
        pointer-events-none
      "
      aria-hidden="true"
    >
      <span
        data-keyboard-open={
          keyboardState.isOpen
        }
      />

      <span
        data-keyboard-height={
          keyboardState.keyboardHeight
        }
      />

      <span
        data-viewport-height={
          keyboardState.viewportHeight
        }
      />

      <span
        data-initial-height={
          keyboardState.initialHeight
        }
      />
    </div>
  );
}