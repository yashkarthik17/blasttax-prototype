"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const resolutionOptions = [
  { num: 1, title: "Dispute TFRP", desc: "Appeal within 60 days of Letter 1153" },
  { num: 2, title: "Pay and Claim Refund", desc: "Pay partial amount, then file Form 843" },
  { num: 3, title: "Installment Agreement", desc: "IA on personal 1040 account" },
  { num: 4, title: "Offer in Compromise", desc: "Include TFRP in your Offer" },
];

const personChips = [
  { icon: "fa-user-tie", label: "Officers" },
  { icon: "fa-users", label: "Directors" },
  { icon: "fa-pen-fancy", label: "Check-signing authority" },
];

export default function TfrpDetailPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Trust Fund Recovery Penalty" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 120 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#E63946", lineHeight: 1.3 }}>
              Personal Liability for Payroll Taxes
            </h1>
          </div>

          {/* Warning Card */}
          <div className="tfrp-warning-card stagger-item d2" style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "#E63946", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-triangle-exclamation" style={{ color: "white", fontSize: 14 }} />
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#1A1A2E", fontWeight: 600, lineHeight: 1.5 }}>
                TFRP makes you <span style={{ color: "#E63946", fontWeight: 800 }}>PERSONALLY</span> liable for the trust fund portion of unpaid payroll taxes
              </p>
            </div>
          </div>

          {/* What Is Trust Fund */}
          <div className="tfrp-info-card stagger-item d3" style={{ marginBottom: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <i className="fas fa-vault" style={{ color: "#003DA5", fontSize: 14 }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>What Is Trust Fund?</span>
            </div>
            <p style={{ fontSize: "0.75rem", color: "#5C5C7A", lineHeight: 1.6 }}>
              The employee&apos;s share of Social Security, Medicare, and withheld income tax &mdash; money held <em>in trust</em> for the government.
            </p>
          </div>

          {/* TC 246 Indicator */}
          <div className="tfrp-info-card stagger-item d4" style={{ marginBottom: 18, borderColor: "rgba(230,57,70,0.2)", background: "#FFFBFB" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="tfrp-tc-badge" style={{ background: "#FFF0F1", color: "#E63946" }}>TC 246</span>
              <p style={{ fontSize: "0.75rem", color: "#1A1A2E", fontWeight: 500 }}>
                This TC on your personal transcript means TFRP has been assessed
              </p>
            </div>
          </div>

          {/* Responsible Person Determination */}
          <div className="stagger-item d5" style={{ marginBottom: 6 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Responsible Person Determination</h2>
          </div>

          <div className="tfrp-info-card stagger-item d5" style={{ marginBottom: 14 }}>
            <div style={{ marginBottom: 12 }}>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 6 }}>Who qualifies:</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {personChips.map((chip) => (
                  <span key={chip.label} className="tfrp-person-chip">
                    <i className={`fas ${chip.icon}`} style={{ fontSize: 11, color: "#003DA5" }} /> {chip.label}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: 10, background: "#F6F6FB", borderRadius: 10, marginBottom: 10 }}>
              <i className="fas fa-clipboard-question" style={{ fontSize: 13, color: "#7C3AED", marginTop: 2 }} />
              <div>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 2 }}>Form 4180 Interview</p>
                <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>The IRS interviews potential responsible persons to determine liability</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: 8, background: "#FFFBEB", borderRadius: 8 }}>
              <i className="fas fa-users-gear" style={{ fontSize: 12, color: "#F5A623" }} />
              <p style={{ fontSize: "0.6875rem", color: "#1A1A2E", fontWeight: 500 }}>Multiple responsible persons may be assessed</p>
            </div>
          </div>

          {/* TFRP Calculation Card */}
          <div className="stagger-item d6" style={{ marginBottom: 6 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>TFRP Calculation</h2>
          </div>

          <div className="tfrp-info-card stagger-item d6" style={{ marginBottom: 18, borderColor: "rgba(0, 61, 165, 0.15)" }}>
            <div className="tfrp-calc-row">
              <span style={{ fontSize: "0.75rem", color: "#5C5C7A" }}>Gross Payroll Taxes</span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>$120,000</span>
            </div>
            <div className="tfrp-calc-row">
              <span style={{ fontSize: "0.75rem", color: "#5C5C7A" }}>Employee Share (Trust Fund)</span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E" }}>$60,000</span>
            </div>
            <div className="tfrp-calc-row">
              <span style={{ fontSize: "0.75rem", color: "#5C5C7A" }}>Employer Share (Non-Trust)</span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#5C5C7A" }}>$60,000</span>
            </div>
            <div className="tfrp-calc-row" style={{ borderBottom: "none", paddingTop: 12, borderTop: "2px solid #003DA5", marginTop: 4 }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#E63946" }}>YOUR TFRP LIABILITY</span>
              <span style={{ fontSize: "1.125rem", fontWeight: 800, color: "#E63946" }}>$60,000</span>
            </div>
          </div>

          {/* Resolution Options */}
          <div className="stagger-item d7" style={{ marginBottom: 10 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Resolution Options for TFRP</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
            {resolutionOptions.map((opt, i) => (
              <div key={opt.num} className={`tfrp-resolution-option stagger-item d${7 + i}`}>
                <div className="tfrp-option-num">{opt.num}</div>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 2 }}>{opt.title}</p>
                  <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", lineHeight: 1.5 }}>{opt.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bankruptcy Warning */}
          <div className="tfrp-warning-card stagger-item d11" style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-ban" style={{ color: "#E63946", fontSize: 16 }} />
              <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#E63946" }}>TFRP is NOT dischargeable in bankruptcy</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", paddingBottom: 28, background: "linear-gradient(to top, #FAFAFF 70%, transparent)", zIndex: 10 }}>
          <button
            onClick={() => router.push("/ai-chat")}
            style={{ width: "100%", height: 52, borderRadius: 16, background: "linear-gradient(135deg, #E63946, #c52d3a)", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(230,57,70,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            <i className="fas fa-gavel" />
            Dispute TFRP
          </button>
          <p style={{ textAlign: "center", marginTop: 10 }}>
            <span onClick={() => router.push("/landing")} style={{ fontSize: "0.8125rem", color: "#003DA5", fontWeight: 600, textDecoration: "none", cursor: "pointer" }}>
              Talk to Expert <i className="fas fa-arrow-right" style={{ fontSize: 10 }} />
            </span>
          </p>
        </div>
      </div>

      <style>{`
        .tfrp-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
          transition: all 0.3s ease;
        }
        .tfrp-warning-card {
          background: #FFF0F1;
          border: 1.5px solid #FECACA;
          border-radius: 16px;
          padding: 16px;
        }
        .tfrp-calc-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #F0F0F5;
        }
        .tfrp-calc-row:last-child {
          border-bottom: none;
        }
        .tfrp-resolution-option {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px;
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .tfrp-resolution-option:hover {
          border-color: rgba(0, 61, 165, 0.25);
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
          transform: translateY(-1px);
        }
        .tfrp-option-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #EBF0FF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.75rem;
          font-weight: 700;
          color: #003DA5;
        }
        .tfrp-tc-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 0.6875rem;
          font-weight: 700;
          font-family: 'Inter', monospace;
        }
        .tfrp-person-chip {
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
      `}</style>
    </PhoneFrame>
  );
}
