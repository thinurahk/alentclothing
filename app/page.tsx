"use client"
import { useState, useEffect, useRef, useCallback } from "react";
import "./app.css";
import "./BrandSection.css";
import "./SpanningSection.css";


const slides = [
  {
    id: 1,
    tag: "New Collection",
    headline: ["FROM POSSIBILITIES ON PAPER TO", "FABRICS OF THE FUTURE"],
    subtext: "Premium fabrics. Timeless silhouettes. Made for those who lead.",
    cta: "Explore Now",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=700&q=80",
    accent: "#C8A96E",
    bg: "#0E0E0E",
  },
  {
    id: 2,
    tag: "Signature Series",
    headline: ["PRINTING THE FUTURE OF", "PERFORMANCE APPAREL."],
    subtext: "Where heritage meets contemporary edge. Wear the difference.",
    cta: "Shop the Series",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4b4e5b?w=700&q=80",
    accent: "#A8C4B8",
    bg: "#111418",
  },
  {
    id: 3,
    tag: "Alent Originals",
    headline: ["DELIVERING SIGNATURE APPAREL TO", "EADING RETAILERS"],
    subtext: "Precision tailoring meets everyday luxury. Step into your story.",
    cta: "Discover More",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",
    accent: "#D4A5A5",
    bg: "#100E14",
  },
];

const navLinks = ["Home", "Collections", "Men", "Women", "About", "Contact"];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = (index: number) => {
    if (animating || index === current) return;
    setPrevSlide(current);
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => {
      setAnimating(false);
      setPrevSlide(null);
    }, 900);
  };

  const nextSlide = useCallback(() => {
    const next = (current + 1) % slides.length;
    goToSlide(next);
  }, [current, animating]);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide]);

  const slide = slides[current];

  // ── Rotating word list for the animated highlight ──
  const rotatingWords = [
    { text: "Fashioning Possibilities", color: "var(--blue-accent)" },
    { text: "Defining Style",           color: "var(--red-accent)"  },
    { text: "Crafting Heritage",        color: "var(--blue-accent)" },
    { text: "Wearing Confidence",       color: "var(--red-accent)"  },
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [exiting, setExiting]     = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const heroRef    = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible]     = useState(false);
  const [heroStyle, setHeroStyle] = useState({ opacity: 1, transform: "scale(1) translateY(0px)" });

  // ── Auto-rotate words every 3 s ──
  useEffect(() => {
    const id = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setWordIndex(i => (i + 1) % rotatingWords.length);
        setExiting(false);
      }, 420);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  // ── Intersection observer for brand section scroll-in ──
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ── Scroll-driven hero fade-out + scale-up ──
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      // Start fading after 5% scroll, complete at 60% of viewport height
      const progress = Math.min(Math.max(scrollY / (vh * 0.6), 0), 1);
      const opacity  = 1 - progress * 0.95;
      const scale    = 1 + progress * 0.04;
      const translateY = -(progress * 30);
      setHeroStyle({
        opacity,
        transform: `scale(${scale}) translateY(${translateY}px)`,
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeWord = rotatingWords[wordIndex];
 

  return (
    <>
    <div
      className="hero-root"
      ref={heroRef}
      style={{
        "--accent": slide.accent,
        "--bg": slide.bg,
        ...heroStyle,
        position: "sticky",
        top: 0,
        zIndex: 1,
      } as React.CSSProperties}
    >
      {/* ── Background gradient blob ── */}
      <div className="hero-bg-blob" />

      {/* ── Top Bar ── */}
      <header className="hero-header">
        <div className="hero-logo">
          <span className="logo-alent">ALENT</span>
          <span className="logo-clothing">CLOTHING</span>
        </div>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* ── Full-Screen Nav Overlay ── */}
      <nav className={`nav-overlay ${menuOpen ? "active" : ""}`}>
        <button className="nav-close" onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        <ul className="nav-list">
          {navLinks.map((link, i) => (
            <li key={link} className="nav-item" style={{ "--delay": `${0.1 + i * 0.07}s` } as React.CSSProperties}>
              <a href="#" onClick={() => setMenuOpen(false)}>
                <span className="nav-num">0{i + 1}</span>
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-footer">
          <span>© 2025 Alent Clothing</span>
          <div className="nav-social">
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">TW</a>
          </div>
        </div>
      </nav>

      {/* ── Hero Content ── */}
      <main className="hero-main">
        {/* Left: Text */}
        <div className="hero-text" key={`text-${current}`}>
          <p className="hero-tag">
            <span className="tag-line" />
            {slide.tag}
          </p>
          <h1 className="hero-headline">
            {slide.headline.map((line, i) => (
              <span key={i} className="headline-line" style={{ "--i": i } as React.CSSProperties}>
                {line}
              </span>
            ))}
          </h1>
        </div>

        {/* Right: Image + Circle */}
        <div className="hero-visual" key={`visual-${current}`}>
          <div className="circle-bg" />
          {/* <div className="circle-ring" /> */}
          <div className="hero-img-wrap">
            <img src={slide.image} alt="Collection" className="hero-img" />
            <div className="img-overlay" />
          </div>
        </div>
      </main>
    </div>

         <section className={`brand-section ${visible ? "in-view" : ""}`} ref={sectionRef}>
 
      {/* ── Giant background letter ── */}
      <div className="bg-letter" aria-hidden="true">A</div> 
      {/* ── Main text block ── */}
      <div className="brand-content">
 
        <p className="brand-statement">
          <span className="line-plain">We are </span>
          <span
            className={`line-rotating ${exiting ? "exit" : "enter"}`}
            style={{ color: activeWord.color }}
          >
            {activeWord.text}
          </span>
          <br />
          <span className="line-plain">
            with every thread we weave,
            <br />every idea we shape, and
            <br />every future we imagine
            <br />together. Welcome to{" "}
          </span>
          <span className="brand-name">Alent.</span>
        </p>
 
        {/* ── Circle arrow CTA ── */}
        <button className="circle-arrow" aria-label="Learn more">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M10 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
 
      {/* ── Subtle bottom scroll indicator ── */}
      <div className="brand-scroll-hint">
        <span className="scroll-line-h" />
        <span className="scroll-label">Scroll to explore</span>
      </div>
    </section>
  </>  
  );
}
