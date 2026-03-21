"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

import { motion, type Variants, useScroll, useTransform } from "motion/react";
import { AuroraText } from "@/components/ui/aurora-text";

const fadeUpVar: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const revealSectionVar: Variants = {
  hidden: { 
    opacity: 0, 
    y: 120, 
    scale: 0.92, 
    borderTopLeftRadius: "12vw", 
    borderTopRightRadius: "12vw"
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    borderTopLeftRadius: "0vw", 
    borderTopRightRadius: "0vw",
    transition: { 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const items = [
    { title: "Official T-shirt", image: imgp5, className: "absolute top-10 left-[20%] rotate-[-5deg]" },
    { title: "Official T-shirt", image: imgp2, className: "absolute top-40 left-[25%] rotate-[-7deg]" },
    { title: "Official T-shirt", image: imgp3, className: "absolute top-5 left-[40%] rotate-[8deg]" },
    { title: "Official T-shirt", image: imgp4, className: "absolute top-32 left-[55%] rotate-[10deg]" },
    { title: "Official T-shirt", image: imgp7, className: "absolute top-20 right-[35%] rotate-[2deg]" },
    { title: "Official T-shirt", image: imgp8, className: "absolute top-24 left-[45%] rotate-[-7deg]" },
    { title: "Official T-shirt", image: imgp1, className: "absolute top-8 left-[30%] rotate-[4deg]" },
  ];

const capabilities = [
  {
    num: "01", title: "Signature Polos",
    desc: "Where athletic heritage meets modern tailoring. Our polo shirts are engineered for versatility, featuring reinforced collars and moisture-wicking fabrics designed for seamless day-to-night wear.",
    image: imgphero,
  },
  {
    num: "02", title: "Denim",
    desc: "A heritage of denim innovation. Our denim plant produces many metres annually, offering an unmatched range of finishes, washes, and sustainable alternatives.",
    image: imgdenim,
  },
  {
    num: "03", title: "Performance Activewear",
    desc: "Engineered for high-intensity movement, our activewear utilizes four-way stretch technology and advanced moisture management to keep athletes cool, dry, and unrestricted.",
    image: imgactivwear,
  },
  {
    num: "04", title: "Garment Manufacturing",
    desc: "Vertically integrated manufacturing from yarn to garment — delivering world-class stitching quality with lean production systems and on-time delivery.",
    image: imgactive2,
  },
];

const highlights = [
  "Our dedicated Polo Design Studio is a premier facility in the region, empowering global design teams to utilize our advanced knitting and finishing infrastructure to co-create signature silhouettes and bespoke textures under one roof.",
  "Our knit processing units are powered by state-of-the-art sustainable technology, incorporating high-efficiency dyeing and water recycling systems that set the benchmark for eco-conscious garment manufacturing.",
  "We produce many polo shirts annually, offering an unmatched spectrum of piqué textures, mercerized finishes, performance knits, and advanced stretch innovations.",
];

export default function TextilePageClient() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0.05]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.04]);
  const y = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <>
    <NavMenu />
    <div className="tp-root">
      {/* ── 1. HERO ── */}
      <motion.section 
        className="tp-hero"
        style={{ position: 'sticky', top: 0, zIndex: 1, opacity, scale, y }}
      >
        <Image src={img17} alt="Alent Textile & Apparel Manufacturing Excellence" className="tp-hero-img" priority fill style={{ objectFit: 'cover' }} />
        <div className="tp-hero-overlay" />
        <div className="tp-hero-content">
          <p className="tp-eyebrow">OUR BUSINESSES</p>
          <header>
            <h1 className="tp-hero-title">Textile &amp;<br /><em><AuroraText>Apparel</AuroraText></em></h1>
          </header>
        </div>
      </motion.section>

      <div style={{ position: "relative", zIndex: 2 }}>
      {/* ── 2. INTRO ── */}
      <motion.section 
        className="tp-intro"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={revealSectionVar}
      >
        <div className="tp-intro-inner">
          <div className="tp-intro-label">
            <span className="tp-label-line" />
            <span>About the Business</span>
          </div>
          <article className="tp-intro-body">
            <h2 className="tp-section-title dark">
              From <em><AuroraText>Innovation</AuroraText></em> in fibre to<br />sustainability in fashion
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
          </article>
        </div>
      </motion.section>

      {/* ── 4. CAPABILITIES ── */}
      <motion.section 
        className="tp-capabilities"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
      >
        <div className="tp-sec-header">
          <p className="tp-eyebrow-dark">WHAT WE DO</p>
          <h2 className="tp-section-title dark">Our <em>Capabilities</em></h2>
        </div>
        <div className="tp-cap-grid">
          {capabilities.map((cap) => (
            <motion.div className="tp-cap-card" key={cap.num} variants={fadeUpVar}>
              <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Image src={cap.image} alt={`${cap.title} - ${cap.desc.substring(0, 50)}...`} className="tp-cap-img" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="tp-cap-overlay" style={{ zIndex: 1 }} />
              <span className="tp-cap-num" style={{ zIndex: 2 }}>{cap.num}</span>
              <div className="tp-cap-body">
                <h3 className="tp-cap-title">{cap.title}</h3>
                <p className="tp-cap-desc">{cap.desc}</p>
                <button className="tp-cap-arrow" aria-label={`Learn more about ${cap.title}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M10 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        className="dd-section"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVar}
      >
        <div className="dd-inner">
          <div className="dd-left">
            <h2 className="dd-title">Signature Polos</h2>
          </div>
          <article className="dd-right">
            <p className="dd-intro">
              Alent has been at the forefront of the knitwear revolution in Sri Lanka since the early days. Our dedication to the perfect Polo was built upon four key pillars — craftsmanship, performance knits, sustainability, and customer centricity. Today, the company powers the most iconic premium and lifestyle brands across Sri Lanka.
            </p>
            <div className="dd-img-wrap relative">
              <Image src={imgpolofabric} alt="High-quality Polo fabric manufacturing at Alent" className="dd-img" />
            </div>
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
          </article>
        </div>
      </motion.section>

      <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
        <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
          We are one of the leading manufacturer and supplier of Promotional T-Shirts in Sri Lanka. Whatever ideas you can imagine, talk to us! We'll do it.
        </p>
        {items.map((item, index) => (
          <DraggableCardBody key={index} className={item.className}>
            <img
              src={typeof item.image === 'string' ? item.image : item.image.src}
              alt={item.title}
              className="pointer-events-none relative z-10 h-72 w-72 md:h-80 md:w-80 object-cover"
            />
            <h3 className="mt-3 md:mt-4 text-center text-xl md:text-2xl font-bold text-neutral-700 dark:text-neutral-300 bg-white/70 md:bg-transparent px-2 py-1 md:px-0 md:py-0 rounded-md md:rounded-none">
              {item.title}
            </h3>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>

      <motion.section 
        className="tp-banner"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVar}
      >
        <Image src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80" alt="Alent Sustainability Commitment" className="tp-banner-img" fill style={{ objectFit: 'cover' }} />
        <div className="tp-banner-overlay" />
        <div className="tp-banner-content">
          <p className="tp-eyebrow">OUR COMMITMENT</p>
          <h2 className="tp-banner-title">Crafting a more<br /><em>sustainable</em> future</h2>
          <p className="tp-banner-sub">100% renewable energy target by 2030. Zero liquid discharge across all plants.</p>
          <button className="tp-btn-solid">Read Our Sustainability Report</button>
        </div>
      </motion.section>

      <motion.section 
        className="tp-cta"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVar}
      >
        <div className="tp-cta-bg-letter" aria-hidden="true">A</div>
        <div className="tp-cta-inner">
          <h2 className="tp-cta-title">Ready to partner<br />with <em>Alent</em>?</h2>
          <p className="tp-cta-sub">Let's build something extraordinary together.</p>
          <div className="tp-cta-btns">
            <button className="tp-btn-solid">Get in Touch Now</button>
          </div>
        </div>
      </motion.section>
      </div>
    </div>
    <div style={{ position: "relative", zIndex: 2 }}>
      <Footer />
    </div>
    </>
  );
}
