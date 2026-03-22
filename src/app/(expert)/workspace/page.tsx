"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

export default function ExpertWorkspacePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Documents");

  const tabs = ["Documents", "Notes", "Recommendations"];

  const documents = [
    { name: "Form 656", desc: "Offer in Compromise form", icon: "fa-file-pdf", iconBg: "#E6F9EE", iconColor: "#00A651", status: "Complete", statusBg: "#E6F9EE", statusColor: "#00A651", statusIcon: "fa-check-circle" },
    { name: "Form 433-A", desc: "Collection information statement", icon: "fa-file-pdf", iconBg: "#E6F9EE", iconColor: "#00A651", status: "Complete", statusBg: "#E6F9EE", statusColor: "#00A651", statusIcon: "fa-check-circle" },
    { name: "Bank Statements", desc: "Last 6 months required", icon: "fa-file-invoice", iconBg: "#FFFBEB", iconColor: "#F5A623", status: "Pending", statusBg: "#FFFBEB", statusColor: "#D97706", statusIcon: "fa-clock" },
    { name: "Pay Stubs", desc: "Last 3 months required", icon: "fa-file-invoice-dollar", iconBg: "#FFFBEB", iconColor: "#F5A623", status: "Pending", statusBg: "#FFFBEB", statusColor: "#D97706", statusIcon: "fa-clock" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        {/* Header */}
        <div className="screen-header stagger-item d1">
          <button className="btn-icon" onClick={() => router.back()}>
            <i className="fas fa-arrow-left" />
          </button>
          <span className="screen-header-title">Expert Review</span>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 10px", background: "#EBF0FF", border: "1px solid rgba(0,61,165,0.12)", borderRadius: 9999, fontSize: "0.68rem", fontWeight: 600, color: "#003DA5" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2563EB", animation: "pulse 2s ease-in-out infinite" }} />
            In Progress
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 100, gap: 16 }}>
          {/* Expert Profile Card */}
          <div className="stagger-item d2" style={{ background: "white", borderRadius: 16, padding: 18, border: "1px solid #E8E8F0", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative" }}>
              <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "white" }}>MC</span>
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 14, height: 14, background: "#00A651", borderRadius: "50%", border: "2.5px solid white" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1A1A2E" }}>Michael Chen, EA</div>
              <div style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 400 }}>Enrolled Agent</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <i className="fas fa-star" style={{ fontSize: 10, color: "#F5A623" }} />
                  <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#1A1A2E" }}>4.9</span>
                </div>
                <span style={{ fontSize: "0.68rem", color: "#B0B0C8" }}>|</span>
                <span style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500 }}>15 years exp.</span>
              </div>
            </div>
            <button style={{ width: 36, height: 36, borderRadius: 10, background: "#EBF0FF", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <i className="fas fa-ellipsis-vertical" style={{ fontSize: 14, color: "#003DA5" }} />
            </button>
          </div>

          {/* Case Summary */}
          <div className="stagger-item d3" style={{ background: "linear-gradient(135deg,#FAFAFF 0%,#EBF0FF 100%)", borderRadius: 16, padding: 18, border: "1px solid rgba(0,61,165,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em" }}>Case Summary</div>
              <div style={{ padding: "3px 8px", background: "white", border: "1px solid #E8E8F0", borderRadius: 9999, fontSize: "0.68rem", fontWeight: 600, color: "#5C5C7A" }}>Case #1042</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <div style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 500 }}>Resolution Type</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E", marginTop: 2 }}>Offer in Compromise</div>
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 500 }}>Total Debt</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#E63946", marginTop: 2 }}>$47,250</div>
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 500 }}>Offer Amount</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#00A651", marginTop: 2 }}>$8,500</div>
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", color: "#8585A0", fontWeight: 500 }}>Savings</div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#003DA5", marginTop: 2 }}>82%</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="stagger-item d4" style={{ display: "flex", borderBottom: "1px solid #E8E8F0", margin: "0 -20px", padding: "0 20px" }}>
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "10px 18px", fontSize: "0.82rem", fontWeight: 600, color: activeTab === tab ? "#003DA5" : "#8585A0", background: "transparent", border: "none", borderBottom: `2px solid ${activeTab === tab ? "#003DA5" : "transparent"}`, cursor: "pointer", transition: "all 0.25s ease", fontFamily: "inherit" }}>
                {tab}
              </button>
            ))}
          </div>

          {/* Upload Zone */}
          <div className="stagger-item d5">
            <div style={{ border: "2px dashed #D5D5E0", borderRadius: 16, padding: 24, textAlign: "center", cursor: "pointer", transition: "all 0.3s ease" }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                <i className="fas fa-cloud-arrow-up" style={{ fontSize: 18, color: "#003DA5" }} />
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>Drag & drop files here</div>
              <div style={{ fontSize: "0.75rem", color: "#8585A0", marginTop: 4 }}>or tap to browse</div>
            </div>
          </div>

          {/* Uploaded Documents */}
          <div className="stagger-item d6">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10, padding: "0 4px" }}>Uploaded Documents</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", overflow: "hidden" }}>
              {documents.map((doc, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderBottom: i < documents.length - 1 ? "1px solid #F0F0F5" : "none" }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: doc.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`fas ${doc.icon}`} style={{ fontSize: 15, color: doc.iconColor }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>{doc.name}</div>
                    <div style={{ fontSize: "0.7rem", color: "#8585A0" }}>{doc.desc}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 3, padding: "3px 8px", background: doc.statusBg, borderRadius: 9999, fontSize: "0.65rem", fontWeight: 600, color: doc.statusColor }}>
                      <i className={`fas ${doc.statusIcon}`} style={{ fontSize: 9 }} /> {doc.status}
                    </span>
                    <i className="fas fa-eye" style={{ fontSize: 13, color: "#B0B0C8", cursor: "pointer" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="stagger-item d7" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {[
              { icon: "fa-comment-dots", label: "Message", bg: "#EBF0FF", color: "#003DA5", onClick: () => router.push("/chat") },
              { icon: "fa-phone", label: "Schedule Call", bg: "#F5F0FF", color: "#7C3AED", onClick: () => {} },
              { icon: "fa-cloud-arrow-up", label: "Upload", bg: "#F0FDFA", color: "#0D9488", onClick: () => {} },
            ].map((action, i) => (
              <button key={i} onClick={action.onClick} style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 14, padding: "14px 8px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer", fontFamily: "inherit", transition: "all 0.25s ease" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: action.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className={`fas ${action.icon}`} style={{ fontSize: 15, color: action.color }} />
                </div>
                <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#1A1A2E" }}>{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="Cases" />
    </PhoneFrame>
  );
}
