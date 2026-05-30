import ScrollFade from "./ScrollFade";

export default function Principles() {
  return (
    <section id="principles" className="band mist" data-screen-label="Principles">
      <div className="container-x">
        <ScrollFade>
          <div className="section-head">
            <div>
              <div className="broadsheet">
                <span>What we believe</span>
              </div>
              <h2>
                AI should be{" "}
                <span className="accent">private and secure, but shareable.</span>
              </h2>
            </div>
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="comp-grid">
            <div className="comp-card">
              <div className="seal">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div className="txt">
                <div className="name">Your data stays yours</div>
                <div className="sub">
                  Your data is yours. We protect it, and we never take it.
                </div>
              </div>
            </div>
            <div className="comp-card">
              <div className="seal">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="txt">
                <div className="name">Safety &amp; security first</div>
                <div className="sub">
                  Safety and security come first. Before anything else.
                </div>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
