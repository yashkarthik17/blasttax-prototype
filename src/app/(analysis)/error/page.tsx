"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function AnalysisErrorPage() {
  const router = useRouter();
  const [showDetail, setShowDetail] = useState(false);
  const [animatedActions, setAnimatedActions] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => setShowDetail(true), 1200);
    [0, 1, 2].forEach((i) => {
      setTimeout(() => setAnimatedActions((p) => [...p, i]), 1000 + i * 120);
    });
  }, []);

  const actions = [
    { icon: "fa-building-columns", iconBg: "var(--brand-blue-light)", iconColor: "var(--brand-blue)", title: "Check your financial information", desc: "Review and update bank accounts & assets", path: "/assets" },
    { icon: "fa-rotate", iconBg: "var(--color-success-light)", iconColor: "var(--color-success)", title: "Try again", desc: "Retry the analysis with current data", path: "/processing" },
    { icon: "fa-headset", iconBg: "var(--color-violet-bg)", iconColor: "var(--color-violet)", title: "Contact support", desc: "Get help from our team", path: null },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "40px 20px 20px", alignItems: "center" }}>
          <div style={{ width: 88, height: 88, borderRadius: "50%", background: "var(--color-danger-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", position: "relative" }}>
            <i className="fas fa-triangle-exclamation" style={{ fontSize: 36, color: "var(--color-danger)" }} />
          </div>

          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25, marginBottom: 6 }}>Something went wrong</h1>
            <p style={{ fontSize: 13, color: "var(--color-muted-light)", lineHeight: 1.5 }}>We encountered an issue while analyzing your case</p>
          </div>

          <div style={{ width: "100%", background: "white", border: "1px solid var(--color-border)", borderRadius: 14, overflow: "hidden", marginBottom: 16 }}>
            <div onClick={() => setShowDetail(!showDetail)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", cursor: "pointer" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <i className="fas fa-circle-exclamation" style={{ fontSize: 14, color: "var(--color-danger)" }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)" }}>Error Details</span>
              </div>
              <i className="fas fa-chevron-down" style={{ fontSize: 11, color: "var(--color-disabled)", transition: "transform 0.3s ease", transform: showDetail ? "rotate(180deg)" : "none" }} />
            </div>
            {showDetail && (
              <div style={{ padding: "12px 16px 14px", borderTop: "1px solid var(--color-border-light)" }}>
                <div style={{ background: "var(--color-danger-light)", borderRadius: 10, padding: "12px 14px", marginBottom: 10 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "#991B1B", lineHeight: 1.5 }}>Unable to calculate RCP &mdash; missing bank account data</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)" }}>Error Code:</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--color-muted)", background: "var(--color-surface-alt)", padding: "2px 8px", borderRadius: 4 }}>ERR_ANALYSIS_INCOMPLETE</span>
                </div>
              </div>
            )}
          </div>

          <div style={{ width: "100%", marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 10 }}>What you can do</div>
          </div>

          {actions.map((a, i) => (
            <div key={i} onClick={() => a.path && router.push(a.path)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: "white", border: "1px solid var(--color-border)", borderRadius: 14, marginBottom: 8, cursor: "pointer", width: "100%", opacity: animatedActions.includes(i) ? 1 : 0, transform: animatedActions.includes(i) ? "translateY(0)" : "translateY(12px)", transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, background: a.iconBg, color: a.iconColor }}>
                <i className={`fas ${a.icon}`} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>{a.title}</div>
                <div style={{ fontSize: 11, color: "var(--color-muted-light)", marginTop: 1 }}>{a.desc}</div>
              </div>
              <i className="fas fa-chevron-right" style={{ fontSize: 11, color: "var(--color-disabled)" }} />
            </div>
          ))}

          <div style={{ flex: 1, minHeight: 20 }} />

          <div style={{ width: "100%" }}>
            <button className="btn btn-primary" onClick={() => router.push("/processing")} style={{ fontSize: 15, padding: "16px 28px", marginBottom: 10 }}>
              <i className="fas fa-rotate" style={{ fontSize: 14 }} /> Retry Analysis
            </button>
            <div style={{ textAlign: "center", padding: "8px 0" }}>
              <button onClick={() => router.push("/dashboard")} style={{ background: "none", border: "none", fontSize: 13, fontWeight: 600, color: "var(--color-muted)", cursor: "pointer" }}>Go Back to Dashboard</button>
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
