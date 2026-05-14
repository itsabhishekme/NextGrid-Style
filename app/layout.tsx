import type {
  Metadata,
  Viewport,
} from "next";

import "./globals.css";

import { Poppins } from "next/font/google";

/* DESKTOP COMPONENTS */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* RESPONSIVE COMPONENTS */
import MotionWrapper from "@/components/MotionWrapper";
import ResponsiveLayout from "@/components/ResponsiveLayout";

/* MOBILE COMPONENTS */
import MobileWrapper from "@/components/mobile/wrapper/MobileWrapper";
import TouchWrapper from "@/components/mobile/wrapper/TouchWrapper";

import MobileGrid from "@/components/mobile/responsive/MobileGrid";

const poppins = Poppins({
  subsets: ["latin"],

  display: "swap",

  preload: true,

  variable: "--font-poppins",

  fallback: [
    "system-ui",
    "sans-serif",
  ],

  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://nextgridstyle.com"
  ),

  title: {
    default: "NextGrid Style Fashion",

    template:
      "%s | NextGrid Style Fashion",
  },

  description:
    "Luxury futuristic fashion ecommerce platform powered by Next.js and Capacitor.",

  manifest: "/manifest.json",

  keywords: [
    "NextGrid",
    "Luxury Fashion",
    "Fashion Ecommerce",
    "Next.js Fashion",
    "Capacitor App",
    "Streetwear",
    "Modern Fashion",
  ],

  authors: [
    {
      name: "NextGrid Studio",
    },
  ],

  creator: "NextGrid Studio",

  publisher: "NextGrid Studio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextGrid Style Fashion",

    description:
      "Luxury futuristic fashion ecommerce experience.",

    url: "https://nextgridstyle.com",

    siteName:
      "NextGrid Style Fashion",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/banners/hero-banner.jpg",

        width: 1200,

        height: 630,

        alt: "NextGrid Fashion",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "NextGrid Style Fashion",

    description:
      "Luxury futuristic fashion ecommerce platform.",

    images: [
      "/banners/hero-banner.jpg",
    ],
  },

  icons: {
    icon: [
      {
        url: "/icons/icon-192.png",

        sizes: "192x192",

        type: "image/png",
      },

      {
        url: "/icons/icon-512.png",

        sizes: "512x512",

        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/icons/icon-192.png",

        sizes: "192x192",

        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 1,

  viewportFit: "cover",

  themeColor: "#000000",

  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="
        scroll-smooth
        overflow-x-hidden
      "
    >
      <body
        suppressHydrationWarning
        className={`
          ${poppins.variable}

          relative
          min-h-screen
          w-full
          overflow-x-hidden

          bg-black
          text-white

          antialiased
          font-sans

          selection:bg-white
          selection:text-black
        `}
      >
        {/* MOBILE WRAPPERS */}
        <MobileWrapper>
          <TouchWrapper>

            {/* PREMIUM BACKGROUND */}
            <div
              className="
                pointer-events-none
                fixed
                inset-0
                -z-50
                overflow-hidden
              "
            >
              {/* GRID */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.035]
                "
                style={{
                  backgroundImage: `
                    linear-gradient(
                      to right,
                      rgba(255,255,255,0.06) 1px,
                      transparent 1px
                    ),

                    linear-gradient(
                      to bottom,
                      rgba(255,255,255,0.06) 1px,
                      transparent 1px
                    )
                  `,

                  backgroundSize:
                    "80px 80px",
                }}
              />

              {/* PINK GLOW */}
              <div
                className="
                  absolute
                  left-[-140px]
                  top-[-140px]

                  h-[320px]
                  w-[320px]

                  rounded-full
                  bg-pink-500/20

                  blur-[90px]

                  sm:h-[420px]
                  sm:w-[420px]

                  md:h-[600px]
                  md:w-[600px]

                  md:blur-[150px]
                "
              />

              {/* CYAN GLOW */}
              <div
                className="
                  absolute
                  right-[-160px]
                  top-[15%]

                  h-[320px]
                  w-[320px]

                  rounded-full
                  bg-cyan-500/20

                  blur-[90px]

                  sm:h-[420px]
                  sm:w-[420px]

                  md:h-[620px]
                  md:w-[620px]

                  md:blur-[160px]
                "
              />

              {/* CENTER LIGHT */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2

                  h-[220px]
                  w-[220px]

                  -translate-x-1/2
                  -translate-y-1/2

                  rounded-full
                  bg-white/[0.05]

                  blur-[80px]

                  md:h-[480px]
                  md:w-[480px]

                  md:blur-[140px]
                "
              />

              {/* MOBILE PURPLE GLOW */}
              <div
                className="
                  absolute
                  bottom-[-100px]
                  left-1/2

                  h-[240px]
                  w-[240px]

                  -translate-x-1/2

                  rounded-full
                  bg-violet-500/20

                  blur-[90px]

                  md:hidden
                "
              />

              {/* NOISE */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.02]
                  mix-blend-soft-light
                "
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)",

                  backgroundSize:
                    "4px 4px",
                }}
              />
            </div>

            {/* TOP LIGHT BAR */}
            <div
              className="
                fixed
                left-0
                top-0
                z-[200]

                h-[2px]
                w-full

                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
              "
            />

            {/* APP */}
            <MotionWrapper>
              <ResponsiveLayout>

                <div
                  className="
                    relative
                    flex
                    min-h-screen
                    w-full
                    flex-col

                    overflow-x-hidden
                  "
                >
                  {/* HEADER */}
                  <Navbar />

                  {/* MAIN CONTENT */}
                  <main
                    className="
                      relative
                      z-10

                      flex-1
                      w-full

                      overflow-x-hidden

                      pt-[72px]

                      pb-[40px]
                      md:pb-0
                    "
                  >
                    <div
                      className="
                        relative
                        mx-auto

                        w-full
                        max-w-[1920px]

                        px-4
                        sm:px-5
                        md:px-6
                        lg:px-8
                        xl:px-10

                        overflow-x-hidden
                      "
                    >
                      <MobileGrid>
                        <div
                          className="
                            min-w-0
                            w-full
                            break-words
                          "
                        >
                          {children}
                        </div>
                      </MobileGrid>
                    </div>
                  </main>

                  {/* FOOTER */}
                  <Footer />
                </div>

              </ResponsiveLayout>
            </MotionWrapper>

            {/* MOBILE SAFE AREA */}
            <div
              className="
                fixed
                bottom-0
                left-0

                z-[5]

                h-[env(safe-area-inset-bottom)]
                w-full

                bg-black
              "
            />

          </TouchWrapper>
        </MobileWrapper>
      </body>
    </html>
  );
}