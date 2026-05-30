import Image from "next/image";
import ScrollFade from "./ScrollFade";

export default function Offerings() {
  return (
    <section id="offerings" className="band" data-screen-label="Offerings">
      <div className="container-x">
        <ScrollFade>
          <div className="section-head">
            <div>
              <div className="broadsheet">
                <span>Offerings</span>
              </div>
            </div>
          </div>
        </ScrollFade>

        <ScrollFade>
          <div className="offer-grid">
            <div className="offer-card product">
              <span className="pill">Live product</span>
              <div className="ico product-ico">
                <Image
                  src="/buildbot-logo.webp"
                  alt="The Build Bot"
                  width={46}
                  height={46}
                />
              </div>
              <div className="kicker">Our product</div>
              <h3>The Build Bot</h3>
              <div className="foot">
                <a
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
                  >
                    <path d="M7 7h10v10" />
                    <path d="m7 17 10-10" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="offer-card">
              <div className="ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <div className="kicker">Service</div>
              <h3>Consulting</h3>
              <div className="foot">
                <a href="#contact">
                  Talk to us
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
