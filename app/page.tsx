import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

async function wait() {
  return new Promise((resolve) =>
    setTimeout(resolve, 5000)
  );
}

export default async function Home() {
  await wait();

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

  const products = [
    {
      name: "Midnight Leather Jacket",
      price: "$599",
      image:
        "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000",
    },
    {
      name: "Luxury Oversized Coat",
      price: "$799",
      image:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000",
    },
    {
      name: "Signature Sneakers",
      price: "$299",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000",
    },
    {
      name: "Premium Collection",
      price: "$999",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2000",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_40%)]" />

      <Navbar />
      <Hero />

      {/* Featured Hero Banner */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="group relative overflow-hidden rounded-[50px] border border-white/10">

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=2600"
            alt="Luxury Fashion"
            className="h-[950px] w-full object-cover duration-1000 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

          <div className="absolute bottom-16 left-16">

            <span className="mb-4 inline-block rounded-full border border-white/20 px-5 py-2 text-xs tracking-[0.4em]">
              NEW ARRIVAL
            </span>

            <h1 className="max-w-3xl text-7xl font-black leading-none md:text-9xl">
              FUTURE OF LUXURY
            </h1>

          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-16 text-center">

          <p className="tracking-[0.4em] text-white/60">
            DISCOVER
          </p>

          <h2 className="mt-4 text-6xl font-black">
            SHOP BY CATEGORY
          </h2>

        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {categories.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[40px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[700px] w-full object-cover duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

              <div className="absolute bottom-10 left-10">
                <p className="text-sm tracking-[0.3em] text-white/70">
                  {item.subtitle}
                </p>

                <h2 className="mt-2 text-5xl font-black">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Trending Products */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-16 text-center">

          <p className="tracking-[0.4em] text-white/60">
            TRENDING NOW
          </p>

          <h2 className="mt-4 text-6xl font-black">
            FEATURED PRODUCTS
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {products.map((product, index) => (

            <div
              key={index}
              className="group rounded-[30px] border border-white/10 bg-white/5 p-4 backdrop-blur-lg"
            >

              <div className="overflow-hidden rounded-[24px]">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[420px] w-full object-cover duration-700 group-hover:scale-105"
                />

              </div>

              <div className="mt-5">

                <h3 className="text-xl font-semibold">
                  {product.name}
                </h3>

                <p className="mt-2 text-white/70">
                  {product.price}
                </p>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Statistics */}
      <section className="border-y border-white/10 py-24">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-4">

          <div>
            <h3 className="text-6xl font-black">50K+</h3>
            <p className="mt-3 text-white/60">Customers</p>
          </div>

          <div>
            <h3 className="text-6xl font-black">120+</h3>
            <p className="mt-3 text-white/60">Collections</p>
          </div>

          <div>
            <h3 className="text-6xl font-black">35+</h3>
            <p className="mt-3 text-white/60">Countries</p>
          </div>

          <div>
            <h3 className="text-6xl font-black">15+</h3>
            <p className="mt-3 text-white/60">Awards</p>
          </div>

        </div>

      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">

        <h2 className="text-6xl font-black">
          JOIN OUR WORLD
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-white/60">
          Subscribe for exclusive launches,
          premium collections and member-only access.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">

          <input
            type="email"
            placeholder="Enter your email"
            className="h-16 flex-1 rounded-full border border-white/10 bg-white/5 px-8 outline-none"
          />

          <button className="h-16 rounded-full bg-white px-10 font-bold text-black">
            SUBSCRIBE
          </button>

        </div>

      </section>

    </main>
  );
}