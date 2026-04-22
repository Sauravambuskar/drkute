import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IMGS = {
  hospital: "https://www.kutehospital.com/wp-content/uploads/2026/02/kutedr1.png",
};

const FAQS = [
  { q: "What are the OPD hours at Kute Hospital?", a: "OPD is available from 9:00 AM to 9:00 PM daily." },
  { q: "Does Kute Hospital have cashless treatment facility?", a: "Yes, we accept cashless treatment under 30+ TPA and private insurance companies." },
  { q: "Is ambulance service available 24/7?", a: "Yes, our ambulance service is available 24 hours a day, 365 days a year at +91 88883 72225." },
  { q: "What specialities does Kute Hospital offer?", a: "We offer 20+ specialities including Laparoscopy, Cardiology, Oncology, Orthopaedics, Gastroenterology, Urology, Nephrology, Plastic Surgery, Diagnostics, and ICU/Emergency." },
  { q: "How do I book an appointment?", a: "Call us at +91 88888 82225, or use the booking form on this page." },
  { q: "Does the hospital have ICU facilities?", a: "Yes, we have a fully equipped 24/7 ICU with advanced monitoring and care." },
];

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--sand)", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", padding: "20px 0",
          background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
        }}
      >
        <span style={{ fontWeight: 700, fontSize: 16, color: "var(--charcoal)" }}>{q}</span>
        <i className={`fas fa-${open ? "minus" : "plus"}`} style={{ color: "var(--red)", fontSize: 16, flexShrink: 0 }} />
      </button>
      <div style={{
        maxHeight: open ? "200px" : "0",
        overflow: "hidden",
        transition: "max-height 0.35s ease",
      }}>
        <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.75, paddingBottom: 20, margin: 0 }}>{a}</p>
      </div>
    </div>
  );
}

function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      setTimeout(() => setSubmitted(false), 3000);
    }, 800);
  };

  return (
    <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: 32 }}>
      <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 22, marginBottom: 24 }}>Book an Appointment</h3>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <input required placeholder="Patient Name" style={inputStyle} />
          <input required placeholder="Phone Number" type="tel" style={inputStyle} />
        </div>
        <input placeholder="Email Address" type="email" style={inputStyle} />
        <select required style={inputStyle}>
          <option value="">Select Department</option>
          {["Emergency", "Laparoscopic Surgery", "Cardiology", "Orthopaedics", "Cancer Surgery", "Gastroenterology", "Urology", "Plastic Surgery", "Diagnostics", "General Consultation"].map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <input type="date" required style={inputStyle} />
          <input type="time" style={inputStyle} />
        </div>
        <textarea placeholder="Message (optional)" rows={3} style={{ ...inputStyle, resize: "none" }} />
        <button type="submit" disabled={submitting} style={{
          background: submitted ? "var(--teal)" : "var(--red)",
          color: "#fff", border: "none", borderRadius: 8,
          padding: "14px", fontWeight: 700, fontSize: 15,
          cursor: "pointer", transition: "background 0.3s ease",
        }}>
          {submitted ? "✓ Booking Request Sent!" : submitting ? "Sending..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 8,
  padding: "12px 14px",
  color: "#fff",
  fontSize: 14,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};

export default function Contact() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        minHeight: 340,
        background: `linear-gradient(rgba(11,31,58,0.85), rgba(11,31,58,0.85)), url(${IMGS.hospital}) center/cover no-repeat`,
        display: "flex", alignItems: "center", paddingTop: 72,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>REACH US</div>
          <h1 className="h1-size" style={{ color: "#fff", marginBottom: 12 }}>Contact Us</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, marginBottom: 20 }}>Book an Appointment Today</p>
          <div style={{ display: "flex", gap: 8, alignItems: "center", color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</a>
            <i className="fas fa-chevron-right" style={{ fontSize: 10 }} />
            <span style={{ color: "var(--teal)" }}>Contact</span>
          </div>
        </div>
      </section>

      {/* Phone Cards */}
      <section style={{ background: "var(--cream)", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { icon: "fas fa-phone", color: "var(--red)", label: "Enquiry", number: "+91 88888 82225", tel: "+918888882225" },
              { icon: "fas fa-headset", color: "var(--teal)", label: "Medical Helpline", number: "+91 88887 32225", tel: "+918888732225" },
              { icon: "fas fa-ambulance", color: "var(--navy)", label: "Ambulance 24/7", number: "+91 88883 72225", tel: "+918888372225" },
            ].map((c) => (
              <div key={c.label} style={{ background: "#fff", borderRadius: 16, padding: "28px 24px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", textAlign: "center", border: `3px solid ${c.color}10` }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: `${c.color}15`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <i className={c.icon} style={{ color: c.color, fontSize: 24 }} />
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, color: c.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>{c.label}</div>
                <a href={`tel:${c.tel}`} style={{ fontSize: 22, fontWeight: 800, color: "var(--charcoal)", textDecoration: "none" }}>{c.number}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section style={{ background: "var(--navy)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>CONTACT INFORMATION</div>
              <h2 className="h2-size" style={{ color: "#fff", marginBottom: 24 }}>Find Us Here</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {[
                  { icon: "fas fa-map-marker-alt", label: "Address", value: "Sangamner, Ahmednagar, Maharashtra, India", href: null },
                  { icon: "fas fa-phone", label: "Enquiry", value: "+91 88888 82225", href: "tel:+918888882225" },
                  { icon: "fas fa-headset", label: "Medical Helpline", value: "+91 88887 32225", href: "tel:+918888732225" },
                  { icon: "fas fa-ambulance", label: "Ambulance 24/7", value: "+91 88883 72225", href: "tel:+918888372225" },
                  { icon: "fas fa-globe", label: "Website", value: "kutehospital.com", href: "https://kutehospital.com" },
                  { icon: "fas fa-clock", label: "Hours", value: "Open 24/7 — 365 Days a Year", href: null },
                ].map((c) => (
                  <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, background: "rgba(255,63,37,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className={c.icon} style={{ color: "var(--red)", fontSize: 18 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 4 }}>{c.label}</div>
                      {c.href ? (
                        <a href={c.href} style={{ fontSize: 15, color: "#fff", fontWeight: 600, textDecoration: "none" }}>{c.value}</a>
                      ) : (
                        <div style={{ fontSize: 15, color: "#fff", fontWeight: 600 }}>{c.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30294.36574447856!2d74.20055!3d19.57390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc8e4c8f9ce7d3%3A0x8a8e5a28c5e12f6f!2sSangamner%2C+Maharashtra+422605!5e0!3m2!1sen!2sin!4v1610000000000"
        width="100%"
        height="420"
        style={{ border: "none", display: "block" }}
        loading="lazy"
        title="Kute Hospital Location"
        allowFullScreen
      />

      {/* Emergency Banner */}
      <div style={{ background: "var(--red)", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ color: "#fff", fontWeight: 700, fontSize: 16, margin: 0 }}>
          FOR EMERGENCIES CALL{" "}
          <a href="tel:+918888372225" style={{ color: "#fff", textDecoration: "underline" }}>+91 88883 72225</a>
          {" "}— Available 24/7 · 365 Days
        </p>
      </div>

      {/* FAQ */}
      <section style={{ background: "var(--cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>FREQUENTLY ASKED</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)" }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 16, padding: "8px 32px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
            {FAQS.map((faq) => (
              <FAQ key={faq.q} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
