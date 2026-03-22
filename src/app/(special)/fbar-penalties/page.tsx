"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const triggers = [
  { icon: "fa-user", color: "#003DA5", text: "US person with foreign financial accounts" },
  { icon: "fa-coins", color: "#F5A623", text: "Aggregate value exceeding <strong>$10,000</strong> at any time during the year" },
  { icon: "fa-calendar", color: "#E63946", text: "Must file <strong>FinCEN Form 114</strong> (FBAR) by April 15" },
];

const penalties = [
  { title: "1. Non-Willful", severity: "MODERATE", sevBg: "#FFFBEB", sevColor: "#D97706", desc: "Up to <strong style='color:#F5A623'>$16,117</strong> per violation per year (2026)", borderStyle: {} as React.CSSProperties, bgStyle: {} as React.CSSProperties },
  { title: "2. Willful", severity: "SEVERE", sevBg: "#FFF0F1", sevColor: "#E63946", desc: "Greater of <strong style='color:#E63946'>$100,000</strong> or <strong style='color:#E63946'>50%</strong> of account balance per violation", borderStyle: { borderColor: "rgba(230,57,70,0.2)" } as React.CSSProperties, bgStyle: {} as React.CSSProperties },
  { title: "3. Criminal", severity: "CRIMINAL", sevBg: "#E63946", sevColor: "white", desc: "Up to <strong style='color:#E63946'>$250,000</strong> fine and/or <strong style='color:#E63946'>5 years</strong> imprisonment", borderStyle: { borderColor: "rgba(230,57,70,0.35)", background: "#FFFBFB" } as React.CSSProperties, bgStyle: {} as React.CSSProperties },
];

const resolutions = [
  { icon: "fa-file-shield", iconColor: "#00A651", bg: "linear-gradient(135deg, #E6F9EE, #ECFDF5)", title: "Streamlined Filing Compliance", desc: "For non-willful, no penalties if certified" },
  { icon: "fa-file-import", iconColor: "#003DA5", bg: "linear-gradient(135deg, #EBF0FF, #E0E7FF)", title: "Delinquent FBAR Submission", desc: "File late with reasonable cause statement" },
  { icon: "fa-handshake", iconColor: "#E63946", bg: "linear-gradient(135deg, #FFF0F1, #FEF2F2)", title: "Voluntary Disclosure", desc: "For willful violations, reduced penalties" },
];

const diffs = [
  { icon: "fa-xmark", color: "#E63946", text: "OIC does <strong>NOT</strong> cover FBAR penalties (different jurisdiction)" },
  { icon: "fa-xmark", color: "#E63946", text: "Installment agreements may not apply" },
  { icon: "fa-check", color: "#00A651", text: "Reasonable cause defense available for non-willful" },
];

export default function FbarPenaltiesPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="FBAR Penalties" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 120 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.3 }}>
              Foreign Bank Account Reporting
            </h1>
          </div>

          {/* Warning */}
          <div className="fbar-warning-card stagger-item d2" style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#E63946", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-scale-balanced" style={{ color: "white", fontSize: 14 }} />
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#1A1A2E", fontWeight: 600, lineHeight: 1.5 }}>
                FBAR penalties are under <strong>Title 31</strong> (Bank Secrecy Act), <strong>NOT</strong> Title 26 (Internal Revenue Code). Different rules apply.
              </p>
            </div>
          </div>

          {/* What Triggers FBAR */}
          <div className="stagger-item d3" style={{ marginBottom: 6 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>What Triggers FBAR</h2>
          </div>

          <div className="fbar-info-card stagger-item d3" style={{ marginBottom: 16 }}>
            {triggers.map((t, i) => (
              <div key={i} className="fbar-trigger-chip" style={{ marginBottom: i < triggers.length - 1 ? 8 : 0 }}>
                <i className={`fas ${t.icon}`} style={{ color: t.color, fontSize: 13 }} />
                <span style={{ fontSize: "0.75rem", color: "#1A1A2E", fontWeight: 500 }} dangerouslySetInnerHTML={{ __html: t.text }} />
              </div>
            ))}
          </div>

          {/* Penalty Types */}
          <div className="stagger-item d4" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Penalty Types</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
            {penalties.map((p, i) => (
              <div key={i} className={`fbar-penalty-card stagger-item d${4 + Math.floor(i / 2)}`} style={p.borderStyle}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>{p.title}</span>
                  <span className="fbar-penalty-severity" style={{ background: p.sevBg, color: p.sevColor }}>{p.severity}</span>
                </div>
                <p style={{ fontSize: "0.75rem", color: "#5C5C7A", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: p.desc }} />
              </div>
            ))}
          </div>

          {/* Resolution Options */}
          <div className="stagger-item d6" style={{ marginBottom: 8 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Resolution Options</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
            {resolutions.map((r, i) => (
              <div key={i} className={`fbar-resolution-card stagger-item d${6 + Math.floor(i / 2)}`}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: r.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`fas ${r.icon}`} style={{ fontSize: 14, color: r.iconColor }} />
                </div>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 2 }}>{r.title}</p>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", lineHeight: 1.5 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Differences */}
          <div className="stagger-item d8" style={{ marginBottom: 6 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Key Differences from Income Tax Debt</h2>
          </div>

          <div className="fbar-info-card stagger-item d8" style={{ marginBottom: 20 }}>
            {diffs.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                <i className={`fas ${d.icon}`} style={{ color: d.color, fontSize: 14, width: 18, textAlign: "center" }} />
                <span style={{ fontSize: "0.75rem", color: "#1A1A2E" }} dangerouslySetInnerHTML={{ __html: d.text }} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", paddingBottom: 28, background: "linear-gradient(to top, #FAFAFF 70%, transparent)", zIndex: 10 }}>
          <button
            onClick={() => router.push("/landing")}
            style={{ width: "100%", height: 52, borderRadius: 16, background: "linear-gradient(135deg, #003DA5, #002D7A)", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,61,165,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            <i className="fas fa-user-shield" />
            Consult FBAR Specialist
          </button>
        </div>
      </div>

      <style>{`
        .fbar-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
        }
        .fbar-warning-card {
          background: #FFF0F1;
          border: 1.5px solid #FECACA;
          border-radius: 16px;
          padding: 16px;
        }
        .fbar-penalty-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          padding: 14px;
          transition: all 0.3s ease;
        }
        .fbar-penalty-severity {
          display: inline-flex;
          align-items: center;
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 0.625rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .fbar-resolution-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          padding: 14px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .fbar-resolution-card:hover {
          border-color: rgba(0, 61, 165, 0.25);
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
        }
        .fbar-trigger-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px;
          background: #F6F6FB;
          border-radius: 10px;
        }
      `}</style>
    </PhoneFrame>
  );
}
