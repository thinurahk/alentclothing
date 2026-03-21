"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import "./CSRSection.css";
import img13 from "../../../public/img13.jpg";

const SWIPE_THRESHOLD = 50; // px

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
    image: img13,
  }
];

export default function CSRSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── drag / swipe state ──
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const startAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % csrSlides.length);
    }, 5000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const goTo = useCallback((i: number) => {
    setAnimating(true);
    setActive(i);
    setTimeout(() => setAnimating(false), 700);
  }, []);

  const prev = useCallback(
    () => setActive((a) => { const next = (a - 1 + csrSlides.length) % csrSlides.length; goTo(next); return a; }),
    [goTo]
  );
  const next = useCallback(
    () => setActive((a) => { const n = (a + 1) % csrSlides.length; goTo(n); return a; }),
    [goTo]
  );

  // single safe prev/next that uses current active value
  const goPrev = useCallback(() => {
    if (animating) return;
    setActive((a) => {
      const n = (a - 1 + csrSlides.length) % csrSlides.length;
      setAnimating(true);
      setTimeout(() => setAnimating(false), 700);
      return n;
    });
  }, [animating]);

  const goNext = useCallback(() => {
    if (animating) return;
    setActive((a) => {
      const n = (a + 1) % csrSlides.length;
      setAnimating(true);
      setTimeout(() => setAnimating(false), 700);
      return n;
    });
  }, [animating]);

  const goToIndex = useCallback((i: number) => {
    if (animating) return;
    setAnimating(true);
    setActive(i);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  // ── Mouse drag handlers ──
  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = false;
    stopAutoPlay();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 5) isDragging.current = true;
  };

  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      delta < 0 ? goNext() : goPrev();
    }
    dragStartX.current = null;
    startAutoPlay();
  };

  const onMouseLeave = () => {
    if (dragStartX.current !== null) {
      dragStartX.current = null;
      startAutoPlay();
    }
  };

  // ── Touch swipe handlers ──
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    isDragging.current = false;
    stopAutoPlay();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    if (Math.abs(e.touches[0].clientX - dragStartX.current) > 5) isDragging.current = true;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      delta < 0 ? goNext() : goPrev();
    }
    dragStartX.current = null;
    startAutoPlay();
  };

  return (
    <section id="csr" className="csr-section">
      {/* ── Header ── */}
      <div className="csr-header" data-reveal="fade-left">
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

      {/* ── Slide Cards ── */}
      <div
        className="csr-card-wrap"
        data-reveal="scale-in"
        data-delay="200"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {csrSlides.map((slide, i) => (
          <div className={`csr-card ${i === active ? "active" : ""}`} key={slide.id}>
            {/* Background image */}
            <Image 
              src={slide.image} 
              alt={`${slide.category} - ${slide.desc.substring(0, 60)}...`} 
              className="csr-bg-img" 
              draggable={false} 
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="csr-card-overlay" />

            {/* Content */}
            <div className="csr-card-content">
              <div className="csr-card-top">
                <h3 className="csr-slide-title">{slide.category}</h3>
                <p className="csr-slide-desc">{slide.desc}</p>
              </div>

              <div className="csr-stats-row">
                {slide.stats.map((stat, idx) => (
                  <div className="csr-stat" key={idx}>
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-sub">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Nav inside wrap but outside cards */}
        <div className="csr-card-nav">
          <button className="csr-nav-arrow" onClick={goPrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="csr-dots">
            {csrSlides.map((_, i) => (
              <button
                key={i}
                className={`csr-dot ${i === active ? "active" : ""}`}
                onClick={() => goToIndex(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button className="csr-nav-arrow" onClick={goNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
