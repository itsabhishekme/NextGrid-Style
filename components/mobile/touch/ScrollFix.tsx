"use client";

import {
    useEffect,
} from "react";

export default function ScrollFix() {
    useEffect(() => {
        const preventOverscroll = (
            e: TouchEvent
        ) => {
            const target =
                e.target as HTMLElement;

            const scrollableParent =
                target.closest(
                    ".touch-scroll"
                ) as HTMLElement | null;

            if (!scrollableParent) {
                e.preventDefault();
            }
        };

        document.addEventListener(
            "touchmove",
            preventOverscroll,
            {
                passive: false,
            }
        );

        document.body.style.overscrollBehavior =
            "none";

        document.body.style.overflowX =
            "hidden";

        return () => {
            document.removeEventListener(
                "touchmove",
                preventOverscroll
            );

            document.body.style.overscrollBehavior =
                "";

            document.body.style.overflowX =
                "";

        };
    }, []);

    return null;
}