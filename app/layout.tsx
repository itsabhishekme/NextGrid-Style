import type { Metadata } from "next";

import "./globals.css";

import { Poppins } from "next/font/google";

import Navbar from "@/components/Navbar";

import MobileNav from "@/components/MobileNav";

import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],

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

  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "NextGrid Style Fashion",

    template:
      "%s | NextGrid Style Fashion",
  },

  description:
    "Luxury futuristic fashion platform powered by Next.js and Capacitor.",

  keywords: [
    "NextGrid",
    "Luxury Fashion",
    "Fashion Ecommerce",
    "Next.js Fashion",
    "Capacitor App",
    "Modern Clothing",
    "Streetwear",
  ],

  authors: [
    {
      name: "NextGrid Studio",
    },
  ],

  creator: "NextGrid Studio",

  publisher: "NextGrid Studio",

  metadataBase: new URL(
    "https://nextgridstyle.com"
  ),

  openGraph: {
    title: "NextGrid Style Fashion",

    description:
      "Premium futuristic fashion experience.",

    url: "https://nextgridstyle.com",

    siteName:
      "NextGrid Style Fashion",

    images: [
      {
        url: "/banners/hero-banner.jpg",

        width: 1200,

        height: 630,

        alt: "NextGrid Fashion",
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "NextGrid Style Fashion",

    description:
      "Luxury fashion ecommerce platform.",

    images: ["/banners/hero-banner.jpg"],
  },

  robots: {
    index: true,

    follow: true,
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",
};

export const viewport = {
  width: "device-width",

  initialScale: 1,

  maximumScale: 1,

  viewportFit: "cover",
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
        className={`
          ${poppins.variable}

          relative
          min-h-screen
          overflow-x-hidden

          bg-black
          font-sans
          text-white
          antialiased

          selection:bg-white
          selection:text-black
        `}
      >
        {/* GLOBAL PREMIUM BACKGROUND */}
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
              opacity-[0.03]
            "
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",

              backgroundSize:
                "80px 80px",
            }}
          />

          {/* TOP LEFT GLOW */}
          <div
            className="
              absolute
              left-[-250px]
              top-[-250px]
              h-[700px]
              w-[700px]
              rounded-full
              bg-pink-500/10
              blur-[180px]
            "
          />

          {/* RIGHT GLOW */}
          <div
            className="
              absolute
              right-[-220px]
              top-[15%]
              h-[650px]
              w-[650px]
              rounded-full
              bg-cyan-500/10
              blur-[180px]
            "
          />

          {/* CENTER LIGHT */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[550px]
              w-[550px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.04]
              blur-[160px]
            "
          />

          {/* MOBILE EXTRA GLOW */}
          <div
            className="
              absolute
              bottom-[-150px]
              left-1/2
              h-[350px]
              w-[350px]
              -translate-x-1/2
              rounded-full
              bg-violet-500/10
              blur-[120px]
              md:hidden
            "
          />
        </div>

        {/* TOP LIGHT BAR */}
        <div
          className="
            fixed
            left-0
            top-0
            z-[120]
            h-[2px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-white
            to-transparent
          "
        />

        {/* MAIN WRAPPER */}
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
          {/* DESKTOP NAVBAR */}
          <Navbar />

          {/* MOBILE NAVBAR */}
          <MobileNav />

          {/* PAGE CONTENT */}
          <main
            className="
              relative
              z-10
              flex-1
              w-full

              overflow-visible
              overflow-x-hidden

              pt-[74px]

              pb-[120px]
              md:pb-0
            "
          >
            {/* CONTENT WRAPPER */}
            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[1920px]

                overflow-visible
                overflow-x-hidden

                px-3
                sm:px-4
                md:px-5
                lg:px-6
              "
            >
              {/* MOBILE SAFE SPACING */}
              <div
                className="
                  min-w-0
                  w-full
                  break-words
                "
              >
                {children}
              </div>
            </div>
          </main>

          {/* FOOTER */}
          <Footer />
        </div>

        {/* DESKTOP CENTER LIGHT */}
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-[1]
            hidden
            lg:block
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white/[0.03]
              blur-[160px]
            "
          />
        </div>

        {/* MOBILE SAFE AREA */}
        <div
          className="
            fixed
            bottom-0
            left-0
            z-[1]
            h-[env(safe-area-inset-bottom)]
            w-full
            bg-black
          "
        />

        {/* BOTTOM BLUR */}
        <div
          className="
            pointer-events-none
            fixed
            bottom-0
            left-0
            z-[2]
            h-32
            w-full
            bg-gradient-to-t
            from-black
            to-transparent
            md:hidden
          "
        />

        {/* PREMIUM NOISE */}
        <div
          className="
            pointer-events-none
            fixed
            inset-0
            z-[1]
            opacity-[0.02]
            mix-blend-soft-light
          "
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      </body>
    </html>
  );
}