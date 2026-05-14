"use client";

import {
  useEffect,
} from "react";

export default function ScrollFix() {
  useEffect(() => {

    /* HTML */
    document.documentElement.style.overflowX =
      "hidden";

    document.documentElement.style.overflowY =
      "auto";

    /* BODY */
    document.body.style.overflowX =
      "hidden";

    document.body.style.overflowY =
      "auto";

    document.body.style.touchAction =
      "pan-y";

    document.body.style.overscrollBehaviorY =
      "auto";

    /* FIX IOS SCROLL */
    (
      document.body.style as CSSStyleDeclaration & {
        webkitOverflowScrolling: string;
      }
    ).webkitOverflowScrolling =
      "touch";

    const allowTouchScroll = () => {
      return true;
    };

    document.addEventListener(
      "touchmove",
      allowTouchScroll,
      {
        passive: true,
      }
    );

    return () => {

      document.documentElement.style.overflowX =
        "";

      document.documentElement.style.overflowY =
        "";

      document.body.style.overflowX =
        "";

      document.body.style.overflowY =
        "";

      document.body.style.touchAction =
        "";

      document.body.style.overscrollBehaviorY =
        "";

      (
        document.body.style as CSSStyleDeclaration & {
          webkitOverflowScrolling: string;
        }
      ).webkitOverflowScrolling =
        "";

      document.removeEventListener(
        "touchmove",
        allowTouchScroll
      );
    };
  }, []);

  return null;
}