// @ts-nocheck
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function CaseInfoReviewPage() {
  const router = useRouter();
  const [openAccordions, setOpenAccordions] = useState<string[]>(["personal"]);
  const [animatedAccs, setAnimatedAccs] = useState<number[]>([]);

  useEffect(() => {
    [0, 1, 2, 3, 4].forEach((i) => {
      setTimeout(() => setAnimatedAccs((p) => [...p, i]), 300 + i * 120);
    });
  }, []);

  function toggleAccordion(id: string) {
    setOpenAccordions((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
  }

  const sections = [
    { id: "personal", icon: "fa-user", iconBg: "var(--brand-blue-light)", iconColor: "var(--brand-blue)", title: "Personal Information", sub: "Name, SSN, Filing Status", action: "Edit",
      rows: [{ l: "Name", v: "Jane Doe" }, { l: "SSN", v: "***-**-4567" }, { l: "Date of Birth", v: "03/15/1984" }, { l: "Filing Status", v: "Single" }, { l: "Address", v: "1234 Desert Rd, Phoenix, AZ" }] },
    { id: "debt", icon: "fa-file-invoice-dollar", iconBg: "var(--brand-red-light)", iconColor: "var(--brand-red)", title: "Tax Debt Summary", sub: "3 years \u00b7 $47,250 total", action: "Edit",
      rows: [{ l: "2021", v: "$18,500", color: "var(--brand-red)" }, { l: "2022", v: "$15,250", color: "var(--brand-red)" }, { l: "2023", v: "$13,500", color: "var(--brand-red)" }, { l: "Total", v: "$47,250", bold: true, color: "var(--brand-red)" }] },
    { id: "screening", icon: "fa-clipboard-check", iconBg: "var(--color-success-light)", iconColor: "var(--color-success)", title: "Screening Results", sub: "5 passed \u00b7 1 warning", action: "View",
      checks: [{ label: "All returns filed", ok: true }, { label: "No active bankruptcy", ok: true }, { label: "No open audit", ok: true }, { label: "Current estimated payments", ok: true }, { label: "Debt over $10,000", ok: true }, { label: "CSED within 24 months on 1 year", ok: false }] },
    { id: "household", icon: "fa-house-user", iconBg: "var(--color-violet-bg)", iconColor: "var(--color-violet)", title: "Household", sub: "1 member \u00b7 1 vehicle", action: "Edit",
      rows: [{ l: "Members", v: "1 (single)" }, { l: "Vehicles", v: "1 (making payments)" }, { l: "County", v: "Maricopa, AZ" }] },
    { id: "penalties", icon: "fa-shield-halved", iconBg: "var(--brand-green-light)", iconColor: "var(--brand-green)", title: "Penalties", sub: "FTA eligible \u00b7 $5,300 savings", action: "View",
      rows: [{ l: "FTA Eligible", v: "Qualified", badge: true }, { l: "Potential Savings", v: "$5,300", color: "var(--color-success)" }, { l: "Total Penalties", v: "$6,100" }] },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px" }}>
          <div className="progress-bar-wrapper" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: "45%" }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingTop: 16 }}>
          <div style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Review Your Information</h1>
            <p style={{ fontSize: 13, color: "var(--color-muted-light)", marginTop: 4, lineHeight: 1.5 }}>Make sure everything is accurate before we run your analysis</p>
          </div>

          {sections.map((s, idx) => {
            const isOpen = openAccordions.includes(s.id);
            return (
              <div key={s.id} style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, overflow: "hidden", marginBottom: 10, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", opacity: animatedAccs.includes(idx) ? 1 : 0, transform: animatedAccs.includes(idx) ? "translateY(0)" : "translateY(12px)", transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
                <div onClick={() => toggleAccordion(s.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", cursor: "pointer" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0, background: s.iconBg, color: s.iconColor }}>
                    <i className={`fas ${s.icon}`} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>{s.title}</div>
                    <div style={{ fontSize: 11, color: s.id === "penalties" ? "var(--color-success)" : "var(--color-muted-light)", fontWeight: s.id === "penalties" ? 600 : 400, marginTop: 1 }}>{s.sub}</div>
                  </div>
                  <button onClick={(e) => e.stopPropagation()} style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-blue)", cursor: "pointer", background: "none", border: "none" }}>{s.action}</button>
                  <i className="fas fa-chevron-down" style={{ color: "var(--color-disabled)", fontSize: 12, transition: "transform 0.3s ease", transform: isOpen ? "rotate(180deg)" : "none" }} />
                </div>
                <div style={{ maxHeight: isOpen ? 400 : 0, overflow: "hidden", transition: "max-height 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
                  <div style={{ padding: "0 16px 14px", borderTop: "1px solid var(--color-border-light)" }}>
                    {s.rows?.map((r, ri) => (
                      <div key={ri} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", fontSize: 13, borderTop: ri > 0 ? `${r.bold ? "2px" : "1px"} solid var(--color-border${r.bold ? "" : "-light"})` : "none" }}>
                        <span style={{ color: r.bold ? "var(--color-foreground)" : "var(--color-muted-light)", fontWeight: r.bold ? 700 : 500, fontSize: r.bold ? 13 : 13 }}>{r.l}</span>
                        {r.badge ? <span className="badge badge-success" style={{ fontSize: 10 }}>Qualified</span> :
                          <span style={{ color: r.color || "var(--color-foreground)", fontWeight: r.bold ? 800 : 600, fontSize: r.bold ? 15 : 13, textAlign: "right", maxWidth: "55%" }}>{r.v}</span>}
                      </div>
                    ))}
                    {s.checks?.map((c, ci) => (
                      <div key={ci} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 0", fontSize: 13 }}>
                        <div style={{ width: 20, height: 20, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, flexShrink: 0, background: c.ok ? "var(--color-success-light)" : "var(--color-warning-light)", color: c.ok ? "var(--color-success)" : "var(--color-warning)" }}>
                          <i className={`fas ${c.ok ? "fa-check" : "fa-exclamation"}`} />
                        </div>
                        <span style={{ color: "var(--color-foreground)", fontWeight: 500 }}>{c.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <div style={{ flex: 1, minHeight: 16 }} />

          <div style={{ padding: "8px 0 20px" }}>
            <button className="btn btn-primary" onClick={() => router.push("/assets")} style={{ fontSize: 15, padding: "16px 28px", marginBottom: 10 }}>
              <i className="fas fa-bolt" style={{ fontSize: 14 }} /> Continue to Assets
            </button>
            <button className="btn btn-outline" style={{ fontSize: 14, padding: "14px 24px" }}>
              <i className="fas fa-pen" style={{ fontSize: 12 }} /> Edit Information
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
