"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

/* ─── OIC Timeline Steps ─── */
const oicSteps = [
  { label: "Analysis Complete", date: "Mar 3, 2026", done: true },
  { label: "Documents Prepared", date: "Mar 8, 2026", done: true },
  { label: "OIC Submitted (Day 0)", date: "Mar 12, 2026", done: true },
  { label: "Processability Review Passed", date: "Mar 28", done: true },
  { label: "TC 480 Posted \u2014 CSED Now Tolled", date: "Mar 28", done: true },
  { label: "Letter 3756 Received", date: "Apr 5 (24-month clock started)", done: true },
  { label: "Routed to COIC (Brookhaven)", date: "Apr 20", done: true },
  { label: "Examiner Assignment", date: "Letter 4450 expected", active: true, badgeText: "ACTIVE" },
  { label: "Investigation Phase", date: "Mo 3-12", pending: true },
  { label: "Decision Expected", date: "Mo 6-18", pending: true },
  { label: "Resolution", date: "Pending", pending: true, isLast: true },
];

/* ─── Documents ─── */
const documents = [
  { name: "Form 656", pages: "3 pages", date: "Mar 12", icon: "fa-file-lines", iconColor: "#003DA5", iconBg: "#EBF0FF", status: "Submitted" },
  { name: "Form 433-A(OIC)", pages: "8 pages", date: "Mar 12", icon: "fa-file-lines", iconColor: "#003DA5", iconBg: "#EBF0FF", status: "Submitted" },
  { name: "Bank Statements", pages: "12 pages", date: "Mar 10", icon: "fa-building-columns", iconColor: "#0D9488", iconBg: "#F0FDFA", status: "Uploaded" },
  { name: "Pay Stubs", pages: "6 pages", date: "Mar 10", icon: "fa-money-check-dollar", iconColor: "#7C3AED", iconBg: "#F5F0FF", status: "Uploaded" },
  { name: "IRS Transcript", pages: "4 pages", date: "Mar 8", icon: "fa-landmark", iconColor: "#E63946", iconBg: "#FFF0F1", status: "Retrieved" },
  { name: "Photo ID", pages: undefined, date: "Mar 5", icon: "fa-id-card", iconColor: "#D97706", iconBg: "#FFFBEB", status: "Verified" },
];

/* ─── Notes ─── */
const notes = [
  {
    initials: "MC", bg: "linear-gradient(135deg,#003DA5,#2563EB)", name: "Michael Chen, EA",
    role: "Tax Expert", date: "Mar 13, 2026", badge: "Expert", badgeBg: "#EBF0FF", badgeColor: "#003DA5",
    text: "Initial review complete. Strong case for OIC. Medical expenses documentation strengthens the offer.",
  },
  {
    icon: "fa-robot", bg: "#F6F6FB", name: "System",
    role: undefined, date: "Mar 12, 2026", badge: "System", badgeBg: "#F6F6FB", badgeColor: "#8585A0",
    text: "OIC package submitted to IRS via certified mail. Tracking #: 9400111899223...",
  },
  {
    initials: "YK", bg: "linear-gradient(135deg,#00A651,#10B981)", name: "You",
    role: undefined, date: "Mar 10, 2026", badge: "You", badgeBg: "#E6F9EE", badgeColor: "#065F46",
    text: "Uploaded bank statements for Jan-Mar 2026",
  },
];

