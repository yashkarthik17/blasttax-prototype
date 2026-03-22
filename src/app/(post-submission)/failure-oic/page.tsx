"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function FailureOICPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"returned" | "rejected" | "defaulted">("returned");

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="OIC Decision" backPath="/cases/1042" />
        <div className="screen-content" style={{ gap: 14, paddingBottom: 24 }}>
          {/* Heading */}
          <div className="stagger-item d1">
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", margin: 0, marginBottom: 6 }}>Your Offer Was Not Accepted</h1>
            <p style={{ fontSize: "0.82rem", color: "#8585A0", margin: 0 }}>Review what happened and your available options</p>
          </div>

          {/* Path Tabs */}
          <div className="stagger-item d2">
            <div className="path-tabs">
              {([
                { key: "returned" as const, icon: "fa-rotate-left", label: "Returned" },
                { key: "rejected" as const, icon: "fa-xmark-circle", label: "Rejected" },
                { key: "defaulted" as const, icon: "fa-link-slash", label: "Compliance" },
              ]).map((tab) => (
                <button key={tab.key} className={`path-tab ${activeTab === tab.key ? "active" : ""}`} onClick={() => setActiveTab(tab.key)}>
                  <i className={`fas ${tab.icon}`} style={{ display: "block", fontSize: 14, marginBottom: 3 }} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* PATH A: Returned */}
            {activeTab === "returned" && (
              <div className="path-content active">
                <div className="card" style={{ borderColor: "rgba(245,166,35,0.3)", background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)", marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #F5A623, #fbbf24)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="fas fa-rotate-left" style={{ color: "white", fontSize: 14 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#92400E" }}>Returned (Processability Issue)</div>
                      <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 8px", background: "rgba(245,166,35,0.15)", color: "#D97706", borderRadius: 9999 }}>Not Processed</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "#78350F", lineHeight: 1.5, marginBottom: 10 }}>
                    Your OIC was returned because of: <strong>Missing signature on Form 656</strong>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {["TC 480 does NOT post \u2014 CSED not tolled", "No appeal rights for returns"].map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
                        <i className="fas fa-circle-xmark" style={{ color: "#E63946", fontSize: 13 }} />
                        <span style={{ color: "#78350F" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ borderRadius: 14, display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px", background: "#E6F9EE", border: "1px solid rgba(0,166,81,0.15)", marginBottom: 12 }}>
                  <i className="fas fa-wrench" style={{ color: "#00A651", fontSize: 16, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: "#065F46", marginBottom: 2 }}>Fix & Resubmit</div>
                    <div style={{ fontSize: 12, lineHeight: 1.4, color: "#065F46" }}>Correct the issue and resubmit immediately. No waiting period required.</div>
                  </div>
                </div>
              </div>
            )}

            {/* PATH B: Rejected */}
            {activeTab === "rejected" && (
              <div className="path-content active">
                <div className="card" style={{ borderColor: "rgba(230,57,70,0.3)", background: "linear-gradient(135deg, #FFF0F1, #FEF2F2)", marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #E63946, #f87171)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="fas fa-xmark" style={{ color: "white", fontSize: 14 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#991B1B" }}>Rejected (RCP Too High)</div>
                      <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 8px", background: "rgba(230,57,70,0.1)", color: "#E63946", borderRadius: 9999 }}>TC 482 Posted</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "#7f1d1d", lineHeight: 1.5, marginBottom: 12 }}>
                    Letter 3572 received. IRS determined your Reasonable Collection Potential is higher than your offered amount.
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: 12, background: "white", borderRadius: 12, border: "1px solid rgba(230,57,70,0.15)" }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#5C5C7A", fontWeight: 600 }}>Appeal Deadline</div>
                      <div style={{ fontSize: 12, color: "#1A1A2E", fontWeight: 600 }}>30 days to file Form 13711</div>
                    </div>
                    <div className="countdown-badge">
                      <i className="fas fa-clock" style={{ fontSize: 12 }} />
                      15 days left
                    </div>
                  </div>
                </div>
                <div style={{ borderRadius: 14, display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px", background: "#EBF0FF", border: "1px solid rgba(37,99,235,0.15)", marginBottom: 12 }}>
                  <i className="fas fa-gavel" style={{ color: "#2563EB", fontSize: 16, marginTop: 2 }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: "#1A1A2E", marginBottom: 2 }}>Appeal Process</div>
                    <div style={{ fontSize: 12, lineHeight: 1.4, color: "#1A1A2E" }}>Settlement conference possible during appeal. IRS may accept a revised higher offer amount.</div>
                  </div>
                </div>
              </div>
            )}

            {/* PATH C: Compliance Failure */}
            {activeTab === "defaulted" && (
              <div className="path-content active">
                <div className="card" style={{ borderColor: "rgba(124,58,237,0.3)", background: "linear-gradient(135deg, #F5F0FF, #ede9fe)", marginBottom: 12 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #7C3AED, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="fas fa-link-slash" style={{ color: "white", fontSize: 14 }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#4c1d95" }}>5-Year Compliance Failure</div>
                      <span style={{ fontSize: 9, fontWeight: 700, padding: "2px 8px", background: "rgba(124,58,237,0.1)", color: "#7C3AED", borderRadius: 9999 }}>OIC Defaulted</span>
                    </div>
                  </div>
                  <div style={{ fontSize: 13, color: "#4c1d95", lineHeight: 1.5, marginBottom: 10 }}>
                    OIC defaulted due to missed tax filing during the 5-year compliance period.
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {["Original FULL balance reinstated minus payments", "No cure period \u2014 must negotiate new resolution"].map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
                        <i className="fas fa-circle-xmark" style={{ color: "#E63946", fontSize: 13 }} />
                        <span style={{ color: "#4c1d95" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Next Steps */}
          <div className="stagger-item d3">
            <div style={{ fontSize: 12, fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Next Steps</div>
            {[
              { icon: "fa-file-pen", iconBg: "linear-gradient(135deg, #EBF0FF, #dbeafe)", iconColor: "#003DA5", title: "Submit Revised OIC", sub: "New offer with higher amount" },
              { icon: "fa-gavel", iconBg: "linear-gradient(135deg, #FFF0F1, #fecdd3)", iconColor: "#E63946", title: "Appeal via Form 13711", sub: "If within 30-day window" },
              { icon: "fa-calendar-check", iconBg: "linear-gradient(135deg, #E6F9EE, #d1fae5)", iconColor: "#00A651", title: "Consider Installment Agreement", sub: "Streamlined IA may be faster" },
              { icon: "fa-pause", iconBg: "linear-gradient(135deg, #F0FDFA, #ccfbf1)", iconColor: "#0D9488", title: "Consider CNC", sub: "If financial hardship applies" },
            ].map((step) => (
              <div key={step.title} className="next-step">
                <div style={{ width: 36, height: 36, borderRadius: 10, background: step.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`fas ${step.icon}`} style={{ color: step.iconColor, fontSize: 14 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#1A1A2E" }}>{step.title}</div>
                  <div style={{ fontSize: 10, color: "#5C5C7A" }}>{step.sub}</div>
                </div>
                <i className="fas fa-chevron-right" style={{ color: "#B0B0C8", fontSize: 11 }} />
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="stagger-item d4" style={{ marginTop: 4 }}>
            <button className="btn btn-primary" style={{ marginBottom: 10 }}>
              <i className="fas fa-gavel" style={{ fontSize: 13 }} />
              File Appeal (15 days remaining)
            </button>
            <button className="btn btn-outline" onClick={() => router.push("/resolution-switching")}>
              <i className="fas fa-arrow-rotate-right" style={{ fontSize: 13 }} />
              Start New Resolution
            </button>
          </div>
        </div>
      </div>
      <BottomNav active="Cases" />

      <style>{`
        .path-tabs {
          display: flex;
          gap: 4px;
          background: #F6F6FB;
          padding: 4px;
          border-radius: 12px;
          margin-bottom: 16px;
        }
        .path-tab {
          flex: 1;
          padding: 8px 6px;
          border: none;
          background: transparent;
          border-radius: 10px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: #5C5C7A;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          line-height: 1.3;
        }
        .path-tab.active {
          background: white;
          color: #1A1A2E;
          box-shadow: 0 2px 8px rgba(26,26,46,0.08);
        }
        .path-tab:hover:not(.active) { color: #1A1A2E; }
        .path-content.active {
          animation: fadeInContent 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        @keyframes fadeInContent {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .next-step {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          background: white;
          border: 1px solid #E8E8F0;
          border-radius: 12px;
          margin-bottom: 8px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .next-step:hover {
          border-color: #003DA5;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(26,26,46,0.05);
        }
        .countdown-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: linear-gradient(135deg, #FFF0F1, #FEF2F2);
          border: 1.5px solid rgba(230, 57, 70, 0.2);
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
          color: #E63946;
          animation: urgentPulse 2s ease-in-out infinite;
        }
        @keyframes urgentPulse {
          0%, 100% { box-shadow: 0 0 8px rgba(230, 57, 70, 0.1); }
          50% { box-shadow: 0 0 20px rgba(230, 57, 70, 0.2); }
        }
      `}</style>
    </PhoneFrame>
  );
}
