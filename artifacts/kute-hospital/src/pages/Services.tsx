import { useState } from "react";
import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const IMGS = {
  cancer: "https://www.kutehospital.com/wp-content/uploads/2026/02/cancer-surgery-1024x681-1.jpg",
  icu: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-349-1.png",
  ot: "https://www.kutehospital.com/wp-content/uploads/2026/02/IMG_9643-1024x683-1.jpg",
  pathology: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-351-1.png",
  cardiology: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-358.png",
  floor: "https://www.kutehospital.com/wp-content/uploads/2026/02/IMG_9680-1024x683-1.jpg",
  gastro: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-359-1.png",
  urology: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-354.png",
  plastic: "https://www.kutehospital.com/wp-content/uploads/2026/02/Screenshot-355.png",
};

const SERVICES_DETAIL = [
  {
    title: "Emergency & ICU",
    icon: "fas fa-ambulance",
    img: IMGS.icu,
    features: ["24/7 Availability", "Rapid Response Team", "Advanced ICU Beds", "Trauma Care"],
    desc: "Our Emergency &amp; ICU department is equipped with state-of-the-art technology and staffed by a highly trained rapid response team available 24 hours a day, 7 days a week. We handle all types of emergencies with speed, precision, and compassion.",
  },
  {
    title: "Laparoscopic Surgery",
    icon: "fas fa-procedures",
    img: IMGS.ot,
    features: ["Minimally Invasive", "Faster Recovery", "Less Post-Op Pain", "Expert Surgeons"],
    desc: "Laparoscopic surgery at Kute Hospital offers patients the advantages of minimally invasive procedures — smaller incisions, less pain, faster recovery, and shorter hospital stays. Led by Dr. Pradeep Kute with 14+ years of laparoscopic expertise.",
  },
  {
    title: "Cancer Surgery (Oncology)",
    icon: "fas fa-ribbon",
    img: IMGS.cancer,
    features: ["Tumor Removal", "Reconstructive Surgery", "Post-Op Care", "Multidisciplinary Team"],
    desc: "Our oncology department provides comprehensive cancer care including surgical tumor removal, reconstructive procedures, and post-operative management. Our multidisciplinary team ensures personalized treatment plans for every patient.",
  },
  {
    title: "Diagnostics & Pathology Lab",
    icon: "fas fa-flask",
    img: IMGS.pathology,
    features: ["Same-Day Results", "MRI & CT Scan", "Full Blood Work", "Radiology"],
    desc: "With our advanced diagnostics and pathology lab, patients receive fast, accurate results. We offer MRI, CT scans, full blood work, radiology services, and comprehensive laboratory testing to support accurate diagnosis and treatment planning.",
  },
  {
    title: "Cardiology",
    icon: "fas fa-heartbeat",
    img: IMGS.cardiology,
    features: ["ECG & Echo", "Cardiac ICU", "Interventional Cardiology", "Heart Surgery"],
    desc: "Our cardiology department is equipped with advanced diagnostic tools including ECG, echocardiography, and a dedicated Cardiac ICU. We offer interventional cardiology procedures and complete heart surgery services.",
  },
  {
    title: "Orthopaedics & Trauma",
    icon: "fas fa-bone",
    img: IMGS.floor,
    features: ["Joint Replacement", "Arthroscopy", "Fracture Care", "Sports Injuries"],
    desc: "Our orthopaedics team specializes in joint replacement surgeries, arthroscopic procedures, fracture management, and sports injury rehabilitation. We use the latest implants and surgical techniques for optimal patient outcomes.",
  },
  {
    title: "Gastroenterology",
    icon: "fas fa-stethoscope",
    img: IMGS.gastro,
    features: ["Endoscopy", "Colonoscopy", "Liver Care", "GI Surgeries"],
    desc: "Our gastroenterology department handles a full range of digestive system conditions including endoscopy, colonoscopy, liver care, and complex GI surgeries. We use advanced endoscopic equipment for minimally invasive diagnosis and treatment.",
  },
  {
    title: "Urology & Nephrology",
    icon: "fas fa-tint",
    img: IMGS.urology,
    features: ["Kidney Stone Removal", "Dialysis", "Renal Surgery", "Urological Care"],
    desc: "We offer comprehensive urology and nephrology services including kidney stone removal, dialysis, renal surgery, and management of urological conditions. Our specialists use the latest technology for minimally invasive urological procedures.",
  },
  {
    title: "Plastic Surgery",
    icon: "fas fa-user-md",
    img: IMGS.plastic,
    features: ["Scar Revision", "Wound Repair", "Reconstructive", "Cosmetic Procedures"],
    desc: "Our plastic surgery department provides reconstructive and cosmetic procedures including scar revision, wound repair, and cosmetic enhancements. We prioritize natural results, patient safety, and long-term satisfaction.",
  },
];

