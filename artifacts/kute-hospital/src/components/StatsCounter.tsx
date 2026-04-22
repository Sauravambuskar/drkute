import { useState, useEffect, useRef } from "react";

const STATS = [
  { icon: "fas fa-users", value: 4800, suffix: "+", label: "Patients/Month" },
  { icon: "fas fa-stethoscope", value: 20, suffix: "+", label: "Specialities" },
  { icon: "fas fa-user-md", value: 150, suffix: "+", label: "Expert Doctors" },
  { icon: "fas fa-award", value: 14, suffix: "+", label: "Years Excellence" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ icon, value, suffix, label }: { icon: string; value: number; suffix: string; label: string }) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 1800, active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ textAlign: "center", padding: "40px 20px", flex: 1 }}>
      <i className={icon} style={{ fontSize: 40, color: "var(--teal)", marginBottom: 16, display: "block" }} />
      <div style={{ fontSize: "clamp(36px,4vw,52px)", fontWeight: 800, color: "#fff", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", marginTop: 8, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
        {label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section style={{ background: "var(--navy)" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
      }}>
        {STATS.map((s, i) => (
          <div key={s.label} style={{
            flex: "1 1 200px",
            borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
          }}>
            <StatItem {...s} />
          </div>
        ))}
      </div>
    </section>
  );
}
