export default function EmergencyStrip() {
  return (
    <div style={{ background: "var(--red)", padding: "16px 24px" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 16,
        alignItems: "center",
      }}>
        {[
          { icon: "fas fa-phone", label: "Enquiry", number: "+91 88888 82225", tel: "+918888882225" },
          { icon: "fas fa-headset", label: "Medical Helpline", number: "+91 88887 32225", tel: "+918888732225" },
          { icon: "fas fa-ambulance", label: "Ambulance", number: "+91 88883 72225", tel: "+918888372225" },
          { icon: "fas fa-clock", label: "Emergency Care", number: "24/7 Available", tel: null },
        ].map((item) => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
            <i className={item.icon} style={{ color: "#fff", fontSize: 20, opacity: 0.85 }} />
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.75)", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>{item.label}</div>
              {item.tel ? (
                <a href={`tel:${item.tel}`} style={{ color: "#fff", fontWeight: 700, fontSize: 16, textDecoration: "none" }}>
                  {item.number}
                </a>
              ) : (
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>{item.number}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
