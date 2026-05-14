import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Crown,
  Flame,
  Globe2,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "NextGrid Fashion Blog | Luxury Fashion, Streetwear & Lifestyle",
  description:
    "Luxury fashion, streetwear culture, futuristic lifestyle, premium trends, and modern fashion inspiration.",
  keywords: [
    "NextGrid",
    "Fashion Blog",
    "Luxury Fashion",
    "Streetwear",
    "Lifestyle",
    "Fashion Trends",
    "Modern Fashion",
    "Future Fashion",
  ],
  openGraph: {
    title: "NextGrid Fashion Blog",
    description:
      "Luxury fashion, streetwear culture, premium lifestyle, and modern trends.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
};

const categories = [
  "Luxury",
  "Streetwear",
  "Lifestyle",
  "Runway",
  "Culture",
  "Sneakers",
  "Minimal",
  "Future",
];

const features = [
  {
    icon: Crown,
    title: "Luxury Editorials",
  },
  {
    icon: Globe2,
    title: "Global Trends",
  },
  {
    icon: Zap,
    title: "Future Fashion",
  },
  {
    icon: ShieldCheck,
    title: "Premium Lifestyle",
  },
];

const featuredPost = {
  title: "The Future Of Streetwear In 2026",
  category: "Fashion Trends",
  date: "August 10, 2026",
  readTime: "6 min read",
  image:
    "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1800&auto=format&fit=crop",
};

const posts = [
  {
    title: "Minimal Fashion Essentials",
    category: "Style Guide",
    date: "August 08, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Top Luxury Sneakers",
    category: "Sneakers",
    date: "August 05, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gen-Z Fashion Culture",
    category: "Culture",
    date: "August 02, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Luxury Meets Comfort",
    category: "Luxury",
    date: "July 18, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Streetwear & Luxury Fashion",
    category: "Streetwear",
    date: "July 10, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Future Fashion Styling",
    category: "Technology",
    date: "July 04, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-50 overflow-hidden">
        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-[180px]" />

        <div className="absolute bottom-[-220px] right-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-zinc-300">
              <Sparkles className="h-4 w-4" />
              NextGrid Fashion Blog
            </div>

            <h1 className="text-5xl font-black uppercase tracking-[0.08em] sm:text-7xl xl:text-8xl">
              Future Fashion &
              <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                Modern Culture
              </span>
            </h1>

            <div className="mx-auto mt-12 flex max-w-2xl items-center rounded-3xl border border-white/10 bg-white/5 px-5 backdrop-blur-xl">
              <Search className="h-5 w-5 text-zinc-500" />

              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-transparent px-4 py-5 text-white outline-none placeholder:text-zinc-500"
              />

              <button className="rounded-2xl bg-white px-6 py-3 text-sm font-black uppercase tracking-[0.15em] text-black transition hover:scale-105">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 transition-all duration-300 hover:bg-white hover:text-black"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[32px] border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-white p-4 text-black">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-black uppercase tracking-[0.05em]">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="relative h-[650px] overflow-hidden rounded-[40px] border border-white/10">
            <Image
              src={featuredPost.image}
              alt={featuredPost.title}
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-black">
                <Flame size={12} />
                Featured Story
              </div>

              <h2 className="mt-5 text-4xl font-black uppercase leading-tight tracking-[0.06em]">
                {featuredPost.title}
              </h2>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
              {featuredPost.category}
            </span>

            <h2 className="text-5xl font-black uppercase leading-tight tracking-[0.06em]">
              Future Streetwear Meets Luxury
            </h2>

            <div className="mt-8 flex items-center gap-6 text-xs uppercase tracking-[0.18em] text-zinc-500">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {featuredPost.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                {featuredPost.readTime}
              </div>
            </div>

            <button className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-black transition hover:scale-105">
              Read Article
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="mb-14">
          <h2 className="text-4xl font-black uppercase tracking-[0.08em]">
            Latest Articles
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="p-7">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                  {post.category}
                </span>

                <h3 className="mt-5 text-2xl font-black uppercase leading-snug tracking-[0.05em]">
                  {post.title}
                </h3>

                <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-zinc-500">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {post.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <button className="mt-7 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-white">
                  Read More
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}