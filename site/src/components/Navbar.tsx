"use client";

import { useState, useEffect } from "react";
import BrandGlyph from "./BrandGlyph";

const links = [
  { label: "What we do", href: "#what" },
  { label: "Track record", href: "#track" },
  { label: "Product", href: "#product" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`top ${scrolled ? "scrolled" : ""}`} id="topnav">
      <div className="container-x inner">
        <a className="brand" href="#" aria-label="2men.ai home">
          <BrandGlyph className="glyph" />
          <span className="name">2men.ai</span>
        </a>

        <ul className="desktop-nav">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a
          className="btn btn-primary cta-desktop"
          href="https://thebuildbot.ai"
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "9px 16px", fontSize: 13 }}
        >
          Visit The Build Bot →
        </a>

        <button
          className={`nav-mobile-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-panel">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMobileOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="cta">
              <a
                className="btn btn-primary"
                href="https://thebuildbot.ai"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                style={{ display: "inline-flex" }}
              >
                Visit The Build Bot →
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