export default function Services() {
  return (
    <div style={{ background: "var(--cream)" }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        minHeight: 340,
        background: `linear-gradient(rgba(11,31,58,0.85), rgba(11,31,58,0.85)), url(${IMGS.cancer}) center/cover no-repeat`,
        display: "flex", alignItems: "center", paddingTop: 72,
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 24px" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>WHAT WE OFFER</div>
          <h1 className="h1-size" style={{ color: "#fff", marginBottom: 16 }}>Our Services</h1>
          <div style={{ display: "flex", gap: 8, alignItems: "center", color: "rgba(255,255,255,0.6)", fontSize: 14 }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>Home</a>
            <i className="fas fa-chevron-right" style={{ fontSize: 10 }} />
            <span style={{ color: "var(--teal)" }}>Services</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#fff", padding: "60px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>COMPREHENSIVE CARE</div>
          <h2 className="h2-size" style={{ color: "var(--charcoal)", marginBottom: 20 }}>World-Class Medical Services</h2>
          <p style={{ fontSize: 16, color: "var(--grey)", lineHeight: 1.85 }}>
            We provide world-class treatment at Kute Hospital &amp; Laparoscopy Centre. We specialize in laparoscopic surgery, general surgery, urology, gastroenterology, orthopaedic &amp; trauma surgery, arthroscopic surgery, oncology &amp; plastic surgery, and super-speciality surgeries including cardiology and nephrology, along with intensive care services.
          </p>
        </div>
      </section>

      {/* Services detailed */}
      <div>
        {SERVICES_DETAIL.map((s, i) => (
          <section key={s.title} style={{ background: i % 2 === 0 ? "var(--cream)" : "#fff", padding: "60px 24px" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", direction: i % 2 === 0 ? "ltr" : "rtl" }}>
                <div style={{ direction: "ltr" }}>
                  <img src={s.img} alt={s.title} style={{ width: "100%", borderRadius: 16, boxShadow: "0 12px 40px rgba(0,0,0,0.12)", objectFit: "cover", maxHeight: 340 }} loading="lazy" />
                </div>
                <div style={{ direction: "ltr" }}>
                  <div className="eyebrow" style={{ marginBottom: 12 }}>{s.icon ? <i className={s.icon} style={{ marginRight: 8 }} /> : null}Medical Service</div>
                  <h2 className="h2-size" style={{ color: "var(--charcoal)", marginBottom: 16 }}>{s.title}</h2>
                  <p style={{ fontSize: 15, color: "var(--grey)", lineHeight: 1.85, marginBottom: 24 }} dangerouslySetInnerHTML={{ __html: s.desc }} />
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
                    {s.features.map((f) => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <i className="fas fa-check-circle" style={{ color: "var(--teal)", fontSize: 16, flexShrink: 0 }} />
                        <span style={{ fontSize: 14, fontWeight: 600, color: "var(--charcoal)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="btn-red">Book Appointment</Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Why Choose */}
      <section style={{ background: "var(--navy)", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>WHY US</div>
            <h2 className="h2-size" style={{ color: "#fff" }}>Why Choose Our Services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {[
              { icon: "fas fa-microscope", title: "Advanced Equipment", text: "Cutting-edge surgical and diagnostic technology." },
              { icon: "fas fa-user-md", title: "Experienced Surgeons", text: "Led by Dr. Pradeep Kute with 14+ years of expertise." },
              { icon: "fas fa-hand-holding-usd", title: "Affordable Prices", text: "Best quality care at the most reasonable cost." },
              { icon: "fas fa-shield-alt", title: "Cashless Mediclaim", text: "Accepted by 30+ TPA and insurance companies." },
            ].map((w) => (
              <div key={w.title} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: 28, textAlign: "center", border: "1px solid rgba(255,255,255,0.08)" }}>
                <i className={w.icon} style={{ fontSize: 32, color: "var(--teal)", marginBottom: 16, display: "block" }} />
                <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{w.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, margin: 0 }}>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: "linear-gradient(135deg, var(--red) 0%, var(--navy) 60%)",
        padding: "60px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 className="h2-size" style={{ color: "#fff", marginBottom: 16 }}>Book Your Appointment Today</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", marginBottom: 32 }}>
            Get expert care from our experienced medical team. Available 24/7 for emergencies.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-red" style={{ background: "#fff", color: "var(--red)" }}>Book Appointment</Link>
            <a href="tel:+918888882225" className="btn-ghost">
              <i className="fas fa-phone" style={{ marginRight: 8 }} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
