"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function PlaidLinkPage() {
  const router = useRouter();

  const banks = [
    { letter: "C", name: "Chase", bg: "linear-gradient(135deg,#1A5CFF,#003DA5)" },
    { letter: "B", name: "BofA", bg: "linear-gradient(135deg,#E63946,#CC2936)" },
    { letter: "W", name: "Wells", bg: "linear-gradient(135deg,#F5C518,#D4A617)" },
    { letter: "C", name: "Cap One", bg: "linear-gradient(135deg,#F57C00,#E65100)" },
    { letter: "CITI", name: "Citi", bg: "linear-gradient(135deg,#2563EB,#1D4ED8)", small: true },
  ];

  const benefits = [
    { icon: "fa-bolt", bg: "#E6F9EE", color: "#00A651", title: "Faster form prep", desc: "Auto-fill financial forms in seconds" },
    { icon: "fa-chart-pie", bg: "#EBF0FF", color: "#003DA5", title: "Accurate asset reporting", desc: "Real balances, no guesswork" },
    { icon: "fa-check-double", bg: "#F5F0FF", color: "#7C3AED", title: "Auto income verification", desc: "Verify deposits automatically" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Connect Your Bank" backPath="/assets" />
        <div className="screen-content" style={{ paddingBottom: 40, gap: 22 }}>
          {/* Shield Icon */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: 8 }}>
            <div style={{ width: 72, height: 72, borderRadius: 22, background: "linear-gradient(135deg,#EBF0FF,#D6E2FF)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <i className="fas fa-building-columns" style={{ fontSize: 26, color: "#003DA5" }} />
              <div style={{ position: "absolute", bottom: -4, right: -4, width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#00A651,#10B981)", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid #FAFAFF" }}>
                <i className="fas fa-shield-halved" style={{ fontSize: 10, color: "white" }} />
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", lineHeight: 1.25 }}>Securely link your accounts</div>
            <div style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 500, marginTop: 8, lineHeight: 1.5 }}>Automatically import financial data for accurate analysis</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0" }}>
                <div style={{ width: 38, height: 38, borderRadius: 12, background: b.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`fas ${b.icon}`} style={{ fontSize: 14, color: b.color }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>{b.title}</div>
                  <div style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 400, marginTop: 1 }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ position: "relative", marginBottom: 16 }}>
              <i className="fas fa-magnifying-glass" style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", fontSize: 14, color: "#B0B0C8" }} />
              <input type="text" placeholder="Search your bank..." style={{ width: "100%", padding: "12px 16px 12px 40px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 12, fontSize: "0.85rem", fontWeight: 500, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }} />
            </div>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Popular Banks</div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
              {banks.map((b, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: "pointer" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: b.bg, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
                    <span style={{ fontSize: b.small ? "0.75rem" : "1.1rem", fontWeight: 800, color: "white" }}>{b.letter}</span>
                  </div>
                  <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#5C5C7A" }}>{b.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#F6F6FB", border: "1px solid #E8E8F0", borderRadius: 16, padding: 16, display: "flex", alignItems: "flex-start", gap: 12 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <i className="fas fa-lock" style={{ fontSize: 14, color: "#00A651" }} />
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 6 }}>Bank-grade security</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["256-bit encryption", "Read-only access", "Revoke anytime"].map((s) => (
                  <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.68rem", fontWeight: 600, color: "#5C5C7A" }}>
                    <i className="fas fa-check" style={{ fontSize: 8, color: "#00A651" }} /> {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
            <button className="btn btn-primary" style={{ fontSize: "0.95rem", fontWeight: 700, padding: "16px 28px" }}>
              <i className="fas fa-link" style={{ fontSize: 14 }} /> Connect Bank Account
            </button>
            <button className="btn btn-ghost" onClick={() => router.push("/assets")} style={{ width: "100%", fontSize: "0.82rem", fontWeight: 600, color: "#8585A0" }}>
              Skip &mdash; I&apos;ll enter manually
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
