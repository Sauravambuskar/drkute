import { useState } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IMGS = {
  drKute: "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9858-768x512.jpg",
  doctor2: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-348.png",
  doctorPatient: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-359.png",
  staff1: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-352.png",
  staff2: "https://www.kutehospital.com/wp-content/uploads/2026/02/IMG_9901-768x512-1.jpg",
};

function InlineAppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "flex-end" }}>
      <input required placeholder="Your Name" style={{ ...inputStyle, flex: "1 1 160px" }} />
      <input required placeholder="Phone Number" type="tel" style={{ ...inputStyle, flex: "1 1 160px" }} />
      <select required style={{ ...inputStyle, flex: "1 1 200px" }}>
        <option value="">Department</option>
        {["Emergency", "Laparoscopic Surgery", "Cardiology", "Orthopaedics", "Cancer Surgery", "Gastroenterology", "Urology", "General Consultation"].map((d) => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      <button type="submit" style={{
        background: submitted ? "var(--teal)" : "var(--red)",
        color: "#fff", border: "none", borderRadius: 8, padding: "12px 24px",
        fontWeight: 700, fontSize: 14, cursor: "pointer", transition: "background 0.3s ease",
        whiteSpace: "nowrap",
      }}>
        {submitted ? "✓ Booking Sent!" : "Book Appointment"}
      </button>
    </form>
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
};

export default function Doctors() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        minHeight: 340,
        background: `linear-gradient(rgba(11,31,58,0.85), rgba(11,31,58,0.85)), url(${IMGS.staff1}) center/cover no-repeat`,
        display: "flex", alignItems: "center", paddingTop: 72,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>MEDICAL TEAM</div>
          <h1 className="h1-size" style={{ color: "#fff", marginBottom: 16 }}>Meet Our Experts</h1>
          <div style={{ display: "flex", gap: 8, alignItems: "center", color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</a>
            <i className="fas fa-chevron-right" style={{ fontSize: 10 }} />
            <span style={{ color: "var(--teal)" }}>Doctors</span>
          </div>
        </div>
      </section>

      {/* Dr. Pradeep Kute */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <img
                src={IMGS.drKute}
                alt="Dr. Pradeep Kute"
                style={{ width: "100%", borderRadius: 16, objectFit: "cover", objectPosition: "top", maxHeight: 520, boxShadow: "0 16px 48px rgba(0,0,0,0.15)" }}
              />
              <div style={{ position: "absolute", top: 20, left: 20, background: "var(--red)", color: "#fff", borderRadius: 20, padding: "8px 16px", fontWeight: 700, fontSize: 13 }}>
                14+ Years Experience
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Chief Surgeon &amp; Hospital Director</div>
              <h1 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 800, color: "var(--charcoal)", marginBottom: 20, letterSpacing: "-1px" }}>Dr. Pradeep Kute</h1>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.85, marginBottom: 16 }}>
                Dr. Pradeep Kute is a highly experienced and knowledgeable doctor with over 14 years of expertise. With a deep understanding of various medical conditions and treatments, Dr. Kute provides effective diagnosis and care.
              </p>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.85, marginBottom: 28 }}>
                Being associated with a highly equipped hospital, he has access to advanced medical technologies and resources. Dr. Kute prioritizes patient well-being and satisfaction, ensuring attentive care, clear communication, and a patient-centered approach to medicine.
              </p>

              {/* Achievement badges */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 24 }}>
                {["14+ Years of Experience", "Highly Equipped Hospital", "Good Quality Care & Service"].map((badge) => (
                  <div key={badge} style={{ background: "var(--sand)", borderRadius: 10, padding: "14px 12px", textAlign: "center" }}>
                    <i className="fas fa-award" style={{ color: "var(--red)", fontSize: 20, marginBottom: 6, display: "block" }} />
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--charcoal)", lineHeight: 1.4 }}>{badge}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {["Laparoscopic Surgery", "General Surgery", "Oncology", "Trauma Surgery", "NABH Certified"].map((t) => (
                  <span key={t} style={{ background: "var(--navy)", color: "#fff", padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{t}</span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="tel:+918888882225" className="btn-red">
                  <i className="fas fa-phone" style={{ marginRight: 8 }} />
                  Call +91 88888 82225
                </a>
                <Link href="/contact" className="btn-ghost" style={{ border: "2px solid var(--navy)", color: "var(--navy)" }}>
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor checking patient banner */}
      <section style={{ position: "relative", height: 340, overflow: "hidden" }}>
        <img src={IMGS.doctorPatient} alt="Doctor checking patient" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(11,31,58,0.65)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h2 className="font-serif-italic" style={{ color: "#fff", fontSize: "clamp(24px,4vw,48px)", textAlign: "center", maxWidth: 700 }}>
            "Compassionate Care in Every Interaction"
          </h2>
        </div>
      </section>

      {/* Expert Specialist */}
      <section style={{ background: "var(--cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>OUR SPECIALISTS</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)" }}>Expert Specialist</h2>
          </div>
          <div style={{ maxWidth: 500, margin: "0 auto" }}>
            <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}>
              <img src={IMGS.doctor2} alt="Expert Specialist" style={{ width: "100%", height: 360, objectFit: "cover" }} loading="lazy" />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(11,31,58,0.9))", padding: "40px 24px 24px" }}>
                <div style={{ color: "var(--teal)", fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 6 }}>Expert Specialist</div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>Kute Hospital Medical Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Team */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>OUR PEOPLE</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)" }}>Our Dedicated Team</h2>
            <p style={{ maxWidth: 560, margin: "20px auto 0", fontSize: 16, color: "var(--grey)", lineHeight: 1.75 }}>
              Our team of dedicated healthcare professionals is committed to providing compassionate, high-quality care to every patient, every day.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { img: IMGS.staff1, label: "Expert Medical Team" },
              { img: IMGS.staff2, label: "Dedicated Staff" },
            ].map((s) => (
              <div key={s.label} style={{ position: "relative", borderRadius: 16, overflow: "hidden", height: 280, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
                <img src={s.img} alt={s.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(11,31,58,0.5)", display: "flex", alignItems: "flex-end", padding: 24 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA banner with form */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, #1a3a6e 100%)", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 className="h2-size" style={{ color: "#fff", marginBottom: 12 }}>Book an Appointment with Our Experts</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}>
              Fill in your details below and our team will confirm your appointment.
            </p>
          </div>
          <InlineAppointmentForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
