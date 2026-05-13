"use client";

import OrbitRings from "./OrbitRings";
import FloatingParticles from "./FloatingParticles";
import BackgroundGlow from "./BackgroundGlow";
import LoadingBar from "./LoadingBar";
import BrandText from "./BrandText";

export default function AnimatedLoadingScreen() {

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        overflow-hidden
        bg-black
      "
    >
      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            ),

            linear-gradient(
              to bottom,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "80px 80px",
        }}
      />

      <BackgroundGlow />

      <div
        className="
          relative
          z-20
          flex
          h-full
          flex-col
          items-center
          justify-center
          px-6
        "
      >
        <OrbitRings />

        <FloatingParticles />

        <BrandText />

        <LoadingBar />
      </div>
    </div>
  );
}