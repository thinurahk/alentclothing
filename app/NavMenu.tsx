import { useState, useEffect } from "react";
import "./newNav.css";

const mainLinks = [
  "Fashioning Possibilities",
  "About Us",
  "Our Businesses",
  "Investors",
  "Sustainability",
  "Corporate Social Responsibility",
  "Careers",
];

const bottomLinks = ["Newsroom", "Contact Us"];

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Top bar with logo + trigger ── */}
      <header className="nav-topbar">
        <div className="nav-logo">
          <span className="nav-logo-alent">ALENT</span>
          <span className="nav-logo-tag">FASHIONING POSSIBILITIES</span>
        </div>

        <button
          className={`nav-trigger ${open ? "hidden" : ""}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="trigger-bar" />
          <span className="trigger-bar short" />
          <span className="trigger-bar" />
        </button>
      </header>

      {/* ── Backdrop blur overlay ── */}
      <div
        className={`nav-backdrop ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* ── Frosted glass panel ── */}
      <nav className={`nav-panel ${open ? "active" : ""}`} role="dialog" aria-modal="true">

        {/* Gradient orb decoration */}
        <div className="nav-orb nav-orb--1" />
        <div className="nav-orb nav-orb--2" />
        <div className="nav-orb nav-orb--3" />

        {/* Close button */}
        <button className="nav-close-btn" onClick={() => setOpen(false)}>
          CLOSE MENU
        </button>

        {/* Main links */}
        <ul className="nav-main-links">
          {mainLinks.map((link, i) => (
            <li
              key={link}
              className={`nav-main-item ${hoveredIndex !== null && hoveredIndex !== i ? "dimmed" : ""}`}
              style={{ "--i": i } as React.CSSProperties}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a href="#">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom row */}
        <div className="nav-bottom-row">
          {bottomLinks.map((link) => (
            <a key={link} href="#" className="nav-bottom-link">
              {link}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
