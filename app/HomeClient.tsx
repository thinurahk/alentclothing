"use client"
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./styles/app.css";
import "./styles/BrandSection.css";
import "./styles/Spanningsection.css";
import "./styles/scroll-animations.css";
import NavMenu from "./components/NavMenu/NavMenu";
import Footer from "./components/Footer/Footer";
import CSRSection from "./components/CSRSection/CSRSection";
import NewsroomSection from "./components/NewsroomSection/NewsroomSection";
import Contactform from "./components/Contactform/Contactform";
import CareersSection from "./components/CareersSection/CareersSection";

import img1 from "../public/img1.png";
import img2 from "../public/img2.png";
import img3 from "../public/img3.png";
import img4 from "../public/img4.png";
import img5 from "../public/img5.png";
import img6 from "../public/img6.avif";
import img7 from "../public/img7.jpeg";
import img8 from "../public/img8.jpg";
import img9 from "../public/img9.jpg";
import img10 from "../public/img10.jpg";
import img11 from "../public/img11.jpg";
import img12 from "../public/img12.jpg";

const slides = [
  {
    id: 1,
    tag: "New Collection",
    headline: ["FROM POSSIBILITIES ON PAPER TO", "FABRICS OF THE FUTURE"],
    subtext: "Premium fabrics. Timeless silhouettes. Made for those who lead.",
    cta: "Explore Now",
    image: img2,
    accent: "#C8A96E",
    bg: "#0E0E0E",
  },
  {
    id: 2,
    tag: "Signature Series",
    headline: ["PRINTING THE FUTURE OF", "PERFORMANCE APPAREL."],
    subtext: "Where heritage meets contemporary edge. Wear the difference.",
    cta: "Shop the Series",
    image: img1,
    accent: "#A8C4B8",
    bg: "#111418",
  },
  {
    id: 3,
    tag: "Alent Originals",
    headline: ["DELIVERING SIGNATURE APPAREL TO", "LEADING RETAILERS"],
    subtext: "Precision tailoring meets everyday luxury. Step into your story.",
    cta: "Discover More",
    image: img5,
    accent: "#D4A5A5",
    bg: "#100E14",
  },
];

export default function HomeClient() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
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

  // ── Global scroll-reveal observer ──
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
      const progress = Math.min(Math.max(-top / (height - vh * 0.5), 0), 1);
      setCardImgScale(1.15 - progress * 0.15);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); 
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeWord = rotatingWords[wordIndex];
  const cards = [
    {
      num: "01",
      title: "Textile and Apparel",
      desc: "From innovation in fibre to sustainability in fashion, Alent is powering high-fashion brands across Sri Lanka, all the while delivering unmatched quality and excellence across the garment value chain.",
      image: img8,
      href: "/textile",
    },
    {
      num: "02",
      title: "Media & news company",
      desc: "Our in-house design studio blends global trends with local sensibilities, crafting collections that speak to the modern wardrobe. Every stitch is a statement, every fabric a canvas of creativity.",
      image: img7,
      href: "/media",
    },
    {
      num: "03",
      title: "Anjas-Retail",
      desc: "Our retail stores deliver a premium shopping experience for men and women, combining Alent's finest offerings under one roof — featuring a full range of shirting, suiting fabrics, and super-premium products.",
      image: img12,
      href: "/textile",
    },
    {
      num: "04",
      title: "IT Solutions",
      desc: "From initial business consulting to scalable cloud architecture, Alent IT is powering the digital backbone of companies across Sri Lanka. We deliver unmatched data security and operational excellence across the entire technology lifecycle..",
      image: img11,
    }
  ];

  return (
    <>
    <NavMenu />
    <div
      id="hero"
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
      <div className="hero-bg-blob" />
      <main className="hero-main">
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
        <div className="hero-visual" key={`visual-${current}`}>
          <div className="circle-bg" />
          <div className="hero-img-wrap">
            <Image 
              src={slide.image} 
              alt="Alent Clothing Collection - Leading Fashion in Sri Lanka" 
              className="hero-img" 
              priority={true}
              fill
              style={{ objectFit: 'cover' }}
            />
            <div className="img-overlay" />
          </div>
        </div>
      </main>
    </div>

    <section id="about-us" className={`brand-section ${visible ? "in-view" : ""}`} ref={sectionRef}>
      <div className="bg-letter" aria-hidden="true">A</div> 
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
        <button className="circle-arrow" aria-label="Learn more about Alent Clothing">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M10 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>

    <section id="our-businesses" className="spanning-section" ref={spanningRef}>
      <div className="spanning-header" data-reveal="fade-up">
        <p className="spanning-eyebrow">OUR BUSINESSES</p>
        <h2 className="spanning-title">
          Spanning <em>industries</em>
        </h2>
      </div>
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
              <div 
                style={{ 
                  position: 'absolute', inset: 0, 
                  transform: i === activeCard ? `scale(${cardImgScale})` : undefined,
                  transition: 'transform 0.1s ease-out',
                  zIndex: 0
                }}
              >
                <Image
                  src={card.image}
                  alt={`${card.title} - Alent Business Sector`}
                  className="card-img"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="card-overlay" style={{ zIndex: 1 }} />
              <span className="card-num" style={{ zIndex: 2 }}>{card.num}</span>
              <div className="card-body">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-desc">{card.desc}</p>
                <button 
                  className="card-arrow" 
                  aria-label={`Explore our ${card.title} business`} 
                  onClick={() => card.href ? router.push(card.href) : undefined}
                >
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
      <div className="spanning-nav">
        <button
          className={`nav-arrow ${activeCard === 0 ? "disabled" : ""}`}
          onClick={prevCard}
          aria-label="Previous business sector"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M14 8l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          className={`nav-arrow ${activeCard === cards.length - 1 ? "disabled" : ""}`}
          onClick={nextCard}
          aria-label="Next business sector"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M10 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>

    <CSRSection />
    <NewsroomSection />
    <CareersSection />
    <Contactform />
    <Footer />
    </> 
  );
}
