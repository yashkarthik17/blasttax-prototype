"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";
import { BottomNav } from "@/components/BottomNav";

export default function ResolutionComparePage() {
  const router = useRouter();

  const tableRows = [
    { factor: "Monthly", oic: "$0-$354", sia: "$657", ppia: "$869", cnc: "$0", bestCols: [0, 3] },
    { factor: "Total Cost", oic: "$8,500", sia: "$47,250", ppia: "~$30,000", cnc: "$0", bestCols: [0, 3] },
    { factor: "Duration", oic: "5-24 mo", sia: "72 mo", ppia: "CSED", cnc: "CSED" },
    { factor: "Savings", oic: "82%", sia: "0%", ppia: "~36%", cnc: "100%*", bestCols: [0, 3] },
    { factor: "Lien Filed?", oic: "Released after", sia: "Under $25K: No", ppia: "Yes", cnc: "Maybe" },
    { factor: "Disclosure", oic: "433-A (Full)", sia: "None", ppia: "433-A (Full)", cnc: "433-F", bestCols: [1] },
    { factor: "Approval", oic: "6-12 mo", sia: "Immediate", ppia: "4-8 wk", cnc: "2-8 wk", bestCols: [1] },
    { factor: "Risk Level", oic: "Medium", sia: "Low", ppia: "Low", cnc: "Medium", bestCols: [1, 2] },
    { factor: "CSED Tolled?", oic: "Yes", sia: "No", ppia: "No", cnc: "No", bestCols: [1, 2, 3], dangerCol: 0 },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Compare Options" backPath="/results" />
        <div className="screen-content" style={{ gap: 16, paddingBottom: 24 }}>
          <div>
            <h1 className="text-h1 text-foreground" style={{ marginBottom: 4 }}>Compare Your Resolution Options</h1>
            <p className="text-body-sm text-muted-light">Side-by-side analysis of your eligible paths</p>
          </div>

          <div style={{ overflowX: "auto", margin: "0 -4px", padding: "0 4px" }}>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, fontSize: 11, borderRadius: 14, overflow: "hidden", border: "1px solid var(--color-border)", background: "white" }}>
              <thead>
                <tr>
                  {["Factor", "OIC", "S-IA", "PPIA", "CNC"].map((h, i) => (
                    <th key={i} style={{ background: i === 1 ? "linear-gradient(135deg, #EBF0FF, #dbeafe)" : "var(--color-surface-alt)", padding: "10px 6px", fontWeight: 700, color: i === 1 ? "var(--brand-blue)" : "var(--color-foreground)", textAlign: i === 0 ? "left" : "center", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.03em", borderBottom: "1.5px solid var(--color-border)", paddingLeft: i === 0 ? 12 : 6, width: i === 0 ? 72 : undefined }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => {
                  const vals = [row.oic, row.sia, row.ppia, row.cnc];
                  return (
                    <tr key={ri}>
                      <td style={{ textAlign: "left", paddingLeft: 12, fontWeight: 600, color: "var(--color-foreground)", fontSize: 10, padding: "8px 6px", borderBottom: ri < tableRows.length - 1 ? "1px solid var(--color-border-light)" : "none" }}>{row.factor}</td>
                      {vals.map((v, ci) => {
                        const isBest = row.bestCols?.includes(ci);
                        const isDanger = row.dangerCol === ci;
                        const isHighlight = ci === 0;
                        return (
                          <td key={ci} style={{ textAlign: "center", padding: "8px 6px", color: isDanger ? "var(--brand-red)" : isBest ? "#00A651" : isHighlight ? "var(--brand-blue)" : "var(--color-muted)", fontWeight: isBest || isDanger ? 700 : isHighlight ? 600 : 500, background: isHighlight ? "rgba(235, 240, 255, 0.3)" : undefined, borderBottom: ri < tableRows.length - 1 ? "1px solid var(--color-border-light)" : "none", fontSize: 11 }}>
                            {v}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Recommendation */}
          <div className="alert alert-info" style={{ borderRadius: 14 }}>
            <i className="fas fa-lightbulb" style={{ color: "#2563EB" }} />
            <div>
              <div style={{ fontWeight: 700, marginBottom: 2, fontSize: 13, color: "#1e3a5f" }}>Our Recommendation</div>
              <div style={{ fontSize: 12, lineHeight: 1.5, color: "#374151" }}>
                <strong>OIC</strong> offers the highest savings (82%), or <strong>Streamlined IA</strong> for fastest approval with zero disclosure.
              </div>
            </div>
          </div>

          {/* Strategic Plays */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-placeholder)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>
              <i className="fas fa-chess" style={{ fontSize: 11, marginRight: 4 }} /> Strategic Plays
            </div>
            {[{ icon: "fa-arrow-trend-down", iconBg: "linear-gradient(135deg, #EBF0FF, #dbeafe)", iconColor: "#003DA5", title: "Play A: Balance Reducer", badge: "Compound Strategy", desc: "Do FTA first to reduce balance by $5,300, then submit OIC with lower RCP = lower offer amount.", link: "/resolution-detail-penalty" },
              { icon: "fa-hourglass-half", iconBg: "linear-gradient(135deg, #F0FDFA, #ccfbf1)", iconColor: "#0D9488", title: "Play E: Expiration Play", badge: "Long-Term", badgeBg: "#F0FDFA", badgeColor: "#0D9488", desc: "Request CNC + apply FTA, then wait for CSED to expire (2028-2031). Pay $0 if income stays low.", link: "/resolution-detail-cnc" },
            ].map((play, i) => (
              <div key={i} style={{ background: "white", border: "1.5px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: 16, marginBottom: 10, cursor: "pointer", transition: "all 0.3s ease" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: play.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className={`fas ${play.icon}`} style={{ color: play.iconColor, fontSize: 14 }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>{play.title}</div>
                    <span className="badge badge-primary" style={{ fontSize: 9, padding: "1px 6px", background: play.badgeBg, color: play.badgeColor }}>{play.badge}</span>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 6 }}>{play.desc}</div>
                <a onClick={() => router.push(play.link)} style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-blue)", cursor: "pointer" }}>Learn More <i className="fas fa-arrow-right" style={{ fontSize: 10 }} /></a>
              </div>
            ))}
          </div>

          <button className="btn btn-primary" onClick={() => router.push("/strategic-plays")}>
            Choose Your Resolution <i className="fas fa-arrow-right" style={{ fontSize: 12 }} />
          </button>
        </div>
      </div>
      <BottomNav active="Analysis" />
    </PhoneFrame>
  );
}
