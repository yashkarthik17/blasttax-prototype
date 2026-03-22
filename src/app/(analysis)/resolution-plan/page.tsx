"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function ResolutionPlanPage() {
  const router = useRouter();
  const [checkedSteps, setCheckedSteps] = useState<number[]>([0, 1]);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const steps = [
    { label: "Complete Form 656 (OIC Application)", completed: true },
    { label: "Complete Form 433-A(OIC) (Financial Statement)", completed: true },
    { label: "Gather supporting documents", detail: "Bank statements, pay stubs, tax returns, and asset documentation from the last 3 months." },
    { label: "Pay $205 application fee", detail: "Non-refundable fee paid to the IRS. May be waived for low-income applicants (Form 656-A)." },
    { label: "Submit 20% initial payment ($1,700)", detail: "Required with lump sum offers. This payment is applied to your tax liability if the offer is accepted." },
    { label: "Submit to IRS", detail: "We'll compile everything and submit your complete OIC package to the IRS on your behalf." },
  ];

  const completedCount = checkedSteps.length;
  const totalSteps = steps.length;
  const pctComplete = Math.round((completedCount / totalSteps) * 100);
  const circumference = 2 * Math.PI * 18;
  const dashOffset = circumference - (pctComplete / 100) * circumference;

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>
        <ScreenHeader title="Your Action Plan" backPath="/results" />
        <div className="screen-content" style={{ paddingBottom: 100, gap: 18 }}>
          {/* Hero Card */}
          <div style={{ background: "linear-gradient(145deg,#003DA5 0%,#2563EB 100%)", borderRadius: 20, padding: 24, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", background: "rgba(255,255,255,0.15)", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 600, color: "white", marginBottom: 14 }}>
              <i className="fas fa-star" style={{ fontSize: 8 }} /> RECOMMENDED
            </div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "white", marginBottom: 6 }}>Offer in Compromise</div>
            <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)", fontWeight: 500, marginBottom: 16 }}>Lump Sum Payment Option</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, color: "white", letterSpacing: "-0.02em", lineHeight: 1 }}>$8,500</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>offer amount</div>
            </div>
            <div style={{ padding: "10px 14px", background: "rgba(255,255,255,0.1)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)" }}>
              <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.9)", fontWeight: 500, lineHeight: 1.5 }}>
                <i className="fas fa-info-circle" style={{ fontSize: 10, marginRight: 4 }} /> 20% down ($1,700) + remaining within 5 months
              </div>
            </div>
          </div>

          {/* Progress */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "white", borderRadius: 14, border: "1px solid #E8E8F0", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{completedCount} of {totalSteps} steps complete</div>
              <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2 }}>Keep going, you&apos;re making progress!</div>
            </div>
            <div style={{ position: "relative", width: 44, height: 44 }}>
              <svg width="44" height="44" viewBox="0 0 44 44" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="22" cy="22" r="18" fill="none" stroke="#F0F0F5" strokeWidth="4" />
                <circle cx="22" cy="22" r="18" fill="none" stroke="#00A651" strokeWidth="4" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={dashOffset} />
              </svg>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 800, color: "#00A651" }}>{pctComplete}%</div>
            </div>
          </div>

          {/* Checklist */}
          <div>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Required Steps</div>
            <div style={{ background: "white", borderRadius: 20, border: "1px solid #E8E8F0", overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              {steps.map((step, i) => {
                const isChecked = checkedSteps.includes(i);
                const isExpanded = expandedStep === i;
                return (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 16, borderBottom: i < steps.length - 1 ? "1px solid #F0F0F5" : "none", cursor: "pointer" }}
                    onClick={() => {
                      if (!isChecked && step.detail) {
                        setExpandedStep(isExpanded ? null : i);
                      }
                    }}>
                    <div onClick={(e) => { e.stopPropagation(); setCheckedSteps((p) => p.includes(i) ? p.filter((x) => x !== i) : [...p, i]); }}
                      style={{ width: 24, height: 24, borderRadius: 8, border: `2px solid ${isChecked ? "#00A651" : "#D5D5E0"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: isChecked ? "#00A651" : "transparent", marginTop: 1, cursor: "pointer", transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
                      {isChecked && <i className="fas fa-check" style={{ fontSize: 11, color: "white" }} />}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E", textDecoration: isChecked ? "line-through" : "none", transition: "all 0.3s ease" }}>{step.label}</div>
                      {isChecked && <div style={{ fontSize: "0.7rem", color: "#00A651", marginTop: 3, fontWeight: 500 }}><i className="fas fa-check-circle" style={{ fontSize: 9 }} /> Completed</div>}
                      {isExpanded && step.detail && (
                        <div style={{ fontSize: "0.72rem", color: "#8585A0", lineHeight: 1.5, paddingTop: 8 }}>{step.detail}</div>
                      )}
                    </div>
                    {step.detail && <i className="fas fa-chevron-down" style={{ fontSize: 10, color: "#B0B0C8", marginTop: 4, transition: "transform 0.3s ease", transform: isExpanded ? "rotate(180deg)" : "none" }} />}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ padding: 16, background: "linear-gradient(135deg,#00A651,#10B981)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,166,81,0.2)", cursor: "pointer" }}>
              <i className="fas fa-file-pen" style={{ marginRight: 8 }} /> Begin Form 656
            </div>
            <div style={{ padding: 14, background: "white", border: "1.5px solid #E8E8F0", borderRadius: 9999, textAlign: "center", color: "#5C5C7A", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer" }}>
              <i className="fas fa-headset" style={{ marginRight: 6, color: "#003DA5" }} /> Talk to an expert first
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="Resolve" />
    </PhoneFrame>
  );
}
