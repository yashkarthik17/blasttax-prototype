"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const processSteps = [
  { num: "1", title: "Appoint Personal Representative", desc: "Form 56 (Notice of Fiduciary Relationship)", bg: "linear-gradient(135deg, #EBF0FF, #E0E7FF)", color: "#003DA5" },
  { num: "2", title: "File Final Return", desc: "1040 for year of death, marked \"DECEASED\" with date", bg: "linear-gradient(135deg, #EBF0FF, #E0E7FF)", color: "#003DA5" },
  { num: "3", title: "File Estate Return", desc: "Form 1041 if estate income exceeds threshold", bg: "linear-gradient(135deg, #EBF0FF, #E0E7FF)", color: "#003DA5" },
  { num: "4", title: "Resolve Outstanding Debt", desc: "Options available to the estate", bg: "linear-gradient(135deg, #E6F9EE, #ECFDF5)", color: "#00A651" },
];

const resolutions = [
  { icon: "fa-hand-holding-dollar", iconColor: "#7C3AED", bg: "#EDE9FE", title: "OIC on behalf of deceased", desc: "Allowed but terminates if accepted and no compliance entity exists" },
  { icon: "fa-calendar-check", iconColor: "#003DA5", bg: "#EBF0FF", title: "Installment Agreement", desc: "Estate can enter IA" },
  { icon: "fa-pause", iconColor: "#00A651", bg: "#E6F9EE", title: "Currently Not Collectible (CNC)", desc: "If estate has no assets" },
  { icon: "fa-hourglass-half", iconColor: "#F5A623", bg: "#FFFBEB", title: "CSED Expiration", desc: "Clock keeps running after death" },
];

const specialRules = [
  { icon: "fa-ring", color: "#7C3AED", title: "Surviving Spouse", desc: "Joint liability continues for joint returns" },
  { icon: "fa-landmark", color: "#003DA5", title: "Community Property States", desc: "Special allocation rules apply" },
  { icon: "fa-building-columns", color: "#0D9488", title: "Estate vs. Personal Liability", desc: "Different treatment for each" },
  { icon: "fa-file-invoice-dollar", color: "#00A651", title: "Form 1310", desc: "Claiming refund on behalf of deceased" },
];

export default function DeceasedTaxpayerPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Deceased Taxpayer" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 120 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.3 }}>
              Tax Obligations After Death
            </h1>
          </div>

          <div className="stagger-item d1" style={{ marginBottom: 18 }}>
            <p style={{ fontSize: "0.8125rem", color: "#5C5C7A", lineHeight: 1.6 }}>
              Tax debt doesn&apos;t automatically disappear when a taxpayer passes away.
            </p>
          </div>

          {/* Step-by-Step Process */}
          <div className="stagger-item d2" style={{ marginBottom: 10 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Step-by-Step Process</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20, position: "relative" }}>
            {processSteps.map((step, i) => (
              <div key={step.num} className={`dt-step-card stagger-item d${2 + i}`}>
                <div className="dt-step-icon" style={{ background: step.bg }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 800, color: step.color }}>{step.num}</span>
                </div>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>{step.title}</p>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Resolution Options for Estates */}
          <div className="stagger-item d6" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Resolution Options for Estates</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {resolutions.map((r, i) => (
              <div key={r.title} className={`dt-resolution-chip stagger-item d${6 + Math.floor(i / 2)}`}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: r.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`fas ${r.icon}`} style={{ fontSize: 13, color: r.iconColor }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1A1A2E" }}>{r.title}</p>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Special Rules */}
          <div className="stagger-item d8" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Special Rules</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {specialRules.map((rule, i) => (
              <div key={rule.title} className={`dt-special-rule stagger-item d${8 + Math.floor(i / 2)}`}>
                <i className={`fas ${rule.icon}`} style={{ fontSize: 13, color: rule.color, marginTop: 2 }} />
                <div>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 2 }}>{rule.title}</p>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", paddingBottom: 28, background: "linear-gradient(to top, #FAFAFF 70%, transparent)", zIndex: 10 }}>
          <button
            onClick={() => router.push("/ai-chat")}
            style={{ width: "100%", height: 52, borderRadius: 16, background: "linear-gradient(135deg, #003DA5, #002D7A)", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,61,165,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            <i className="fas fa-file-signature" />
            File Form 56
          </button>
          <p style={{ textAlign: "center", marginTop: 10 }}>
            <span onClick={() => router.push("/landing")} style={{ fontSize: "0.8125rem", color: "#003DA5", fontWeight: 600, textDecoration: "none", cursor: "pointer" }}>
              Consult Estate Tax Expert <i className="fas fa-arrow-right" style={{ fontSize: 10 }} />
            </span>
          </p>
        </div>
      </div>

      <style>{`
        .dt-step-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px;
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          position: relative;
        }
        .dt-step-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .dt-resolution-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dt-resolution-chip:hover {
          border-color: rgba(0, 61, 165, 0.25);
          box-shadow: 0 3px 12px rgba(26,26,46,0.06);
        }
        .dt-special-rule {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 12px;
          background: #F6F6FB;
          border-radius: 12px;
        }
      `}</style>
    </PhoneFrame>
  );
}
