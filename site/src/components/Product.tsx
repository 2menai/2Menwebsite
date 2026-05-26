import ScrollFade from "./ScrollFade";

export default function Product() {
  return (
    <section id="product" className="band mist">
      <div className="container-x">
        <ScrollFade>
          <div className="section-head">
            <div>
              <div className="broadsheet">
                <span className="section-num">§ 03</span>
                <span>Our product</span>
              </div>
              <h2>
                The Build Bot.
                <br />
                <span className="accent">Built on everything above.</span>
              </h2>
            </div>
            <p className="lede">
              Our flagship product. The Build Bot turns scattered AI experiments
              into governed workflows, reusable agents, and real production use
              — with the parsing, standards, and infrastructure already wired up.
            </p>
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="venture-feat">
            <div className="copy">
              <div className="header">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="logo"
                  src="/buildbot-logo.webp"
                  alt="The Build Bot"
                />
                <span className="wordmark">The Build Bot</span>
              </div>
              <div className="tag-row">
                <span className="tag live">Live</span>
                <span className="tag">Our product</span>
                <span className="tag">
                  AI substrate · agents · vertical workflows
                </span>
              </div>
              <h3>Stop letting every team invent AI from scratch.</h3>
              <p>
                The Build Bot turns scattered AI experiments into governed
                workflows, reusable agents, and real production use. Knowledge
                graph, guided ingestion, traceable agent runs, 1,000+
                integrations — wired up before you start.
              </p>
              <p className="quote">
                &ldquo;Most AI pilots fail because nobody mapped the knowledge.
                The Build Bot maps it first.&rdquo;
              </p>
              <div className="actions">
                <a
                  className="btn btn-primary"
                  href="https://thebuildbot.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit thebuildbot.ai
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
                    <path d="M7 7h10v10" />
                    <path d="m7 17 10-10" />
                  </svg>
                </a>
                <a
                  className="btn btn-ghost"
                  href="https://thebuildbot.ai#playground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the free playground
                </a>
              </div>
            </div>
            <div className="visual" aria-hidden="true">
              <div className="browser-mock">
                <div className="chrome">
                  <div className="dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="url">thebuildbot.ai</div>
                </div>
                <div className="body">
                  <div className="bb-head">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="bb-logo"
                      src="/buildbot-logo.webp"
                      alt=""
                    />
                    <div className="name">The Build Bot</div>
                  </div>
                  <div className="promptbox">
                    <div className="inner">
                      <span className="gt">&gt;</span>
                      <input
                        type="text"
                        defaultValue="Spin up a vertical workflow"
                        readOnly
                      />
                      <span className="run">Run ↵</span>
                    </div>
                    <div className="pbf">
                      <span>✦ Free playground</span>
                      <span>No signup</span>
                    </div>
                  </div>
                  <div className="feat-row">
                    <div className="feat-chip">
                      <div className="k">K · 01</div>
                      <div className="v">Knowledge graph</div>
                    </div>
                    <div className="feat-chip">
                      <div className="k">K · 02</div>
                      <div className="v">Guided ingestion</div>
                    </div>
                    <div className="feat-chip">
                      <div className="k">A · 01</div>
                      <div className="v">Agent workflows</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
