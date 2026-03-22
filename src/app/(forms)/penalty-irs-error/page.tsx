"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function PenaltyIrsErrorPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.push("/penalty-abatement")} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>IRS Error Relief</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        <div className="screen-content" style={{ paddingBottom: 32, gap: 14 }}>
          <div className="stagger-item d1" style={{ textAlign: "center", padding: "4px 0" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 12px", background: "#FFF0F1", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 700, color: "#E63946", marginBottom: 10 }}>
              <i className="fas fa-triangle-exclamation" style={{ fontSize: 9 }} /> IRS MISTAKES
            </div>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.2 }}>Penalties Caused by IRS Mistakes</h1>
          </div>

          <div className="stagger-item d2" style={{ background: "#F6F6FB", borderRadius: 14, padding: "14px 16px" }}>
            <p style={{ fontSize: "0.78rem", color: "#5C5C7A", lineHeight: 1.65, margin: 0 }}>If the IRS gave you incorrect written advice that led to a penalty, or made a processing error, you may qualify for complete penalty removal under IRC &sect; 6404(f).</p>
          </div>

          <div className="stagger-item d3" style={{ fontSize: "0.7rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", padding: "0 4px" }}>Two Types of IRS Error Relief</div>

          {/* Type 1 */}
          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ height: 3, background: "linear-gradient(135deg,#003DA5,#2563EB)" }} />
            <div style={{ padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fas fa-envelope-open-text" style={{ fontSize: 15, color: "#003DA5" }} /></div>
                <div><div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#1A1A2E" }}>Written IRS Advice</div><div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 1 }}>IRC &sect; 6404(f)</div></div>
              </div>
              {["Must be written response to YOUR specific question", "You relied on the advice in good faith", "You provided accurate and complete information to IRS", "Keep the original IRS letter or notice as documentation"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
                  <i className="fas fa-circle" style={{ fontSize: 5, color: "#003DA5", marginTop: 6, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.75rem", color: "#5C5C7A", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Type 2 */}
          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ height: 3, background: "linear-gradient(135deg,#7C3AED,#A78BFA)" }} />
            <div style={{ padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fas fa-gears" style={{ fontSize: 15, color: "#7C3AED" }} /></div>
                <div><div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#1A1A2E" }}>IRS Processing Error</div><div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 1 }}>System / Clerical Mistakes</div></div>
              </div>
              {["IRS made a clerical or processing mistake", "Penalty resulted from IRS system error", "TC 290 or TC 300 posted incorrectly on your transcript"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 4 }}>
                  <i className="fas fa-circle" style={{ fontSize: 5, color: "#7C3AED", marginTop: 6, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.75rem", color: "#5C5C7A", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What Qualifies */}
          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18 }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#00A651", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}><i className="fas fa-check-circle" style={{ fontSize: 10, marginRight: 4 }} /> What Qualifies</div>
            {["Written response from IRS to your inquiry", "Published IRS guidance that was later corrected", "IRS processing delay caused the penalty"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "7px 0" }}>
                <div style={{ width: 20, height: 20, borderRadius: 6, background: "#00A651", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><i className="fas fa-check" style={{ fontSize: 10, color: "white" }} /></div>
                <span style={{ fontSize: "0.78rem", fontWeight: 500, color: "#1A1A2E" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* What Doesn't Qualify */}
          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18 }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#E63946", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}><i className="fas fa-circle-xmark" style={{ fontSize: 10, marginRight: 4 }} /> What Doesn&apos;t Qualify</div>
            {["Verbal advice from IRS phone representative", "Tax preparer error (that's your preparer's liability)", "Misunderstanding of published guidance"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, padding: "7px 0" }}>
                <div style={{ width: 20, height: 20, borderRadius: 6, background: "#E63946", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><i className="fas fa-xmark" style={{ fontSize: 10, color: "white" }} /></div>
                <span style={{ fontSize: "0.78rem", fontWeight: 500, color: "#1A1A2E" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* How to Request */}
          <div style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 18, padding: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <div style={{ width: 30, height: 30, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="fas fa-list-ol" style={{ fontSize: 12, color: "#003DA5" }} /></div>
              <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>How to Request</div>
            </div>
            {[
              { title: "Gather the original IRS correspondence", desc: "Locate the letter or notice containing the erroneous advice" },
              { title: "File Form 843 with explanation", desc: "Use Form 843 (Claim for Refund and Request for Abatement)" },
              { title: "Attach copies of the erroneous advice", desc: "Include copies (not originals) of the IRS correspondence" },
              { title: "Reference IRC \u00A7 6404(f) specifically", desc: "Cite this section to ensure the IRS processes your claim correctly" },
            ].map((step, i, arr) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 0", borderBottom: i < arr.length - 1 ? "1px solid #F0F0F5" : "none" }}>
                <div style={{ width: 24, height: 24, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 800, color: "#003DA5", flexShrink: 0 }}>{i + 1}</div>
                <div><div style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1A1A2E" }}>{step.title}</div><div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 2, lineHeight: 1.5 }}>{step.desc}</div></div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 4 }}>
            <div onClick={() => router.push("/form-843")} style={{ padding: 15, background: "linear-gradient(135deg,#00A651,#10B981)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,166,81,0.2)", cursor: "pointer" }}>
              <i className="fas fa-file-pen" style={{ marginRight: 6, fontSize: 13 }} /> File Form 843
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
