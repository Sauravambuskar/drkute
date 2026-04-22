import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StatsCounter from "../components/StatsCounter";
import InsuranceSection from "../components/InsuranceSection";

const IMGS = {
  hospital: "https://www.kutehospital.com/wp-content/uploads/2026/02/kutedr1.png",
  hospitalArea: "https://www.kutehospital.com/wp-content/uploads/2026/02/IMG_9717-768x512-1.jpg",
  floor: "https://www.kutehospital.com/wp-content/uploads/2026/02/IMG_9680-1024x683-1.jpg",
  icu: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-349-1.png",
  pathology: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-351-1.png",
  ot: "https://www.kutehospital.com/wp-content/uploads/2026/02/IMG_9643-1024x683-1.jpg",
};

const TIMELINE = [
  { year: "2010", event: "Hospital Founded in Sangamner" },
  { year: "2012", event: "Advanced Laparoscopy Centre Established" },
  { year: "2015", event: "NABH Accreditation Achieved" },
  { year: "2018", event: "Super-Speciality Departments Added (Cardiology, Nephrology)" },
  { year: "2023", event: "4800+ Patients per Month Milestone Achieved" },
];

export default function About() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <Navbar />

      {/* Page Hero */}
      <section style={{
        minHeight: 340,
        background: `linear-gradient(rgba(11,31,58,0.85), rgba(11,31,58,0.85)), url(${IMGS.hospital}) center/cover no-repeat`,
        display: "flex", alignItems: "center",
        paddingTop: 72,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>WHO WE ARE</div>
          <h1 className="h1-size" style={{ color: "#fff", marginBottom: 16 }}>About Us</h1>
          <div style={{ display: "flex", gap: 8, alignItems: "center", color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</a>
            <i className="fas fa-chevron-right" style={{ fontSize: 10 }} />
            <span style={{ color: "var(--teal)" }}>About</span>
          </div>
        </div>
      </section>

      {/* Hospital Story */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
              <div style={{ borderRadius: 12, overflow: "hidden", height: 240 }}>
                <img src={IMGS.hospitalArea} alt="Hospital Area" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
              </div>
              <div style={{ borderRadius: 12, overflow: "hidden", height: 200 }}>
                <img src={IMGS.floor} alt="Hospital Floor" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>OUR STORY</div>
              <h2 className="h2-size" style={{ color: "var(--charcoal)", marginBottom: 16 }}>About Kute Hospital</h2>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.85, marginBottom: 16 }}>
                At Kute Hospital &amp; Laparoscopy Centre, we are dedicated to providing world-class healthcare services. We focus on patient-centered care, cutting-edge medical solutions, and a compassionate approach to healing.
              </p>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.85, marginBottom: 16 }}>
                With a dedication to safety, excellence, and innovation, we are known for the best &amp; affordable treatments with quick appointments and timely solutions. We provide world-class treatment at Kute Hospital.
              </p>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.85, marginBottom: 32 }}>
                Led by Dr. Pradeep Kute with 14+ years of experience, our hospital has served thousands of patients across Sangamner, Ahmednagar, and the wider Maharashtra region, earning trust through compassion and clinical excellence.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <div style={{ background: "var(--sand)", borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--red)" }}>NABH</div>
                  <div style={{ fontSize: 12, color: "var(--grey)", fontWeight: 600 }}>Accredited</div>
                </div>
                <div style={{ background: "var(--sand)", borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--navy)" }}>14+</div>
                  <div style={{ fontSize: 12, color: "var(--grey)", fontWeight: 600 }}>Years of Service</div>
                </div>
                <div style={{ background: "var(--sand)", borderRadius: 10, padding: "12px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--teal)" }}>20+</div>
                  <div style={{ fontSize: 12, color: "var(--grey)", fontWeight: 600 }}>Specialities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section style={{ background: "var(--cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>OUR PURPOSE</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)" }}>Mission, Vision &amp; Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: "fas fa-bullseye", title: "Mission", color: "var(--red)", text: "To deliver compassionate, world-class healthcare to every patient, ensuring the best possible outcomes through innovation and evidence-based medicine." },
              { icon: "fas fa-eye", title: "Vision", color: "var(--teal)", text: "To be the most trusted and preferred healthcare destination in Sangamner, Ahmednagar, and beyond — recognized for quality, safety, and patient-centric care." },
              { icon: "fas fa-gem", title: "Values", color: "var(--navy)", text: "Safety · Excellence · Innovation · Compassion · Integrity — these five pillars guide every decision we make and every interaction we have with our patients." },
            ].map((c) => (
              <div key={c.title} style={{ background: "#fff", borderRadius: 16, padding: 32, boxShadow: "0 4px 20px rgba(0,0,0,0.07)", borderTop: `4px solid ${c.color}` }}>
                <div style={{ width: 52, height: 52, background: `${c.color}15`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <i className={c.icon} style={{ color: c.color, fontSize: 22 }} />
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 20, color: "var(--charcoal)", marginBottom: 12 }}>{c.title}</h3>
                <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.8, margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>OUR JOURNEY</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)" }}>Hospital Milestones</h2>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: "var(--sand)", transform: "translateX(-50%)" }} />
            {TIMELINE.map((item, i) => (
              <div key={item.year} style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 40,
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              }}>
                <div style={{ flex: 1, textAlign: i % 2 === 0 ? "right" : "left", padding: i % 2 === 0 ? "0 32px 0 0" : "0 0 0 32px" }}>
                  <div style={{ background: i % 2 === 0 ? "var(--sand)" : "var(--navy)", borderRadius: 10, padding: "16px 20px", display: "inline-block" }}>
                    <div style={{ fontWeight: 800, fontSize: 14, color: i % 2 === 0 ? "var(--charcoal)" : "#fff" }}>{item.event}</div>
                  </div>
                </div>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "var(--red)", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 12, flexShrink: 0,
                  zIndex: 1,
                  boxShadow: "0 4px 16px rgba(255,63,37,0.3)",
                }}>
                  {item.year}
                </div>
                <div style={{ flex: 1 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Highlights */}
      <section style={{ background: "var(--sand)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>INFRASTRUCTURE</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)" }}>Our Facility Highlights</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { img: IMGS.icu, title: "ICU", desc: "Advanced 24/7 intensive care unit with state-of-the-art monitoring equipment." },
              { img: IMGS.pathology, title: "Pathology Lab", desc: "Fully equipped diagnostic lab offering same-day results for all tests." },
              { img: IMGS.ot, title: "Operation Theater", desc: "Modern OT with advanced surgical equipment for all types of procedures." },
              { img: IMGS.floor, title: "Hospital Floor", desc: "Clean, spacious, and comfortable patient wards with round-the-clock nursing care." },
            ].map((f) => (
              <div key={f.title} style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", position: "relative" }}>
                <img src={f.img} alt={f.title} style={{ width: "100%", height: 220, objectFit: "cover" }} loading="lazy" />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(11,31,58,0.92))", padding: "32px 20px 20px" }}>
                  <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{f.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, margin: 0 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />
      <InsuranceSection />
      <Footer />
    </div>
  );
}
