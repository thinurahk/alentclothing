"use client"
import { useState, useEffect, useRef, useCallback } from "react";
import "./app.css";
import "./BrandSection.css";
import "./Spanningsection.css";
import "./CSRSection.css";
import "./NewsroomSection.css";
import "./Careerssection.css";
import Footer from "./Footer";


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
  const sectionRef   = useRef<HTMLElement | null>(null);
  const heroRef      = useRef<HTMLDivElement | null>(null);
  const trackRef     = useRef<HTMLDivElement | null>(null);
  const spanningRef  = useRef<HTMLElement | null>(null);
  const [visible, setVisible]        = useState(false);
  const [heroStyle, setHeroStyle]    = useState({ opacity: 1, transform: "scale(1) translateY(0px)" });
  const [activeCard, setActiveCard]  = useState(0);
  const [cardImgScale, setCardImgScale] = useState(1.15);
  const prevCard = () => setActiveCard(i => Math.max(i - 1, 0));
  const nextCard = () => setActiveCard(i => Math.min(i + 1, cards.length - 1));

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

  // ── Scroll-driven parallax zoom on spanning card images ──
  useEffect(() => {
    const onScroll = () => {
      const el = spanningRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 = section just entered viewport top, 1 = section scrolled past
      const progress = Math.min(Math.max(-top / (height - vh * 0.5), 0), 1);
      // zoom OUT as scroll down: 1.15 → 1.0
      setCardImgScale(1.15 - progress * 0.15);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeWord = rotatingWords[wordIndex];
  const cards = [
    {
      num: "01",
      title: "Textile and Apparel",
      desc: "From innovation in fibre to sustainability in fashion, Alent is powering high-fashion brands across Sri Lanka, all the while delivering unmatched quality and excellence across the garment value chain.",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
    },
    {
      num: "02",
      title: "Retail",
      desc: "Our retail stores deliver a premium shopping experience for men and women, combining Alent's finest offerings under one roof — featuring a full range of shirting, suiting fabrics, and super-premium products.",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    },
    {
      num: "03",
      title: "Media & news company",
      desc: "Our in-house design studio blends global trends with local sensibilities, crafting collections that speak to the modern wardrobe. Every stitch is a statement, every fabric a canvas of creativity.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      num: "04",
      title: "IT Solutions",
      desc: "From initial business consulting to scalable cloud architecture, Alent IT is powering the digital backbone of companies across Sri Lanka. We deliver unmatched data security and operational excellence across the entire technology lifecycle..",
      image: "https://unsplash.com/photos/man-typing-on-keyboard-in-front-of-multiple-computer-monitors-Nm_hDwuVtcw",
    }
  ];


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
 

    </section>

      {/* ══ SPANNING INDUSTRIES SECTION ══ */}
      <section className="spanning-section">
        {/* Header */}
        <div className="spanning-header">
          <p className="spanning-eyebrow">OUR BUSINESSES</p>
          <h2 className="spanning-title">
            Spanning <em>industries</em>
          </h2>
        </div>

        {/* Cards Track */}
        <div className="cards-viewport">
          <div
            className="cards-track"
            ref={trackRef}
            style={{ transform: `translateX(calc(-${activeCard} * (var(--card-w) + var(--gap))))` }}
          >
            {cards.map((card, i) => (
              <div
                className={`industry-card ${i === activeCard ? "is-active" : ""}`}
                key={card.num}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-img"
                  style={i === activeCard ? { transform: `scale(${cardImgScale})` } : undefined}
                />
                <div className="card-overlay" />
                <span className="card-num">{card.num}</span>
                <div className="card-body">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-desc">{card.desc}</p>
                  <button className="card-arrow" aria-label="Explore">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M10 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="spanning-nav">
          <button
            className={`nav-arrow ${activeCard === 0 ? "disabled" : ""}`}
            onClick={prevCard}
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M14 8l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className={`nav-arrow ${activeCard === cards.length - 1 ? "disabled" : ""}`}
            onClick={nextCard}
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M10 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      {/* ══ CSR SECTION ══ */}
      <CSRSection />

      {/* ══ NEWSROOM SECTION ══ */}
      <NewsroomSection />
      {/* ══ CAREERS SECTION ══ */}
      <CareersSection />
      <Footer />
    </> 
  );
}

const csrSlides = [
  {
    id: 1,
    category: "earning (livelihoods)",
    desc: "We believe livelihoods create dignity. Our upcoming initiatives aim to turn local skills into sustainable income — enabling families and communities to achieve economic stability, self-reliance, and opportunity.",
    stats: [
      { label: "target to support", value: "100+", sub: "individuals through planned livelihood and skill-building programmes" },
      { label: "aiming for", value: "60% women", sub: "among future programme beneficiaries" },
    ],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1400&q=80",
  },
  {
    id: 2,
    category: "learning (education)",
    desc: "Education is the foundation of progress. Our future roadmap includes investing in schools, scholarships, and learning centres to give the next generation the tools they need to thrive.",
    stats: [
      { label: "projected to support", value: "1000+", sub: "students across planned education programmes" },
      { label: "goal to build & renovate", value: "10+ schools", sub: "in rural communities" },
    ],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1400&q=80",
  },
  {
    id: 3,
    category: "sustaining (environment)",
    desc: "We are committing to a greener future. Our upcoming sustainability framework focuses on reducing our carbon footprint, conserving water, and introducing sustainable practices throughout our supply chain.",
    stats: [
      { label: "target to save", value: "100k+ litres", sub: "of water through upcoming conservation programmes" },
      { label: "pledging to plant", value: "1,000+ trees", sub: "across our future operational regions" },
    ],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80",
  },
  {
    id: 4,
    category: "empowering (women)",
    desc: "Gender equality drives sustainable communities. We are designing programmes intended to equip women with the skills, confidence, and financial independence needed to lead their own futures.",
    stats: [
      { label: "goal to train", value: "100+", sub: "women in vocational and leadership skills" },
      { label: "targeting over", value: "70% retention", sub: "in future self-help groups" },
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=80",
  }
];

function CSRSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => {
    if (animating || i === active) return;
    setAnimating(true);
    setActive(i);
    setTimeout(() => setAnimating(false), 700);
  };

  const prev = useCallback(() => goTo((active - 1 + csrSlides.length) % csrSlides.length), [active, animating]);
  const next = useCallback(() => goTo((active + 1) % csrSlides.length), [active, animating]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const slide = csrSlides[active];

  return (
    <section className="csr-section">
      {/* ── Header ── */}
      <div className="csr-header">
        <p className="csr-eyebrow">CORPORATE SOCIAL RESPONSIBILITY</p>
        <h2 className="csr-title">
          Giving back to the <em>society</em>
        </h2>
        <p className="csr-intro">
          Alent upholds the belief that businesses thrive by positively impacting society,
          supporting education, culture, and social renewal through pioneering initiatives
          long before CSR existed.
        </p>
      </div>

      {/* ── Slide Card ── */}
      <div className="csr-card-wrap">
        <div className={`csr-card ${animating ? "fading" : ""}`} key={active}>
          {/* Background image */}
          <img src={slide.image} alt={slide.category} className="csr-bg-img" />
          <div className="csr-card-overlay" />

          {/* Content */}
          <div className="csr-card-content">
            <div className="csr-card-top">
              <h3 className="csr-slide-title">{slide.category}</h3>
              <p className="csr-slide-desc">{slide.desc}</p>
            </div>

            <div className="csr-stats-row">
              {slide.stats.map((stat, i) => (
                <div className="csr-stat" key={i}>
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-sub">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nav inside card */}
          <div className="csr-card-nav">
            <button className="csr-nav-arrow" onClick={prev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="csr-dots">
              {csrSlides.map((_, i) => (
                <button
                  key={i}
                  className={`csr-dot ${i === active ? "active" : ""}`}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <button className="csr-nav-arrow" onClick={next} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const news = [
  {
    id: 1,
    title: "ALENT 2026 Spring Summer Collection",
    excerpt:
      "ALENT 26 embodies versatile denim for Spring/Summer '26, blending dynamic energy with the season's top trends. Each piece offers casual comfort, active wearability, holiday ease, and bold style.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&q=80",
    size: "large",
  },
  {
    id: 2,
    title: "Walk for Rahula '26: Official Jersey",
    excerpt:
      "Proud manufacturing partners for Rahula College Matara. We delivered high-performance, custom-designed official jerseys that capture the dynamic spirit and pride of the 'Walk for Rahula 26' community milestone.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80",
    size: "medium",
  },
  {
    id: 3,
    title: "Premium Promotional T-Shirts",
    excerpt:
      "Sri Lanka's trusted partner for premium promotional t-shirts. Whatever you envision for your brand, we have the expertise to make it happen.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=900&q=80",
    size: "medium",
  },
];

function NewsroomSection() {
  return (
    <section className="newsroom-section">
      {/* ── Header ── */}
      <div className="newsroom-header">
        <div className="newsroom-header-left">
          <p className="newsroom-eyebrow">UPDATES</p>
          <h2 className="newsroom-title">Newsroom</h2>
        </div>
        <div className="newsroom-header-right">
          <button className="view-all-btn">view all updates</button>
        </div>
      </div>

      {/* ── Cards Grid ── */}
      <div className="newsroom-grid">
        {news.map((item) => (
          <div className={`news-card news-card--${item.size}`} key={item.id}>
            {/* Background Image */}
            <img src={item.image} alt={item.title} className="news-img" />

            {/* Dark overlay */}
            <div className="news-overlay" />

            {/* Content */}
            <div className="news-body">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-excerpt">{item.excerpt}</p>
              <button className="news-arrow" aria-label="Read more">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M10 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile view all ── */}
      <div className="newsroom-footer-mobile">
        <button className="view-all-btn">view all updates</button>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section className="careers-section">
      <div className="careers-card">
        {/* South-Asian team photo from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80"
          alt="South Asian professional team"
          className="careers-img"
        />
 
        {/* Dark overlay — heavier on the left so text is readable */}
        <div className="careers-overlay" />
 
        {/* Content */}
        <div className="careers-content">
          <p className="careers-eyebrow">EMPLOYMENT</p>
          <h2 className="careers-title">Advancing Careers</h2>
          <p className="careers-sub">
            Join a team of dedicated professionals committed to a better tomorrow.
          </p>
          <button className="careers-btn">work with us</button>
        </div>
      </div>
    </section>
  );
}
