"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const reasons = [
  "You didn't respond to the original audit notice",
  "You have NEW information or documentation",
  "The IRS used incorrect information",
  "You didn't receive the audit notice",
  "You disagree with the audit changes",
];

const notAnOption = [
  "You already went to Tax Court",
  "The tax was determined by a court",
];

const processSteps = [
  { num: "1", title: "Write a request letter", desc: "Explain why the audit should be reconsidered", numBg: "#EBF0FF", numColor: "#003DA5" },
  { num: "2", title: "Include new documentation", desc: "Evidence not previously reviewed", numBg: "#EBF0FF", numColor: "#003DA5" },
  { num: "3", title: "Mail to the audit reconsideration unit", desc: "Address based on your location", numBg: "#EBF0FF", numColor: "#003DA5" },
  { num: "4", title: "IRS reviews your case", desc: "4-8 weeks processing", numBg: "#EBF0FF", numColor: "#003DA5" },
  { num: "5", title: "If approved: TC 291 posts", desc: "Assessment decreased", numBg: "#E6F9EE", numColor: "#00A651" },
];

const includeItems = [
  "Tax year and type",
  "Explanation of disagreement",
  "Supporting documents",
  "Copy of original audit notice (if available)",
];

export default function AuditReconPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Audit Reconsideration" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 100 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.25 }}>
              Dispute a Prior Audit Without Formal Appeal
            </h1>
          </div>
          <div className="stagger-item d2" style={{ marginBottom: 20 }}>
            <p style={{ fontSize: "0.8125rem", color: "#5C5C7A" }}>Request the IRS re-examine a completed audit</p>
          </div>

          {/* When to Use */}
          <div className="stagger-item d3" style={{ marginBottom: 16 }}>
            <div className="ar-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-circle-check" style={{ fontSize: 13, color: "#00A651" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>When to Use</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {reasons.map((reason) => (
                  <div key={reason} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <i className="fas fa-check" style={{ fontSize: 9, color: "#00A651" }} />
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "#1A1A2E" }} dangerouslySetInnerHTML={{ __html: reason.replace("NEW", "<strong>NEW</strong>") }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* NOT an Option */}
          <div className="stagger-item d4" style={{ marginBottom: 16 }}>
            <div style={{ padding: "14px 16px", background: "#FFF0F1", border: "1px solid rgba(230,57,70,0.15)", borderRadius: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <i className="fas fa-ban" style={{ fontSize: 13, color: "#E63946" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#991B1B" }}>NOT an Option If</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {notAnOption.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <i className="fas fa-xmark" style={{ fontSize: 10, color: "#E63946" }} />
                    <p style={{ fontSize: "0.75rem", color: "#991B1B" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Steps */}
          <div className="stagger-item d5" style={{ marginBottom: 16 }}>
            <div className="ar-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-list-ol" style={{ fontSize: 13, color: "#003DA5" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>Process Steps</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {processSteps.map((step, i) => (
                  <div key={step.num} className="ar-process-step">
                    <div className="ar-step-circle" style={{ background: step.numBg, color: step.numColor }}>{step.num}</div>
                    <div>
                      <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>{step.title}</p>
                      {step.desc && <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{step.desc}</p>}
                    </div>
                    {i < processSteps.length - 1 && <div className="ar-connector" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What to Include */}
          <div className="stagger-item d6" style={{ marginBottom: 16 }}>
            <div className="ar-info-card">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                <i className="fas fa-file-lines" style={{ fontSize: 13, color: "#5C5C7A" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>What to Include in Your Request</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {includeItems.map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <i className="fas fa-check" style={{ fontSize: 10, color: "#003DA5" }} />
                    <p style={{ fontSize: "0.75rem", color: "#5C5C7A" }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connection to Resolution */}
          <div className="stagger-item d7" style={{ marginBottom: 20 }}>
            <div style={{ padding: "14px 16px", background: "linear-gradient(135deg, #EBF0FF, #F5F0FF)", border: "1px solid rgba(0,61,165,0.1)", borderRadius: 14, display: "flex", alignItems: "flex-start", gap: 10 }}>
              <i className="fas fa-link" style={{ color: "#003DA5", fontSize: 13, marginTop: 2 }} />
              <div>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#003DA5", marginBottom: 2 }}>Resolution Connection</p>
                <p style={{ fontSize: "0.75rem", color: "#5C5C7A" }}>If reconsideration reduces your balance, refile any pending OIC or modify your IA</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="stagger-item d8">
            <button
              onClick={() => router.push("/ai-chat")}
              style={{ width: "100%", height: 52, borderRadius: 16, background: "#00A651", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              <i className="fas fa-file-pen" />
              Prepare Request
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .ar-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
        }
        .ar-process-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          position: relative;
        }
        .ar-process-step:not(:last-child) {
          padding-bottom: 10px;
        }
        .ar-connector {
          position: absolute;
          left: 15px;
          top: 36px;
          bottom: -4px;
          width: 2px;
          background: #E8E8F0;
        }
        .ar-step-circle {
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
      `}</style>
    </PhoneFrame>
  );
}
