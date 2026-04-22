import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ background: "#060f1e", color: "#ccc", paddingTop: 60, paddingBottom: 0 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, paddingBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, background: "var(--red)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 18 }}>
                <i className="fas fa-hospital-alt" />
              </div>
              <div>
                <div style={{ fontWeight: 800, color: "#fff", fontSize: 15 }}>KUTE HOSPITAL</div>
                <div style={{ fontSize: 11, color: "var(--teal)", fontWeight: 600 }}>&amp; Laparoscopy Centre</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "#aaa", marginBottom: 20 }}>
              A trusted name in healthcare, serving Sangamner and surrounding areas with compassion, innovation, and excellence since 2010.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: "fab fa-facebook-f", href: "https://facebook.com" },
                { icon: "fab fa-instagram", href: "https://instagram.com" },
                { icon: "fab fa-youtube", href: "https://www.youtube.com/watch?v=sP9eHwJOQIA" },
                { icon: "fab fa-whatsapp", href: "https://wa.me/918888882225" },
              ].map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#ccc", fontSize: 15, transition: "all 0.2s ease", textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--red)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#ccc";
                  }}
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 20, letterSpacing: "1px", textTransform: "uppercase" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Our Doctors", href: "/doctors" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.href} style={{ marginBottom: 10 }}>
                  <Link href={l.href} style={{ color: "#aaa", textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#aaa"; }}
                  >
                    <i className="fas fa-chevron-right" style={{ fontSize: 10, color: "var(--red)" }} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialities */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 20, letterSpacing: "1px", textTransform: "uppercase" }}>Specialities</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {["Emergency & ICU", "Laparoscopic Surgery", "Cancer Surgery", "Cardiology", "Orthopaedics", "Gastroenterology", "Urology & Nephrology", "Diagnostics"].map((s) => (
                <li key={s} style={{ marginBottom: 10 }}>
                  <Link href="/services" style={{ color: "#aaa", textDecoration: "none", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--teal)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#aaa"; }}
                  >
                    <i className="fas fa-chevron-right" style={{ fontSize: 10, color: "var(--red)" }} />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 20, letterSpacing: "1px", textTransform: "uppercase" }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <i className="fas fa-map-marker-alt" style={{ color: "var(--red)", marginTop: 3, fontSize: 15, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: "#aaa", lineHeight: 1.6 }}>Sangamner, Ahmednagar,<br />Maharashtra, India</span>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <i className="fas fa-phone" style={{ color: "var(--red)", fontSize: 15, flexShrink: 0 }} />
                <a href="tel:+918888882225" style={{ fontSize: 14, color: "#aaa", textDecoration: "none" }}>+91 88888 82225</a>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <i className="fas fa-ambulance" style={{ color: "var(--red)", fontSize: 15, flexShrink: 0 }} />
                <a href="tel:+918888372225" style={{ fontSize: 14, color: "#aaa", textDecoration: "none" }}>+91 88883 72225 (24/7)</a>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <i className="fas fa-globe" style={{ color: "var(--red)", fontSize: 15, flexShrink: 0 }} />
                <a href="https://kutehospital.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: "#aaa", textDecoration: "none" }}>kutehospital.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: 13, color: "#666", margin: 0 }}>
            &copy; {new Date().getFullYear()} Kute Hospital &amp; Laparoscopy Centre. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(0,181,164,0.1)", border: "1px solid rgba(0,181,164,0.3)", borderRadius: 20, padding: "6px 14px" }}>
            <i className="fas fa-certificate" style={{ color: "var(--teal)", fontSize: 13 }} />
            <span style={{ fontSize: 12, color: "var(--teal)", fontWeight: 700, letterSpacing: "1px" }}>NABH ACCREDITED</span>
          </div>
        </div>
      </div>

      <ScrollToTopButton />
    </footer>
  );
}

function ScrollToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed", bottom: 32, right: 32,
        width: 48, height: 48, borderRadius: "50%",
        background: "var(--red)", color: "#fff",
        border: "none", cursor: "pointer", fontSize: 18,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 20px rgba(255,63,37,0.4)",
        zIndex: 999, transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "none"; }}
    >
      <i className="fas fa-chevron-up" />
    </button>
  );
}
