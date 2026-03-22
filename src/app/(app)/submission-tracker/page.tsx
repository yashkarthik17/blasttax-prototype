"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

const milestones = [
  { label: "Submitted", date: "Mar 12, 2026", status: "done" as const },
  { label: "Processability Check", date: "Mar 18, 2026", status: "done" as const, badge: "Letter 3756 received" },
  { label: "Assigned to Examiner", date: "Current", status: "current" as const },
  { label: "Financial Review", date: "Upcoming", status: "pending" as const },
  { label: "Decision", date: "Expected ~Sep 2026", status: "pending" as const },
];

const faqs = [
  { q: "Will the IRS contact me directly?", a: "The IRS may request additional information through your representative. We'll handle all communications and notify you if action is needed." },
  { q: "Do I need to make payments?", a: "For a lump sum OIC, no additional payments are due during review. Your 20% initial payment was included with the submission." },
  { q: "What if my offer is rejected?", a: "You have 30 days to appeal. We'll guide you through alternative options including a revised offer or installment agreement." },
];

export default function SubmissionTrackerPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>

        {/* Header */}
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div
            onClick={() => router.push("/cases/1042")}
            style={{
              width: 36, height: 36, borderRadius: 12, background: "#F6F6FB",
              border: "1px solid #E8E8F0", display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer", flexShrink: 0,
            }}
          >
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Submission Tracker</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        <div className="screen-content" style={{ paddingBottom: 100, gap: 20 }}>

          {/* Animated Progress Circle */}
          <div className="stagger-item d1" style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 0" }}>
            <div style={{ position: "relative", width: 180, height: 180 }}>
              <svg width="180" height="180" viewBox="0 0 180 180" style={{ transform: "rotate(-90deg)" }}>
                <circle cx="90" cy="90" r="75" fill="none" stroke="#F0F0F5" strokeWidth="10" />
                <circle
                  cx="90" cy="90" r="75" fill="none" stroke="url(#progressGrad)" strokeWidth="10"
                  strokeLinecap="round" strokeDasharray="282.74" strokeDashoffset="113.1"
                />
                <defs>
                  <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#003DA5" }} />
                    <stop offset="100%" style={{ stopColor: "#2563EB" }} />
                  </linearGradient>
                </defs>
              </svg>
              {/* Center text */}
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em" }}>Step</div>
                <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#1A1A2E", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  3 <span style={{ fontSize: "1rem", fontWeight: 600, color: "#B0B0C8" }}>of 5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Status Card */}
          <div className="stagger-item d2" style={{
            background: "linear-gradient(135deg,#EBF0FF 0%,#F8F7FF 100%)",
            borderRadius: 20, padding: 20, border: "1px solid rgba(0,61,165,0.1)", textAlign: "center",
          }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px",
              background: "white", borderRadius: 9999, fontSize: "0.78rem", fontWeight: 700,
              color: "#003DA5", marginBottom: 10, boxShadow: "0 2px 8px rgba(0,61,165,0.08)",
            }}>
              <i className="fas fa-sync-alt" style={{ fontSize: 10 }} /> Under IRS Review
            </div>
            <div style={{ fontSize: "0.82rem", color: "#5C5C7A", lineHeight: 1.6, marginTop: 6 }}>
              Your Offer in Compromise has been assigned to an IRS examiner who is reviewing your financial information.
            </div>
            <div style={{
              marginTop: 12, padding: "8px 14px", background: "rgba(245,166,35,0.08)",
              border: "1px solid rgba(245,166,35,0.15)", borderRadius: 10,
              fontSize: "0.75rem", color: "#92400E", fontWeight: 500,
            }}>
              <i className="fas fa-clock" style={{ fontSize: 10, marginRight: 4 }} />
              Processing typically takes 6-12 months for OIC
            </div>
          </div>

          {/* Milestone List */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>
              Milestones
            </div>
            <div style={{ background: "white", borderRadius: 20, padding: 20, border: "1px solid #E8E8F0", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              {milestones.map((m, i) => (
                <div key={m.label} style={{ display: "flex", gap: 14, position: "relative" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    {m.status === "done" ? (
                      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#00A651", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <i className="fas fa-check" style={{ fontSize: 10, color: "white" }} />
                      </div>
                    ) : m.status === "current" ? (
                      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />
                      </div>
                    ) : (
                      <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#F6F6FB", border: "2px solid #D5D5E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D5D5E0" }} />
                      </div>
                    )}
                    {i < milestones.length - 1 && (
                      <div style={{
                        width: 2, flex: 1, margin: "4px 0", minHeight: 16,
                        background: m.status === "done" ? "#00A651" : m.status === "current" ? "linear-gradient(to bottom,#2563EB,#E8E8F0)" : "#E8E8F0",
                      }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < milestones.length - 1 ? 18 : 0 }}>
                    <div style={{
                      fontSize: "0.82rem", fontWeight: 700,
                      color: m.status === "current" ? "#2563EB" : m.status === "done" ? "#1A1A2E" : "#8585A0",
                    }}>
                      {m.label}
                    </div>
                    <div style={{
                      fontSize: "0.7rem", marginTop: 2,
                      color: m.status === "current" ? "#2563EB" : "#8585A0",
                      fontWeight: m.status === "current" ? 500 : 400,
                    }}>
                      {m.date}
                    </div>
                    {m.badge && (
                      <div style={{
                        marginTop: 4, display: "inline-flex", alignItems: "center", gap: 4,
                        padding: "3px 8px", background: "#E6F9EE", borderRadius: 6,
                        fontSize: "0.65rem", fontWeight: 600, color: "#065F46",
                      }}>
                        <i className="fas fa-envelope" style={{ fontSize: 8 }} /> {m.badge}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Card */}
          <div className="stagger-item d5">
            <div style={{ background: "white", borderRadius: 20, border: "1px solid #E8E8F0", overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              <div style={{ padding: 16, display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #F0F0F5" }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className="fas fa-lightbulb" style={{ fontSize: 14, color: "#003DA5" }} />
                </div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>What to expect during review</div>
              </div>
              {faqs.map((faq, i) => (
                <div key={i}>
                  <div
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      padding: "14px 16px", display: "flex", alignItems: "center",
                      justifyContent: "space-between", cursor: "pointer",
                      borderBottom: i < faqs.length - 1 ? "1px solid #F0F0F5" : "none",
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#5C5C7A" }}>{faq.q}</span>
                    <i className="fas fa-chevron-down" style={{
                      fontSize: 10, color: "#B0B0C8",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }} />
                  </div>
                  {openFaq === i && (
                    <div style={{ padding: "0 16px 14px" }}>
                      <div style={{ fontSize: "0.78rem", color: "#8585A0", lineHeight: 1.6 }}>{faq.a}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Expert Button */}
          <div className="stagger-item d6">
            <div style={{
              padding: 16, background: "linear-gradient(135deg,#003DA5,#2563EB)",
              borderRadius: 9999, textAlign: "center", color: "white",
              fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,61,165,0.2)",
              cursor: "pointer",
            }}>
              <i className="fas fa-headset" style={{ marginRight: 8 }} /> Contact Your Expert
            </div>
          </div>

        </div>
      </div>
      <BottomNav active="Cases" />
    </PhoneFrame>
  );
}
