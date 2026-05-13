import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  const categories = [
    {
      title: "MEN",
      subtitle: "Luxury Streetwear",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
    },

    {
      title: "WOMEN",
      subtitle: "Modern Elegance",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2000&auto=format&fit=crop",
    },

    {
      title: "CHILDREN",
      subtitle: "Future Fashion",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=2000&auto=format&fit=crop",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2400&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2400&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2400&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2400&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2400&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=2400&auto=format&fit=crop",
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">
      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* BIG HERO IMAGE */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="group relative overflow-hidden rounded-[45px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2600&auto=format&fit=crop"
            alt="Luxury Fashion"
            className="h-[950px] w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-14 left-14">
            <p className="mb-4 text-sm tracking-[0.4em] text-white/70">
              NEW COLLECTION
            </p>

            <h1 className="max-w-2xl text-6xl font-black leading-tight md:text-8xl">
              FUTURE OF LUXURY FASHION
            </h1>
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[650px] w-full object-cover transition duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10">
                <p className="mb-2 text-sm tracking-[0.3em] text-white/70">
                  {item.subtitle}
                </p>

                <h2 className="text-5xl font-black tracking-[0.25em]">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="group overflow-hidden rounded-[45px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2400&auto=format&fit=crop"
              alt="Men Fashion"
              className="h-[750px] w-full object-cover transition duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="group overflow-hidden rounded-[45px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2400&auto=format&fit=crop"
              alt="Women Fashion"
              className="h-[750px] w-full object-cover transition duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* TEXT SECTION */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="mb-6 text-sm tracking-[0.5em] text-white/50">
          NEXT GENERATION STYLE
        </p>

        <h2 className="text-5xl font-black leading-tight md:text-7xl">
          Designed For Those
          <span className="block text-white/60">
            Who Define The Future
          </span>
        </h2>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[35px] border border-white/10"
            >
              <img
                src={image}
                alt="Gallery"
                className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FULL WIDTH LUXURY SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="group relative overflow-hidden rounded-[50px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=2800&auto=format&fit=crop"
            alt="Luxury"
            className="h-[1000px] w-full object-cover transition duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

          <div className="absolute left-16 top-1/2 max-w-xl -translate-y-1/2">
            <p className="mb-5 text-sm tracking-[0.5em] text-white/60">
              EXCLUSIVE DROP
            </p>

            <h2 className="mb-6 text-6xl font-black leading-tight">
              ELEVATE
              <span className="block text-white/50">
                YOUR STYLE
              </span>
            </h2>

            <button className="rounded-full border border-white/20 bg-white px-10 py-4 text-sm font-bold tracking-[0.3em] text-black transition hover:scale-105">
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      
  
    </main>
  );
}