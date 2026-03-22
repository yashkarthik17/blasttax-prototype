"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function PenaltyScreeningPage() {
  const router = useRouter();
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    [0, 1, 2].forEach((i) => {
      setTimeout(() => setAnimatedCards((p) => [...p, i]), 400 + i * 200);
    });
    setTimeout(() => setShowSuccess(true), 1200);
  }, []);

  const penaltyYears = [
    { year: "2022", total: "$7,190", rows: [
      { code: "TC 166", label: "Failure to File", amount: "$3,200" },
      { code: "TC 170", label: "Failure to Pay", amount: "$2,100" },
      { code: "TC 276", label: "Interest", amount: "$1,890", muted: true },
    ]},
    { year: "2023", total: "$1,450", rows: [
      { code: "TC 170", label: "Failure to Pay", amount: "$800" },
      { code: "TC 276", label: "Interest", amount: "$650", muted: true },
    ]},
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px" }}>
          <div className="progress-bar-wrapper" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: "25%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 2 of 6</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-blue)" }}>Penalty Analysis</span>
          </div>
        </div>

        <div className="screen-content" style={{ paddingTop: 16 }}>
          <div style={{ marginBottom: 16 }}>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Let&apos;s check your penalty history</h1>
            <p style={{ fontSize: 13, color: "var(--color-muted-light)", marginTop: 4, lineHeight: 1.5 }}>We&apos;ll analyze your penalties to find abatement opportunities</p>
          </div>

          {penaltyYears.map((py, idx) => (
            <div key={py.year} style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: 16, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 12, opacity: animatedCards.includes(idx) ? 1 : 0, transform: animatedCards.includes(idx) ? "translateY(0)" : "translateY(12px)", transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", background: "var(--brand-blue-light)", color: "var(--brand-blue)", borderRadius: 9999, fontSize: 12, fontWeight: 700 }}>
                  <i className="fas fa-calendar" style={{ fontSize: 10 }} /> {py.year}
                </span>
                <span style={{ fontSize: 13, fontWeight: 800, color: "var(--brand-red)" }}>{py.total}</span>
              </div>
              {py.rows.map((r, ri) => (
                <div key={ri} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderTop: ri > 0 ? "1px solid var(--color-border-light)" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ display: "inline-flex", padding: "2px 8px", background: "var(--color-surface-alt)", borderRadius: 6, fontSize: 10, fontWeight: 700, color: "var(--color-muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.02em" }}>{r.code}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)" }}>{r.label}</span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: r.muted ? "var(--color-muted)" : "var(--color-foreground)" }}>{r.amount}</span>
                </div>
              ))}
            </div>
          ))}

          {/* FTA Eligibility */}
          <div style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: 16, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 12, opacity: animatedCards.includes(2) ? 1 : 0, transform: animatedCards.includes(2) ? "translateY(0)" : "translateY(12px)", transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "var(--color-info-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-shield-halved" style={{ fontSize: 14, color: "var(--color-info)" }} />
              </div>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>FTA Eligibility Check</span>
            </div>
            {[
              { q: "3-Year Clean History?", sub: "No penalties in 2019-2021", a: "Yes" },
              { q: "All Returns Filed?", a: "Yes" },
              { q: "Current on Payments?", a: "Yes" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderTop: i > 0 ? "1px solid var(--color-border-light)" : "none" }}>
                <div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)" }}>{item.q}</span>
                  {item.sub && <div style={{ fontSize: 11, color: "var(--color-success)", fontWeight: 600, marginTop: 2 }}><i className="fas fa-check" style={{ fontSize: 10 }} /> {item.sub}</div>}
                </div>
                <span className="badge badge-success">{item.a}</span>
              </div>
            ))}
          </div>

          {/* Success Card */}
          <div style={{ background: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)", border: "1.5px solid var(--color-success-border)", borderRadius: 16, padding: 20, textAlign: "center", opacity: showSuccess ? 1 : 0, transform: showSuccess ? "translateY(0) scale(1)" : "translateY(12px) scale(0.96)", transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg, #00A651, #10B981)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", boxShadow: "0 8px 24px rgba(0,166,81,0.25)" }}>
              <i className="fas fa-party-horn" style={{ fontSize: 20, color: "white" }} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 800, color: "#065F46", marginBottom: 4 }}>You qualify for First-Time Abatement!</div>
            <div style={{ fontSize: 12, color: "#059669", marginBottom: 14 }}>Based on your clean compliance history</div>
            <div style={{ background: "white", borderRadius: 12, padding: 14, border: "1px solid var(--color-success-border)" }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Potential Savings</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, background: "linear-gradient(135deg, #00A651, #10B981)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.02em" }}>$5,300</div>
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", marginBottom: 6 }}>Transaction Codes Referenced</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {["TC 160", "TC 170", "TC 171", "TC 270", "TC 276"].map((tc) => (
                <span key={tc} style={{ display: "inline-flex", padding: "2px 8px", background: "var(--color-surface-alt)", borderRadius: 6, fontSize: 10, fontWeight: 700, color: "var(--color-muted)", fontFamily: "var(--font-mono)" }}>{tc}</span>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, minHeight: 16 }} />

          <div style={{ padding: "12px 0 20px" }}>
            <button className="btn btn-primary" onClick={() => router.push("/household-info")} style={{ fontSize: 15, padding: "16px 28px" }}>
              Continue <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
