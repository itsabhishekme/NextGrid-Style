"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const collections = [
    {
      title: "MEN",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "WOMEN",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      title: "CHILDREN",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[140px]" />

        <div className="absolute right-[-200px] bottom-[-200px] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">
        {/* HERO BIG IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="overflow-hidden rounded-[40px] border border-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1800&auto=format&fit=crop"
            alt="Fashion"
            className="h-[850px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

          <div className="absolute bottom-10 left-10">
            <h1 className="text-6xl font-black md:text-8xl">
              FASHION
            </h1>
          </div>
        </motion.div>

        {/* COLLECTIONS */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/5"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h2 className="text-3xl font-black tracking-[0.2em]">
                  {item.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXTRA IMAGE SECTION */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* MEN LARGE */}
          <div className="overflow-hidden rounded-[35px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1600&auto=format&fit=crop"
              alt="Men Fashion"
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* WOMEN LARGE */}
          <div className="overflow-hidden rounded-[35px] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600&auto=format&fit=crop"
              alt="Women Fashion"
              className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* CHILDREN BANNER */}
        <div className="mt-14 overflow-hidden rounded-[40px] border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1800&auto=format&fit=crop"
            alt="Children Fashion"
            className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}