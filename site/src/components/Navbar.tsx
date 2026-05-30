"use client";

import { useState, useEffect } from "react";
import BrandGlyph from "./BrandGlyph";

const links = [
  { label: "Principles", href: "/#principles" },
  { label: "Offerings", href: "/#offerings" },
  { label: "About", href: "/#about" },
  { label: "Careers", href: "/careers" },
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
          href="/#contact"
          style={{ padding: "9px 16px", fontSize: 13 }}
        >
          Contact us
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
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                style={{ display: "inline-flex" }}
              >
                Contact us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
