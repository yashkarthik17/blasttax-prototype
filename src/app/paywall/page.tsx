"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function PaywallPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ background: "linear-gradient(180deg, rgba(26,26,46,0.3) 0%, rgba(250,250,255,0.98) 8%, #FAFAFF 15%)" }}>
        <div className="screen-content" style={{ paddingBottom: 40, gap: 16, paddingTop: 8 }}>

          {/* Close button */}
          <div className="stagger-item d1" style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              className="btn-icon"
              onClick={() => router.back()}
              style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(26,26,46,0.06)" }}
            >
              <i className="fas fa-xmark" style={{ fontSize: 16, color: "#5C5C7A" }} />
            </button>
          </div>

          {/* Header */}
          <div className="stagger-item d2" style={{ textAlign: "center", padding: "0 10px" }}>
            <div style={{
              width: 56, height: 56, borderRadius: 18,
              background: "linear-gradient(135deg,#003DA5,#2563EB)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 14px",
              boxShadow: "0 4px 16px rgba(0,61,165,0.25)",
            }}>
              <i className="fas fa-crown" style={{ fontSize: 22, color: "white" }} />
            </div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 6 }}>
              Unlock Full Access
            </h1>
            <p style={{ fontSize: "0.84rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.5 }}>
              Choose the plan that fits your needs
            </p>
          </div>

          {/* Plans */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>

            {/* Free Plan */}
            <div className="stagger-item d3" style={{
              background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 18,
              cursor: "pointer", position: "relative", overflow: "hidden",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <div>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1A1A2E" }}>Free</span>
                  <span style={{ fontSize: "0.82rem", fontWeight: 400, color: "#8585A0", marginLeft: 4 }}>$0</span>
                </div>
                <span style={{ padding: "3px 10px", background: "#E8E8F0", borderRadius: 9999, fontSize: "0.65rem", fontWeight: 600, color: "#5C5C7A" }}>
                  Current Plan
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {["Basic tax screening", "1 resolution analysis", "Learn articles"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0" }}>
                    <i className="fas fa-check" style={{ fontSize: 10, color: "#00A651" }} />
                    <span style={{ fontSize: "0.78rem", color: "#5C5C7A" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Starter Plan */}
            <div className="stagger-item d4" style={{
              background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 18,
              cursor: "pointer", position: "relative", overflow: "hidden",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1A1A2E" }}>Starter</span>
                <div>
                  <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E" }}>$19</span>
                  <span style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 400 }}>/mo</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {["Full resolution analysis", "IRS form preparation", "AI chat assistant"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0" }}>
                    <i className="fas fa-check" style={{ fontSize: 10, color: "#00A651" }} />
                    <span style={{ fontSize: "0.78rem", color: "#5C5C7A" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Plan (Recommended) */}
            <div className="stagger-item d5" style={{
              borderRadius: 16, padding: 20, cursor: "pointer", position: "relative", overflow: "hidden",
              border: "2px solid transparent",
              backgroundImage: "linear-gradient(white, white), linear-gradient(135deg, #003DA5, #2563EB, #7C3AED)",
              backgroundOrigin: "padding-box, border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow: "0 4px 20px rgba(0,61,165,0.12)",
            }}>
              {/* Most Popular Badge */}
              <div style={{ position: "absolute", top: 0, right: 16 }}>
                <div style={{
                  padding: "4px 12px", background: "linear-gradient(135deg,#003DA5,#2563EB)",
                  borderRadius: "0 0 10px 10px", fontSize: "0.65rem", fontWeight: 700,
                  color: "white", textTransform: "uppercase", letterSpacing: "0.04em",
                }}>
                  Most Popular
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12, marginTop: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: "1.05rem", fontWeight: 800, color: "#003DA5" }}>Pro</span>
                  <span style={{
                    padding: "3px 8px", background: "linear-gradient(135deg,#EBF0FF,#F5F0FF)",
                    borderRadius: 9999, fontSize: "0.6rem", fontWeight: 700, color: "#003DA5",
                    textTransform: "uppercase", letterSpacing: "0.04em",
                  }}>
                    Recommended
                  </span>
                </div>
                <div>
                  <span style={{ fontSize: "1.4rem", fontWeight: 900, color: "#003DA5" }}>$49</span>
                  <span style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 400 }}>/mo</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {["Everything in Starter", "Expert consultation included", "IRS representation", "Priority support"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0" }}>
                    <i className="fas fa-check-circle" style={{ fontSize: 12, color: "#003DA5" }} />
                    <span style={{ fontSize: "0.8rem", color: "#1A1A2E", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="stagger-item d6" style={{
              background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 18,
              cursor: "pointer", position: "relative", overflow: "hidden",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1A1A2E" }}>Enterprise</span>
                <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#7C3AED" }}>Custom</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {["For tax professionals", "Multi-client management", "Custom integrations & API"].map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 0" }}>
                    <i className="fas fa-check" style={{ fontSize: 10, color: "#00A651" }} />
                    <span style={{ fontSize: "0.78rem", color: "#5C5C7A" }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 10 }}>
                <a href="#" style={{ fontSize: "0.8rem", fontWeight: 600, color: "#7C3AED" }}>
                  Contact Sales <i className="fas fa-arrow-right" style={{ fontSize: 10 }} />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="stagger-item d7" style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 6 }}>
            <button
              className="btn btn-primary"
              onClick={() => router.push("/dashboard")}
              style={{ fontSize: "0.95rem", fontWeight: 700, padding: "16px 28px", background: "linear-gradient(135deg,#00A651,#10B981)" }}
            >
              <i className="fas fa-bolt" style={{ fontSize: 14 }} />
              Start Pro Trial — 7 days free
            </button>
          </div>

          {/* Compare all features */}
          <div className="stagger-item d8" style={{ textAlign: "center" }}>
            <a href="#" style={{
              fontSize: "0.82rem", fontWeight: 600, color: "#8585A0",
              display: "inline-flex", alignItems: "center", gap: 5,
            }}>
              Compare all features
              <i className="fas fa-chevron-down" style={{ fontSize: 10 }} />
            </a>
          </div>

          {/* Reassurance */}
          <div className="stagger-item d9" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "4px 0" }}>
            <i className="fas fa-shield-check" style={{ fontSize: 11, color: "#00A651" }} />
            <span style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500 }}>No commitment, cancel anytime</span>
          </div>

        </div>
      </div>
    </PhoneFrame>
  );
}
