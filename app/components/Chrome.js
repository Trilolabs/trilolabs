"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import { BOOK, NAV } from "../content";

export default function Chrome({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  function handleNavClick(e, href) {
    setMobileOpen(false);
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <div className="nav__inner">
          <nav className="nav__links" aria-label="Primary">
            {NAV.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a className="nav__brand" href="/" aria-label="Trilolabs home">
            <Logo />
          </a>

          <a className="nav__cta btn btn--pill" href={BOOK}>
            Book a free call
          </a>

          <button
            type="button"
            className="nav__menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </header>

      {children}

      <div
        id="mobile-nav"
        className={`mobile-sheet${mobileOpen ? " is-open" : ""}`}
        aria-hidden={mobileOpen ? "false" : "true"}
        inert={mobileOpen ? undefined : true}
      >
        <div className="mobile-sheet__top">
          <a
            className="nav__brand"
            href="/"
            aria-label="Trilolabs home"
            onClick={() => setMobileOpen(false)}
          >
            <Logo />
          </a>
          <button
            type="button"
            className="nav__menu"
            onClick={() => setMobileOpen(false)}
          >
            Close
          </button>
        </div>
        <nav className="mobile-sheet__nav" aria-label="Mobile">
          {NAV.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn--pill"
          href={BOOK}
          onClick={() => setMobileOpen(false)}
        >
          Book a free call
        </a>
      </div>
    </>
  );
}
