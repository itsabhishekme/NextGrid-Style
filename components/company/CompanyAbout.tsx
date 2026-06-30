"use client";

import Link from "next/link";

type Brand = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  status?: string;
};

const brands: Brand[] = [
  {
    title: "NextGrid Lifestyle",
    subtitle: "Men's Fashion",
    description:
      "Sophisticated clothing crafted for modern gentlemen with timeless elegance.",
    href: "/nextgrid-style/lifestyle",
  },
  {
    title: "NextGrid HerStyle",
    subtitle: "Women's Fashion",
    description:
      "Elegant collections celebrating confidence, beauty, and individuality.",
    href: "/nextgrid-style/herstyle",
  },
  {
    title: "NextGrid LittleStyle",
    subtitle: "Kids Fashion",
    description:
      "Comfortable, playful and colorful apparel designed for every adventure.",
    href: "/nextgrid-style/littlestyle",
  },
  {
    title: "NextGrid SoleStyle",
    subtitle: "Footwear",
    description:
      "Luxury sneakers, formal shoes, sandals and everyday footwear engineered for style and comfort.",
    status: "Upcoming",
    href: "/nextgrid-style/solestyle",
  },
  {
    title: "NextGrid Spark",
    subtitle: "Accessories & Jewelry",
    description:
      "Premium handbags, wallets, belts, watches, sunglasses and jewelry to elevate every look.",
    status: "Upcoming",
    href: "/nextgrid-style/spark",
  },
  {
    title: "NextGrid EcoWear",
    subtitle: "Sustainable Fashion",
    description:
      "Eco-conscious collections created using ethical sourcing and recycled materials for a greener future.",
    status: "Upcoming",
    href: "/nextgrid-style/ecowear",
  },
  {
    title: "NextGrid Active",
    subtitle: "Sportswear & Athleisure",
    description:
      "Performance apparel and activewear designed for fitness, movement and everyday comfort.",
    status: "Upcoming",
    href: "/nextgrid-style/active",
  },
  {
    title: "NextGrid Beauty",
    subtitle: "Cosmetics & Skincare",
    description:
      "Premium skincare, cosmetics, beauty essentials and personal care products crafted for modern lifestyles.",
    status: "Upcoming",
    href: "/nextgrid-style/beauty",
  },
  {
    title: "NextGrid Fragrance",
    subtitle: "Luxury Perfumes",
    description:
      "Signature fragrances inspired by elegance, confidence and timeless sophistication.",
    status: "Upcoming",
    href: "/nextgrid-style/fragrance",
  },
  {
    title: "NextGrid Living",
    subtitle: "Home & Lifestyle Products",
    description:
      "Modern home décor, everyday essentials and lifestyle products designed with premium quality.",
    status: "Upcoming",
    href: "/nextgrid-style/living",
  },
  {
    title: "NextGrid WorkStyle",
    subtitle: "Formal & Corporate Wear",
    description:
      "Professional clothing and business essentials tailored for modern workplaces and executives.",
    status: "Upcoming",
    href: "/nextgrid-style/workstyle",
  },
  {
    title: "NextGrid Time",
    subtitle: "Watches & Wearables",
    description:
      "Luxury watches, smart wearables and timeless accessories that blend technology with style.",
    status: "Upcoming",
    href: "/nextgrid-style/time",
  },
  {
    title: "NextGrid Vision",
    subtitle: "Eyewear",
    description:
      "Fashion-forward sunglasses and optical eyewear combining comfort, protection and premium design.",
    status: "Upcoming",
    href: "/nextgrid-style/vision",
  },
  {
    title: "NextGrid Street",
    subtitle: "Streetwear & Urban Fashion",
    description:
      "Contemporary streetwear inspired by youth culture, creativity and modern urban lifestyles.",
    status: "Upcoming",
    href: "/nextgrid-style/street",
  },
];

const stats = [
  { value: "14+", label: "Fashion Brands" },
  { value: "100%", label: "Premium Quality" },
  { value: "Global", label: "Vision" },
  { value: "Future", label: "Innovation" },
];

export default function CompanyAbout() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-slate-950 via-slate-900 to-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-300">
            About NextGrid
          </span>

          <h1 className="mt-8 text-5xl font-extrabold md:text-7xl">
            Building the Future of Fashion Commerce
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            NextGrid is creating a unified ecosystem of premium fashion,
            lifestyle, beauty, footwear and modern retail experiences.
            Our mission is to combine innovation, quality and timeless
            design under one trusted brand.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border bg-white p-8 text-center shadow-sm"
            >
              <h2 className="text-5xl font-black text-violet-600">
                {item.value}
              </h2>

              <p className="mt-3 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-bold">
            Our Story
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            NextGrid began with a simple idea—create a unified fashion
            ecosystem where quality, innovation, sustainability and
            customer experience work together. Rather than building a
            single clothing label, we are developing multiple specialized
            brands that serve every lifestyle.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            From premium menswear and womenswear to footwear, beauty,
            home living and wearable technology, each brand reflects
            craftsmanship, modern design and long-term value.
          </p>
        </div>

        <div className="rounded-3xl border bg-slate-50 p-10">
          <h3 className="text-2xl font-bold">
            Mission
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            Deliver exceptional products through innovation, responsible
            sourcing and customer-first experiences.
          </p>

          <div className="my-10 border"></div>

          <h3 className="text-2xl font-bold">
            Vision
          </h3>

          <p className="mt-4 text-gray-600 leading-8">
            Become one of the world's most admired lifestyle and fashion
            companies by creating premium brands for every generation.
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-5xl font-bold">
              Our Brand Portfolio
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Every NextGrid brand is built with a unique identity while
              sharing the same commitment to quality, innovation and
              customer experience.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {brands.map((brand) => (
              <Link
                key={brand.title}
                href={brand.href}
                className="group rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-violet-600">
                    {brand.subtitle}
                  </p>

                  {brand.status && (
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
                      {brand.status}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-2xl font-bold group-hover:text-violet-600">
                  {brand.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-600">
                  {brand.description}
                </p>

                <div className="mt-8 font-semibold text-violet-600">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-12 text-white">
          <h2 className="text-4xl font-bold">
            Looking Ahead
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-violet-100">
            Our roadmap includes expanding into new fashion categories,
            sustainable manufacturing, AI-powered shopping experiences,
            omnichannel retail, and global brand partnerships. We are
            building a future-ready ecosystem designed to inspire
            confidence and redefine modern fashion.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            Join the NextGrid Journey
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Explore our growing collection of premium brands and discover
            how innovation, creativity and quality come together to shape
            the future of fashion.
          </p>

          <Link
            href="/nextgrid-style"
            className="mt-10 inline-flex rounded-xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-violet-700"
          >
            Explore Brands
          </Link>
        </div>
      </section>
    </main>
  );
}