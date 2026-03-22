"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

const filters = [
  { label: "All", dot: undefined },
  { label: "Active", dot: "#00A651" },
  { label: "Pending", dot: "#F5A623" },
  { label: "Resolved", dot: "#8585A0" },
];

const cases = [
  {
    id: "1042", status: "Active", statusBg: "#E6F9EE", statusColor: "#00A651",
    type: "Offer in Compromise", typeIcon: "fa-handshake", typeColor: "#003DA5",
    debt: "$47,250", updated: "Updated 2h ago",
    progressLabel: "Under IRS Review", progressPct: 60, progressColor: "#003DA5",
    barGradient: "linear-gradient(135deg,#003DA5,#2563EB)", dotColor: "#2563EB",
  },
  {
    id: "1038", status: "Pending Review", statusBg: "#FFFBEB", statusColor: "#D97706",
    type: "Installment Agreement", typeIcon: "fa-calendar-check", typeColor: "#7C3AED",
    debt: "$12,800", updated: "Updated 1d ago",
    progressLabel: "Documents Prepared", progressPct: 85, progressColor: "#7C3AED",
    barGradient: "linear-gradient(135deg,#7C3AED,#A78BFA)", dotColor: "#A78BFA",
  },
  {
    id: "985", status: "Resolved", statusBg: "#F6F6FB", statusColor: "#8585A0",
    type: "Penalty Abatement", typeIcon: "fa-eraser", typeColor: "#0D9488",
    debt: "$5,200", updated: "Resolved Feb 28",
    progressLabel: "Complete", progressPct: 100, progressColor: "#00A651",
    barGradient: "linear-gradient(135deg,#00A651,#10B981)", dotColor: undefined,
    isResolved: true,
  },
];

export default function CasesListPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 16 }}>

          {/* Header */}
          <div className="stagger-item d1" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 4 }}>
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em" }}>My Cases</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 12, background: "#F6F6FB",
                border: "1px solid #E8E8F0", display: "flex", alignItems: "center",
                justifyContent: "center", cursor: "pointer",
              }}>
                <i className="fas fa-sliders" style={{ fontSize: 14, color: "#5C5C7A" }} />
              </div>
              <div style={{
                width: 38, height: 38, borderRadius: 12,
                background: "linear-gradient(135deg,#003DA5,#2563EB)",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", boxShadow: "0 4px 12px rgba(0,61,165,0.25)",
              }}>
                <i className="fas fa-plus" style={{ fontSize: 14, color: "white" }} />
              </div>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="stagger-item d2" style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
            {filters.map((f) => (
              <div
                key={f.label}
                onClick={() => setActiveFilter(f.label)}
                style={{
                  padding: "8px 18px", borderRadius: 9999, fontSize: "0.78rem", fontWeight: 600,
                  whiteSpace: "nowrap", cursor: "pointer",
                  background: activeFilter === f.label ? "#003DA5" : "white",
                  color: activeFilter === f.label ? "white" : "#5C5C7A",
                  border: `1.5px solid ${activeFilter === f.label ? "#003DA5" : "#E8E8F0"}`,
                  boxShadow: activeFilter === f.label ? "0 4px 12px rgba(0,61,165,0.2)" : undefined,
                }}
              >
                {f.dot && activeFilter !== f.label && (
                  <i className="fas fa-circle" style={{ fontSize: 6, color: f.dot, marginRight: 4 }} />
                )}
                {f.label}
              </div>
            ))}
          </div>

          {/* Case Cards */}
          {cases.map((c, idx) => (
            <div
              key={c.id}
              className={`stagger-item d${idx + 3}`}
              onClick={() => router.push(`/cases/${c.id}`)}
              style={{
                background: "white", borderRadius: 20, padding: 20,
                border: "1px solid #E8E8F0", boxShadow: "0 2px 8px rgba(26,26,46,0.04)",
                position: "relative", cursor: "pointer",
              }}
            >
              {/* Top row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: "0.9rem", fontWeight: 800, color: "#1A1A2E" }}>Case #{c.id}</span>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px",
                    background: c.statusBg, borderRadius: 9999, fontSize: "0.68rem", fontWeight: 600, color: c.statusColor,
                  }}>
                    {c.isResolved ? (
                      <i className="fas fa-check" style={{ fontSize: 8 }} />
                    ) : (
                      <i className="fas fa-circle" style={{ fontSize: 5 }} />
                    )}
                    {" "}{c.status}
                  </span>
                </div>
                <i className="fas fa-chevron-right" style={{ fontSize: 12, color: "#B0B0C8" }} />
              </div>
              {/* Resolution type */}
              <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5C5C7A", marginBottom: 6 }}>
                <i className={`fas ${c.typeIcon}`} style={{ fontSize: 11, color: c.typeColor, marginRight: 4 }} />
                {c.type}
              </div>
              {/* Debt + timestamp */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em" }}>{c.debt}</div>
                <div style={{ fontSize: "0.68rem", color: "#B0B0C8", fontWeight: 500 }}>{c.updated}</div>
              </div>
              {/* Progress bar */}
              <div style={{ marginBottom: 6 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <span style={{ fontSize: "0.68rem", fontWeight: 600, color: c.isResolved ? "#00A651" : "#8585A0" }}>
                    {c.isResolved && <i className="fas fa-circle-check" style={{ fontSize: 10, marginRight: 2 }} />}
                    {c.progressLabel}
                  </span>
                  <span style={{ fontSize: "0.68rem", fontWeight: 700, color: c.progressColor }}>{c.progressPct}%</span>
                </div>
                <div style={{ height: 5, background: "#F0F0F5", borderRadius: 9999, overflow: "hidden" }}>
                  <div style={{
                    width: `${c.progressPct}%`, height: "100%", background: c.barGradient,
                    borderRadius: 9999, position: "relative",
                  }}>
                    {c.dotColor && (
                      <div style={{
                        position: "absolute", right: 0, top: -1, width: 7, height: 7,
                        background: c.dotColor, borderRadius: "50%",
                        boxShadow: `0 0 8px ${c.dotColor}66`,
                      }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State: Start New Analysis */}
          <div className="stagger-item d6" style={{
            border: "2px dashed #D5D5E0", borderRadius: 20, padding: "28px 20px",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
            textAlign: "center", cursor: "pointer",
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14, background: "#F6F6FB",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <i className="fas fa-plus" style={{ fontSize: 18, color: "#B0B0C8" }} />
            </div>
            <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#5C5C7A" }}>Start a new analysis</div>
            <div style={{ fontSize: "0.75rem", color: "#B0B0C8", fontWeight: 400, lineHeight: 1.5 }}>Get a personalized resolution recommendation</div>
          </div>

        </div>
      </div>
      <BottomNav active="Cases" />
    </PhoneFrame>
  );
}
