import Navbar from "@/components/Navbar";

export default function MenPage() {
  const gallery = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=2600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=2600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2600&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2600&auto=format&fit=crop",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-white/5 blur-[180px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[700px] w-[700px] rounded-full bg-zinc-700/10 blur-[180px]" />

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
      <section className="relative z-10 px-6 pt-[130px] lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[70px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=3600&auto=format&fit=crop"
            alt="Luxury Men"
            className="h-[1200px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[45px] border border-white/10 bg-zinc-900"
            >
              <img
                src={image}
                alt="Men Fashion"
                className="h-[550px] w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* HUGE IMAGE */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="overflow-hidden rounded-[80px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=4200&auto=format&fit=crop"
            alt="Luxury Fashion"
            className="h-[1400px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>
    </main>
  );
}