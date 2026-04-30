import LinkButton from "@/src/buttons/link-button";

export default function Home() {
  return (
    <main
      className="min-h-screen px-16 py-24"
      style={{ background: 'var(--background)', fontFamily: 'var(--font-inter)' }}
    >

      {/* HERO */}
      <div className="flex flex-col items-center text-center mb-28">
        <h1
          className="font-bold fade-in"
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Brigit Parrish
        </h1>
        <p className="mt-4 text-lg tracking-wide opacity-70 fade-in-delay">
          Software Engineer · Seattle, WA
        </p>
        <div className="flex flex-row gap-14 mt-10 fade-in-delay-2">
          <LinkButton label="Resume" href="/brigit-parrish-resume.pdf" />
          <LinkButton label="LinkedIn" href="https://linkedin.com/in/brigitparrish" />
          <LinkButton label="GitHub" href="https://github.com/brigit-parrish" />
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto border-t border-black/10 mb-20" />

      {/* MAIN CONTENT */}
      <div className="flex flex-row gap-20 max-w-5xl mx-auto">

        {/* LEFT SIDEBAR NAV */}
        <nav className="sticky top-24 h-fit flex flex-col gap-5 w-40 shrink-0">
          <a href="#about" className="text-sm font-semibold uppercase tracking-widest hover:opacity-40 transition-opacity">About</a>
          <a href="#experience" className="text-sm font-semibold uppercase tracking-widest hover:opacity-40 transition-opacity">Experience</a>
          <a href="#projects" className="text-sm font-semibold uppercase tracking-widest hover:opacity-40 transition-opacity">Projects</a>
          <a href="#passions" className="text-sm font-semibold uppercase tracking-widest hover:opacity-40 transition-opacity">Passions</a>
        </nav>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-28 flex-1 min-w-0">

          {/* ABOUT */}
          <section id="about">
            <h2
              className="font-bold mb-5"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem' }}
            >
              About
            </h2>
            <p className="text-base leading-8 opacity-80">
              Hi! I'm Brigit, a software engineer based in Seattle, WA. I graduated from the University of Washington with a BS in Computer Science & Engineering and currently work at EquipmentShare on the Demand Capture team, where I ship customer-facing features end-to-end in a large-scale React/TypeScript/Next.js monorepo. I care deeply about building things that feel intuitive and delightful to use.
            </p>
          </section>

          {/* EXPERIENCE */}
          <section id="experience">
            <h2
              className="font-bold mb-8"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem' }}
            >
              Experience
            </h2>
            <div className="flex flex-col gap-10">

              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between items-baseline">
                  <p className="text-base font-semibold">EquipmentShare</p>
                  <p className="text-xs opacity-50">Jan 2024 – Present</p>
                </div>
                <p className="text-sm opacity-50 mb-3">Software Engineer I · Demand Capture · Remote</p>
                <ul className="flex flex-col gap-2 list-disc list-outside ml-4">
                  <li className="text-sm leading-7 opacity-80">Build and maintain a quotes web application within a large-scale React/TypeScript/Next.js monorepo, shipping customer-facing features end-to-end from component design through Cypress integration testing.</li>
                  <li className="text-sm leading-7 opacity-80">Delivered a used fleet quoting feature end-to-end: designed the component architecture, implemented mutual exclusivity validation between used fleet and rental line items, and enforced branch mismatch checks using Yup and React Hook Form.</li>
                  <li className="text-sm leading-7 opacity-80">Built a market rate verification flow: S3 presigned URL file uploads, below-floor rate detection, form validation, quote duplication support, and Cypress integration tests.</li>
                  <li className="text-sm leading-7 opacity-80">Shipped an optimal rates feature with a rate card UI, customization workflow, geographic area and utilization display, and a full Cypress test suite.</li>
                  <li className="text-sm leading-7 opacity-80">Extended the quote form with sub-renter fields, Zustand store updates, conditional validation, and IndexedDB autosave/restore integration.</li>
                </ul>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex flex-row justify-between items-baseline">
                  <p className="text-base font-semibold">EquipmentShare</p>
                  <p className="text-xs opacity-50">Jun – Aug 2023</p>
                </div>
                <p className="text-sm opacity-50 mb-3">Software Engineer Intern · Telematics · Columbia, MO</p>
                <ul className="flex flex-col gap-2 list-disc list-outside ml-4">
                  <li className="text-sm leading-7 opacity-80">Built a Kafka consumer to ingest and process real-time tracker telemetry, identifying aggressive-driving events and evaluating device performance against configurable thresholds.</li>
                  <li className="text-sm leading-7 opacity-80">Developed a health-status dashboard for field installers featuring a bar chart with a dynamic threshold line, enabling real-time pass/fail assessment of device installations.</li>
                  <li className="text-sm leading-7 opacity-80">Implemented backend logic in Python with DynamoDB and AWS CDK, and frontend components in React/JavaScript.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <h2
              className="font-bold mb-5"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem' }}
            >
              Projects
            </h2>
            
            <a
              href="https://job-radar-4vrf.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', display: 'block', maxWidth: '320px' }}
            >
              <div
                className="rounded-2xl overflow-hidden transition-all hover:scale-[1.02]"
                style={{ border: '1px solid rgba(0,0,0,0.08)', background: 'rgba(0,0,0,0.02)' }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ height: '120px', background: '#111113' }}
                >
                  <iframe
                    src="https://job-radar-4vrf.vercel.app"
                    style={{
                      width: '150%',
                      height: '150%',
                      transform: 'scale(0.67)',
                      transformOrigin: 'top left',
                      border: 'none',
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ position: 'absolute', inset: 0 }} />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                      Job Radar
                    </p>
                    <p className="text-xs opacity-40" style={{ fontFamily: 'var(--font-inter)' }}>
                      2026 ↗
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed opacity-60" style={{ fontFamily: 'var(--font-inter)' }}>
                    AI-powered job application tracker using Gmail, Claude AI, and Google Calendar.
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {['Next.js', 'Claude AI', 'Gmail API', 'Supabase'].map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(0,0,0,0.06)', fontFamily: 'var(--font-inter)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>

            <p className="text-sm mt-4 opacity-60" style={{ fontFamily: 'var(--font-inter)' }}>
              Want to try it?{' '}
              <a
                href="mailto:brigitjacqueline@gmail.com"
                style={{ textDecoration: 'underline', opacity: 1 }}
              >
                Reach out
              </a>
              {' '}and I'll add you as a test user.
            </p>

          </section>

      
          {/* PASSIONS */}
          <section id="passions">
            <h2
              className="font-bold mb-5"
              style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem' }}
            >
              Passions
            </h2>
            <p className="text-base leading-8 opacity-80">
              Outside of work I love strength training, exploring Seattle car-free, and spending time with my cats Ollie and Kona. I care a lot about building things that feel good to use — whether that's a web app or finding the perfect coffee spot in the city.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}