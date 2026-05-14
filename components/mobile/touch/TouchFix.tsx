"use client";

import {
    useEffect,
} from "react";

export default function TouchFix() {
    useEffect(() => {
        const disableDoubleTapZoom = (
            e: TouchEvent
        ) => {
            const now = Date.now();

            const lastTouch = Number(
                document.body.getAttribute(
                    "data-last-touch"
                ) || 0
            );

            const delta = now - lastTouch;

            if (
                delta > 0 &&
                delta < 300
            ) {
                e.preventDefault();
            }

            document.body.setAttribute(
                "data-last-touch",
                now.toString()
            );
        };

        const preventGesture = (
            e: Event
        ) => {
            e.preventDefault();
        };

        document.addEventListener(
            "touchend",
            disableDoubleTapZoom,
            {
                passive: false,
            }
        );

        document.addEventListener(
            "gesturestart",
            preventGesture
        );

        document.addEventListener(
            "gesturechange",
            preventGesture
        );

        document.addEventListener(
            "gestureend",
            preventGesture
        );

        document.body.style.touchAction =
            "manipulation";

        return () => {
            document.removeEventListener(
                "touchend",
                disableDoubleTapZoom
            );

            document.removeEventListener(
                "gesturestart",
                preventGesture
            );

            document.removeEventListener(
                "gesturechange",
                preventGesture
            );

            document.removeEventListener(
                "gestureend",
                preventGesture
            );

            document.body.style.touchAction =
                "";
        };
    }, []);

    return null;
}