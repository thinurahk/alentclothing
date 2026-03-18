"use client";
import { useRouter } from "next/navigation";
import "./NewsroomSection.css";
import img14 from "../../../public/img14.jpg";
import img15 from "../../../public/img15.jpg";

const news = [
  {
    id: 1,
    title: "ALENT 2026 Spring Summer Collection",
    excerpt:
      "ALENT 26 embodies versatile denim for Spring/Summer '26, blending dynamic energy with the season's top trends. Each piece offers casual comfort, active wearability, holiday ease, and bold style.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=900&q=80",
    size: "large",
    href: "/textile",

  },
  {
    id: 2,
    title: "Walk for Rahula '26: Official Jersey",
    excerpt:
      "Proud manufacturing partners for Rahula College Matara. We delivered high-performance, custom-designed official jerseys that capture the dynamic spirit and pride of the 'Walk for Rahula 26' community milestone.",
    image: img14.src,
    size: "medium",
    href: "/textile",

  },
  {
    id: 3,
    title: "Premium Promotional T-Shirts",
    excerpt:
      "Sri Lanka's trusted partner for premium promotional t-shirts. Whatever you envision for your brand, we have the expertise to make it happen.",
    image: img15.src,
    size: "medium",
    href: "/textile",

  },
];

export default function NewsroomSection() {
  const router = useRouter();
  return (
    <section id="newsroom" className="newsroom-section">
      {/* ── Header ── */}
      <div className="newsroom-header" data-reveal="fade-up">
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
        {news.map((item, index) => (
          <div
            className={`news-card news-card--${item.size}`}
            key={item.id}
            data-reveal="fade-up"
            style={{ transitionDelay: `${index * 0.14 + 0.1}s` }}
          >
            {/* Background Image */}
            <img src={item.image} alt={item.title} className="news-img" />

            {/* Dark overlay */}
            <div className="news-overlay" />

            {/* Content */}
            <div className="news-body">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-excerpt">{item.excerpt}</p>
              <button 
                className="news-arrow" 
                aria-label="Read more"
                onClick={() => item.href ? router.push(item.href) : undefined}
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

      {/* ── Mobile view all ── */}
      <div className="newsroom-footer-mobile">
        <button className="view-all-btn">view all updates</button>
      </div>
    </section>
  );
}
