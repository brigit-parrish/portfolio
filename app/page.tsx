import LinkButton from "@/src/buttons/link-button";

export default function Home() {
  return (
    <div className="flex flex-row justify-between items-center">
  <div>
    <h1 className="text-5xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
      Brigit Parrish
    </h1>
    <p className="text-lg mt-2" style={{ fontFamily: 'var(--font-inter)' }}>
      Software Engineer · Seattle, WA
    </p>
  </div>
  <div className="flex flex-row gap-5">
    <LinkButton label="Resume" href="/resume.pdf" />
    <LinkButton label="LinkedIn" href="https://linkedin.com/in/brigitparrish" />
    <LinkButton label="GitHub" href="https://github.com/brigit-parrish" />
  </div>
</div>
  );
}