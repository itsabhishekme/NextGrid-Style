import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  const categories = [
    {
      title: "MEN",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1800&auto=format&fit=crop",
    },

    {
      title: "WOMEN",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1800&auto=format&fit=crop",
    },

    {
      title: "CHILDREN",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1800&auto=format&fit=crop",
    },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1800&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1800&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1800&auto=format&fit=crop",
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* MAIN BIG IMAGE */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="overflow-hidden rounded-[45px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2400&auto=format&fit=crop"
            alt="Fashion"
            className="h-[900px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* MEN WOMEN CHILDREN */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[35px] border border-white/10 bg-zinc-900"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-8 text-center">
                <h2 className="text-4xl font-black tracking-[0.3em]">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LARGE IMAGE SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-[40px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2200&auto=format&fit=crop"
              alt="Men Fashion"
              className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-[40px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2200&auto=format&fit=crop"
              alt="Women Fashion"
              className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="overflow-hidden rounded-[45px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2400&auto=format&fit=crop"
            alt="Luxury"
            className="h-[750px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[35px] border border-white/10"
            >
              <img
                src={image}
                alt="Gallery"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CHILDREN BIG SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="overflow-hidden rounded-[45px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2400&auto=format&fit=crop"
            alt="Children"
            className="h-[850px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* EXTRA GRID */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="overflow-hidden rounded-[35px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1800&auto=format&fit=crop"
              alt="Fashion"
              className="h-[450px] w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-[35px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1800&auto=format&fit=crop"
              alt="Fashion"
              className="h-[450px] w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>

          <div className="overflow-hidden rounded-[35px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1800&auto=format&fit=crop"
              alt="Fashion"
              className="h-[450px] w-full object-cover transition duration-700 hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* FINAL LARGE IMAGE */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12">
        <div className="overflow-hidden rounded-[50px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2600&auto=format&fit=crop"
            alt="Fashion Banner"
            className="h-[950px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>
    </main>
  );
}