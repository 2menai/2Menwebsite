import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container-x row">
        <a className="brand" href="/" aria-label="2men.ai home">
          <BrandLogo className="brand-logo" height={20} />
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
