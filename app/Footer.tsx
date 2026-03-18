import "./Footer.css";

const footerLinks = [
  {
    heading: "FASHIONING POSSIBILITIES",
    links: [],
    subSections: [
      {
        heading: "ABOUT US",
        links: ["The Alent Story", "Leadership"],
      },
      {
        heading: "OUR BUSINESSES",
        links: [
          "Textile and Apparel",
          "Retail",
          "Advanced Materials",
          "Environmental Solutions",
          "Communication, Mobility and Digital Solutions",
        ],
      },
    ],
  },
  {
    heading: "INVESTORS",
    links: [
      "Financial Reports",
      "Policies",
      "Shareholders Corner",
      "Scheme of Arrangement",
      "Credit Ratings",
      "Disclosure",
    ],
  },
  {
    heading: "SUSTAINABILITY",
    links: ["Environment", "Social", "Governance", "Resource Centre"],
    subSections: [
      {
        heading: "CORPORATE SOCIAL RESPONSIBILITY",
        links: [],
      },
      {
        heading: "NEWSROOM",
        links: [],
      },
    ],
  },
  {
    heading: "CAREERS",
    links: [
      "Life at Alent",
      "Employee Value Proposition",
      "Learning and Development",
      "Diversity, Equity and Inclusion",
      "Current Openings",
    ],
    subSections: [
      { heading: "CONTACT US",    links: [] },
      { heading: "PRIVACY POLICY", links: [] },
      { heading: "COOKIE POLICY",  links: [] },
    ],
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* ── LEFT: Brand + Social ── */}
        <div className="footer-brand">
          {/* Logo */}
          <div className="footer-logo">
            <span className="footer-logo-alent">ALENT</span>
            <span className="footer-logo-tag">FASHIONING POSSIBILITIES</span>
          </div>

          {/* Stock */}
          <div className="footer-stock">
            <span>NSE</span>
            <span className="stock-divider">|</span>
            <span>BSE</span>
          </div>

          {/* Social */}
          <div className="footer-social-block">
            <p className="social-heading">FOLLOW US ON SOCIAL MEDIA</p>
            <div className="social-icons">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="social-icon">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="footer-divider-v" />

        {/* ── MIDDLE: Nav columns ── */}
        <nav className="footer-nav">
          {footerLinks.map((col) => (
            <div className="footer-col" key={col.heading}>
              <p className="footer-col-heading">{col.heading}</p>

              {col.links.map((link) => (
                <a href="#" className="footer-link" key={link}>{link}</a>
              ))}

              {col.subSections?.map((sub) => (
                <div className="footer-subsection" key={sub.heading}>
                  <p className="footer-col-heading footer-col-heading--sub">{sub.heading}</p>
                  {sub.links.map((link) => (
                    <a href="#" className="footer-link" key={link}>{link}</a>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </nav>

        {/* ── DIVIDER ── */}
        <div className="footer-divider-v" />

        {/* ── RIGHT: HQ info ── */}
        <div className="footer-hq">
          <p className="footer-col-heading">HEADQUARTERS</p>
          <p className="footer-hq-address">
            Colombo 03, Near Galle Face Hotel,<br />
            Colombo – 00300, Sri Lanka.
          </p>
          <p className="footer-hq-tel">Tel: +94 11 234 5678</p>

          <p className="footer-col-heading footer-col-heading--sub footer-group-sites">
            OUR GROUP WEBSITES
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <span className="footer-copy">Copyright © 2026, Alent Clothing. All rights reserved.</span>
      </div>
    </footer>
  );
}
