export default function AboutPage() {
  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div className="text-center">
        <h1
          className="
            text-5xl
            md:text-7xl
            font-black
            uppercase
            tracking-[0.2em]
          "
        >
          About NextGrid
        </h1>

        <p
          className="
            mt-8
            max-w-2xl
            text-zinc-400
            text-lg
            leading-9
          "
        >
          NextGrid Style is a premium futuristic fashion
          platform for men, women and children built with
          Next.js, Tailwind CSS, Framer Motion and
          Capacitor mobile app technology.
        </p>
      </div>
    </main>
  );
}