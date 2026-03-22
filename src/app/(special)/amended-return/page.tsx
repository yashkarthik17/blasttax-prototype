"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const whenToAmend = [
  "Missed deductions or credits",
  "Incorrect filing status",
  "Unreported income adjustments",
  "SFR (Substitute for Return) replacement",
];

const amendmentSteps = [
  { num: "1", title: "Prepare Form 1040-X", desc: "Correct the original return", numBg: "#EBF0FF", numColor: "#003DA5" },
  { num: "2", title: "Submit to IRS", desc: "Mail or e-file (now available for 3 prior years)", numBg: "#EBF0FF", numColor: "#003DA5" },
  { num: "3", title: "Processing: 6-12 months", desc: "IRS reviews your amendment", numBg: "#FFF7ED", numColor: "#D97706" },
  { num: "4", title: "TC 291 posts", desc: "Assessment decreased", numBg: "#E6F9EE", numColor: "#00A651" },
  { num: "5", title: "Lower balance = better resolution terms", desc: null, numBg: "#E6F9EE", numColor: "#00A651" },
];

const doubleReduction = [
  { num: "1", title: "File 1040-X", desc: "TC 291 \u2014 assessment drops" },
  { num: "2", title: "Request FTA", desc: "TC 271 \u2014 penalties removed" },
  { num: "3", title: "File OIC on minimal balance", desc: null },
];

export default function AmendedReturnPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Amended Return" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 100 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.25 }}>
              Reduce Your Tax Before Resolving
            </h1>
          </div>
          <div className="stagger-item d2" style={{ marginBottom: 20 }}>
            <p style={{ fontSize: "0.8125rem", color: "#5C5C7A" }}>Form 1040-X &mdash; Amended U.S. Individual Income Tax Return</p>
          </div>

          {/* Strategic Value Card */}
          <div className="stagger-item d3" style={{ marginBottom: 16 }}>
            <div style={{ background: "linear-gradient(135deg, #EBF0FF, #E6F9EE)", border: "1.5px solid rgba(0,61,165,0.15)", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(0,61,165,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-lightbulb" style={{ fontSize: 13, color: "#003DA5" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#003DA5" }}>Strategic Value</span>
              </div>
              <p style={{ fontSize: "0.8125rem", color: "#1A1A2E", lineHeight: 1.5 }}>
                Filing 1040-X to correct errors <strong>BEFORE</strong> pursuing resolution can significantly reduce your offer amount or monthly IA payment
              </p>
            </div>
          </div>

          {/* When to Amend */}
          <div className="stagger-item d4" style={{ marginBottom: 16 }}>
            <div className="am-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-pen-to-square" style={{ fontSize: 13, color: "#7C3AED" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>When to Amend</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {whenToAmend.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className="fas fa-check" style={{ fontSize: 9, color: "#7C3AED" }} />
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "#1A1A2E" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Amendment Process */}
          <div className="stagger-item d5" style={{ marginBottom: 16 }}>
            <div className="am-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-route" style={{ fontSize: 13, color: "#003DA5" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>Amendment Process</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {amendmentSteps.map((step, i) => (
                  <div key={step.num} className="am-process-step">
                    <div className="am-step-circle" style={{ background: step.numBg, color: step.numColor }}>{step.num}</div>
                    <div>
                      <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: step.num === "5" ? "#00A651" : "#1A1A2E" }}>{step.title}</p>
                      {step.desc && <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{step.desc}</p>}
                    </div>
                    {i < amendmentSteps.length - 1 && <div className="am-connector" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Strategic Timing: Play B */}
          <div className="stagger-item d6" style={{ marginBottom: 16 }}>
            <div style={{ background: "linear-gradient(135deg, #F5F0FF, #EBF0FF)", border: "1.5px solid rgba(124,58,237,0.15)", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(124,58,237,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-chess" style={{ fontSize: 13, color: "#7C3AED" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: "#7C3AED" }}>Play B: Double Reduction</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
                {doubleReduction.map((dr) => (
                  <div key={dr.num} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 12px", background: "rgba(255,255,255,0.7)", borderRadius: 10 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#7C3AED", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 800, color: "white" }}>{dr.num}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E" }}>{dr.title}</p>
                      {dr.desc && <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{dr.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Example */}
              <div style={{ padding: "10px 12px", background: "rgba(255,255,255,0.85)", borderRadius: 10 }}>
                <p style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#7C3AED", marginBottom: 6 }}>EXAMPLE</p>
                <div className="am-strategy-flow">
                  <span className="am-flow-badge" style={{ background: "#FFF0F1", color: "#991B1B" }}>$100K</span>
                  <i className="fas fa-arrow-right am-flow-arrow" />
                  <span className="am-flow-badge" style={{ background: "#FFF7ED", color: "#92400E" }}>$70K</span>
                  <span style={{ fontSize: "0.5625rem", color: "#5C5C7A" }}>amended</span>
                  <i className="fas fa-arrow-right am-flow-arrow" />
                  <span className="am-flow-badge" style={{ background: "#E6F9EE", color: "#166534" }}>$50K</span>
                  <span style={{ fontSize: "0.5625rem", color: "#5C5C7A" }}>FTA</span>
                </div>
                <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", marginTop: 4 }}>OIC filed on $50K instead of $100K</p>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="stagger-item d7" style={{ marginBottom: 20 }}>
            <div style={{ padding: "14px 16px", background: "#FFF0F1", border: "1px solid rgba(230,57,70,0.15)", borderRadius: 14, display: "flex", alignItems: "flex-start", gap: 10 }}>
              <i className="fas fa-exclamation-triangle" style={{ color: "#E63946", fontSize: 14, marginTop: 2 }} />
              <div>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#991B1B", marginBottom: 2 }}>Important Timing</p>
                <p style={{ fontSize: "0.75rem", color: "#B91C1C" }}>Wait for 1040-X to fully process before filing OIC -- don&apos;t OIC a balance that will change</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="stagger-item d8">
            <button
              onClick={() => router.push("/ai-chat")}
              style={{ width: "100%", height: 52, borderRadius: 16, background: "#00A651", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              <i className="fas fa-file-circle-plus" />
              Start Amendment
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .am-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
        }
        .am-process-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          position: relative;
        }
        .am-connector {
          position: absolute;
          left: 15px;
          top: 38px;
          bottom: -4px;
          width: 2px;
          background: #E8E8F0;
        }
        .am-step-circle {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.75rem;
          font-weight: 800;
          position: relative;
          z-index: 1;
        }
        .am-strategy-flow {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 0;
        }
        .am-flow-arrow {
          color: #B0B0C8;
          font-size: 10px;
        }
        .am-flow-badge {
          padding: 4px 10px;
          border-radius: 8px;
          font-size: 0.6875rem;
          font-weight: 700;
        }
      `}</style>
    </PhoneFrame>
  );
}
