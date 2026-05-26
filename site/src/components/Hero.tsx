import ScrollFade from "./ScrollFade";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container-x">
        <ScrollFade>
          <div className="broadsheet">
            <span className="section-num">§ 00</span>
            <span>2men.ai · Huntsville, AL · est. 2025</span>
          </div>
          <h1>
            Tribal knowledge,
            <br />
            <span className="accent">without the tribal.</span>
          </h1>
          <p className="deck">
            We turn the data nobody can reach — scanned specs, handwritten
            notes, the binders Jim used to keep on his desk — into knowledge
            your organization can actually query. Then we build the AI on top
            of it.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#what">
              What we do
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a
              className="btn btn-ghost"
              href="https://thebuildbot.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try our product · The Build Bot
            </a>
          </div>

          <div className="meta">
            <div className="item">
              <div className="k">What we do</div>
              <div className="v">Parse. Standardize. Build &amp; operate.</div>
            </div>
            <div className="item">
              <div className="k">Our product</div>
              <div className="v">
                <a
                  href="https://thebuildbot.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  thebuildbot.ai
                </a>
              </div>
            </div>
            <div className="item">
              <div className="k">Where</div>
              <div className="v">Huntsville, AL · founded 2025</div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
