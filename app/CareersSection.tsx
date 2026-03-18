import "./Careerssection.css";
import img16 from "../public/img16.jpg";

export default function CareersSection() {
  return (
    <section className="careers-section">
      <div className="careers-card">
        {/* South-Asian team photo from Unsplash */}
        <img
          src={img16.src}
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
