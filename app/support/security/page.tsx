export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-24 border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 via-white to-white" />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 border border-neutral-300 rounded-full px-5 py-2 text-sm font-medium mb-8 bg-white shadow-sm">
            Protection • Privacy • Infrastructure
          </div>

          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none max-w-4xl">
            Security
            <span className="block text-neutral-400">
              & Protection
            </span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-neutral-600 max-w-3xl">
            Our platform is designed with security-focused systems,
            encrypted technologies, and continuous monitoring practices
            to help protect user information, platform integrity, and
            digital experiences across all devices.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="px-5 py-3 rounded-2xl bg-black text-white text-sm font-medium">
              Encrypted Connections
            </div>

            <div className="px-5 py-3 rounded-2xl border border-neutral-300 text-sm font-medium">
              Secure Infrastructure
            </div>

            <div className="px-5 py-3 rounded-2xl border border-neutral-300 text-sm font-medium">
              Privacy Protection
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="border border-neutral-200 rounded-3xl p-8 bg-neutral-50">
              <h3 className="text-2xl font-bold mb-6">
                Security Topics
              </h3>

              <div className="space-y-4 text-neutral-700">
                <a href="#data-protection" className="block hover:text-black transition">
                  Data Protection
                </a>

                <a href="#account-safety" className="block hover:text-black transition">
                  Account Safety
                </a>

                <a href="#secure-infrastructure" className="block hover:text-black transition">
                  Secure Infrastructure
                </a>

                <a href="#encryption" className="block hover:text-black transition">
                  Encryption Systems
                </a>

                <a href="#monitoring" className="block hover:text-black transition">
                  Monitoring & Detection
                </a>

                <a href="#privacy" className="block hover:text-black transition">
                  Privacy Standards
                </a>

                <a href="#responsibility" className="block hover:text-black transition">
                  User Responsibility
                </a>

                <a href="#future-updates" className="block hover:text-black transition">
                  Future Improvements
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Section */}
            <section id="data-protection">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  01
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Data Protection
              </h2>

              <p className="text-lg leading-9 text-neutral-700">
                Protecting user data is a fundamental part of our platform
                architecture and operational standards. We use modern security
                technologies, secure transmission protocols, and protective
                infrastructure layers to reduce risks associated with
                unauthorized access or misuse.
              </p>

              <p className="text-lg leading-9 text-neutral-700 mt-6">
                Security measures are continuously evaluated and improved
                to align with evolving technologies, platform requirements,
                and digital protection standards.
              </p>
            </section>

            {/* Section */}
            <section id="account-safety">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  02
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Account Safety
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-neutral-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Strong Passwords
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Users are encouraged to create strong passwords with
                    unique combinations of letters, symbols, and numbers
                    to strengthen account protection.
                  </p>
                </div>

                <div className="border border-neutral-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Login Awareness
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Users should avoid sharing credentials and should
                    monitor account activity regularly for any unusual
                    or unauthorized behavior.
                  </p>
                </div>

                <div className="border border-neutral-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Secure Devices
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Accessing accounts through secure and updated devices
                    helps reduce exposure to vulnerabilities, malware,
                    and unauthorized access attempts.
                  </p>
                </div>

                <div className="border border-neutral-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Session Protection
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Authentication systems and session management tools
                    are designed to help maintain secure browsing and
                    account continuity.
                  </p>
                </div>
              </div>
            </section>

            {/* Infrastructure */}
            <section id="secure-infrastructure">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  03
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Secure Infrastructure
              </h2>

              <p className="text-lg leading-9 text-neutral-700">
                Our systems are built using secure infrastructure practices
                designed to support reliability, performance, and operational
                protection. Security monitoring tools and controlled access
                systems help maintain platform integrity.
              </p>

              <div className="mt-10 space-y-6">
                <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-8">
                  <h3 className="text-2xl font-semibold mb-3">
                    Cloud Protection
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Modern hosting environments and secure infrastructure
                    frameworks help maintain stable and protected digital
                    operations.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-8">
                  <h3 className="text-2xl font-semibold mb-3">
                    Access Control
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Restricted administrative access and verification
                    procedures help minimize risks associated with
                    unauthorized system interactions.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-8">
                  <h3 className="text-2xl font-semibold mb-3">
                    Continuous Maintenance
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Systems are reviewed and maintained regularly to
                    strengthen security posture and improve reliability.
                  </p>
                </div>
              </div>
            </section>

            {/* Encryption */}
            <section id="encryption">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  04
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Encryption & Secure Communication
              </h2>

              <p className="text-lg leading-9 text-neutral-700">
                Encrypted communication technologies help secure data
                transfers between users and platform systems. Security
                protocols are implemented to reduce interception risks
                and maintain protected interactions during browsing,
                authentication, and platform usage.
              </p>

              <div className="mt-10 border border-neutral-200 rounded-3xl p-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <h4 className="text-4xl font-black">
                      24/7
                    </h4>

                    <p className="mt-2 text-neutral-600">
                      Monitoring Systems
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-black">
                      Secure
                    </h4>

                    <p className="mt-2 text-neutral-600">
                      Protected Sessions
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-black">
                      Modern
                    </h4>

                    <p className="mt-2 text-neutral-600">
                      Infrastructure
                    </p>
                  </div>

                  <div>
                    <h4 className="text-4xl font-black">
                      Safe
                    </h4>

                    <p className="mt-2 text-neutral-600">
                      Data Handling
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Monitoring */}
            <section id="monitoring">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  05
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Monitoring & Threat Detection
              </h2>

              <p className="text-lg leading-9 text-neutral-700">
                Security monitoring systems help identify unusual
                behaviors, unauthorized access attempts, suspicious
                activities, and potential vulnerabilities across the
                platform environment.
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-3xl border border-neutral-200 p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Real-Time Observation
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Monitoring tools operate continuously to detect
                    anomalies and maintain operational awareness.
                  </p>
                </div>

                <div className="rounded-3xl border border-neutral-200 p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Risk Prevention
                  </h3>

                  <p className="text-neutral-700 leading-8">
                    Preventive measures help reduce the likelihood
                    of disruptions, abuse, and malicious activities.
                  </p>
                </div>
              </div>
            </section>

            {/* Responsibility */}
            <section id="responsibility">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  06
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                User Responsibility
              </h2>

              <p className="text-lg leading-9 text-neutral-700">
                Security is a shared responsibility between users and
                platform systems. Users are encouraged to maintain
                updated software, use secure networks, and avoid sharing
                confidential credentials with unauthorized individuals.
              </p>

              <div className="mt-10 bg-neutral-50 rounded-[2rem] border border-neutral-200 p-10">
                <h3 className="text-3xl font-bold mb-4">
                  Best Security Practices
                </h3>

                <ul className="space-y-4 text-lg text-neutral-700 leading-8">
                  <li>• Use strong and unique passwords.</li>
                  <li>• Keep browsers and devices updated.</li>
                  <li>• Avoid suspicious links or downloads.</li>
                  <li>• Protect account credentials and sessions.</li>
                  <li>• Log out from shared or public devices.</li>
                </ul>
              </div>
            </section>

            {/* Future */}
            <section id="future-updates">
              <div className="mb-6">
                <span className="text-sm uppercase tracking-[0.3em] text-neutral-400">
                  07
                </span>
              </div>

              <h2 className="text-4xl font-bold mb-6">
                Continuous Security Improvements
              </h2>

              <p className="text-lg leading-9 text-neutral-700">
                Security technologies and operational standards evolve
                continuously. We regularly evaluate infrastructure,
                processes, and protection systems to improve platform
                safety, stability, and resilience over time.
              </p>

              <div className="mt-10 p-10 rounded-[2rem] bg-black text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Security Is Our Priority
                </h3>

                <p className="text-neutral-300 leading-8 text-lg">
                  We remain committed to maintaining a secure digital
                  environment through responsible practices, modern
                  infrastructure, and continuous security awareness.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}