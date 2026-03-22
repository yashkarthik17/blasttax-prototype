"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const expectations = [
  { icon: "fa-house-circle-exclamation", iconColor: "#D97706", bg: "linear-gradient(135deg, #FFFBEB, #FEF3C7)", title: "Field Investigation", desc: "RO may visit your home or business", tag: "LIKELY", tagBg: "#FFFBEB", tagColor: "#D97706" },
  { icon: "fa-magnifying-glass-dollar", iconColor: "#003DA5", bg: "linear-gradient(135deg, #EBF0FF, #E0E7FF)", title: "Asset Verification", desc: "Physical verification of assets claimed on 433-A", tag: null, tagBg: "", tagColor: "" },
  { icon: "fa-file-contract", iconColor: "#7C3AED", bg: "linear-gradient(135deg, #EDE9FE, #E9D5FF)", title: "Summons Power", desc: "RO can summon bank records, third-party information", tag: null, tagBg: "", tagColor: "" },
  { icon: "fa-hand-fist", iconColor: "#E63946", bg: "linear-gradient(135deg, #FFF0F1, #FEF2F2)", title: "Seizure Authority", desc: "RO can seize assets (with approval)", tag: "SEVERE", tagBg: "#FFF0F1", tagColor: "#E63946", cardBorder: "rgba(230,57,70,0.2)" },
];

const rights = [
  "Right to representation (Form 2848)",
  "Right to due process before seizure",
  "Right to appeal through CDP",
  "Right to Taxpayer Advocate assistance",
];

const handleCards = [
  { icon: "fa-bolt", iconColor: "white", bg: "#E63946", title: "Get Representation IMMEDIATELY", desc: "Strongly recommended for RO cases", titleColor: "#E63946", cardBorder: "rgba(230,57,70,0.2)", cardBg: "#FFFBFB" },
  { icon: "fa-reply", iconColor: "#003DA5", bg: "#EBF0FF", title: "Be Responsive", desc: "Ignoring RO accelerates enforcement", titleColor: "#1A1A2E", cardBorder: undefined, cardBg: undefined },
  { icon: "fa-file-invoice", iconColor: "#7C3AED", bg: "#EDE9FE", title: "Prepare Financials", desc: "Have Form 433-A/B ready", titleColor: "#1A1A2E", cardBorder: undefined, cardBg: undefined },
  { icon: "fa-book-open", iconColor: "#00A651", bg: "#E6F9EE", title: "Know Your Rights", desc: "Publication 1 (Your Rights as a Taxpayer)", titleColor: "#1A1A2E", cardBorder: undefined, cardBg: undefined },
];

export default function RevenueOfficerPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Revenue Officer Assigned" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 120 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.3 }}>
              Your Case Has a Revenue Officer
            </h1>
          </div>

          {/* Warning */}
          <div className="ro-warning-amber stagger-item d2" style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#F5A623", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-triangle-exclamation" style={{ color: "white", fontSize: 14 }} />
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#1A1A2E", fontWeight: 600, lineHeight: 1.5 }}>
                Revenue Officers handle cases with balances <strong>&gt;$250,000</strong> or complex situations. This means more scrutiny and faster timelines.
              </p>
            </div>
          </div>

          {/* TC Indicator */}
          <div className="stagger-item d2" style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
            <span className="ro-tc-badge" style={{ background: "#FFFBEB", color: "#D97706" }}>TC 971</span>
            <span className="ro-tc-badge" style={{ background: "#FFFBEB", color: "#D97706" }}>AC 044</span>
            <span style={{ fontSize: "0.6875rem", color: "#5C5C7A", fontWeight: 500 }}>Revenue Officer assigned</span>
          </div>

          {/* What to Expect */}
          <div className="stagger-item d3" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>What to Expect</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {expectations.map((e, i) => (
              <div key={e.title} className={`ro-expect-card stagger-item d${3 + Math.floor(i / 2)}`} style={e.cardBorder ? { borderColor: e.cardBorder } : {}}>
                <div className="ro-expect-icon" style={{ background: e.bg }}>
                  <i className={`fas ${e.icon}`} style={{ fontSize: 14, color: e.iconColor }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 3 }}>
                    <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>{e.title}</p>
                    {e.tag && (
                      <span className="ro-priority-tag" style={{ background: e.tagBg, color: e.tagColor }}>{e.tag}</span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", lineHeight: 1.5 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Your Rights */}
          <div className="stagger-item d6" style={{ marginBottom: 6 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Your Rights</h2>
          </div>

          <div className="ro-info-card stagger-item d6" style={{ marginBottom: 18, borderColor: "rgba(0,166,81,0.2)", background: "#FCFFFB" }}>
            {rights.map((right) => (
              <div key={right} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 0" }}>
                <i className="fas fa-check-circle" style={{ color: "#00A651", fontSize: 14 }} />
                <span style={{ fontSize: "0.75rem", color: "#1A1A2E", fontWeight: 500 }}>{right}</span>
              </div>
            ))}
          </div>

          {/* How to Handle */}
          <div className="stagger-item d7" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>How to Handle</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {handleCards.map((h, i) => (
              <div key={h.title} className={`ro-handle-card stagger-item d${7 + Math.floor(i / 2)}`} style={{ borderColor: h.cardBorder || "#E8E8F0", background: h.cardBg || "white" }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: h.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`fas ${h.icon}`} style={{ fontSize: 13, color: h.iconColor }} />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <p style={{ fontSize: "0.8125rem", fontWeight: i === 0 ? 800 : 700, color: h.titleColor }}>{h.title}</p>
                  </div>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", paddingBottom: 28, background: "linear-gradient(to top, #FAFAFF 70%, transparent)", zIndex: 10 }}>
          <button
            onClick={() => router.push("/landing")}
            style={{ width: "100%", height: 52, borderRadius: 16, background: "linear-gradient(135deg, #E63946, #c52d3a)", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(230,57,70,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            <i className="fas fa-scale-balanced" />
            Connect with Tax Attorney
          </button>
        </div>
      </div>

      <style>{`
        .ro-warning-amber {
          background: #FFFBEB;
          border: 1.5px solid #FDE68A;
          border-radius: 16px;
          padding: 16px;
        }
        .ro-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
        }
        .ro-expect-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px;
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          transition: all 0.3s ease;
        }
        .ro-expect-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ro-handle-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px;
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
        }
        .ro-tc-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 0.6875rem;
          font-weight: 700;
          font-family: 'Inter', monospace;
        }
        .ro-priority-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 0.625rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      `}</style>
    </PhoneFrame>
  );
}
