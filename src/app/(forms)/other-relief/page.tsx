"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

const reliefOptions = [
  { accent: "linear-gradient(135deg,#D97706,#FBBF24)", iconBg: "#FEF3C7", iconColor: "#D97706", icon: "fa-pause-circle", title: "Currently Not Collectible", desc: "Temporarily stop all IRS collection activity. The IRS acknowledges you cannot afford to pay and suspends enforcement actions like levies and garnishments.", tags: [{ text: "MDI $0 requirement", icon: "fa-coins" }, { text: "Form 433-F", icon: "fa-file-lines" }, { text: "Debt continues accruing", icon: "fa-clock" }], tagBg: "#FFFBEB", tagColor: "#92400E", linkColor: "#D97706", href: "/cnc-guidance" },
  { accent: "linear-gradient(135deg,#E63946,#FB7185)", iconBg: "#FFF0F1", iconColor: "#E63946", icon: "fa-shield-halved", title: "Innocent Spouse Relief", desc: "If your spouse (or former spouse) improperly reported items or omitted items on a joint return, you may be relieved of responsibility for the tax, interest, and penalties.", tags: [{ text: "Form 8857", icon: "fa-file-signature" }, { text: "3 types available", icon: "fa-list-ol" }, { text: "2-year filing deadline", icon: "fa-calendar" }], tagBg: "#FFF0F1", tagColor: "#9F1239", linkColor: "#E63946", href: "/form-8857" },
  { accent: "linear-gradient(135deg,#4F46E5,#818CF8)", iconBg: "#EEF2FF", iconColor: "#4F46E5", icon: "fa-gavel", title: "CDP Hearing", desc: "A Collection Due Process hearing gives you the right to challenge IRS collection actions. It pauses enforcement while your case is reviewed by an independent appeals officer.", tags: [{ text: "Form 12153", icon: "fa-file-lines" }, { text: "Within 30 days of notice", icon: "fa-clock" }, { text: "Stops levies", icon: "fa-ban" }], tagBg: "#EEF2FF", tagColor: "#3730A3", linkColor: "#4F46E5", href: "/form-12153" },
  { accent: "linear-gradient(135deg,#6B7280,#9CA3AF)", iconBg: "#F3F4F6", iconColor: "#6B7280", icon: "fa-scale-balanced", title: "Bankruptcy Discharge", desc: "In certain circumstances, tax debts can be discharged through Chapter 7 bankruptcy. Strict timing rules must be met before the debt qualifies for discharge.", tags: [{ text: "3-year rule", icon: "fa-calendar-days" }, { text: "2-year rule", icon: "fa-calendar-check" }, { text: "240-day rule", icon: "fa-hourglass-end" }], tagBg: "#F3F4F6", tagColor: "#374151", linkColor: "#6B7280", href: "/results" },
];

export default function OtherReliefPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.push("/resolution-center")} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Other Relief Options</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        <div className="screen-content" style={{ paddingBottom: 90, gap: 14 }}>
          <div className="stagger-item d1" style={{ textAlign: "center", padding: "2px 0 6px" }}>
            <div style={{ fontSize: "0.82rem", color: "#5C5C7A", lineHeight: 1.5 }}>Beyond standard payment plans and offers, these relief options may apply to your situation.</div>
          </div>

          {reliefOptions.map((opt, idx) => (
            <div key={idx} onClick={() => router.push(opt.href)} style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18, boxShadow: "0 2px 12px rgba(26,26,46,0.05)", position: "relative", overflow: "hidden", cursor: "pointer", transition: "all 0.3s ease" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: opt.accent }} />
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: opt.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className={`fas ${opt.icon}`} style={{ fontSize: 20, color: opt.iconColor }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#1A1A2E", marginBottom: 6 }}>{opt.title}</div>
                  <div style={{ fontSize: "0.78rem", color: "#5C5C7A", lineHeight: 1.55, marginBottom: 12 }}>{opt.desc}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                    {opt.tags.map((tag, i) => (
                      <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 8px", borderRadius: 6, fontSize: "0.65rem", fontWeight: 600, background: opt.tagBg, color: opt.tagColor }}>
                        <i className={`fas ${tag.icon}`} style={{ fontSize: 8 }} /> {tag.text}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.78rem", fontWeight: 700, color: opt.linkColor }}>
                    Learn More <i className="fas fa-arrow-right" style={{ fontSize: 10 }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomNav active="Resolve" />
    </PhoneFrame>
  );
}
