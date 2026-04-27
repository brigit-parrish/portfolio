import LinkButton from "@/src/buttons/link-button";

export default function Home() {
  return (
    <main className="min-h-screen px-16 py-24" style={{ background: 'var(--background)' }}>

      {/* HERO */}
      <div className="flex flex-col items-center text-center mb-24">
        <h1 className="text-7xl font-bold fade-in" style={{ fontFamily: 'var(--font-playfair)' }}>
          Brigit Parrish
        </h1>
        <p className="text-xl mt-4" style={{ fontFamily: 'var(--font-inter)' }}>
          Software Engineer · Seattle, WA
        </p>
        <div className="flex flex-row gap-6 mt-8">
          <LinkButton label="Resume" href="/resume.pdf" />
          <LinkButton label="LinkedIn" href="https://linkedin.com/in/brigitparrish" />
          <LinkButton label="GitHub" href="https://github.com/brigit-parrish" />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-row gap-24 max-w-6xl mx-auto">

        {/* LEFT SIDEBAR NAV */}
        <nav className="sticky top-24 h-fit flex flex-col gap-6 w-48" style={{ fontFamily: 'var(--font-inter)' }}>
          <a href="#about" className="text-lg font-semibold hover:opacity-60 transition-opacity">About</a>
          <a href="#experience" className="text-lg font-semibold hover:opacity-60 transition-opacity">Experience</a>
          <a href="#projects" className="text-lg font-semibold hover:opacity-60 transition-opacity">Projects</a>
          <a href="#passions" className="text-lg font-semibold hover:opacity-60 transition-opacity">Passions</a>
        </nav>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col gap-32 flex-1">

          {/* ABOUT */}
          <section id="about">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>About</h2>
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
              Hi! I'm Brigit, a software engineer based in Seattle, WA. I graduated from the University of Washington with a BS in Computer Science & Engineering and I currently work at EquipmentShare on the Demand Capture team, where I ship customer-facing features end-to-end in a large-scale React/TypeScript/Next.js monorepo. I care deeply about building things that feel intuitive and delightful to use.
            </p>
          </section>

          {/* EXPERIENCE */}
          <section id="experience">
            <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>Experience</h2>
            
            <div className="flex flex-col gap-12" style={{ fontFamily: 'var(--font-inter)' }}>
              
              {/* Job 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-start">
                  <p className="text-xl font-semibold">EquipmentShare</p>
                  <p className="text-sm opacity-60">January 2024 – Present</p>
                </div>
                <p className="text-base opacity-60">Software Engineer I · Demand Capture · Seattle, WA (Remote)</p>
                <ul className="list-disc list-outside ml-4 mt-3 flex flex-col gap-2">
                  <li className="text-base leading-relaxed">Build and maintain a quotes web application within a large-scale React/TypeScript/Next.js monorepo, shipping customer-facing features end-to-end from component design through Cypress integration testing.</li>
                  <li className="text-base leading-relaxed">Delivered a used fleet quoting feature end-to-end: designed the component architecture, implemented mutual exclusivity validation between used fleet and rental line items, and enforced branch mismatch checks using Yup and React Hook Form.</li>
                  <li className="text-base leading-relaxed">Built a market rate verification flow: S3 presigned URL file uploads, below-floor rate detection, form validation, quote duplication support, and Cypress integration tests.</li>
                  <li className="text-base leading-relaxed">Shipped an optimal rates feature with a rate card UI, customization workflow, geographic area and utilization display, and a full Cypress test suite.</li>
                  <li className="text-base leading-relaxed">Extended the quote form with sub-renter fields, Zustand store updates, conditional validation, and IndexedDB autosave/restore integration.</li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row justify-between items-start">
                  <p className="text-xl font-semibold">EquipmentShare</p>
                  <p className="text-sm opacity-60">June 2023 – August 2023</p>
                </div>
                <p className="text-base opacity-60">Software Engineer Intern · Telematics · Columbia, MO</p>
                <ul className="list-disc list-outside ml-4 mt-3 flex flex-col gap-2">
                  <li className="text-base leading-relaxed">Built a Kafka consumer to ingest and process real-time tracker telemetry, identifying aggressive-driving events and evaluating device performance against configurable thresholds.</li>
                  <li className="text-base leading-relaxed">Developed a health-status dashboard for field installers featuring a bar chart with a dynamic threshold line, enabling real-time pass/fail assessment of device installations.</li>
                  <li className="text-base leading-relaxed">Implemented backend logic in Python with DynamoDB and AWS CDK, and frontend components in React/JavaScript.</li>
                </ul>
              </div>

            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Projects</h2>
            <p className="text-lg opacity-60" style={{ fontFamily: 'var(--font-inter)' }}>Coming soon!</p>
          </section>

          {/* PASSIONS */}
          <section id="passions">
            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Passions</h2>
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
              Outside of work I love strength training, exploring Seattle car-free, and spending time with my cats Ollie and Kona. I care a lot about building things that feel good to use — whether that's a web app or finding the perfect coffee spot in the city.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}