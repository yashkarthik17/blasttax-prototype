"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function PenaltyCombatZonePage() {
  const router = useRouter();

  const benefits = [
    { icon: "fa-percent", bg: "#E6F9EE", color: "#00A651", title: "6% Interest Rate Cap", desc: "Interest on pre-service tax debt capped at 6% during active duty" },
    { icon: "fa-pause-circle", bg: "#F5F0FF", color: "#7C3AED", title: "CSED Tolling", desc: "Collection statute of limitations pauses during deployment period" },
    { icon: "fa-calendar-plus", bg: "#EBF0FF", color: "#003DA5", title: "Filing Extensions", desc: "Automatic 180-day extension after leaving combat zone" },
    { icon: "fa-shield-halved", bg: "#FFF0F1", color: "#E63946", title: "Penalty Protection", desc: "FTF/FTP penalties suspended during active military service" },
    { icon: "fa-hand", bg: "#F0FDFA", color: "#0D9488", title: "Collection Activity Halt", desc: "No levies, liens, or seizures during deployment period" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.push("/penalty-abatement")} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Military Tax Relief</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        <div className="screen-content" style={{ paddingBottom: 32, gap: 14 }}>
          <div className="stagger-item d1" style={{ textAlign: "center", padding: "4px 0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", background: "#EBF0FF", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 700, color: "#003DA5", marginBottom: 10 }}>
              <i className="fas fa-star" style={{ fontSize: 9 }} /> MILITARY PROTECTIONS
            </div>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.2 }}>Service Member Protections</h1>
          </div>

          <div className="stagger-item d2" style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 4px" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em" }}>SCRA Benefits</div>
            <div style={{ flex: 1, height: 1, background: "#E8E8F0" }} />
          </div>

          {benefits.map((b, i) => (
            <div key={i} style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 14, padding: 14, display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: b.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className={`fas ${b.icon}`} style={{ fontSize: 14, color: b.color }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{b.title}</div>
                <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 3, lineHeight: 1.5 }}>{b.desc}</div>
              </div>
            </div>
          ))}

          {/* Qualifying Service */}
          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18 }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Qualifying Service</div>
            {["Active duty in a designated combat zone", "Supporting operations in hazardous duty areas", "Hospitalization from combat zone service"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 0" }}>
                <div style={{ width: 20, height: 20, borderRadius: 6, background: "#003DA5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><i className="fas fa-check" style={{ fontSize: 10, color: "white" }} /></div>
                <span style={{ fontSize: "0.78rem", fontWeight: 500, color: "#1A1A2E" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* How to Claim */}
          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fas fa-clipboard-list" style={{ fontSize: 12, color: "#003DA5" }} /></div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>How to Claim</div>
            </div>
            {[
              { title: "File Form 7508-A", desc: "Or attach a combat zone statement to your return" },
              { title: 'Write "COMBAT ZONE" on return', desc: "Write it clearly across the top of your tax return" },
              { title: "Include deployment orders", desc: "Attach copies of your official deployment orders as documentation" },
            ].map((step, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid #F0F0F5" : "none" }}>
                <div style={{ width: 24, height: 24, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 800, color: "#003DA5", flexShrink: 0 }}>{i + 1}</div>
                <div><div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1A1A2E" }}>{step.title}</div><div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2, lineHeight: 1.5 }}>{step.desc}</div></div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "14px 16px", background: "#EBF0FF", border: "1px solid #C5D5F5", borderRadius: 14 }}>
            <i className="fas fa-clock" style={{ fontSize: 14, color: "#2563EB", marginTop: 1, flexShrink: 0 }} />
            <div style={{ fontSize: "0.75rem", color: "#1E40AF", lineHeight: 1.6, fontWeight: 500 }}><strong>Timeline:</strong> Protections begin on your deployment date and extend 180 days after your return from the combat zone.</div>
          </div>

          <div style={{ marginTop: 4 }}>
            <div onClick={() => router.push("/confirm")} style={{ padding: 15, background: "linear-gradient(135deg,#003DA5,#2563EB)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,61,165,0.18)", cursor: "pointer" }}>
              <i className="fas fa-headset" style={{ marginRight: 6, fontSize: 13 }} /> Contact Military Tax Support
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
