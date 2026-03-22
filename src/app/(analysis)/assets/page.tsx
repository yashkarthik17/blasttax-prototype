"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function AssetsPage() {
  const router = useRouter();
  const [animatedSections, setAnimatedSections] = useState<number[]>([]);
  const [openSections, setOpenSections] = useState<string[]>(["bank"]);

  useEffect(() => {
    [0, 1, 2, 3, 4].forEach((i) => {
      setTimeout(() => setAnimatedSections((p) => [...p, i]), 400 + i * 100);
    });
  }, []);

  const sections = [
    { id: "bank", icon: "fa-piggy-bank", iconBg: "var(--brand-blue-light)", iconColor: "var(--brand-blue)", title: "Bank Accounts", sub: "2 accounts", total: "$4,200",
      items: [{ name: "Chase Checking", type: "Checking", amount: "$3,400" }, { name: "Ally Savings", type: "Savings", amount: "$800" }] },
    { id: "real-estate", icon: "fa-house", iconBg: "#F5F0FF", iconColor: "var(--color-violet)", title: "Real Estate", sub: "1 property", total: "$15,000" },
    { id: "vehicles", icon: "fa-car", iconBg: "#F0FDFA", iconColor: "var(--color-teal)", title: "Vehicles", sub: "1 vehicle", total: "$4,200" },
    { id: "investments", icon: "fa-chart-line", iconBg: "var(--color-warning-light)", iconColor: "var(--color-warning)", title: "Investments", sub: "None added", total: "$0", muted: true },
    { id: "other", icon: "fa-box-open", iconBg: "var(--color-surface-alt)", iconColor: "var(--color-muted)", title: "Other Assets", sub: "None added", total: "$0", muted: true },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px" }}>
          <div className="progress-bar-wrapper" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: "55%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 4 of 6</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-blue)" }}>Asset Analysis</span>
          </div>
        </div>

        <div className="screen-content" style={{ paddingTop: 14 }}>
          <div style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Let&apos;s look at your assets</h1>
            <p style={{ fontSize: 12.5, color: "var(--color-muted-light)", marginTop: 3, lineHeight: 1.4 }}>This helps us calculate your Reasonable Collection Potential (RCP)</p>
          </div>

          {/* Plaid Card */}
          <div onClick={() => router.push("/plaid-link")} style={{ display: "flex", alignItems: "center", gap: 14, padding: 16, background: "linear-gradient(135deg, #F8F7FF 0%, #EBF0FF 100%)", border: "1.5px dashed rgba(0, 61, 165, 0.2)", borderRadius: 16, cursor: "pointer", marginBottom: 12, transition: "all 0.3s ease" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "white", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", flexShrink: 0 }}>
              <i className="fas fa-building-columns" style={{ color: "var(--brand-blue)", fontSize: 16 }} />
            </div>
            <div style={{ flex: 1 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)", display: "block" }}>Connect your bank</span>
              <span style={{ fontSize: 11.5, color: "var(--color-muted-light)" }}>Automatic import via secure connection</span>
            </div>
            <i className="fas fa-chevron-right" style={{ color: "var(--color-placeholder)", fontSize: 11 }} />
          </div>

          {sections.map((s, idx) => {
            const isOpen = openSections.includes(s.id);
            return (
              <div key={s.id} style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, overflow: "hidden", marginBottom: 12, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", opacity: animatedSections.includes(idx) ? 1 : 0, transform: animatedSections.includes(idx) ? "translateY(0)" : "translateY(10px)", transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
                <div onClick={() => setOpenSections((p) => p.includes(s.id) ? p.filter((x) => x !== s.id) : [...p, s.id])} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, flexShrink: 0, background: s.iconBg, color: s.iconColor }}>
                      <i className={`fas ${s.icon}`} />
                    </div>
                    <div>
                      <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--color-foreground)", display: "block" }}>{s.title}</span>
                      <span style={{ fontSize: 11.5, color: "var(--color-muted-light)" }}>{s.sub}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 13, fontWeight: s.muted ? 600 : 700, color: s.muted ? "var(--color-placeholder)" : "var(--color-foreground)" }}>{s.total}</span>
                    <i className="fas fa-chevron-down" style={{ fontSize: 12, color: "var(--color-placeholder)", transition: "transform 0.3s ease", transform: isOpen ? "rotate(180deg)" : "none" }} />
                  </div>
                </div>
                {isOpen && s.items && (
                  <div style={{ padding: "0 16px 14px", borderTop: "1px solid var(--color-border-light)" }}>
                    {s.items.map((item, ii) => (
                      <div key={ii} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: ii < s.items!.length - 1 ? "1px solid var(--color-border-light)" : "none" }}>
                        <div>
                          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)" }}>{item.name}</span>
                          <span style={{ fontSize: 11, color: "var(--color-muted-light)", display: "block" }}>{item.type}</span>
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>{item.amount}</span>
                      </div>
                    ))}
                    <div style={{ paddingTop: 8 }}>
                      <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "var(--brand-blue-light)", color: "var(--brand-blue)", border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                        <i className="fas fa-plus" style={{ fontSize: 10 }} /> Add Account
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D2B3D 100%)", borderRadius: 14, padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Total Asset Equity</span>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "white", letterSpacing: "-0.02em", marginTop: 2 }}>$23,400</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Used for RCP</span>
            </div>
          </div>

          <div style={{ flex: 1, minHeight: 12 }} />

          <div style={{ padding: "12px 0 20px" }}>
            <button className="btn btn-primary" onClick={() => router.push("/income-expenses")} style={{ fontSize: 15, padding: "16px 28px" }}>
              Continue <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
