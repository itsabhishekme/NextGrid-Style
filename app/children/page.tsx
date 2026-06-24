import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ChildrenPage() {
  const collections = [
    {
      title: "Playtime Collection",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=3200&auto=format&fit=crop",
    },
    {
      title: "School Essentials",
      image:
        "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=3200&auto=format&fit=crop",
    },
    {
      title: "Weekend Adventure",
      image:
        "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=3200&auto=format&fit=crop",
    },
    {
      title: "Summer Fun",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=3200&auto=format&fit=crop",
    },
  ];

  const ages = [
    "0 - 2 Years",
    "3 - 5 Years",
    "6 - 8 Years",
    "9 - 12 Years",
    "Teen Collection",
    "Family Matching",
  ];

  const trends = [
    {
      title: "Colorful Adventures",
      image:
        "https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=3200&auto=format&fit=crop",
    },
    {
      title: "Happy Moments",
      image:
        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=3200&auto=format&fit=crop",
    },
    {
      title: "Creative Style",
      image:
        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=3200&auto=format&fit=crop",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[800px] w-[800px] rounded-full bg-cyan-500/10 blur-[220px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[800px] w-[800px] rounded-full bg-pink-500/10 blur-[220px]" />

        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/5 blur-[180px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px),linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative z-10 px-6 pt-[120px] lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[80px]">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=5000&auto=format&fit=crop"
            alt=""
            className="h-[1000px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          <div className="absolute bottom-16 left-12 max-w-3xl">
            <span className="rounded-full border border-white/20 px-6 py-2 text-sm uppercase tracking-[4px]">
              NextGrid LittleStyle
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
              Fashion For
              <br />
              Happy Childhoods
            </h1>

            <p className="mt-6 text-lg text-zinc-300">
              Discover playful collections, comfortable outfits,
              colorful adventures, and styles designed for every
              stage of childhood.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#collections"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black"
              >
                Explore Collection
              </Link>

              <Link
                href="#guide"
                className="rounded-full border border-white/20 px-8 py-4"
              >
                Parent Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section
        id="collections"
        className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-10"
      >
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold">
            Featured Collections
          </h2>

          <p className="mt-4 text-zinc-400">
            Comfortable, stylish, and made for everyday adventures.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[40px] border border-white/10 bg-zinc-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[600px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP BY AGE */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="rounded-[50px] border border-white/10 bg-zinc-900/50 p-12 backdrop-blur-xl">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Shop By Age
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {ages.map((age) => (
              <div
                key={age}
                className="rounded-3xl border border-white/10 p-6 text-center transition hover:bg-white hover:text-black"
              >
                {age}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="mb-16">
          <h2 className="text-5xl font-bold">
            Trending Styles
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {trends.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-[50px] border border-white/10"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[700px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARENT GUIDE */}
      <section
        id="guide"
        className="relative z-10 mx-auto max-w-5xl px-6 pb-32 text-center"
      >
        <span className="text-sm uppercase tracking-[5px] text-cyan-400">
          Parenting Style Guide
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Comfort Meets Creativity
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-zinc-400">
          Children's fashion should prioritize comfort,
          movement, durability, and self-expression.
          Explore outfit ideas and seasonal inspiration
          designed for active lifestyles.
        </p>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { value: "1000+", label: "Outfit Ideas" },
            { value: "50+", label: "Collections" },
            { value: "20K+", label: "Happy Families" },
            { value: "100+", label: "Style Articles" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[40px] border border-white/10 bg-zinc-900/50 p-10 text-center backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-cyan-400">
                {item.value}
              </h3>

              <p className="mt-3 text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative z-10 px-6 pb-32 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[60px] border border-white/10 bg-zinc-900/60 p-16 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-bold">
            Join NextGrid LittleStyle
          </h2>

          <p className="mt-4 text-zinc-400">
            Get parenting tips, seasonal trends, style guides,
            and new collection updates.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-white/10 bg-black px-6 outline-none"
            />

            <button className="h-14 rounded-full bg-white px-10 font-semibold text-black">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}