export default function CaseDetailPage() {
  const router = useRouter();
  const params = useParams();
  const caseId = params.id || "1042";
  const [activeTab, setActiveTab] = useState("timeline");

  const tabs = [
    { id: "timeline", label: "Timeline", icon: "fa-timeline" },
    { id: "documents", label: "Documents", icon: "fa-file-lines" },
    { id: "notes", label: "Notes", icon: "fa-sticky-note" },
    { id: "alerts", label: "Alerts", icon: "fa-bell", badgeCount: 2 },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>

        {/* Header */}
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div
            onClick={() => router.push("/cases")}
            style={{
              width: 36, height: 36, borderRadius: 12, background: "#F6F6FB",
              border: "1px solid #E8E8F0", display: "flex", alignItems: "center",
              justifyContent: "center", cursor: "pointer", flexShrink: 0,
            }}
          >
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>
            Case #{caseId}
          </div>
          <div style={{
            width: 36, height: 36, borderRadius: 12, background: "#F6F6FB",
            border: "1px solid #E8E8F0", display: "flex", alignItems: "center",
            justifyContent: "center", cursor: "pointer", flexShrink: 0,
          }}>
            <i className="fas fa-share-nodes" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 0, gap: 0 }}>

          {/* Status Badge Strip */}
          <div className="stagger-item d1" style={{
            display: "flex", alignItems: "center", gap: 8, padding: "10px 16px",
            background: "linear-gradient(135deg,#E6F9EE 0%,#ECFDF5 100%)",
            borderRadius: 14, border: "1px solid rgba(0,166,81,0.12)", marginBottom: 14,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#00A651" }} />
            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#065F46" }}>Active</span>
            <span style={{ fontSize: "0.82rem", color: "#5C5C7A", fontWeight: 500 }}> &mdash; Offer in Compromise</span>
          </div>

          {/* Alert Banner */}
          <div className="stagger-item d2" style={{ marginBottom: 14 }}>
            <div style={{
              padding: "12px 14px", background: "linear-gradient(135deg,#EBF0FF,#E8EFFF)",
              borderRadius: 14, border: "1px solid rgba(37,99,235,0.15)",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 8, background: "rgba(37,99,235,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1,
                }}>
                  <i className="fas fa-clock" style={{ fontSize: 12, color: "#2563EB" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1E40AF", marginBottom: 3 }}>Awaiting Examiner Assignment</div>
                  <div style={{ fontSize: "0.7rem", color: "#3B82F6", lineHeight: 1.4 }}>24-month deadline: Apr 2028</div>
                </div>
              </div>
              <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                <button
                  onClick={() => setActiveTab("timeline")}
                  style={{
                    flex: 1, padding: "8px 12px", background: "linear-gradient(135deg,#003DA5,#2563EB)",
                    color: "white", border: "none", borderRadius: 10, fontSize: "0.72rem",
                    fontWeight: 700, fontFamily: "inherit", cursor: "pointer",
                  }}
                >
                  <i className="fas fa-timeline" style={{ fontSize: 9, marginRight: 4 }} /> View Timeline
                </button>
              </div>
            </div>
          </div>

          {/* Hero Stats Row */}
          <div className="stagger-item d3" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 16 }}>
            <div style={{ background: "white", borderRadius: 16, padding: "14px 10px", border: "1px solid #E8E8F0", textAlign: "center" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Original Debt</div>
              <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#8585A0", letterSpacing: "-0.01em" }}>$47,250</div>
            </div>
            <div style={{ background: "linear-gradient(135deg,#E6F9EE,#ECFDF5)", borderRadius: 16, padding: "14px 10px", border: "1px solid rgba(0,166,81,0.15)", textAlign: "center" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#065F46", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Offer Amount</div>
              <div style={{ fontSize: "1.2rem", fontWeight: 900, color: "#00A651", letterSpacing: "-0.02em" }}>$8,500</div>
            </div>
            <div style={{ background: "white", borderRadius: 16, padding: "14px 10px", border: "1px solid #E8E8F0", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Savings</div>
              <div style={{
                display: "inline-flex", padding: "4px 12px",
                background: "linear-gradient(135deg,#00A651,#10B981)",
                borderRadius: 9999, fontSize: "1rem", fontWeight: 800, color: "white",
                boxShadow: "0 4px 12px rgba(0,166,81,0.25)",
              }}>
                82%
              </div>
            </div>
          </div>

          {/* Tab Bar */}
          <div className="stagger-item d4" style={{
            position: "sticky", top: 52, zIndex: 15,
            background: "rgba(250,250,255,0.95)", backdropFilter: "blur(16px)",
            margin: "0 -20px", padding: "0 20px", borderBottom: "1px solid #E8E8F0",
          }}>
            <div style={{ display: "flex", gap: 0, justifyContent: "space-between" }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    flex: 1, textAlign: "center", position: "relative",
                    padding: "10px 0", fontSize: "0.78rem",
                    fontWeight: activeTab === tab.id ? 700 : 600,
                    color: activeTab === tab.id ? "#003DA5" : "#8585A0",
                    background: "none", border: "none", fontFamily: "inherit",
                    whiteSpace: "nowrap", cursor: "pointer",
                    borderBottom: activeTab === tab.id ? "2.5px solid #003DA5" : "2.5px solid transparent",
                  }}
                >
                  <i className={`fas ${tab.icon}`} style={{ fontSize: 10, marginRight: 4 }} />
                  {tab.label}
                  {tab.badgeCount && (
                    <span style={{
                      position: "absolute", top: 4, right: 8, width: 16, height: 16,
                      background: "#E63946", borderRadius: "50%", fontSize: "0.55rem", fontWeight: 800,
                      color: "white", display: "flex", alignItems: "center", justifyContent: "center",
                      border: "2px solid #FAFAFF",
                    }}>
                      {tab.badgeCount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content Area */}
          <div style={{ paddingTop: 16, paddingBottom: 160 }}>

            {/* ─── TIMELINE TAB ─── */}
            {activeTab === "timeline" && (
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>OIC Lifecycle</div>
                <div style={{ background: "white", borderRadius: 18, padding: "20px 16px", border: "1px solid #E8E8F0", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
                  {oicSteps.map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 12 }}>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                        {step.done ? (
                          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#00A651", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className="fas fa-check" style={{ fontSize: 10, color: "white" }} />
                          </div>
                        ) : step.active ? (
                          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className="fas fa-sync-alt" style={{ fontSize: 9, color: "white" }} />
                          </div>
                        ) : (
                          <div style={{ width: 26, height: 26, borderRadius: "50%", background: "#F0F0F5", border: "2px solid #D5D5E0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <i className={`fas ${step.isLast ? "fa-flag-checkered" : "fa-hourglass-half"}`} style={{ fontSize: 9, color: "#B0B0C8" }} />
                          </div>
                        )}
                        {i < oicSteps.length - 1 && (
                          <div style={{
                            width: 2, flex: 1, margin: "3px 0", minHeight: 16,
                            background: step.done ? "#00A651" : step.active ? "linear-gradient(to bottom,#2563EB,#E8E8F0)" : "#E8E8F0",
                          }} />
                        )}
                      </div>
                      <div style={{ paddingBottom: i < oicSteps.length - 1 ? 14 : 0 }}>
                        <div style={{
                          fontSize: "0.8rem", fontWeight: step.pending ? 600 : 700,
                          color: step.active ? "#2563EB" : step.pending ? "#8585A0" : "#1A1A2E",
                        }}>
                          {step.label}
                        </div>
                        <div style={{
                          fontSize: "0.68rem", marginTop: 1,
                          color: step.active ? "#3B82F6" : step.pending ? "#B0B0C8" : "#8585A0",
                        }}>
                          {step.date}
                        </div>
                        {step.badgeText && (
                          <div style={{
                            marginTop: 5, padding: "5px 9px", background: "#EBF0FF", borderRadius: 8,
                            fontSize: "0.65rem", color: "#003DA5", fontWeight: 600, display: "inline-block",
                          }}>
                            <i className="fas fa-circle" style={{ fontSize: 5, marginRight: 3, color: "#2563EB", verticalAlign: "middle" }} /> {step.badgeText}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* During Review Card */}
                <div style={{ marginTop: 14, background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
                    <i className="fas fa-shield-halved" style={{ fontSize: 11, color: "#2563EB" }} /> During Review
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { emoji: "\u26A0\uFE0F", text: "Stay current on all filings", color: "#5C5C7A" },
                      { emoji: "\u26A0\uFE0F", text: "Continue periodic payments (not refunded if rejected)", color: "#5C5C7A" },
                      { emoji: "\u26A0\uFE0F", text: "Respond to IRS requests within deadlines", color: "#5C5C7A" },
                      { emoji: "\u2713", text: "No levy while TC 480 active", color: "#065F46", bold: true },
                      { emoji: "\u26A0\uFE0F", text: "Refunds will be offset (TC 826)", color: "#5C5C7A" },
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ fontSize: "0.72rem", flexShrink: 0, color: item.bold ? "#00A651" : undefined }}>{item.emoji}</span>
                        <span style={{ fontSize: "0.72rem", color: item.color, lineHeight: 1.4, fontWeight: item.bold ? 600 : 400 }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ─── DOCUMENTS TAB ─── */}
            {activeTab === "documents" && (
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Case Documents</div>
                <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
                  {documents.map((doc, i) => (
                    <div key={doc.name} style={{
                      display: "flex", alignItems: "center", gap: 12, padding: "13px 14px",
                      borderBottom: i < documents.length - 1 ? "1px solid #F0F0F5" : "none",
                      cursor: "pointer",
                    }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 10, background: doc.iconBg,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        <i className={`fas ${doc.icon}`} style={{ fontSize: 14, color: doc.iconColor }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1A1A2E" }}>{doc.name}</div>
                        <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 1 }}>
                          {doc.pages ? `${doc.pages} \u00B7 ${doc.date}` : doc.date}
                        </div>
                      </div>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px",
                        background: "#E6F9EE", borderRadius: 9999, fontSize: "0.62rem",
                        fontWeight: 600, color: "#00A651", flexShrink: 0,
                      }}>
                        <i className="fas fa-check" style={{ fontSize: 7 }} /> {doc.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Upload Button */}
                <div style={{ marginTop: 16 }}>
                  <button style={{
                    width: "100%", padding: 13, background: "white", border: "1.5px dashed #D5D5E0",
                    borderRadius: 14, textAlign: "center", color: "#5C5C7A", fontSize: "0.8rem",
                    fontWeight: 700, fontFamily: "inherit", cursor: "pointer", display: "flex",
                    alignItems: "center", justifyContent: "center", gap: 8,
                  }}>
                    <i className="fas fa-cloud-arrow-up" style={{ fontSize: 16, color: "#003DA5" }} /> Upload Document
                  </button>
                </div>
              </div>
            )}

            {/* ─── NOTES TAB ─── */}
            {activeTab === "notes" && (
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Case Notes</div>

                {notes.map((note, i) => (
                  <div key={i} style={{ background: "white", borderRadius: 16, padding: 14, border: "1px solid #E8E8F0", boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                      <div style={{
                        width: 30, height: 30, borderRadius: "50%", background: note.bg,
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}>
                        {note.initials ? (
                          <span style={{ fontSize: "0.58rem", fontWeight: 700, color: "white" }}>{note.initials}</span>
                        ) : (
                          <i className={`fas ${note.icon}`} style={{ fontSize: 12, color: "#8585A0" }} />
                        )}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "0.76rem", fontWeight: 700, color: "#1A1A2E" }}>{note.name}</div>
                        <div style={{ fontSize: "0.64rem", color: "#B0B0C8" }}>
                          {note.role ? `${note.role} \u00B7 ` : ""}{note.date}
                        </div>
                      </div>
                      <span style={{ padding: "2px 8px", background: note.badgeBg, borderRadius: 9999, fontSize: "0.58rem", fontWeight: 600, color: note.badgeColor }}>
                        {note.badge}
                      </span>
                    </div>
                    <div style={{ fontSize: "0.76rem", color: "#5C5C7A", lineHeight: 1.6, paddingLeft: 38 }}>
                      {note.text}
                    </div>
                  </div>
                ))}

                {/* Add Note */}
                <div style={{ background: "white", borderRadius: 16, padding: 14, border: "1px solid #E8E8F0", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
                  <textarea
                    placeholder="Add a note..."
                    style={{
                      width: "100%", padding: 12, background: "#F6F6FB", border: "1.5px solid #E8E8F0",
                      borderRadius: 12, fontFamily: "inherit", fontSize: "0.78rem", color: "#1A1A2E",
                      resize: "none", height: 72, outline: "none", boxSizing: "border-box",
                    }}
                  />
                  <div style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}>
                    <button style={{
                      padding: "8px 20px", background: "linear-gradient(135deg,#003DA5,#2563EB)",
                      color: "white", border: "none", borderRadius: 10, fontSize: "0.75rem",
                      fontWeight: 700, fontFamily: "inherit", cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(0,61,165,0.15)",
                    }}>
                      <i className="fas fa-paper-plane" style={{ fontSize: 10, marginRight: 4 }} /> Add Note
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ─── ALERTS TAB ─── */}
            {activeTab === "alerts" && (
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Active Alerts</div>

                {/* Alert 1: 24-Month Deadline */}
                <div style={{
                  background: "white", borderRadius: 16, padding: 14,
                  border: "1px solid rgba(37,99,235,0.15)", boxShadow: "0 2px 8px rgba(26,26,46,0.04)",
                  marginBottom: 10,
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className="fas fa-clock" style={{ fontSize: 14, color: "#2563EB" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                        <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1A1A2E" }}>24-Month Deadline</span>
                        <span style={{ padding: "2px 8px", background: "#EBF0FF", borderRadius: 9999, fontSize: "0.58rem", fontWeight: 600, color: "#2563EB" }}>Info</span>
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#5C5C7A", lineHeight: 1.5, marginBottom: 10 }}>
                        OIC deemed accepted if no decision by Apr 5, 2028 (IRC &sect; 7122(f))
                      </div>
                      <button
                        onClick={() => router.push("/submission-tracker")}
                        style={{
                          padding: "7px 16px", background: "linear-gradient(135deg,#003DA5,#2563EB)",
                          color: "white", border: "none", borderRadius: 9, fontSize: "0.7rem",
                          fontWeight: 700, fontFamily: "inherit", cursor: "pointer",
                        }}
                      >
                        <i className="fas fa-chart-line" style={{ fontSize: 9, marginRight: 4 }} /> Track
                      </button>
                    </div>
                  </div>
                </div>

                {/* Alert 2: Periodic Payment Due */}
                <div style={{
                  background: "white", borderRadius: 16, padding: 14,
                  border: "1px solid rgba(245,166,35,0.2)", boxShadow: "0 2px 8px rgba(26,26,46,0.04)",
                  marginBottom: 10,
                }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: "#FFFBEB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className="fas fa-credit-card" style={{ fontSize: 14, color: "#D97706" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                        <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1A1A2E" }}>Periodic Payment Due</span>
                        <span style={{ padding: "2px 8px", background: "#FFFBEB", borderRadius: 9999, fontSize: "0.58rem", fontWeight: 600, color: "#D97706" }}>Warning</span>
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "#5C5C7A", lineHeight: 1.5, marginBottom: 10 }}>
                        Next payment of $354 due Apr 15
                      </div>
                      <button style={{
                        padding: "7px 16px", background: "linear-gradient(135deg,#00A651,#10B981)",
                        color: "white", border: "none", borderRadius: 9, fontSize: "0.7rem",
                        fontWeight: 700, fontFamily: "inherit", cursor: "pointer",
                      }}>
                        <i className="fas fa-credit-card" style={{ fontSize: 9, marginRight: 4 }} /> Make Payment
                      </button>
                    </div>
                  </div>
                </div>

                {/* Resolved Section */}
                <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", margin: "18px 0 12px" }}>Resolved</div>

                <div style={{ background: "white", borderRadius: 16, padding: 14, border: "1px solid #E8E8F0", opacity: 0.7 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <i className="fas fa-check-circle" style={{ fontSize: 14, color: "#00A651" }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#1A1A2E" }}>Processability Review</span>
                        <span style={{ padding: "2px 8px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.58rem", fontWeight: 600, color: "#00A651" }}>Passed</span>
                      </div>
                      <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 2 }}>Mar 28</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Bottom Actions (floating) */}
        <div style={{
          position: "absolute", bottom: 66, left: 0, right: 0, zIndex: 18,
          padding: "12px 20px",
          background: "linear-gradient(to top, rgba(250,250,255,1) 70%, rgba(250,250,255,0))",
          pointerEvents: "none",
        }}>
          <div style={{ display: "flex", gap: 10, pointerEvents: "auto" }}>
            <div style={{
              flex: 1, padding: 13, background: "linear-gradient(135deg,#003DA5,#2563EB)",
              borderRadius: 14, textAlign: "center", color: "white", fontSize: "0.8rem",
              fontWeight: 700, boxShadow: "0 4px 16px rgba(0,61,165,0.2)", cursor: "pointer",
            }}>
              <i className="fas fa-comment" style={{ marginRight: 6 }} /> Message Expert
            </div>
            <div style={{
              flex: 1, padding: 13, background: "white", border: "1.5px solid #E8E8F0",
              borderRadius: 14, textAlign: "center", color: "#1A1A2E", fontSize: "0.8rem",
              fontWeight: 700, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", cursor: "pointer",
            }}>
              <i className="fas fa-credit-card" style={{ marginRight: 6, color: "#00A651" }} /> Make Payment
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="Cases" />
    </PhoneFrame>
  );
}
