"use client";

import "@/components/mobile/styles/mobile.css";
import "@/components/mobile/styles/touch.css";
import "@/components/mobile/styles/navigation.css";
import "@/components/mobile/styles/responsive.css";
import "@/components/mobile/styles/animation.css";
import "@/components/mobile/styles/safearea.css";

export default function MobileWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}