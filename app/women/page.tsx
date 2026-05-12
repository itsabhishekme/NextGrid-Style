import Navbar from "@/components/Navbar";

export default function WomenPage() {
  const gallery = [
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=3200&auto=format&fit=crop",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[700px] w-[700px] rounded-full bg-purple-500/10 blur-[180px]" />

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
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=4200&auto=format&fit=crop"
            alt="Women Fashion"
            className="h-[1200px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>

      {/* GRID */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[45px] border border-white/10 bg-zinc-900"
            >
              <img
                src={image}
                alt="Women Fashion"
                className="h-[550px] w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FINAL IMAGE */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="overflow-hidden rounded-[90px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=5000&auto=format&fit=crop"
            alt="Women Luxury"
            className="h-[1500px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>
    </main>
  );
}