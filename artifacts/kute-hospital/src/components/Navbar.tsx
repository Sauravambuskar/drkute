import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Insurance", href: "/#insurance" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location === "/";
    return location === href || location.startsWith(href + "/");
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(11,31,58,0.98)" : "rgba(11,31,58,0.95)",
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none",
        transition: "all 0.3s ease",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 44, height: 44,
              background: "var(--red)",
              borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, color: "#fff",
              flexShrink: 0,
            }}>
              <i className="fas fa-hospital-alt" />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.5px" }}>
                KUTE HOSPITAL
              </div>
              <div style={{ fontSize: 11, color: "var(--teal)", fontWeight: 600, letterSpacing: "0.5px" }}>
                &amp; Laparoscopy Centre
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    padding: "8px 14px",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                    borderBottom: isActive(link.href) ? "2px solid var(--teal)" : "2px solid transparent",
                    paddingBottom: 6,
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--teal)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "#fff";
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: isActive(link.href) ? "var(--teal)" : "#fff",
                    textDecoration: "none",
                    padding: "8px 14px",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 600,
                    transition: "all 0.2s ease",
                    borderBottom: isActive(link.href) ? "2px solid var(--teal)" : "2px solid transparent",
                    paddingBottom: 6,
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--teal)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.href)) {
                      (e.target as HTMLElement).style.color = "#fff";
                    }
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="desktop-nav">
            <a href="tel:+918888882225" style={{ color: "var(--teal)", fontWeight: 700, fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
              <i className="fas fa-phone" style={{ fontSize: 13 }} />
              +91 88888 82225
            </a>
            <Link href="/contact" className="btn-red" style={{ padding: "10px 20px", fontSize: 14, borderRadius: 8 }}>
              Book Appointment
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#fff",
              fontSize: 22,
              padding: 8,
            }}
          >
            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(11,31,58,0.98)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "16px 0",
            }}
            className="mobile-menu"
          >
            {NAV_LINKS.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    display: "block",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "12px 16px",
                    fontSize: 16,
                    fontWeight: 600,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "12px 16px",
                    fontSize: 16,
                    fontWeight: 600,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div style={{ padding: "16px 16px 8px" }}>
              <a href="tel:+918888882225" style={{ color: "var(--teal)", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "block", marginBottom: 12 }}>
                <i className="fas fa-phone" style={{ marginRight: 8 }} />
                +91 88888 82225
              </a>
              <Link href="/contact" className="btn-red" onClick={() => setMenuOpen(false)} style={{ display: "block", textAlign: "center", padding: "12px 20px" }}>
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 1024px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
