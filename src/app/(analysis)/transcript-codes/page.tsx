"use client";
import { useState } from "react";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function TranscriptCodesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedCode, setExpandedCode] = useState<number | null>(null);

  const codes = [
    { code: "TC 150", label: "Return Filed", date: "Apr 15, 2022", type: "status", icon: "fa-check-circle", iconBg: "#ECFDF5", iconColor: "#10B981", badge: "Filed", badgeBg: "#ECFDF5", badgeColor: "#10B981", detail: "Your 2021 tax return was received and processed by the IRS." },
    { code: "TC 806", label: "W-2 Withholding", date: "Apr 15, 2022", type: "payment", icon: "fa-dollar-sign", iconBg: "#EBF0FF", iconColor: "#003DA5", amount: "-$6,240", amountColor: "#10B981", detail: "Credit applied from W-2 income tax withholding." },
    { code: "TC 290", label: "Additional Assessment", date: "Jul 12, 2022", type: "assessment", icon: "fa-triangle-exclamation", iconBg: "#FFFBEB", iconColor: "#D97706", amount: "$3,800", amountColor: "#D97706", detail: "Additional tax assessed after examination or audit adjustment." },
    { code: "TC 300", label: "Additional Tax", date: "Aug 03, 2022", type: "assessment", icon: "fa-plus-circle", iconBg: "#FEF2F2", iconColor: "#EF4444", amount: "$12,500", amountColor: "#EF4444", detail: "Additional tax assessed by the IRS, typically from an audit." },
    { code: "TC 170", label: "Failure to File Penalty", date: "Aug 03, 2022", type: "assessment", icon: "fa-exclamation-circle", iconBg: "#FEF2F2", iconColor: "#EF4444", amount: "$3,200", amountColor: "#EF4444", penalty: true, detail: "Penalty for failing to file your tax return on time." },
    { code: "TC 276", label: "Failure to Pay Penalty", date: "Sep 15, 2022", type: "assessment", icon: "fa-exclamation-circle", iconBg: "#FEF2F2", iconColor: "#EF4444", amount: "$2,100", amountColor: "#EF4444", detail: "Penalty for not paying your tax balance by the due date." },
    { code: "TC 360", label: "Interest", date: "Dec 31, 2022", type: "assessment", icon: "fa-percent", iconBg: "#FFFBEB", iconColor: "#D97706", amount: "$1,890", amountColor: "#D97706", detail: "Interest accrued on your unpaid tax balance." },
  ];

  const filtered = activeFilter === "all" ? codes : codes.filter((c) => c.type === activeFilter);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>
        <ScreenHeader title="Transcript Codes" backPath="/results" />
        <div className="screen-content" style={{ paddingBottom: 90, gap: 14 }}>
          {/* Filter Chips */}
          <div style={{ display: "flex", gap: 8, overflowX: "auto", padding: "2px 0" }}>
            {[{ id: "all", label: "All" }, { id: "assessment", label: "Assessments" }, { id: "payment", label: "Payments" }, { id: "status", label: "Status" }].map((f) => (
              <div key={f.id} onClick={() => setActiveFilter(f.id)} style={{ padding: "7px 14px", borderRadius: 9999, fontSize: "0.72rem", fontWeight: 600, cursor: "pointer", border: "1px solid", borderColor: activeFilter === f.id ? "#003DA5" : "#E8E8F0", background: activeFilter === f.id ? "#003DA5" : "white", color: activeFilter === f.id ? "white" : "#5C5C7A", whiteSpace: "nowrap", transition: "all 0.25s ease", boxShadow: activeFilter === f.id ? "0 4px 12px rgba(0,61,165,0.2)" : "none" }}>
                {f.label}
              </div>
            ))}
          </div>

          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
            {filtered.map((c, i) => (
              <div key={i} onClick={() => setExpandedCode(expandedCode === i ? null : i)} style={{ padding: "14px 16px", borderBottom: i < filtered.length - 1 ? "1px solid #F0F0F5" : "none", cursor: "pointer", transition: "all 0.25s ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: c.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`fas ${c.icon}`} style={{ fontSize: 14, color: c.iconColor }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                      <span style={{ fontSize: "0.72rem", fontWeight: 800, color: c.iconColor, background: c.iconBg, padding: "2px 7px", borderRadius: 6 }}>{c.code}</span>
                      <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{c.label}</span>
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "#8585A0" }}>{c.date}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {c.badge && (
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 3, padding: "3px 8px", background: c.badgeBg, borderRadius: 6 }}>
                        <i className="fas fa-check" style={{ fontSize: 8, color: c.badgeColor }} />
                        <span style={{ fontSize: "0.65rem", fontWeight: 600, color: c.badgeColor }}>{c.badge}</span>
                      </div>
                    )}
                    {c.penalty && (
                      <div style={{ display: "inline-flex", alignItems: "center", gap: 3, padding: "3px 8px", background: "#FEF2F2", borderRadius: 6 }}>
                        <span style={{ fontSize: "0.62rem", fontWeight: 700, color: "#EF4444" }}>Penalty</span>
                      </div>
                    )}
                    {c.amount && <span style={{ fontSize: "0.82rem", fontWeight: 800, color: c.amountColor }}>{c.amount}</span>}
                    <i className="fas fa-chevron-down" style={{ fontSize: 10, color: "#B0B0C8", transition: "transform 0.3s ease", transform: expandedCode === i ? "rotate(180deg)" : "none" }} />
                  </div>
                </div>
                {expandedCode === i && (
                  <div style={{ fontSize: "0.72rem", color: "#5C5C7A", lineHeight: 1.6, paddingLeft: 46, paddingTop: 10 }}>{c.detail}</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, padding: "12px 16px", background: "white", border: "1px solid #E8E8F0", borderRadius: 14, boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
            {[{ color: "#EF4444", label: "6 assessments" }, { color: "#D97706", label: "2 penalties" }, { color: "#10B981", label: "1 credit" }].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                {i > 0 && <div style={{ width: 1, height: 16, background: "#E8E8F0", marginRight: 5 }} />}
                <div style={{ width: 8, height: 8, borderRadius: 2, background: s.color }} />
                <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#5C5C7A" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="Analysis" />
    </PhoneFrame>
  );
}
