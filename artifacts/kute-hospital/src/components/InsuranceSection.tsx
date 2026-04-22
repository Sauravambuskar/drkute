const TPA_PARTNERS = [
  "CIGNA TTK", "DHS", "E-MEDITEK", "FHPL", "HEALTH INDIA",
  "IFFCO TOKIO", "LIBERTY GEN INS", "MD INDIA", "MEDI ASIST",
  "PARAMOUNT", "VIDAL HEALTH", "VIPUL MEDCORP", "RAKSHA",
  "TATA AIG", "MEDI CARE", "ERICSON TPA", "ROTHSHIELD TPA",
];

const INSURANCE_COMPANIES = [
  "ADITYA BIRLA HEALTH INSURANCE", "APOLLO MUNICH HEALTH INSURANCE",
  "RELIANCE GENERAL INSURANCE", "BAJAJ ALLIANZ", "CHOLMANDALAM",
  "FUTURE GENERAL", "HDFC ERGO", "ICICI LOMBARD", "RELIGARE",
  "STAR HEALTH", "UNIVERSAL SOMPO", "MAX BUPA", "UNITED HEALTHCARE PAREKH",
];

export default function InsuranceSection() {
  return (
    <section id="insurance" style={{ background: "#fff", padding: "80px 24px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>CASHLESS MEDICLAIM</div>
          <h2 className="h2-size" style={{ color: "var(--charcoal)", marginBottom: 16 }}>Insurance &amp; TPA Partners</h2>
          <p style={{ maxWidth: 560, margin: "0 auto", fontSize: 16, color: "var(--grey)", lineHeight: 1.75 }}>
            We work with 30+ TPA and private insurance companies to ensure seamless cashless treatment for our patients.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          <InsuranceCard title="TPA Partners" items={TPA_PARTNERS} />
          <InsuranceCard title="Private Insurance Companies" items={INSURANCE_COMPANIES} />
        </div>
      </div>
    </section>
  );
}

function InsuranceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={{ background: "var(--sand)", borderRadius: 16, padding: 32 }}>
      <h3 style={{ fontWeight: 800, fontSize: 18, color: "var(--navy)", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
        <i className="fas fa-shield-alt" style={{ color: "var(--teal)" }} />
        {title}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {items.map((item) => (
          <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <i className="fas fa-check-circle" style={{ color: "var(--teal)", fontSize: 14, flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: "var(--charcoal)", fontWeight: 600 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
