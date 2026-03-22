"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function ResolutionDetailPenaltyPage() {
  const router = useRouter();

  const ftaSteps = [
    { n: "1", label: "Call IRS at 800-829-1040", sub: "Or have your representative call on your behalf" },
    { n: "2", label: "Request First-Time Abatement", sub: "Reference IRC \u00a7 6651 administrative waiver" },
    { n: "3", label: "TC 271 posts -- penalties removed", sub: "Usually processed same day by phone" },
    { n: "4", label: "Balance drops to $41,950", sub: "From $47,250 \u2192 $41,950 (saved $5,300)", green: true },
  ];

  const rcReasons = ["Serious illness or hospitalization", "Natural disaster or casualty", "Death of immediate family member", "Inability to obtain records", "IRS error or incorrect advice"];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Penalty Abatement" backPath="/results" />
        <div className="screen-content" style={{ gap: 16, paddingBottom: 24 }}>
          <div>
            <h1 className="text-h1" style={{ marginBottom: 4, color: "#00A651" }}>Remove $5,300 in Penalties</h1>
            <p className="text-body-sm text-muted-light">Eliminate IRS penalties from your balance</p>
          </div>

          {/* Penalty Breakdown */}
          <div className="card">
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-placeholder)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Your Penalty Breakdown</div>
            {[{ label: "Failure to File", code: "TC 170", amount: "$3,200", pct: 60, color: "linear-gradient(135deg, #E63946, #f87171)", amtColor: "var(--brand-red)" },
              { label: "Failure to Pay", code: "TC 276", amount: "$2,100", pct: 40, color: "linear-gradient(135deg, #F5A623, #fbbf24)", amtColor: "var(--color-warning)" }].map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0" }}>
                <div style={{ minWidth: 100 }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "var(--color-foreground)" }}>{p.label}</div>
                  <div style={{ fontSize: 10, color: "var(--color-muted)" }}>{p.code}</div>
                </div>
                <div style={{ flex: 1, height: 8, background: "var(--color-border-light)", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ height: "100%", borderRadius: 4, width: `${p.pct}%`, background: p.color }} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: p.amtColor, minWidth: 50, textAlign: "right" }}>{p.amount}</span>
              </div>
            ))}
            <div style={{ borderTop: "2px solid var(--color-border)", marginTop: 8, paddingTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>Total Penalties</span>
              <span style={{ fontSize: 20, fontWeight: 800, color: "var(--brand-red)" }}>$5,300</span>
            </div>
          </div>

          {/* FTA Eligibility */}
          <div className="card" style={{ borderColor: "rgba(0, 166, 81, 0.25)", background: "linear-gradient(135deg, #FAFAFF, #E6F9EE)", boxShadow: "0 4px 20px rgba(0, 166, 81, 0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg, #00A651, #10B981)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-shield-check" style={{ color: "white", fontSize: 16 }} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>FTA Eligibility</div>
                <span className="badge badge-success" style={{ fontSize: 10, marginTop: 2 }}>You Qualify!</span>
              </div>
            </div>
            {["No penalties in past 3 years (2022-2024 clean)", "All returns filed", "Current on payments/IA"].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, marginBottom: 6 }}>
                <i className="fas fa-circle-check" style={{ color: "#00A651", fontSize: 13 }} />
                <span style={{ color: "var(--color-foreground)", fontWeight: 500 }}>{c}</span>
              </div>
            ))}
            <div style={{ background: "white", borderRadius: 12, padding: 14, textAlign: "center", border: "1px solid rgba(0, 166, 81, 0.15)", marginTop: 12 }}>
              <div style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 4 }}>Estimated Savings</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#00A651", letterSpacing: "-0.02em" }}>$5,300</div>
              <div style={{ fontSize: 11, color: "#065F46", fontWeight: 600 }}>100% of penalties removed</div>
            </div>
          </div>

          {/* How FTA Works */}
          <div className="card">
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-placeholder)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>How FTA Works</div>
            {ftaSteps.map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "12px 0", position: "relative" }}>
                {i < ftaSteps.length - 1 && <div style={{ position: "absolute", left: 15, top: 42, bottom: 0, width: 2, background: "var(--color-border)" }} />}
                <div style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0, background: s.green ? "linear-gradient(135deg, #00A651, #10B981)" : "linear-gradient(135deg, #003DA5, #2563EB)", color: "white", zIndex: 1 }}>{s.n}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: "var(--color-muted)", marginTop: 2 }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Tip */}
          <div className="alert" style={{ background: "linear-gradient(135deg, #EBF0FF, #F5F0FF)", border: "1.5px solid rgba(0, 61, 165, 0.15)", borderRadius: 14 }}>
            <i className="fas fa-chess-knight" style={{ color: "var(--brand-blue)", fontSize: 18 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 4 }}>Pro Tip: Apply FTA BEFORE Filing an OIC</div>
              <div style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5 }}>Lower balance = lower RCP = lower offer amount.</div>
            </div>
          </div>

          {/* Reasonable Cause */}
          <div className="card" style={{ background: "var(--color-surface-alt)", borderColor: "var(--color-border-light)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <i className="fas fa-shield-halved" style={{ color: "var(--color-muted)", fontSize: 14 }} />
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>Reasonable Cause (Backup)</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 8 }}>If FTA is denied, try Reasonable Cause abatement. Qualifying reasons include:</div>
            {rcReasons.map((r, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "var(--color-muted-light)" }}>
                <i className="fas fa-circle" style={{ fontSize: 4 }} /> {r}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 4 }}>
            <button className="btn btn-primary" style={{ marginBottom: 12 }}>Request FTA Now <i className="fas fa-phone" style={{ fontSize: 12 }} /></button>
            <div style={{ textAlign: "center" }}>
              <a onClick={() => router.push("/resolution-detail-oic")} style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-blue)", cursor: "pointer" }}>
                <i className="fas fa-chess" style={{ fontSize: 11, marginRight: 4 }} /> Use with OIC Strategy
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="Analysis" />
    </PhoneFrame>
  );
}
