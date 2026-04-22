import { useState } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EmergencyStrip from "../components/EmergencyStrip";
import StatsCounter from "../components/StatsCounter";
import InsuranceSection from "../components/InsuranceSection";

const IMGS = {
  hospital: "https://www.kutehospital.com/wp-content/uploads/2026/02/kutedr1.png",
  drKute: "https://backup.kutehospital.com/wp-content/uploads/2024/03/IMG_9858-768x512.jpg",
  doctor2: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-348.png",
  doctorPatient: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-359.png",
  icu: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-349-1.png",
  pathology: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-351-1.png",
  staff1: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-352.png",
  staff2: "https://www.kutehospital.com/wp-content/uploads/2026/02/IMG_9901-768x512-1.jpg",
  hospitalArea: "https://www.kutehospital.com/wp-content/uploads/2026/02/IMG_9717-768x512-1.jpg",
  ot: "https://www.kutehospital.com/wp-content/uploads/2026/02/IMG_9643-1024x683-1.jpg",
  floor: "https://www.kutehospital.com/wp-content/uploads/2026/02/IMG_9680-1024x683-1.jpg",
  cancer: "https://www.kutehospital.com/wp-content/uploads/2026/02/cancer-surgery-1024x681-1.jpg",
  heroOpt: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-353-1.png",
  imgA: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-354.png",
  imgB: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-355.png",
  imgC: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-358.png",
  imgD: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-359-1.png",
};

const SERVICES = [
  { title: "Emergency & ICU", icon: "fas fa-ambulance", img: IMGS.icu, desc: "24/7 critical care with advanced ICU beds, rapid response team, and trauma care services." },
  { title: "Laparoscopic Surgery", icon: "fas fa-procedures", img: IMGS.ot, desc: "Minimally invasive procedures for faster recovery with less pain and shorter hospital stays." },
  { title: "Cancer Surgery (Oncology)", icon: "fas fa-ribbon", img: IMGS.cancer, desc: "Comprehensive oncology care including tumor removal, reconstructive surgery, and post-op support." },
  { title: "Diagnostics & Pathology", icon: "fas fa-flask", img: IMGS.pathology, desc: "Same-day results with MRI, CT scan, full blood work, and complete radiology services." },
  { title: "Cardiology", icon: "fas fa-heartbeat", img: IMGS.imgC, desc: "ECG, echo, cardiac ICU, interventional cardiology, and advanced heart surgery facilities." },
  { title: "Orthopaedics & Trauma", icon: "fas fa-bone", img: IMGS.floor, desc: "Joint replacement, arthroscopy, fracture care, and sports injury management by expert surgeons." },
  { title: "Gastroenterology", icon: "fas fa-stethoscope", img: IMGS.imgD, desc: "Endoscopy, colonoscopy, liver care, and complete GI surgical services." },
  { title: "Urology & Nephrology", icon: "fas fa-tint", img: IMGS.imgA, desc: "Kidney stone removal, dialysis, renal surgery, and comprehensive urological care." },
  { title: "Plastic Surgery", icon: "fas fa-user-md", img: IMGS.imgB, desc: "Scar revision, wound repair, reconstructive procedures, and cosmetic surgery services." },
];

function YouTubeSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section style={{ background: "var(--navy)", padding: "80px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>WATCH &amp; LEARN</div>
          <h2 className="h2-size" style={{ color: "#fff", marginBottom: 0 }}>See Kute Hospital in Action</h2>
        </div>
        <div style={{ position: "relative", borderRadius: 16, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.5)", paddingBottom: "56.25%", height: 0 }}>
          {!playing ? (
            <div
              onClick={() => setPlaying(true)}
              style={{ position: "absolute", inset: 0, cursor: "pointer" }}
            >
              <img
                src={IMGS.drKute}
                alt="Dr. Pradeep Kute - Watch hospital video"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "rgba(11,31,58,0.45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{
                  width: 80, height: 80, borderRadius: "50%",
                  background: "var(--red)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 8px 32px rgba(255,63,37,0.5)",
                }}>
                  <i className="fas fa-play" style={{ color: "#fff", fontSize: 28, marginLeft: 4 }} />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src="https://www.youtube-nocookie.com/embed/sP9eHwJOQIA?autoplay=1&rel=0&modestbranding=1"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
              title="Kute Hospital Video"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <Navbar />

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        background: `linear-gradient(rgba(11,31,58,0.55), rgba(11,31,58,0.55)), url(${IMGS.hospital}) center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        paddingTop: 72,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px", width: "100%" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            {/* Left content */}
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid var(--red)", borderRadius: 20,
                padding: "6px 14px", marginBottom: 24,
              }}>
                <i className="fas fa-certificate" style={{ color: "var(--red)", fontSize: 13 }} />
                <span style={{ fontSize: 12, color: "var(--red)", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>NABH Accredited</span>
              </div>
              <h1 className="h1-size" style={{ color: "#fff", marginBottom: 16 }}>
                Expert Care When It<br />Matters <span style={{ color: "var(--red)" }}>Most.</span>
              </h1>
              <p className="font-serif-italic" style={{ fontSize: 22, color: "var(--teal)", marginBottom: 20 }}>
                "Caring for You, Always."
              </p>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.85, marginBottom: 36, maxWidth: 540 }}>
                Kute Hospital &amp; Laparoscopy Centre in Sangamner, Ahmednagar is a NABH-accredited multispeciality hospital offering world-class healthcare with compassion, innovation, and 14+ years of surgical excellence.
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
                <Link href="/contact" className="btn-red">Book Appointment</Link>
                <Link href="/services" className="btn-ghost">Our Services</Link>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
                {[
                  { value: "4800+", label: "Patients/Month" },
                  { value: "20+", label: "Specialities" },
                  { value: "150+", label: "Expert Doctors" },
                  { value: "14+", label: "Years Exp." },
                ].map((s) => (
                  <div key={s.label} style={{ borderLeft: "2px solid var(--red)", paddingLeft: 12 }}>
                    <div style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>{s.value}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right cards - desktop only */}
            <div className="hero-right">
              <div style={{ position: "relative" }}>
                <img
                  src={IMGS.drKute}
                  alt="Dr. Pradeep Kute"
                  style={{ width: "100%", borderRadius: 16, boxShadow: "0 24px 64px rgba(0,0,0,0.4)", objectFit: "cover", maxHeight: 380, objectPosition: "top" }}
                />
                <div style={{
                  position: "absolute", top: 16, right: 16,
                  background: "var(--teal)", color: "#fff",
                  borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 700,
                  display: "flex", alignItems: "center", gap: 6,
                }}>
                  <i className="fas fa-check-circle" />
                  NABH Accredited
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 12 }}>
                {[
                  { img: IMGS.icu, label: "ICU" },
                  { img: IMGS.doctorPatient, label: "Patient Care" },
                  { img: IMGS.pathology, label: "Pathology Lab" },
                ].map((c) => (
                  <div key={c.label} style={{ position: "relative", borderRadius: 10, overflow: "hidden" }}>
                    <img src={c.img} alt={c.label} style={{ width: "100%", height: 90, objectFit: "cover" }} loading="lazy" />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(11,31,58,0.75)", padding: "6px 8px" }}>
                      <span style={{ fontSize: 11, color: "#fff", fontWeight: 700 }}>{c.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmergencyStrip />

      <YouTubeSection />

      {/* ABOUT SECTION */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <img src={IMGS.ot} alt="Operation Theater" style={{ width: "100%", borderRadius: 16, boxShadow: "0 12px 40px rgba(0,0,0,0.15)" }} loading="lazy" />
              <div style={{
                position: "absolute", bottom: 20, right: 20,
                background: "var(--navy)", color: "#fff",
                borderRadius: 10, padding: "12px 18px",
              }}>
                <div style={{ fontSize: 20, fontWeight: 800 }}>14+</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>Years of Excellence</div>
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>ABOUT US</div>
              <h2 className="h2-size" style={{ color: "var(--charcoal)", marginBottom: 12 }}>Committed to Excellence in Care</h2>
              <p className="font-serif-italic" style={{ fontSize: 20, color: "var(--teal)", marginBottom: 20 }}>A Trusted Name in Healthcare</p>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.85, marginBottom: 16 }}>
                At Kute Hospital &amp; Laparoscopy Centre, we are dedicated to providing world-class healthcare services. With a patient-centered approach, cutting-edge medical solutions, and a compassionate team, we have served Sangamner and surrounding regions for over 14 years.
              </p>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.85, marginBottom: 32 }}>
                Led by Dr. Pradeep Kute, our hospital is NABH accredited and committed to safety, excellence, and innovation in every aspect of patient care.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 32 }}>
                {["Laparoscopic Surgery", "24/7 ICU & Emergency", "Cashless Mediclaim", "Advanced Diagnostics"].map((f) => (
                  <div key={f} style={{
                    background: "var(--sand)", borderRadius: 8, padding: "12px 16px",
                    display: "flex", alignItems: "center", gap: 8,
                    border: "1px solid rgba(0,181,164,0.2)",
                  }}>
                    <i className="fas fa-check-circle" style={{ color: "var(--teal)", fontSize: 16, flexShrink: 0 }} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "var(--charcoal)" }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-red">Book Appointment</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ background: "var(--cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>WHAT WE OFFER</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)", marginBottom: 16 }}>Our Medical Services</h2>
            <p style={{ maxWidth: 560, margin: "0 auto", fontSize: 16, color: "var(--grey)", lineHeight: 1.75 }}>
              Comprehensive care across 20+ specialities with state-of-the-art equipment and expert surgeons.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR SECTION */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>MEET OUR EXPERT</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)" }}>Dr. Pradeep Kute</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <img src={IMGS.drKute} alt="Dr. Pradeep Kute" style={{ width: "100%", borderRadius: 16, objectFit: "cover", objectPosition: "top", maxHeight: 480, boxShadow: "0 16px 48px rgba(0,0,0,0.15)" }} loading="lazy" />
              <div style={{ position: "absolute", top: 20, left: 20, background: "var(--red)", color: "#fff", borderRadius: 20, padding: "8px 16px", fontWeight: 700, fontSize: 13 }}>
                14+ Yrs Experience
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Chief Surgeon &amp; Hospital Director</div>
              <h2 className="h2-size" style={{ color: "var(--charcoal)", marginBottom: 16 }}>Dr. Pradeep Kute</h2>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.85, marginBottom: 16 }}>
                Dr. Pradeep Kute is a highly experienced and knowledgeable doctor with over 14 years of expertise. With a deep understanding of various medical conditions and treatments, Dr. Kute provides effective diagnosis and care.
              </p>
              <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.85, marginBottom: 28 }}>
                Being associated with a highly equipped hospital, he has access to advanced medical technologies and resources. Dr. Kute prioritizes patient well-being and satisfaction, ensuring attentive care, clear communication, and a patient-centered approach to medicine.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                {["Laparoscopic Surgery", "General Surgery", "Oncology", "Trauma Surgery", "14+ Years", "NABH Certified"].map((t) => (
                  <span key={t} style={{ background: "var(--sand)", color: "var(--navy)", padding: "6px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{t}</span>
                ))}
              </div>
              <a href="tel:+918888882225" className="btn-red">
                <i className="fas fa-phone" style={{ marginRight: 8 }} />
                Call for Appointment
              </a>
            </div>
          </div>

          {/* Staff row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 40 }}>
            {[
              { img: IMGS.doctor2, label: "Expert Medical Team" },
              { img: IMGS.staff2, label: "Dedicated Staff" },
            ].map((s) => (
              <div key={s.label} style={{ position: "relative", borderRadius: 16, overflow: "hidden", height: 200 }}>
                <img src={s.img} alt={s.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(11,31,58,0.55)", display: "flex", alignItems: "flex-end", padding: 20 }}>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />

      {/* WHY CHOOSE US */}
      <section style={{ background: "var(--sand)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>WHY CHOOSE US</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)" }}>Best Hospital in the Region</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            {/* Image collage */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ gridColumn: "1 / -1", borderRadius: 12, overflow: "hidden", height: 240 }}>
                <img src={IMGS.heroOpt} alt="Kute Hospital Facility" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
              </div>
              <div style={{ borderRadius: 12, overflow: "hidden", height: 160 }}>
                <img src={IMGS.staff1} alt="Medical Staff" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
              </div>
              <div style={{ borderRadius: 12, overflow: "hidden", height: 160 }}>
                <img src={IMGS.hospitalArea} alt="Hospital Area" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
              </div>
            </div>
            {/* Features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "fas fa-microscope", title: "Advanced Technology", text: "State-of-the-art surgical and diagnostic tools for precision treatment." },
                { icon: "fas fa-heart", title: "Patient-Centered Care", text: "Personalized, evidence-based treatment plans tailored to each patient." },
                { icon: "fas fa-certificate", title: "NABH Accredited", text: "Highest standards of safety, hygiene, and quality in healthcare delivery." },
                { icon: "fas fa-hand-holding-usd", title: "Best & Affordable Treatment", text: "Cashless mediclaim facility for 30+ TPA and insurance companies." },
                { icon: "fas fa-ambulance", title: "24/7 Emergency Ready", text: "Round-the-clock ambulance, ICU, and trauma care services available." },
              ].map((f) => (
                <div key={f.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", background: "#fff", borderRadius: 12, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                  <div style={{ width: 44, height: 44, background: "var(--navy)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={f.icon} style={{ color: "var(--teal)", fontSize: 18 }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "var(--charcoal)", fontSize: 15, marginBottom: 4 }}>{f.title}</h4>
                    <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.6, margin: 0 }}>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section style={{ background: "var(--cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>OUR FACILITY</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)" }}>Inside Kute Hospital</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "200px 200px", gap: 12 }}>
            <div style={{ gridRow: "1 / 3", borderRadius: 12, overflow: "hidden" }}>
              <GalleryImg src={IMGS.hospital} alt="Kute Hospital Building" />
            </div>
            {[IMGS.icu, IMGS.pathology, IMGS.ot, IMGS.floor, IMGS.cancer, IMGS.hospitalArea].map((img, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: "hidden" }}>
                <GalleryImg src={img} alt="Hospital Facility" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <InsuranceSection />

      {/* TESTIMONIALS */}
      <section id="reviews" style={{ background: "var(--cream)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>PATIENT REVIEWS</div>
            <h2 className="h2-size" style={{ color: "var(--charcoal)" }}>What Our Patients Say</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { name: "Rakesh Shinde", text: "Kute Hospital, the premier emergency facility in Sangamner City and Taluka, welcomes all patients with top-notch services available 24/7." },
              { name: "Somnath", text: "Dr. Pradeep Kute was fantastic. Knowledgeable, caring, and informative. Felt at ease and confident in receiving expert medical care. Highly recommended." },
              { name: "Aniket Jagatap", text: "Kute Hospital: Where compassionate care and skilled professionals come together to ensure your well-being every step of the way." },
            ].map((t) => (
              <div key={t.name} style={{
                background: "#fff", borderRadius: 16, padding: 32,
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}>
                <div style={{ fontSize: 48, color: "var(--red)", lineHeight: 1, marginBottom: 16 }}>&ldquo;</div>
                <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star" style={{ color: "#F59E0B", fontSize: 16 }} />
                  ))}
                </div>
                <p className="font-serif-italic" style={{ fontSize: 16, color: "var(--grey)", lineHeight: 1.8, marginBottom: 24 }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "var(--navy)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: 16,
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--charcoal)", fontSize: 15 }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "var(--teal)", fontWeight: 600 }}>Verified Patient</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ background: "var(--navy)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>GET IN TOUCH</div>
              <h2 className="h2-size" style={{ color: "#fff", marginBottom: 16 }}>We're Here to Help</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.85, marginBottom: 32 }}>
                Reach out to us for appointments, medical inquiries, or emergency assistance. Our team is available 24/7.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { icon: "fas fa-phone", label: "Enquiry", value: "+91 88888 82225", href: "tel:+918888882225" },
                  { icon: "fas fa-headset", label: "Medical Helpline", value: "+91 88887 32225", href: "tel:+918888732225" },
                  { icon: "fas fa-ambulance", label: "Ambulance 24/7", value: "+91 88883 72225", href: "tel:+918888372225" },
                  { icon: "fas fa-map-marker-alt", label: "Address", value: "Sangamner, Ahmednagar, Maharashtra, India", href: null },
                  { icon: "fas fa-globe", label: "Website", value: "kutehospital.com", href: "https://kutehospital.com" },
                ].map((c) => (
                  <div key={c.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, background: "rgba(255,63,37,0.15)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className={c.icon} style={{ color: "var(--red)", fontSize: 16 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>{c.label}</div>
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

      {/* Maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30294.36574447856!2d74.20055!3d19.57390!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc8e4c8f9ce7d3%3A0x8a8e5a28c5e12f6f!2sSangamner%2C+Maharashtra+422605!5e0!3m2!1sen!2sin!4v1610000000000"
        width="100%"
        height="360"
        style={{ border: "none", display: "block" }}
        loading="lazy"
        title="Kute Hospital Location"
        allowFullScreen
      />

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hero-right { display: none !important; }
        }
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function ServiceCard({ title, icon, img, desc }: { title: string; icon: string; img: string; desc: string }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
      borderTop: "3px solid var(--red)",
    }}>
      <div style={{ height: 180, overflow: "hidden" }}>
        <img
          src={img}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          loading="lazy"
        />
      </div>
      <div style={{ padding: "20px 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <i className={icon} style={{ color: "var(--red)", fontSize: 20 }} />
          <h3 style={{ fontWeight: 700, fontSize: 16, color: "var(--charcoal)", margin: 0 }}>{title}</h3>
        </div>
        <p style={{ fontSize: 14, color: "var(--grey)", lineHeight: 1.7, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

function GalleryImg({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        loading="lazy"
      />
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
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <input required placeholder="Patient Name" style={inputStyle} />
          <input required placeholder="Phone Number" type="tel" style={inputStyle} />
        </div>
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
        <button
          type="submit"
          disabled={submitting}
          style={{
            background: submitted ? "var(--teal)" : "var(--red)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "14px",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
        >
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
