"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function ResolutionDetailIAPage() {
  const router = useRouter();

  const iaTypes = [
    { title: "Short-Term Plan", range: "(<=180 days)", eligible: false, badge: "Not Eligible", badgeType: "warning", desc: "Cannot pay full balance within 180 days based on MDI.", note: "Requires full payment within 180 days; balance must be under $100,000" },
    { title: "Guaranteed IA", range: "(<=10K)", eligible: false, badge: "Not Eligible", badgeType: "danger", desc: "Balance exceeds $10,000 assessed tax threshold.", note: "IRC \u00a7 6159(c) -- automatic approval for <=10K" },
    { title: "Streamlined IA", range: "(<=50K)", eligible: true, badge: "Eligible", badgeType: "success", recommended: true, desc: "Your $47,250 balance qualifies for streamlined processing",
      details: [
        { l: "Monthly Payment", v: "$657/mo" }, { l: "Duration", v: "72 months" },
        { l: "Financial Statement", v: "Not Required", green: true }, { l: "Lien Status", v: "No lien under $25K" },
        { l: "$25K-$50K requires", v: "DDIA (auto-pay)" }, { l: "Setup Fee", v: "$22 (online+DDIA) to $178" },
      ] },
    { title: "Expanded IA", range: "($50K-$100K)", eligible: false, badge: "N/A", badgeType: "info", desc: "Currently below threshold. May qualify if balance increases." },
    { title: "Non-Streamlined", range: "($100K-$250K)", eligible: false, badge: "N/A", badgeType: "info", desc: "Balance below threshold. Not applicable for your situation." },
    { title: "Partial Payment IA", eligible: true, badge: "Eligible", badgeType: "success", altLabel: "Alternative Option",
      details: [
        { l: "Monthly Payment", v: "$869/mo" }, { l: "Duration", v: "Until CSED (2028-2031)" },
        { l: "Review Cycle", v: "Every 2 years", warning: true },
      ],
      desc: "Pay $869/mo, remaining balance expires at CSED. Lower monthly payment but longer obligation with financial review every 2 years." },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Installment Agreement" backPath="/results" />
        <div className="screen-content" style={{ gap: 16, paddingBottom: 24 }}>
          <div>
            <h1 className="text-h1 text-foreground" style={{ marginBottom: 4 }}>Payment Plan Options</h1>
            <p className="text-body-sm text-muted-light">Pay your tax debt over time with monthly payments</p>
          </div>

          {/* Profile Card */}
          <div className="card" style={{ background: "linear-gradient(135deg, #FAFAFF 0%, #EBF0FF 100%)", borderColor: "rgba(0,61,165,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg, #003DA5, #2563EB)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-user" style={{ color: "white", fontSize: 13 }} />
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>YOUR PROFILE</span>
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

          {iaTypes.map((ia, i) => {
            const borderColor = ia.eligible ? "rgba(0, 166, 81, 0.25)" : (ia.badgeType === "info" ? "rgba(37, 99, 235, 0.15)" : "var(--color-border)");
            const topBar = ia.eligible ? "linear-gradient(135deg, #00A651, #10B981)" : (ia.badgeType === "info" ? "linear-gradient(135deg, #2563EB, #60a5fa)" : "var(--color-disabled)");
            return (
              <div key={i} style={{ background: "white", border: `1.5px solid ${borderColor}`, borderRadius: "var(--radius-xl)", padding: 16, position: "relative", overflow: "hidden", opacity: !ia.eligible && ia.badgeType !== "info" ? 0.7 : 1, boxShadow: ia.recommended ? "0 4px 20px rgba(0, 166, 81, 0.08)" : undefined }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: topBar, borderRadius: "var(--radius-xl) var(--radius-xl) 0 0" }} />
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: ia.details ? 10 : 8 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>{ia.title}</span>
                    {ia.range && <span style={{ fontSize: 11, color: "var(--color-muted)" }}>{ia.range}</span>}
                  </div>
                  <span className={`badge badge-${ia.badgeType}`} style={{ fontSize: 10 }}>{ia.badge}</span>
                </div>
                {ia.recommended && <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(0,166,81,0.08)", padding: "3px 8px", borderRadius: 6, fontSize: 11, fontWeight: 600, color: "#00A651", marginBottom: 10 }}><i className="fas fa-star" style={{ fontSize: 9 }} /> Recommended</div>}
                {ia.altLabel && <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(37,99,235,0.08)", padding: "3px 8px", borderRadius: 6, fontSize: 11, fontWeight: 600, color: "#2563EB", marginBottom: 10 }}><i className="fas fa-shuffle" style={{ fontSize: 9 }} /> {ia.altLabel}</div>}
                {ia.eligible && ia.desc && <div style={{ fontSize: 13, color: "#065F46", fontWeight: 600, marginBottom: 10, lineHeight: 1.4 }}>{ia.desc}</div>}
                {ia.details && (
                  <div style={{ background: "var(--color-surface-alt)", borderRadius: 12, padding: 12, marginBottom: 10 }}>
                    {ia.details.map((d, di) => (
                      <div key={di} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", fontSize: 12, borderTop: di > 0 ? "1px solid var(--color-border-light)" : "none" }}>
                        <span style={{ color: "var(--color-muted)" }}>{d.l}</span>
                        <span style={{ fontWeight: d.green ? 600 : 600, color: d.green ? "#00A651" : d.warning ? "var(--color-warning)" : "var(--color-foreground)" }}>{d.v}</span>
                      </div>
                    ))}
                  </div>
                )}
                {!ia.eligible && <div style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5, marginBottom: ia.note ? 8 : 0 }}>{ia.desc}</div>}
                {ia.note && <div style={{ fontSize: 11, color: "var(--color-muted-light)" }}><i className="fas fa-info-circle" style={{ fontSize: 10, marginRight: 4 }} />{ia.note}</div>}
                {ia.recommended && <button className="btn btn-primary btn-sm" style={{ fontSize: 13, padding: "10px 20px", marginTop: 4 }}>Apply Now <i className="fas fa-arrow-right" style={{ fontSize: 11 }} /></button>}
              </div>
            );
          })}

          <div style={{ marginTop: 4 }}>
            <button className="btn btn-primary" style={{ marginBottom: 12 }}>Choose Streamlined IA <i className="fas fa-arrow-right" style={{ fontSize: 12 }} /></button>
            <div style={{ textAlign: "center" }}>
              <a onClick={() => router.push("/resolution-compare")} style={{ fontSize: 13, fontWeight: 600, color: "var(--brand-blue)", cursor: "pointer" }}>
                <i className="fas fa-arrows-left-right" style={{ fontSize: 11, marginRight: 4 }} /> Compare with OIC
              </a>
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="Analysis" />
    </PhoneFrame>
  );
}
