import Navbar from "@/components/Navbar";

export default function ChildrenPage() {
  const gallery = [
    "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1476234251651-f353703a034d?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=3200&auto=format&fit=crop",

    "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=3200&auto=format&fit=crop",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-250px] top-[-250px] h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute right-[-250px] bottom-[-250px] h-[700px] w-[700px] rounded-full bg-pink-500/10 blur-[180px]" />

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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[80px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=5000&auto=format&fit=crop"
            alt="Children Fashion"
            className="h-[1300px] w-full object-cover transition duration-700 hover:scale-105"
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
                alt="Children Fashion"
                className="h-[550px] w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>

      {/* FINAL HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10">
        <div className="overflow-hidden rounded-[100px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=6000&auto=format&fit=crop"
            alt="Children Fashion"
            className="h-[1600px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </section>
    </main>
  );
}