"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function ResolutionDetailOICPage() {
  const router = useRouter();
  const rcpRows = [
    { l: "Asset Equity", v: "$23,400" },
    { l: "Future Income (Lump Sum)", v: "$869 x 12 = $10,428" },
    { l: "Minimum Offer (RCP)", v: "$8,500", bold: true },
  ];
  const checks = [
    "No TC 520 (No bankruptcy)", "No TC 420/424 (No open audit)",
    "No TC 480 (No pending OIC)", "TC 150 all years (Returns filed)",
    "No TC 481 in past 5 years",
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Offer in Compromise" backPath="/results" />
        <div className="screen-content" style={{ gap: 16, paddingBottom: 24 }}>
          <div>
            <h1 className="text-h1 text-foreground" style={{ marginBottom: 4 }}>Settle Your Debt for Less</h1>
            <p className="text-body-sm text-muted-light">Negotiate a reduced payoff amount with the IRS</p>
          </div>

          {/* Profile */}
          <div className="card" style={{ background: "linear-gradient(135deg, #FAFAFF 0%, #EBF0FF 100%)", borderColor: "rgba(0,61,165,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg, #003DA5, #2563EB)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-user" style={{ color: "white", fontSize: 13 }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700 }}>YOUR PROFILE</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
              {[{ l: "Total Debt", v: "$47,250", c: "var(--brand-red)" }, { l: "MDI", v: "$869/mo" }, { l: "CSED Range", v: "2028-2031" }].map((s, i) => (
                <div key={i} style={{ textAlign: "center", flex: 1 }}>
                  <div style={{ fontSize: 11, color: "var(--color-muted-light)", fontWeight: 600, marginBottom: 2 }}>{s.l}</div>
                  <div style={{ fontSize: s.l === "CSED Range" ? 16 : 18, fontWeight: 800, color: s.c || "var(--color-foreground)" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* DATC Eligible */}
          <div style={{ background: "white", border: "1.5px solid rgba(0, 166, 81, 0.25)", borderRadius: "var(--radius-xl)", padding: 16, position: "relative", overflow: "hidden", boxShadow: "0 4px 20px rgba(0, 166, 81, 0.08)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(135deg, #00A651, #10B981)" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>Doubt as to Collectibility</span>
              <span className="badge badge-success" style={{ fontSize: 10 }}><i className="fas fa-check" style={{ fontSize: 9 }} /> Eligible</span>
            </div>
            <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 3, background: "rgba(0,166,81,0.08)", padding: "2px 7px", borderRadius: 6, fontSize: 10, fontWeight: 700, color: "#00A651" }}><i className="fas fa-star" style={{ fontSize: 8 }} /> Recommended</span>
              <span style={{ fontSize: 10, color: "var(--color-muted)", padding: "2px 7px", background: "var(--color-surface-alt)", borderRadius: 6, fontWeight: 600 }}>Most Common OIC Type</span>
            </div>

            <div style={{ background: "var(--color-surface-alt)", borderRadius: 12, padding: 12, marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>RCP Calculation</div>
              {rcpRows.map((r, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0", fontSize: 12, borderTop: i > 0 ? `${r.bold ? "2px" : "1px"} solid var(--color-border${r.bold ? "" : "-light"})` : "none" }}>
                  <span style={{ color: r.bold ? "var(--color-foreground)" : "var(--color-muted)", fontWeight: r.bold ? 700 : 400 }}>{r.l}</span>
                  <span style={{ fontWeight: r.bold ? 800 : 600, color: r.bold ? "var(--brand-blue)" : "var(--color-foreground)" }}>{r.v}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 2 }}>Your offer vs owed</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "var(--color-foreground)" }}>$8,500 <span style={{ fontSize: 12, color: "var(--color-muted)", fontWeight: 500 }}>vs $47,250</span></div>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "linear-gradient(135deg, #E6F9EE, #d1fae5)", color: "#065F46", fontSize: 13, fontWeight: 800, padding: "6px 12px", borderRadius: 10, border: "1px solid rgba(0, 166, 81, 0.2)" }}>
                <i className="fas fa-arrow-down" style={{ fontSize: 11 }} /> Save 82%
              </div>
            </div>

            <div style={{ background: "var(--color-surface-alt)", borderRadius: 12, padding: 12, marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Payment Options</div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ flex: 1, background: "white", border: "1px solid var(--color-border)", borderRadius: 10, padding: 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--brand-blue)", marginBottom: 4 }}>Lump Sum</div>
                  <div style={{ fontSize: 12, color: "var(--color-foreground)", fontWeight: 600 }}>20% down ($1,700)</div>
                  <div style={{ fontSize: 11, color: "var(--color-muted)" }}>Remainder in 5 months</div>
                </div>
                <div style={{ flex: 1, background: "white", border: "1px solid var(--color-border)", borderRadius: 10, padding: 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-violet)", marginBottom: 4 }}>Periodic</div>
                  <div style={{ fontSize: 12, color: "var(--color-foreground)", fontWeight: 600 }}>$354/mo</div>
                  <div style={{ fontSize: 11, color: "var(--color-muted)" }}>For 24 months</div>
                </div>
              </div>
            </div>
          </div>

          {/* DATL */}
          <div style={{ background: "white", border: "1.5px solid rgba(37, 99, 235, 0.15)", borderRadius: "var(--radius-xl)", padding: 16, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(135deg, #2563EB, #60a5fa)" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>Doubt as to Liability</span>
              <span className="badge badge-info" style={{ fontSize: 10 }}>Review Needed</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5 }}>Dispute the amount the IRS says you owe. No financial disclosure required.</div>
          </div>

          {/* ETA */}
          <div style={{ background: "white", border: "1.5px solid rgba(124, 58, 237, 0.15)", borderRadius: "var(--radius-xl)", padding: 16, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(135deg, #7C3AED, #a78bfa)" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>Effective Tax Administration</span>
              <span style={{ fontSize: 10, background: "#F5F0FF", color: "#7C3AED", padding: "2px 8px", borderRadius: 6, fontWeight: 600 }}>Special</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5 }}>You can pay but it creates exceptional hardship.</div>
          </div>

          {/* Eligibility Checks */}
          <div className="card" style={{ background: "var(--color-surface-alt)", borderColor: "var(--color-border-light)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>Eligibility Checks</div>
            {checks.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 0", fontSize: 12 }}>
                <i className="fas fa-circle-check" style={{ color: "#00A651", fontSize: 14 }} />
                <span style={{ color: "var(--color-foreground)", fontWeight: 500 }}>{c}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 4 }}>
            <button className="btn btn-primary" style={{ marginBottom: 12 }}>Begin OIC Application <i className="fas fa-arrow-right" style={{ fontSize: 12 }} /></button>
            <div style={{ textAlign: "center" }}>
              <a onClick={() => router.push("/resolution-compare")} style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-blue)", cursor: "pointer" }}>
                <i className="fas fa-arrows-left-right" style={{ fontSize: 11, marginRight: 4 }} /> Compare with IA
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="Analysis" />
    </PhoneFrame>
  );
}
