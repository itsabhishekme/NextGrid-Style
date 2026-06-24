import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function WomenPage() {
  const collections = [
    {
      title: "Luxury Couture",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=3200&auto=format&fit=crop",
    },
    {
      title: "Street Chic",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=3200&auto=format&fit=crop",
    },
    {
      title: "Evening Elegance",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=3200&auto=format&fit=crop",
    },
    {
      title: "Summer Bloom",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3200&auto=format&fit=crop",
    },
  ];

  const trends = [
    {
      title: "Minimal Luxury",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=3200&auto=format&fit=crop",
    },
    {
      title: "Modern Romance",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=3200&auto=format&fit=crop",
    },
    {
      title: "Urban Glamour",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=3200&auto=format&fit=crop",
    },
  ];

  const categories = [
    "Luxury Dresses",
    "Designer Handbags",
    "Premium Footwear",
    "Beauty Essentials",
    "Jewelry Collection",
    "Fashion Accessories",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-300px] top-[-300px] h-[900px] w-[900px] rounded-full bg-pink-500/10 blur-[220px]" />

        <div className="absolute bottom-[-300px] right-[-300px] h-[900px] w-[900px] rounded-full bg-purple-500/10 blur-[220px]" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative z-10 px-6 pt-[120px] lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[70px]">
          <img
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=4200&auto=format&fit=crop"
            alt="NextGrid HerStyle"
            className="h-[1000px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-16 left-12 max-w-3xl">
            <span className="mb-6 inline-flex rounded-full border border-white/20 px-6 py-2 text-sm uppercase tracking-[4px]">
              NextGrid HerStyle
            </span>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Women's Fashion
              <br />
              Beyond Trends
            </h1>

            <p className="mt-8 text-lg text-zinc-300">
              Discover timeless elegance, luxury collections, fashion
              editorials, and modern styles curated for confident women.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#collections"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Explore Collection
              </Link>

              <Link
                href="#journal"
                className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white hover:text-black"
              >
                Fashion Journal
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
            Curated Collections
          </h2>

          <p className="mt-5 text-zinc-400">
            Explore luxury fashion curated by style experts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[45px] border border-white/10 bg-zinc-900"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[650px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="rounded-[50px] border border-white/10 bg-zinc-900/50 p-10 backdrop-blur-xl">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Explore Categories
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 p-6 text-center transition hover:bg-white hover:text-black"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING LOOKS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="mb-16">
          <h2 className="text-5xl font-bold">
            Trending Looks
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {trends.map((look, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[50px] border border-white/10"
            >
              <img
                src={look.image}
                alt={look.title}
                className="h-[700px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold">
                  {look.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE STORY */}
      <section
        id="journal"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-32 lg:px-10"
      >
        <div className="overflow-hidden rounded-[80px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=5000&auto=format&fit=crop"
            alt=""
            className="h-[1300px] w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <span className="text-sm uppercase tracking-[5px] text-pink-400">
            Fashion Editorial
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Elegance Is A Form Of Expression
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            Fashion is more than clothing. It is confidence, creativity,
            individuality, and self-expression. Explore inspiring
            editorials, seasonal trends, designer stories, and luxury
            style insights crafted for modern women.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { value: "500+", label: "Luxury Brands" },
            { value: "1200+", label: "Style Guides" },
            { value: "50K+", label: "Fashion Readers" },
            { value: "100+", label: "Editorial Stories" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[40px] border border-white/10 bg-zinc-900/50 p-10 text-center backdrop-blur-xl"
            >
              <h3 className="text-4xl font-bold text-pink-400">
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
            Join NextGrid HerStyle
          </h2>

          <p className="mt-5 text-zinc-400">
            Get luxury fashion insights, trend reports, designer stories,
            beauty guides, and exclusive style inspiration.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-14 flex-1 rounded-full border border-white/10 bg-black px-6 outline-none"
            />

            <button className="h-14 rounded-full bg-white px-10 font-semibold text-black transition hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}