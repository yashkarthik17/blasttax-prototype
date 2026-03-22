"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function ExpertAgreementPage() {
  const router = useRouter();
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Expert Agreement" backPath="/pending" />

        <div className="screen-content" style={{ paddingBottom: 40, gap: 18 }}>
          {/* Expert Matched Card */}
          <div className="stagger-item d1" style={{ background: "linear-gradient(160deg,#003DA5 0%,#2563EB 60%,#4F46E5 100%)", borderRadius: 20, padding: 20, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 14, position: "relative", zIndex: 1 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0.1))", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid rgba(255,255,255,0.3)", flexShrink: 0 }}>
                <span style={{ fontSize: "1.2rem", fontWeight: 800, color: "white" }}>MC</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "white", marginBottom: 2 }}>Michael Chen, EA</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                    <i className="fas fa-star" style={{ fontSize: 10, color: "#FCD34D" }} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>4.9</span>
                  </div>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)" }}>15 years</span>
                  <span style={{ padding: "2px 8px", background: "rgba(255,255,255,0.15)", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 700, color: "white" }}>OIC Specialist</span>
                </div>
              </div>
            </div>
          </div>

          {/* Engagement Terms Title */}
          <div className="stagger-item d2">
            <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 4 }}>Engagement Terms</div>
          </div>

          {/* Terms Table */}
          <div className="stagger-item d3" style={{ background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0" }}>
            {[
              { label: "Service", value: "OIC Preparation & Submission" },
              { label: "Fee", value: "$1,500", sub: "or included in Pro plan" },
              { label: "Scope", value: "Review, preparation, IRS representation" },
              { label: "Duration", value: "Until resolution" },
              { label: "Payment", value: "50% upfront, 50% on submission" },
            ].map((row, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", padding: "10px 0", borderBottom: i < arr.length - 1 ? "1px solid #F0F0F5" : "none" }}>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5C5C7A" }}>{row.label}</span>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: row.sub ? "0.95rem" : "0.82rem", fontWeight: row.sub ? 800 : 700, color: "#1A1A2E", maxWidth: 180, display: "block" }}>{row.value}</span>
                  {row.sub && <div style={{ fontSize: "0.68rem", color: "#00A651", fontWeight: 600 }}>{row.sub}</div>}
                </div>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div className="stagger-item d4">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>What&apos;s Included</div>
            <div style={{ background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0", display: "flex", flexDirection: "column", gap: 12 }}>
              {["Full case review", "Form preparation", "IRS correspondence", "Phone/chat support", "Post-submission monitoring"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className="fas fa-check" style={{ fontSize: 9, color: "#00A651" }} />
                  </div>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="stagger-item d5">
            <div
              onClick={() => setTermsAccepted(!termsAccepted)}
              style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "14px 16px", background: termsAccepted ? "#EBF0FF" : "white", border: `1.5px solid ${termsAccepted ? "#003DA5" : "#E8E8F0"}`, borderRadius: 14, transition: "all 0.2s ease" }}
            >
              <div style={{ width: 24, height: 24, borderRadius: 8, border: `2px solid ${termsAccepted ? "#003DA5" : "#D5D5E0"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: termsAccepted ? "#003DA5" : "transparent", transition: "all 0.2s ease" }}>
                {termsAccepted && <i className="fas fa-check" style={{ fontSize: 12, color: "white" }} />}
              </div>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E", lineHeight: 1.4 }}>I agree to the engagement terms and conditions</span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="stagger-item d6" style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
            <div
              onClick={() => termsAccepted && router.push("/workspace")}
              style={{ padding: 16, background: "linear-gradient(135deg,#00A651,#10B981)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,166,81,0.2)", opacity: termsAccepted ? 1 : 0.5, pointerEvents: termsAccepted ? "auto" : "none", cursor: "pointer", transition: "all 0.3s ease" }}
            >
              Accept & Begin <i className="fas fa-arrow-right" style={{ marginLeft: 6, fontSize: 12 }} />
            </div>
            <div onClick={() => router.back()} style={{ padding: 12, textAlign: "center", color: "#8585A0", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}>
              Decline
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
