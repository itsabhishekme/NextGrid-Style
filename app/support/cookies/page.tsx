export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-24 border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-neutral-300 rounded-full px-5 py-2 text-sm font-medium mb-8 bg-white shadow-sm">
            Privacy • Transparency • Protection
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none max-w-4xl">
            Cookies
            <span className="block text-neutral-400">Policy</span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-neutral-600 max-w-3xl">
            This Cookies Policy explains how our platform uses cookies,
            analytics technologies, and related tools to deliver a faster,
            safer, and more personalized browsing experience across the website.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="px-5 py-3 rounded-2xl bg-black text-white text-sm font-medium">
              Secure Browsing
            </div>

            <div className="px-5 py-3 rounded-2xl border border-neutral-300 text-sm font-medium">
              User Privacy
            </div>

            <div className="px-5 py-3 rounded-2xl border border-neutral-300 text-sm font-medium">
              Data Transparency
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="border border-neutral-200 rounded-3xl p-8 bg-neutral-50">
              <h3 className="text-2xl font-bold mb-6">
                Quick Navigation
              </h3>

              <div className="space-y-4 text-neutral-700">
                <a href="#what-are-cookies" className="block hover:text-black transition">
                  What Are Cookies
                </a>

                <a href="#how-we-use" className="block hover:text-black transition">
                  How We Use Cookies
                </a>

                <a href="#cookie-types" className="block hover:text-black transition">
                  Types of Cookies
                </a>

                <a href="#analytics" className="block hover:text-black transition">
                  Analytics & Performance
                </a>

                <a href="#security" className="block hover:text-black transition">
                  Security Usage
                </a>

                <a href="#preferences" className="block hover:text-black transition">
                  User Preferences
                </a>

                <a href="#disable" className="block hover:text-black transition">
                  Managing Cookies
                </a>

                <a href="#updates" className="block hover:text-black transition">
                  Policy Updates
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Section */}
            <section id="what-are-cookies">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  01
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                What Are Cookies?
              </h2>

              <p className="text-lg leading-9 text-neutral-700">
                Cookies are small text files stored on your device when you visit
                a website. They help websites recognize users, remember settings,
                maintain login sessions, improve performance, and create a more
                personalized browsing experience.
              </p>

              <p className="text-lg leading-9 text-neutral-700 mt-6">
                These files do not typically contain personally identifiable
                information, but they may be linked to account preferences and
                browsing behavior to optimize website functionality and improve
                user experience over time.
              </p>
            </section>

            {/* Section */}
            <section id="how-we-use">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  02
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                How We Use Cookies
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-neutral-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Essential Operations
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Cookies help maintain core website functionality including
                    navigation, login sessions, shopping carts, and secure
                    authentication systems.
                  </p>
                </div>

                <div className="border border-neutral-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Personalized Experience
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    We use cookies to remember language settings, display
                    preferences, and recently viewed content to create a more
                    relevant browsing experience.
                  </p>
                </div>

                <div className="border border-neutral-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Website Analytics
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Analytics cookies help us understand visitor interactions,
                    traffic sources, page engagement, and performance metrics to
                    improve the platform continuously.
                  </p>
                </div>

                <div className="border border-neutral-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Security Monitoring
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Certain cookies help detect suspicious activities, prevent
                    fraud, and improve platform security for all visitors and
                    registered users.
                  </p>
                </div>
              </div>
            </section>

            {/* Section */}
            <section id="cookie-types">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  03
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Types of Cookies We Use
              </h2>

              <div className="space-y-6">
                <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
                  <h3 className="text-2xl font-semibold mb-3">
                    Session Cookies
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Temporary cookies that remain active only during your browser
                    session and are automatically deleted once the browser is closed.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
                  <h3 className="text-2xl font-semibold mb-3">
                    Persistent Cookies
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Persistent cookies remain on your device for a specific
                    duration and help remember preferences and recurring visits.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
                  <h3 className="text-2xl font-semibold mb-3">
                    Functional Cookies
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    These cookies enhance usability by remembering user choices
                    such as themes, language preferences, and interface settings.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
                  <h3 className="text-2xl font-semibold mb-3">
                    Performance Cookies
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Performance cookies collect aggregated information about how
                    users interact with the website to improve speed, usability,
                    and overall platform performance.
                  </p>
                </div>
              </div>
            </section>

            {/* Analytics */}
            <section id="analytics">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  04
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Analytics & Performance Tracking
              </h2>

              <p className="text-lg leading-9 text-neutral-700">
                We may use analytics tools and measurement technologies to better
                understand website performance, visitor engagement, and content
                effectiveness. This helps us optimize loading speed, navigation,
                accessibility, and user experience across devices.
              </p>

              <div className="mt-8 border border-neutral-200 rounded-3xl p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <h4 className="text-4xl font-black">99%</h4>
                    <p className="mt-2 text-neutral-600">
                      Performance Monitoring
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-black">24/7</h4>
                    <p className="mt-2 text-neutral-600">
                      Security Observation
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-black">Fast</h4>
                    <p className="mt-2 text-neutral-600">
                      Optimized Experience
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-black">Secure</h4>
                    <p className="mt-2 text-neutral-600">
                      Protected Sessions
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Managing */}
            <section id="disable">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  05
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Managing & Disabling Cookies
              </h2>

              <p className="text-lg leading-9 text-neutral-700">
                Most browsers allow users to manage cookie settings, including
                blocking, deleting, or restricting cookie usage. Disabling some
                cookies may impact website functionality, user sessions, and
                personalized features.
              </p>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-neutral-200 p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Browser Controls
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Modern browsers provide settings to review stored cookies,
                    remove existing cookies, or restrict future cookie usage.
                  </p>
                </div>

                <div className="rounded-3xl border border-neutral-200 p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Privacy Preferences
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Users may customize privacy preferences depending on device,
                    browser, and consent management configurations.
                  </p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section id="updates">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  06
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Updates To This Policy
              </h2>

              <p className="text-lg leading-9 text-neutral-700">
                We may update this Cookies Policy periodically to reflect changes
                in technology, regulations, website functionality, or security
                practices. Updated versions will be published on this page with
                revised effective dates when applicable.
              </p>

              <div className="mt-10 p-10 rounded-[2rem] bg-black text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Your Privacy Matters
                </h3>

                <p className="text-neutral-300 leading-8 text-lg">
                  We are committed to maintaining transparency, protecting user
                  information, and delivering a secure digital experience across
                  all areas of the platform.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}