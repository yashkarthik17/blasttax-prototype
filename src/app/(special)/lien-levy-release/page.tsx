"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const lienTypes = [
  { icon: "fa-unlock", iconColor: "#00A651", bg: "#E6F9EE", title: "Lien Release", form: "Form 668(Z)", desc: "Removes lien after full payment or CSED expiration", extra: null },
  { icon: "fa-eraser", iconColor: "#003DA5", bg: "#EBF0FF", title: "Lien Withdrawal", form: "Form 12277", desc: "Removes NFTL from public record", extra: "Conditions: IA with DDIA, balance <$25K, 3 consecutive payments" },
  { icon: "fa-layer-group", iconColor: "#7C3AED", bg: "#F5F0FF", title: "Lien Subordination", form: "Form 14134", desc: "Allows another creditor priority (e.g., refinancing a mortgage)", extra: null },
  { icon: "fa-house-circle-xmark", iconColor: "#D97706", bg: "#FFF7ED", title: "Lien Discharge", form: "Form 14135", desc: "Removes lien from specific property (e.g., selling a property)", extra: null },
];

const levyTypes = [
  { icon: "fa-building-columns", iconColor: "#003DA5", bg: "#EBF0FF", title: "Bank Levy", desc: "One-time freeze, 21-day hold before seizure" },
  { icon: "fa-money-bill-wave", iconColor: "#D97706", bg: "#FFF7ED", title: "Wage Garnishment", desc: "Continuous until resolved" },
  { icon: "fa-house-circle-xmark", iconColor: "#E63946", bg: "#FFF0F1", title: "Property Seizure", desc: "Real estate, vehicles (requires manager approval)" },
];

const stopMethods = [
  { num: "1", numBg: "#EBF0FF", numColor: "#003DA5", title: "Enter Installment Agreement", desc: "Immediate levy release" },
  { num: "2", numBg: "#F5F0FF", numColor: "#7C3AED", title: "File OIC", desc: "TC 480 stops levies" },
  { num: "3", numBg: "#F0FDFA", numColor: "#0D9488", title: "Request CNC", desc: "Hardship stops levies" },
  { num: "4", numBg: "#FFF7ED", numColor: "#D97706", title: "File CDP Hearing", desc: "Form 12153 within 30 days of notice" },
  { num: "5", numBg: "#E6F9EE", numColor: "#00A651", title: "Prove economic hardship", desc: "IRS must release if levy causes hardship" },
];

