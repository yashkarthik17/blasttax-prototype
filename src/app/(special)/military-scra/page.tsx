"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const protections = [
  { icon: "fa-percent", iconColor: "#00A651", bg: "linear-gradient(135deg, #E6F9EE, #ECFDF5)", title: "Interest Rate Cap \u2014 6%", desc: "Pre-service debts capped at 6% during active duty" },
  { icon: "fa-clock-rotate-left", iconColor: "#F5A623", bg: "linear-gradient(135deg, #FFFBEB, #FEF3C7)", title: "CSED Tolling", desc: "Collection statute paused during service + 270 days" },
  { icon: "fa-calendar-plus", iconColor: "#003DA5", bg: "linear-gradient(135deg, #EBF0FF, #E0E7FF)", title: "Filing Extensions", desc: "180+ days after return from combat zone" },
  { icon: "fa-gavel", iconColor: "#7C3AED", bg: "linear-gradient(135deg, #EDE9FE, #E9D5FF)", title: "Stay of Proceedings", desc: "Courts/IRS must delay actions during service" },
  { icon: "fa-shield-halved", iconColor: "#0D9488", bg: "linear-gradient(135deg, #CCFBF1, #E0F2FE)", title: "Default Judgment Protection", desc: "Cannot default on obligations during service" },
];

const combatZone = {
  icon: "fa-star", iconColor: "white", bg: "linear-gradient(135deg, #00A651, #10B981)",
  title: "Tax Forgiveness \u2014 Combat Zone", desc: "Income earned in combat zone may be tax-free",
  cardStyle: { borderColor: "rgba(0,166,81,0.2)", background: "#FCFFFB" } as React.CSSProperties,
};

const eligibilityChips = [
  { icon: "fa-person-military-rifle", label: "Active Duty Military" },
  { icon: "fa-shield", label: "National Guard (federal orders)" },
  { icon: "fa-star", label: "Reserves on Active Duty" },
];

const invokeSteps = [
  "Notify IRS of military status",
  "Provide deployment orders",
  "Write \"SCRA\" on correspondence",
  "File Form 7508-A if in combat zone",
];

const timelineSegments = [
  { flex: 1, bg: "#003DA5", label: "Deployment" },
  { flex: 2, bg: "linear-gradient(90deg, #003DA5, #2563EB)", label: "Active Service" },
  { flex: 1, bg: "#00A651", label: "Return" },
  { flex: 1, bg: "#0D9488", label: "+180 days" },
];

export default function MilitaryScraPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Military Protections" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 120 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 6, display: "flex", alignItems: "center", gap: 10 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.3 }}>
              Servicemembers Civil Relief Act
            </h1>
            <span style={{ fontSize: "1.25rem" }}>&#127482;&#127480;</span>
          </div>

          {/* Protection Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {protections.map((p, i) => (
              <div key={p.title} className={`mil-protection-card stagger-item d${2 + Math.floor(i / 2)}`}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div className="mil-protection-icon" style={{ background: p.bg }}>
                    <i className={`fas ${p.icon}`} style={{ fontSize: 15, color: p.iconColor }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>{p.title}</p>
                    <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", lineHeight: 1.5 }}>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Combat Zone Special Card */}
            <div className="mil-protection-card stagger-item d5" style={combatZone.cardStyle}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <div className="mil-protection-icon" style={{ background: combatZone.bg }}>
                  <i className={`fas ${combatZone.icon}`} style={{ fontSize: 15, color: combatZone.iconColor }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>{combatZone.title}</p>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", lineHeight: 1.5 }}>{combatZone.desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="stagger-item d6" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Eligibility</h2>
          </div>

          <div className="stagger-item d6" style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
            {eligibilityChips.map((chip) => (
              <span key={chip.label} className="mil-eligibility-chip">
                <i className={`fas ${chip.icon}`} style={{ fontSize: 12, color: "#003DA5" }} /> {chip.label}
              </span>
            ))}
          </div>

          {/* How to Invoke SCRA */}
          <div className="stagger-item d7" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>How to Invoke SCRA</h2>
          </div>

          <div className="mil-info-card stagger-item d7" style={{ marginBottom: 18 }}>
            {invokeSteps.map((step, i) => (
              <div key={i} className="mil-step-row">
                <div className="mil-step-num">{i + 1}</div>
                <p style={{ fontSize: "0.75rem", color: "#1A1A2E", fontWeight: 500 }}>{step}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="stagger-item d8" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Timeline</h2>
          </div>

          <div className="stagger-item d8" style={{ marginBottom: 20 }}>
            <div className="mil-timeline-bar">
              {timelineSegments.map((seg, i) => (
                <div key={i} style={{ display: "contents" }}>
                  {i > 0 && <div style={{ width: 2, height: "100%", background: "white" }} />}
                  <div className="mil-timeline-segment" style={{ flex: seg.flex, background: seg.bg }}>
                    <span>{seg.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", textAlign: "center", marginTop: 6 }}>
              Deployment date &rarr; Return date + 180 days (combat zone)
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", paddingBottom: 28, background: "linear-gradient(to top, #FAFAFF 70%, transparent)", zIndex: 10 }}>
          <button
            onClick={() => router.push("/ai-chat")}
            style={{ width: "100%", height: 52, borderRadius: 16, background: "linear-gradient(135deg, #003DA5, #002D7A)", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,61,165,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            <i className="fas fa-shield-halved" />
            Verify My SCRA Status
          </button>
        </div>
      </div>

      <style>{`
        .mil-protection-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
          transition: all 0.3s ease;
        }
        .mil-protection-card:hover {
          border-color: rgba(0, 61, 165, 0.2);
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
        }
        .mil-protection-icon {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mil-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
        }
        .mil-step-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #F0F0F5;
        }
        .mil-step-row:last-child { border-bottom: none; }
        .mil-step-num {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: #EBF0FF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.6875rem;
          font-weight: 700;
          color: #003DA5;
        }
        .mil-eligibility-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 600;
          background: #F6F6FB;
          border: 1px solid #E8E8F0;
        }
        .mil-timeline-bar {
          display: flex;
          align-items: center;
          height: 40px;
          background: #F6F6FB;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        .mil-timeline-segment {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.625rem;
          font-weight: 700;
          color: white;
        }
      `}</style>
    </PhoneFrame>
  );
}
