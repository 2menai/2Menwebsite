"use client";

import { useEffect, useRef } from "react";
import ScrollFade from "./ScrollFade";

const PHRASES = ["better processes.", "great ideas.", "AI for your team.", "good IT."];
const TYPE = 65;
const ERASE = 34;
const HOLD = 1500;
const GAP = 320;

export default function Hero() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let p = 0;
    let i = 0;
    let erasing = false;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const tick = () => {
      const word = PHRASES[p];
      if (!erasing) {
        el.textContent = word.slice(0, i + 1);
        i++;
        if (i === word.length) {
          erasing = true;
          timer = setTimeout(tick, HOLD);
          return;
        }
        timer = setTimeout(tick, TYPE);
      } else {
        el.textContent = word.slice(0, i - 1);
        i--;
        if (i === 0) {
          erasing = false;
          p = (p + 1) % PHRASES.length;
          timer = setTimeout(tick, GAP);
          return;
        }
        timer = setTimeout(tick, ERASE);
      }
    };
    tick();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section className="hero" data-screen-label="Hero">
      <div className="container-x">
        <ScrollFade>
          <div className="broadsheet">
            <span>2men.ai · Private enterprise AI · Huntsville, AL</span>
          </div>
          <h1>
            <span className="tw-line">The shortcut to</span>
            <span className="tw-line">
              <span ref={ref} className="tw-rotate" />
              <span className="tw-caret" aria-hidden="true" />
            </span>
          </h1>
          <div className="actions" style={{ marginTop: 8 }}>
            <a className="btn btn-primary" href="#contact">
              Contact us
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
            <a className="btn btn-ghost" href="#offerings">
              See what we do
            </a>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
