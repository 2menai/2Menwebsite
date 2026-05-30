import BrandGlyph from "./BrandGlyph";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container-x row">
        <a className="brand" href="/" aria-label="2men.ai home">
          <BrandGlyph className="glyph" width={22} height={22} />
          <span className="name">2men.ai</span>
        </a>
        <nav style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          <a
            className="bblink"
            href="https://thebuildbot.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Build Bot
          </a>
          <a className="bblink" href="/careers">
            Careers
          </a>
          <a className="bblink" href="/#contact">
            Contact
          </a>
        </nav>
        <span className="legal">© 2026 · Two Men and AI · Huntsville, AL</span>
      </div>
    </footer>
  );
}
