"use client";
import { useEffect, useRef, useState } from "react";
import "./TextilePage.css";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
 
import NavMenu from "../components/NavMenu/NavMenu";
import Footer from "../components/Footer/Footer";
import img17 from "../../public/img17.jpg";
import img18 from "../../public/img18.webp";
import imgphero from "../../public/imgphero.jpg";
import imgdenim from "../../public/imgdenim.webp";
import imgactivwear from "../../public/imgactivwear.jpg";
import imgactive2 from "../../public/imgactive2.jpg";
import imgpolofabric from "../../public/imgpolofabric.jpg";
import imgp1 from "../../public/imgp1.jpg";
import imgp2 from "../../public/imgp2.jpg";
import imgp3 from "../../public/imgp3.jpg";
import imgp4 from "../../public/imgp4.jpg";
import imgp8 from "../../public/imgp8.jpg";
import imgp7 from "../../public/imgp7.jpg";
import imgp5 from "../../public/imgp5.jpg";


/* ── useInView hook ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible] as const;
}


const items = [
    {
      title: "Official T-shirt",
      image:
        imgp5.src,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Official T-shirt",
      image:
        imgp2.src,
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Official T-shirt",
      image:
        imgp3.src,
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Official T-shirt",
      image:
        imgp4.src,
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Official T-shirt",
      image:
        imgp7.src,
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Official T-shirt",
      image:
        imgp8.src,
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Official T-shirt",
      image:
        imgp1.src,
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
const capabilities = [
  {
    num: "01", title: "Signature Polos",
    desc: "Where athletic heritage meets modern tailoring. Our polo shirts are engineered for versatility, featuring reinforced collars and moisture-wicking fabrics designed for seamless day-to-night wear.",
    image: imgphero.src,
  },
  {
    num: "02", title: "Denim",
    desc: "A heritage of denim innovation. Our denim plant produces over 36 million metres annually, offering an unmatched range of finishes, washes, and sustainable alternatives.",
    image: imgdenim.src,
  },
  {
    num: "03", title: "Performance Activewear",
    desc: "Engineered for high-intensity movement, our activewear utilizes four-way stretch technology and advanced moisture management to keep athletes cool, dry, and unrestricted.",
    image: imgactivwear.src,
  },
  {
    num: "04", title: "Garment Manufacturing",
    desc: "Vertically integrated manufacturing from yarn to garment — delivering world-class stitching quality with lean production systems and on-time delivery.",
    image: imgactive2.src,
  },
];

const highlights = [
  "Our dedicated Polo Design Studio is a premier facility in the region, empowering global design teams to utilize our advanced knitting and finishing infrastructure to co-create signature silhouettes and bespoke textures under one roof.",
  "Our knit processing units are powered by state-of-the-art sustainable technology, incorporating high-efficiency dyeing and water recycling systems that set the benchmark for eco-conscious garment manufacturing.",
  "We produce many polo shirts annually, offering an unmatched spectrum of piqué textures, mercerized finishes, performance knits, and advanced stretch innovations.",
  ,
];

const brands = [
  { name: "Flying Machine", tag: "Denim & Casual" },
  { name: "Excalibur",      tag: "Premium Menswear" },
  { name: "Newport",        tag: "Affordable Fashion" },
  { name: "Colt",           tag: "Casual Wear" },
  { name: "Ruggers",        tag: "Smart Casuals" },
  { name: "Alent Luxe",     tag: "Luxury Fabrics" },
];

/* ══════════════════════════════════════════════ */
export default function TextilePage() {
  const [statsRef,     statsVis]     = useInView();
  const [highlightRef, highlightVis] = useInView();
  const [brandsRef,    brandsVis]    = useInView();

  return (
    <>
    <NavMenu />
    <div className="tp-root">

      {/* ── 1. HERO ── */}
      <section className="tp-hero">
        <img src={img17.src}
          alt="Textile hero" className="tp-hero-img" />
        <div className="tp-hero-overlay" />
        <div className="tp-hero-content">
          <p className="tp-eyebrow">OUR BUSINESSES</p>
          <h1 className="tp-hero-title">Textile &amp;<br /><em>Apparel</em></h1>
          
        </div>
 
      </section>

      {/* ── 2. INTRO ── */}
      <section className="tp-intro">
        <div className="tp-intro-inner">
          <div className="tp-intro-label">
            <span className="tp-label-line" />
            <span>About the Business</span>
          </div>
          <div className="tp-intro-body">
            <h2 className="tp-section-title dark">
              From <em>Innovation</em> in fibre to<br />sustainability in fashion
            </h2>
            <p className="tp-body-text">
              Alent's Textile and Apparel division is one of the most integrated fabric-to-fashion
              businesses in Sri Lanka. We power events and brands — delivering
              unmatched quality and excellence across the entire garment value chain.
              Our state-of-the-art manufacturing facilities span woven fabrics, denim, kids-wear, and
              garment stitching, supported by an industry-leading design studio.
            </p>
            <p className="tp-body-text">
              With sustainability at our core, we operate zero liquid discharge plants, harness
              renewable energy, and hold every major global certification — enabling our partners
              to meet the highest environmental and social standards.
            </p>
          </div>
        </div>
      </section>



      {/* ── 4. CAPABILITIES ── */}
      <section className="tp-capabilities">
        <div className="tp-sec-header">
          <p className="tp-eyebrow-dark">WHAT WE DO</p>
          <h2 className="tp-section-title dark">Our <em>Capabilities</em></h2>
        </div>
        <div className="tp-cap-grid">
          {capabilities.map((cap) => (
            <div className="tp-cap-card" key={cap.num}>
              <img src={cap.image} alt={cap.title} className="tp-cap-img" />
              <div className="tp-cap-overlay" />
              <span className="tp-cap-num">{cap.num}</span>
              <div className="tp-cap-body">
                <h3 className="tp-cap-title">{cap.title}</h3>
                <p className="tp-cap-desc">{cap.desc}</p>
                <button className="tp-cap-arrow" aria-label="Learn more">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M10 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

       <section className="dd-section">
      <div className="dd-inner">
 
        {/* ── LEFT: Sticky title ── */}
        <div className="dd-left">
          <h2 className="dd-title">Signature Polos</h2>
        </div>
 
        {/* ── RIGHT: Content ── */}
        <div className="dd-right">
 
          {/* Intro paragraph */}
          <p className="dd-intro">
    Alent has been at the forefront of the knitwear revolution in Sri Lanka since the early. Our dedication to the perfect Polo was built upon four key pillars — craftsmanship, performance knits, sustainability, and customer centricity. Today, the company powers the most iconic premium and lifestyle brands across Sri Lanka. Taking the Polo’s timeless silhouette and adding multiple dimensions of technical innovation to it, we are fashioning the essentials of the future.
          </p>
 
          {/* Feature image */}
          <div className="dd-img-wrap">
            <img
              src={imgpolofabric.src}
              alt="Polo fabric"
              className="dd-img"
            />
          </div>
 
          {/* Highlights */}
          <div className="dd-highlights">
            <h3 className="dd-hl-heading"><em>highlights</em></h3>
            <ul className="dd-hl-list">
              {highlights.map((item, i) => (
                <li key={i} className="dd-hl-item">
                  <span className="dd-hl-dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
 
        </div>
      </div>
    </section>

     <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
We are one of the leading manufacturer and supplier of Promotional T-Shirts in Sri Lanka .
Whatever ideas you can imagine, talk to us! We'll do it.      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>

      {/* ── 6. SUSTAINABILITY BANNER ── */}
      <section className="tp-banner">
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80"
          alt="Sustainability" className="tp-banner-img" />
        <div className="tp-banner-overlay" />
        <div className="tp-banner-content">
          <p className="tp-eyebrow">OUR COMMITMENT</p>
          <h2 className="tp-banner-title">Crafting a more<br /><em>sustainable</em> future</h2>
          <p className="tp-banner-sub">100% renewable energy target by 2030. Zero liquid discharge across all plants.</p>
          <button className="tp-btn-solid">Read Our Sustainability Report</button>
        </div>
      </section>



      {/* ── 8. CTA ── */}
      <section className="tp-cta">
        <div className="tp-cta-bg-letter" aria-hidden="true">A</div>
        <div className="tp-cta-inner">
          <h2 className="tp-cta-title">Ready to partner<br />with <em>Alent</em>?</h2>
          <p className="tp-cta-sub">Let's build something extraordinary together.</p>
          <div className="tp-cta-btns">
            <button className="tp-btn-solid">Get in Touch Now</button>
          </div>
        </div>
      </section>

    </div>
    <Footer />
    </>
  );
}
