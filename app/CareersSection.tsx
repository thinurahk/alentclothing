import "./Careerssection.css";

export default function CareersSection() {
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