export default function LienLevyReleasePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"liens" | "levies">("liens");

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Liens & Levies" backPath="/cases/1042" />

        <div className="screen-content" style={{ paddingBottom: 100 }}>
          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.25 }}>
              Remove IRS Liens and Stop Levies
            </h1>
          </div>
          <div className="stagger-item d2" style={{ marginBottom: 18 }}>
            <p style={{ fontSize: "0.8125rem", color: "#5C5C7A" }}>Protect your property and bank accounts</p>
          </div>

          {/* Tab Bar */}
          <div className="stagger-item d3" style={{ marginBottom: 18 }}>
            <div className="ll-tab-bar">
              <button className={`ll-tab-btn${activeTab === "liens" ? " active" : ""}`} onClick={() => setActiveTab("liens")}>
                <i className="fas fa-link" style={{ marginRight: 4, fontSize: 11 }} /> Liens
              </button>
              <button className={`ll-tab-btn${activeTab === "levies" ? " active" : ""}`} onClick={() => setActiveTab("levies")}>
                <i className="fas fa-hand" style={{ marginRight: 4, fontSize: 11 }} /> Levies
              </button>
            </div>
          </div>

          {/* LIENS TAB */}
          {activeTab === "liens" && (
            <>
              <div className="stagger-item d4" style={{ marginBottom: 14 }}>
                <div style={{ padding: "12px 14px", background: "#EBF0FF", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
                  <i className="fas fa-info-circle" style={{ color: "#003DA5", fontSize: 14 }} />
                  <p style={{ fontSize: "0.8125rem", color: "#003DA5", fontWeight: 600 }}>A legal claim on your property (TC 582 -- NFTL filed)</p>
                </div>
              </div>

              <div className="stagger-item d5">
                {lienTypes.map((lien) => (
                  <div key={lien.title} className="ll-lien-type">
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 32, height: 32, borderRadius: 10, background: lien.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <i className={`fas ${lien.icon}`} style={{ fontSize: 14, color: lien.iconColor }} />
                      </div>
                      <div>
                        <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>{lien.title}</p>
                        <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{lien.form}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.75rem", color: "#5C5C7A", marginBottom: lien.extra ? 8 : 0 }}>{lien.desc}</p>
                    {lien.extra && (
                      <div style={{ padding: "8px 10px", background: "#F6F6FB", borderRadius: 8 }}>
                        <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{lien.extra}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="stagger-item d6" style={{ marginTop: 6, marginBottom: 18 }}>
                <div style={{ padding: "14px 16px", background: "#FFF0F1", border: "1px solid rgba(230,57,70,0.15)", borderRadius: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <i className="fas fa-circle-exclamation" style={{ fontSize: 13, color: "#E63946" }} />
                    <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#991B1B" }}>Current Status</span>
                  </div>
                  <p style={{ fontSize: "0.75rem", color: "#B91C1C" }}>NFTL filed -- TC 582 -- Recorded Los Angeles County, CA</p>
                </div>
              </div>

              <div className="stagger-item d7">
                <button
                  onClick={() => router.push("/ai-chat")}
                  style={{ width: "100%", height: 52, borderRadius: 16, background: "#00A651", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                >
                  <i className="fas fa-file-signature" />
                  Request Lien Withdrawal
                </button>
              </div>
            </>
          )}

          {/* LEVIES TAB */}
          {activeTab === "levies" && (
            <>
              <div style={{ marginBottom: 14 }}>
                <div style={{ padding: "12px 14px", background: "#FFF0F1", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
                  <i className="fas fa-triangle-exclamation" style={{ color: "#E63946", fontSize: 14 }} />
                  <p style={{ fontSize: "0.8125rem", color: "#991B1B", fontWeight: 600 }}>IRS seizes your property -- bank accounts, wages, etc.</p>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 10 }}>Types of Levies</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {levyTypes.map((levy) => (
                    <div key={levy.title} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: 12, background: "white", border: "1.5px solid #E8E8F0", borderRadius: 14 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: levy.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <i className={`fas ${levy.icon}`} style={{ fontSize: 14, color: levy.iconColor }} />
                      </div>
                      <div>
                        <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>{levy.title}</p>
                        <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{levy.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div className="ll-info-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <i className="fas fa-shield-halved" style={{ fontSize: 13, color: "#00A651" }} />
                    </div>
                    <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>How to Stop a Levy</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    {stopMethods.map((m) => (
                      <div key={m.num} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "10px 0" }}>
                        <div className="ll-stop-dot" style={{ background: m.numBg, color: m.numColor }}>{m.num}</div>
                        <div>
                          <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>{m.title}</p>
                          <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 18 }}>
                <div style={{ padding: "12px 14px", background: "#E6F9EE", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
                  <i className="fas fa-file-circle-check" style={{ color: "#00A651", fontSize: 14 }} />
                  <p style={{ fontSize: "0.8125rem", color: "#166534", fontWeight: 600 }}>Form 668-D: Certificate of Release of Federal Tax Levy</p>
                </div>
              </div>

              <div>
                <button
                  onClick={() => router.push("/ai-chat")}
                  style={{ width: "100%", height: 52, borderRadius: 16, background: "#E63946", color: "white", fontSize: "0.9375rem", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
                >
                  <i className="fas fa-hand" />
                  Stop Active Levy
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        .ll-tab-bar {
          display: flex;
          background: #F6F6FB;
          border-radius: 12px;
          padding: 3px;
          gap: 2px;
        }
        .ll-tab-btn {
          flex: 1;
          padding: 10px 16px;
          border: none;
          background: transparent;
          border-radius: 10px;
          font-size: 0.8125rem;
          font-weight: 700;
          color: #5C5C7A;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .ll-tab-btn.active {
          background: white;
          color: #003DA5;
          box-shadow: 0 2px 8px rgba(26,26,46,0.08);
        }
        .ll-lien-type {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 14px;
          padding: 14px;
          margin-bottom: 10px;
        }
        .ll-info-card {
          background: white;
          border: 1.5px solid #E8E8F0;
          border-radius: 16px;
          padding: 16px;
        }
        .ll-stop-dot {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.6875rem;
          font-weight: 800;
        }
      `}</style>
    </PhoneFrame>
  );
}
