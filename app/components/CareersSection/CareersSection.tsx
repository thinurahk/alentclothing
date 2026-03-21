import "./Careerssection.css";
import Image from "next/image";
import img16 from "../../../public/img16.jpg";

export default function CareersSection() {
  return (
    <section id="careers" className="careers-section">
      <div className="careers-card" data-reveal="scale-in">
        {/* South-Asian team photo from Unsplash */}
        <Image
          src={img16}
          alt="South Asian professional team"
          className="careers-img"
          fill
          style={{ objectFit: 'cover' }}
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
