"use client";

import { useState } from "react";
import Image from "next/image";
import NavMenu from "../components/NavMenu/NavMenu";
import "./mediapge.css";
import { VideoText } from "@/components/ui/video-text";
import { AuroraText } from "@/components/ui/aurora-text"

import mm1 from "../../public/mm1.jpg";
import mm2 from "../../public/mm2.jpg";
import mm3 from "../../public/mm3.jpg";
import mm4 from "../../public/mm4.jpg";
import mm5 from "../../public/mm5.jpg";
import mm6 from "../../public/mm6.jpg";
import mm7 from "../../public/mm7.jpg";
import mm8 from "../../public/mm8.jpg";
import mm9 from "../../public/mm9.jpg";
import mm10 from "../../public/mm10.jpg";
import mm11 from "../../public/mm11.jpg";
import mm12 from "../../public/mm12.jpg";
import mm13 from "../../public/mm13.jpg";
import mm14 from "../../public/mm14.jpg";
import mm15 from "../../public/mm15.jpg";
import mm16 from "../../public/mm16.jpg";
import mm17 from "../../public/mm17.jpg";
import mm18 from "../../public/mm18.jpg";
import mm19 from "../../public/mm19.jpg";
import mm20 from "../../public/mm20.jpg";
import mm21 from "../../public/mm21.jpg";
import mm22 from "../../public/mm22.jpg";
import mm23 from "../../public/mm23.jpg";
import mm24 from "../../public/mm24.jpg";
import mm25 from "../../public/mm25.jpg";
import mm26 from "../../public/mm26.jpg";
import mm27 from "../../public/mm27.jpg";
import mm28 from "../../public/mm28.jpg";
import img7 from "../../public/img7.jpeg";

const images = [
  { id: 1,  src: mm1, alt: "Editorial Fashion Photography - Collection 01", span: 2 },
  { id: 2,  src: mm2, alt: "Editorial Fashion Photography - Collection 02", span: 1 },
  { id: 3,  src: mm3, alt: "Editorial Fashion Photography - Collection 03", span: 1 },
  { id: 4,  src: mm4, alt: "Editorial Fashion Photography - Collection 04", span: 1 },
  { id: 5,  src: mm5, alt: "Editorial Fashion Photography - Collection 05", span: 2 },
  { id: 6,  src: mm6, alt: "Editorial Fashion Photography - Collection 06", span: 1 },
  { id: 7,  src: mm7, alt: "Editorial Fashion Photography - Collection 07", span: 1 },
  { id: 8,  src: mm8, alt: "Editorial Fashion Photography - Collection 08", span: 2 },
  { id: 9,  src: mm9, alt: "Editorial Fashion Photography - Collection 09", span: 1 },
  { id: 10, src: mm10, alt: "Editorial Fashion Photography - Collection 10", span: 1 },
  { id: 11, src: mm11, alt: "Editorial Fashion Photography - Collection 11", span: 1 },
  { id: 12, src: mm12, alt: "Editorial Fashion Photography - Collection 12", span: 2 },
  { id: 13, src: mm13, alt: "Editorial Fashion Photography - Collection 13", span: 1 },
  { id: 14, src: mm14, alt: "Editorial Fashion Photography - Collection 14", span: 1 },
  { id: 15, src: mm15, alt: "Editorial Fashion Photography - Collection 15", span: 1 },
  { id: 16, src: mm16, alt: "Editorial Fashion Photography - Collection 16", span: 2 },
  { id: 17, src: mm17, alt: "Editorial Fashion Photography - Collection 17", span: 1 },
  { id: 18, src: mm18, alt: "Editorial Fashion Photography - Collection 18", span: 1 },
  { id: 19, src: mm19, alt: "Editorial Fashion Photography - Collection 19", span: 1 },
  { id: 20, src: mm20, alt: "Editorial Fashion Photography - Collection 20", span: 2 },
  { id: 21, src: mm21, alt: "Editorial Fashion Photography - Collection 21", span: 1 },
  { id: 22, src: mm22, alt: "Editorial Fashion Photography - Collection 22", span: 1 },
  { id: 23, src: mm23, alt: "Editorial Fashion Photography - Collection 23", span: 1 },
  { id: 24, src: mm24, alt: "Editorial Fashion Photography - Collection 24", span: 2 },
  { id: 25, src: mm25, alt: "Editorial Fashion Photography - Collection 25", span: 2 },
  { id: 26, src: mm26, alt: "Editorial Fashion Photography - Collection 26", span: 2 },
  { id: 27, src: mm27, alt: "Editorial Fashion Photography - Collection 27", span: 2 },
  { id: 28, src: mm28, alt: "Editorial Fashion Photography - Collection 28", span: 2 },
  { id: 29, src: img7, alt: "Editorial Fashion Photography - Main Feature", span: 2 },
];

export default function MediaPageClient() {
  const [lightbox, setLightbox] = useState<typeof images[0] | null>(null);

  const openLightbox = (img: typeof images[0]) => setLightbox(img);
  const closeLightbox = () => setLightbox(null);

  const navigate = (dir: number) => {
    if (!lightbox) return;
    const idx = images.findIndex(i => i.id === lightbox.id);
    const next = images[(idx + dir + images.length) % images.length];
    setLightbox(next);
  };

  return (
    <>
      <NavMenu />
      <main className="gp-root">
        <header className="gp-header">
          <div className="relative h-[120px] md:h-[200px] w-full overflow-hidden drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">
            <VideoText src="/herovid.mp4">
              Mediaalent
            </VideoText>
          </div>
          <p className="gp-sub">Mediaalent Photography — Editorial Collection</p>
        </header>

        <section className="gp-masonry" aria-label="Fashion Photography Gallery">
          {images.map((img) => (
            <div
              key={img.id}
              className={`gp-item gp-span-${img.span}`}
              onClick={() => openLightbox(img)}
              role="button"
              aria-label={`View ${img.alt} in full screen`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="gp-img"
                placeholder="blur"
              />
              <div className="gp-item-overlay">
                <span className="gp-item-label">{img.alt}</span>
              </div>
            </div>
          ))}
        </section>

        <section className="py-10 px-4">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
            Classic <AuroraText>Captures</AuroraText>
          </h1>
        </section>
      </main>

      {lightbox && (
        <div className="gp-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className="gp-lb-close" onClick={closeLightbox} aria-label="Close Lightbox">✕</button>
          <button className="gp-lb-nav gp-lb-prev" onClick={(e) => { e.stopPropagation(); navigate(-1); }} aria-label="Previous image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="gp-lb-content" onClick={(e) => e.stopPropagation()}>
            <Image src={lightbox.src} alt={`${lightbox.alt} - Large View`} className="gp-lb-img" style={{ objectFit: 'contain' }} />
          </div>
          <button className="gp-lb-nav gp-lb-next" onClick={(e) => { e.stopPropagation(); navigate(1); }} aria-label="Next image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="gp-lb-counter" aria-live="polite">
            {images.findIndex(i => i.id === lightbox.id) + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
