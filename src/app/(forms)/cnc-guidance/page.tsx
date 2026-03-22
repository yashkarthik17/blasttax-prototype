"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function CncGuidancePage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Currently Not Collectible" backPath="/other-relief" />

        <div className="screen-content" style={{ paddingBottom: 40, gap: 18 }}>
          <div className="stagger-item d1">
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", lineHeight: 1.3 }}>Understanding CNC Status</div>
          </div>

          <div className="stagger-item d2" style={{ background: "linear-gradient(135deg,#EBF0FF,#F5F0FF)", borderRadius: 16, padding: 18, border: "1px solid rgba(0,61,165,0.1)" }}>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 12, background: "rgba(0,61,165,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><i className="fas fa-info-circle" style={{ fontSize: 16, color: "#003DA5" }} /></div>
              <div style={{ fontSize: "0.82rem", color: "#1A1A2E", lineHeight: 1.6, fontWeight: 500 }}>When your monthly disposable income (MDI) is <strong style={{ color: "#003DA5" }}>$0 or below</strong>, the IRS may classify your account as Currently Not Collectible &mdash; pausing all active collection efforts.</div>
            </div>
          </div>

          {/* Your Eligibility */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Your Eligibility</div>
            <div style={{ background: "white", borderRadius: 16, padding: 20, border: "1.5px solid #00A651", boxShadow: "0 2px 12px rgba(0,166,81,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#00A651,#10B981)", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fas fa-check" style={{ fontSize: 14, color: "white" }} /></div>
                <div><div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#00A651" }}>You Qualify</div><div style={{ fontSize: "0.7rem", color: "#8585A0" }}>Based on your financial analysis</div></div>
              </div>
              {[
                { label: "Monthly Disposable Income", value: "$0", valueColor: "#00A651" },
                { label: "Monthly Income", value: "$4,700", valueColor: "#1A1A2E" },
                { label: "IRS Allowable Expenses", value: "$4,700", valueColor: "#1A1A2E" },
              ].map((row, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderTop: "1px solid #F0F0F5" }}>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5C5C7A" }}>{row.label}</span>
                  <span style={{ fontSize: i === 0 ? "1.1rem" : "0.88rem", fontWeight: i === 0 ? 900 : 700, color: row.valueColor }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Happens */}
          <div className="stagger-item d4">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>What Happens with CNC</div>
            <div style={{ background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "fa-check", bg: "#E6F9EE", color: "#00A651", title: "IRS stops active collection", desc: "No more levies, liens, or wage garnishments" },
                { icon: "fa-check", bg: "#E6F9EE", color: "#00A651", title: "CSED continues to run", desc: "Your tax debt can expire after the statute expires" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}><i className={`fas ${item.icon}`} style={{ fontSize: 10, color: item.color }} /></div>
                  <div><div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{item.title}</div><div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2 }}>{item.desc}</div></div>
                </div>
              ))}
              <div style={{ height: 1, background: "#F0F0F5" }} />
              {[
                { title: "Interest and penalties continue", desc: "Your balance may grow while in CNC" },
                { title: "IRS may review annually", desc: "Requires Form 433-F to verify continued eligibility" },
                { title: "Tax refunds may be offset", desc: "Future refunds can be applied to your balance" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#FFFBEB", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}><i className="fas fa-exclamation-triangle" style={{ fontSize: 10, color: "#F5A623" }} /></div>
                  <div><div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>{item.title}</div><div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2 }}>{item.desc}</div></div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison */}
          <div className="stagger-item d5">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Compare Options</div>
            <div style={{ background: "white", borderRadius: 16, padding: 4, border: "1px solid #E8E8F0", overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.68rem" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "8px 6px", textAlign: "left", fontWeight: 700, color: "#5C5C7A", background: "#F6F6FB" }} />
                    <th style={{ padding: "8px 6px", textAlign: "center", fontWeight: 700, color: "#003DA5", background: "#EBF0FF" }}>CNC</th>
                    <th style={{ padding: "8px 6px", textAlign: "center", fontWeight: 700, color: "#5C5C7A", background: "#F6F6FB" }}>IA</th>
                    <th style={{ padding: "8px 6px", textAlign: "center", fontWeight: 700, color: "#5C5C7A", background: "#F6F6FB" }}>OIC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Monthly payment", cnc: "$0", ia: "$500+", oic: "Varies", cncStyle: { color: "#00A651", fontWeight: 700 } },
                    { label: "Stops collection", cnc: "check", ia: "check", oic: "check" },
                    { label: "Debt reduced", cnc: "x", ia: "x", oic: "check" },
                    { label: "Debt can expire", cnc: "check", ia: "x", oic: "N/A" },
                    { label: "Financial review", cnc: "Annual", ia: "None", oic: "Upfront" },
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #F0F0F5" }}>
                      <td style={{ padding: "8px 6px", fontWeight: 600, color: "#1A1A2E", textAlign: "left" }}>{row.label}</td>
                      {["cnc", "ia", "oic"].map((col) => {
                        const val = row[col as keyof typeof row] as string | undefined;
                        return (
                          <td key={col} style={{ padding: "8px 6px", textAlign: "center", fontWeight: 500, color: "#1A1A2E", ...(col === "cnc" && row.cncStyle ? row.cncStyle : {}) }}>
                            {val === "check" ? <i className="fas fa-check-circle" style={{ color: "#00A651", fontSize: 12 }} /> : val === "x" ? <i className="fas fa-times-circle" style={{ color: "#E63946", fontSize: 12 }} /> : (val ?? "")}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA */}
          <div className="stagger-item d6" style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
            <div onClick={() => router.push("/confirm")} style={{ padding: 16, background: "linear-gradient(135deg,#00A651,#10B981)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,166,81,0.2)", cursor: "pointer" }}>
              Apply for CNC Status <i className="fas fa-arrow-right" style={{ marginLeft: 6, fontSize: 12 }} />
            </div>
            <div onClick={() => router.push("/other-relief")} style={{ padding: 12, textAlign: "center", color: "#8585A0", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}>
              <i className="fas fa-arrow-left" style={{ marginRight: 6, fontSize: 11 }} /> Back to Options
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
