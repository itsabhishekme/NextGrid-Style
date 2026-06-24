import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function MenPage() {
  const collections = [
    {
      title: "Luxury Tailoring",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2600&auto=format&fit=crop",
    },
    {
      title: "Modern Streetwear",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=2600&auto=format&fit=crop",
    },
    {
      title: "Business Essentials",
      image:
        "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2600&auto=format&fit=crop",
    },
    {
      title: "Summer Collection",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2600&auto=format&fit=crop",
    },
  ];

  const looks = [
    {
      title: "Minimal Luxury",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2600&auto=format&fit=crop",
    },
    {
      title: "Urban Elite",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2600&auto=format&fit=crop",
    },
    {
      title: "Weekend Casual",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2600&auto=format&fit=crop",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-300px] top-[-300px] h-[800px] w-[800px] rounded-full bg-white/5 blur-[200px]" />

        <div className="absolute bottom-[-300px] right-[-300px] h-[800px] w-[800px] rounded-full bg-zinc-700/10 blur-[200px]" />

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
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=3600&auto=format&fit=crop"
            alt=""
            className="h-[1000px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          <div className="absolute bottom-16 left-12 max-w-3xl">
            <span className="mb-6 inline-flex rounded-full border border-white/20 px-6 py-2 text-sm uppercase tracking-[4px]">
              NextGrid Lifestyle
            </span>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Men's Fashion
              <br />
              Reimagined
            </h1>

            <p className="mt-8 text-lg text-zinc-300">
              Luxury tailoring, modern streetwear, timeless essentials,
              and curated collections crafted for the modern gentleman.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#collections"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Explore Collection
              </Link>

              <Link
                href="#editorial"
                className="rounded-full border border-white/20 px-8 py-4 transition hover:bg-white hover:text-black"
              >
                Fashion Editorial
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

          <p className="mt-4 text-zinc-400">
            Explore the latest styles shaping modern menswear.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[40px] border border-white/10 bg-zinc-900"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[600px] w-full object-cover transition duration-700 group-hover:scale-110"
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

      {/* FEATURED LOOKS */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="mb-16">
          <h2 className="text-5xl font-bold">
            Featured Looks
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {looks.map((look, index) => (
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

      {/* EDITORIAL */}
      <section
        id="editorial"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-32 lg:px-10"
      >
        <div className="overflow-hidden rounded-[80px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=4200&auto=format&fit=crop"
            alt=""
            className="h-[1200px] w-full object-cover"
          />
        </div>

        <div className="mx-auto mt-16 max-w-4xl text-center">
          <span className="text-sm uppercase tracking-[5px] text-zinc-500">
            Editorial Feature
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Style Is More Than Clothing
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-zinc-400">
            True style is the intersection of confidence, personality,
            and craftsmanship. Discover curated fashion stories,
            seasonal inspirations, and modern luxury trends designed
            for ambitious men.
          </p>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="relative z-10 px-6 pb-32 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[60px] border border-white/10 bg-zinc-900/60 p-16 text-center backdrop-blur-xl">
          <h2 className="text-4xl font-bold">
            Join NextGrid Lifestyle
          </h2>

          <p className="mt-4 text-zinc-400">
            Receive luxury fashion insights, trend reports,
            style guides, and curated collections.
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