"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const missingItems = [
  "No standard deduction applied",
  "No dependent exemptions",
  "No itemized deductions",
  "Single filing status used (even if married)",
  "No credits (EIC, child tax, education)",
];

const steps = [
  { num: "1", title: "File your own return for the SFR year", desc: "This replaces the SFR", numBg: "#EBF0FF", numColor: "#003DA5" },
  { num: "2", title: "Include all deductions, credits, proper filing status", desc: "Claim everything you're entitled to", numBg: "#EBF0FF", numColor: "#003DA5" },
  { num: "3", title: "IRS processes as an amended return", desc: null, numBg: "#EBF0FF", numColor: "#003DA5" },
  { num: "4", title: "TC 291 posts \u2014 assessment decreased", desc: null, numBg: "#E6F9EE", numColor: "#00A651", badge: true },
  { num: "5", title: "Then pursue resolution on the CORRECT lower balance", desc: null, numBg: "#EBF0FF", numColor: "#003DA5" },
];

export default function SfrDisputePage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Substitute for Return" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 120 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.3 }}>
              The IRS Filed a Return for You
            </h1>
          </div>

          {/* Explanation */}
          <div className="stagger-item d2" style={{ marginBottom: 16 }}>
            <p style={{ fontSize: "0.8125rem", color: "#5C5C7A", lineHeight: 1.6 }}>
              When you don&apos;t file, the IRS creates a Substitute for Return (SFR) using income data from W-2s and 1099s. SFRs typically result in a higher tax bill because they don&apos;t include deductions, credits, or filing status benefits you&apos;re entitled to.
            </p>
          </div>

          {/* How to Identify */}
          <div className="sfr-info-card stagger-item d3" style={{ marginBottom: 14, background: "#F6F6FB" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-magnifying-glass" style={{ color: "#7C3AED", fontSize: 14 }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>How to Identify</span>
            </div>
            <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 8 }}>
              <span className="sfr-tc-badge" style={{ background: "#EDE9FE", color: "#7C3AED" }}>TC 150</span>
              <span style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>with</span>
              <span className="sfr-tc-badge" style={{ background: "#EDE9FE", color: "#7C3AED" }}>Closing Code 81</span>
              <span style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>on transcript</span>
            </div>
          </div>

          {/* Why SFR is Too High */}
          <div className="stagger-item d4" style={{ marginBottom: 6 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Why SFR Assessments Are Usually Too High</h2>
          </div>

          <div className="sfr-info-card stagger-item d4" style={{ marginBottom: 16 }}>
            {missingItems.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0" }}>
                <i className="fas fa-xmark" style={{ color: "#E63946", fontSize: 14, width: 18, textAlign: "center" }} />
                <span style={{ fontSize: "0.75rem", color: "#1A1A2E" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Your SFR Assessment */}
          <div className="stagger-item d5" style={{ marginBottom: 6 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>Your SFR Assessment</h2>
          </div>

          <div className="sfr-info-card stagger-item d5" style={{ marginBottom: 16, borderColor: "rgba(0, 61, 165, 0.15)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 10, borderBottom: "1px solid #F0F0F5" }}>
              <span style={{ fontSize: "0.75rem", color: "#5C5C7A" }}>Tax Year</span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>2022</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #F0F0F5" }}>
              <span style={{ fontSize: "0.75rem", color: "#5C5C7A" }}>SFR Assessment</span>
              <span style={{ fontSize: "0.9375rem", fontWeight: 800, color: "#E63946" }}>$18,500</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #F0F0F5" }}>
              <span style={{ fontSize: "0.75rem", color: "#5C5C7A" }}>Estimated Correct Tax</span>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#00A651" }}>$8,200</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12 }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>Potential Reduction</span>
              <span style={{ fontSize: "1rem", fontWeight: 800, color: "#00A651" }}>-$10,300</span>
            </div>
            <div style={{ marginTop: 12 }}>
              <div className="sfr-savings-bar">
                <div className="sfr-savings-bar-fill" style={{ width: "55.7%" }} />
              </div>
              <p style={{ fontSize: "0.6875rem", color: "#00A651", fontWeight: 600, marginTop: 4, textAlign: "right" }}>55.7% potential savings</p>
            </div>
          </div>

          {/* How to Fix */}
          <div className="stagger-item d6" style={{ marginBottom: 6 }}>
            <h2 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#1A1A2E" }}>How to Fix</h2>
          </div>

          <div className="sfr-info-card stagger-item d7" style={{ marginBottom: 16 }}>
            {steps.map((step) => (
              <div key={step.num} className="sfr-step-row">
                <div className="sfr-step-num" style={{ background: step.numBg, color: step.numColor }}>{step.num}</div>
                <div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: step.desc ? 2 : 0 }}>{step.title}</p>
                  {step.desc && <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{step.desc}</p>}
                  {step.badge && <span className="sfr-tc-badge" style={{ background: "#E6F9EE", color: "#00A651", marginTop: 4, display: "inline-flex" }}>TC 291</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Info Alert */}
          <div className="stagger-item d8" style={{ marginBottom: 20, padding: 14, background: "#EBF0FF", borderRadius: 14, border: "1.5px solid rgba(0,61,165,0.15)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <i className="fas fa-circle-info" style={{ color: "#003DA5", fontSize: 16, marginTop: 1 }} />
              <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#003DA5", lineHeight: 1.5 }}>
                This must be done BEFORE most resolutions can be pursued
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px", paddingBottom: 28, background: "linear-gradient(to top, #FAFAFF 70%, transparent)", zIndex: 10 }}>
          <button
            onClick={() => router.push("/ai-chat")}
            style={{ width: "100%", height: 52, borderRadius: 16, background: "linear-gradient(135deg, #00A651, #008C44)", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,166,81,0.3)", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            <i className="fas fa-file-lines" />
            File Your Return
          </button>
        </div>
      </div>

      <style>{`
        .sfr-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
        }
        .sfr-tc-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 0.6875rem;
          font-weight: 700;
          font-family: 'Inter', monospace;
        }
        .sfr-savings-bar {
          height: 8px;
          border-radius: 4px;
          background: #E8E8F0;
          overflow: hidden;
        }
        .sfr-savings-bar-fill {
          height: 100%;
          border-radius: 4px;
          background: linear-gradient(90deg, #00A651, #10B981);
          transition: width 1.2s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .sfr-step-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #F0F0F5;
        }
        .sfr-step-row:last-child { border-bottom: none; }
        .sfr-step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.75rem;
          font-weight: 700;
        }
      `}</style>
    </PhoneFrame>
  );
}
