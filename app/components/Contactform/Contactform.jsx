import { useState } from "react";
import "./Contactform.css";

export default function Contactform() {
  const [form, setForm] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [verified, setVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    if (!agreed)              e.agreed  = "You must accept the Privacy Policy";
    if (!verified)            e.verified = "Please confirm you are not a robot";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    // Send email to alent@gmail.com via Web3Forms API
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // <-- 🔴 REPLACE THIS WITH YOUR KEY!
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Something went wrong! Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  if (submitted) {
    return (
      <div className="cf-wrap">
        <div className="cf-success">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. We'll get back to you shortly.</p>
          <button className="cf-submit" onClick={() => { setSubmitted(false); setForm({ name:"",email:"",subject:"",message:"" }); setAgreed(false); setVerified(false); }}>
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="contact-us" className="cf-wrap">
      <h2 className="cf-heading">WANT MORE DETAILS?</h2>

      <form className="cf-form" onSubmit={handleSubmit} noValidate>

        {/* Name */}
        <div className={`cf-field ${errors.name ? "has-error" : ""}`}>
          <input
            type="text" name="name" placeholder="Your Name" aria-label="Your Name"
            value={form.name} onChange={handleChange}
            className="cf-input" autoComplete="off"
          />
          {errors.name && <span className="cf-error">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className={`cf-field ${errors.email ? "has-error" : ""}`}>
          <input
            type="email" name="email" placeholder="Your Email" aria-label="Your Email"
            value={form.email} onChange={handleChange}
            className="cf-input" autoComplete="off"
          />
          {errors.email && <span className="cf-error">{errors.email}</span>}
        </div>

        {/* Subject */}
        <div className={`cf-field ${errors.subject ? "has-error" : ""}`}>
          <input
            type="text" name="subject" placeholder="Subject" aria-label="Subject"
            value={form.subject} onChange={handleChange}
            className="cf-input" autoComplete="off"
          />
          {errors.subject && <span className="cf-error">{errors.subject}</span>}
        </div>

        {/* Message */}
        <div className={`cf-field ${errors.message ? "has-error" : ""}`}>
          <textarea
            name="message" placeholder="Enter your message…" aria-label="Message"
            value={form.message} onChange={handleChange}
            className="cf-textarea" rows={6}
          />
          {errors.message && <span className="cf-error">{errors.message}</span>}
        </div>

        {/* Privacy checkbox */}
        <div className={`cf-checkbox-wrap ${errors.agreed ? "has-error" : ""}`}>
          <label className="cf-checkbox-label">
            <input
              type="checkbox" checked={agreed}
              onChange={() => { setAgreed(!agreed); if (errors.agreed) setErrors({ ...errors, agreed: "" }); }}
              className="cf-checkbox-input"
            />
            <span className="cf-checkbox-box">
              {agreed && (
                <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 6l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
            <span className="cf-checkbox-text">
              I hereby confirm that I have read and understood the Privacy Policy made available{" "}
              <a href="#" className="cf-privacy-link">here</a>{" "}
              and provide my consent.
            </span>
          </label>
          {errors.agreed && <span className="cf-error">{errors.agreed}</span>}
        </div>

        {/* reCAPTCHA mock */}
        <div className={`cf-recaptcha ${errors.verified ? "has-error" : ""}`}>
          <label className="cf-captcha-box" onClick={() => { setVerified(!verified); if (errors.verified) setErrors({ ...errors, verified: "" }); }}>
            <span className={`cf-captcha-check ${verified ? "checked" : ""}`}>
              {verified && (
                <svg viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="3">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </span>
            <span className="cf-captcha-text">I'm not a robot</span>
            <div className="cf-captcha-logo">
              <svg viewBox="0 0 64 64" className="cf-captcha-icon">
                <path d="M32 4C16.536 4 4 16.536 4 32s12.536 28 28 28 28-12.536 28-28S47.464 4 32 4z" fill="#4A90D9"/>
                <path d="M32 16c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16z" fill="#fff"/>
                <path d="M32 22c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10z" fill="#4A90D9"/>
              </svg>
              <span className="cf-captcha-brand">reCAPTCHA</span>
              <span className="cf-captcha-links">Privacy · Terms</span>
            </div>
          </label>
          {errors.verified && <span className="cf-error">{errors.verified}</span>}
        </div>

        {/* Submit */}
        <button type="submit" className="cf-submit">SUBMIT</button>

      </form>
    </div>
  );
}