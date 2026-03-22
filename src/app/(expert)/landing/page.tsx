"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function ExpertLandingPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Expert Help" backPath="/dashboard" />

        <div className="screen-content" style={{ paddingBottom: 40, gap: 20 }}>
          {/* Hero Section */}
          <div
            className="stagger-item d2"
            style={{
              background: "linear-gradient(160deg, #003DA5 0%, #2563EB 60%, #4F46E5 100%)",
              borderRadius: 20,
              padding: "28px 24px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: -40, right: -40, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.08)" }} />
            <div style={{ position: "absolute", bottom: -30, left: -30, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
            <div style={{ position: "absolute", top: "50%", right: 20, width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                <i className="fas fa-user-tie" style={{ fontSize: 20, color: "white" }} />
              </div>
              <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "white", letterSpacing: "-0.01em", marginBottom: 8 }}>Get Expert Help</h1>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", fontWeight: 400, lineHeight: 1.5 }}>Connect with licensed tax professionals for personalized guidance</p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Why Choose Our Experts</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Benefit 1 */}
              <div className="stagger-item d4" style={{ background: "white", borderRadius: 16, padding: 18, border: "1px solid #E8E8F0", display: "flex", alignItems: "center", gap: 14, transition: "all 0.3s cubic-bezier(0.25,0.1,0.25,1)", cursor: "pointer" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg,#EBF0FF,#D6E2FF)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className="fas fa-shield-halved" style={{ fontSize: 18, color: "#003DA5" }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>Licensed Professionals</div>
                  <div style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.45 }}>Enrolled Agents, CPAs, and Tax Attorneys</div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="stagger-item d5" style={{ background: "white", borderRadius: 16, padding: 18, border: "1px solid #E8E8F0", display: "flex", alignItems: "center", gap: 14, transition: "all 0.3s cubic-bezier(0.25,0.1,0.25,1)", cursor: "pointer" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg,#F5F0FF,#E8DEFF)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className="fas fa-headset" style={{ fontSize: 18, color: "#7C3AED" }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>Dedicated Support</div>
                  <div style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.45 }}>One-on-one guidance through your resolution</div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="stagger-item d6" style={{ background: "white", borderRadius: 16, padding: 18, border: "1px solid #E8E8F0", display: "flex", alignItems: "center", gap: 14, transition: "all 0.3s cubic-bezier(0.25,0.1,0.25,1)", cursor: "pointer" }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg,#F0FDFA,#CCFBF1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className="fas fa-briefcase" style={{ fontSize: 18, color: "#0D9488" }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 3 }}>IRS Representation</div>
                  <div style={{ fontSize: "0.78rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.45 }}>We handle IRS communications for you</div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="stagger-item d7">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 14, padding: "0 4px" }}>How It Works</div>
            <div style={{ background: "white", borderRadius: 16, padding: 20, border: "1px solid #E8E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, flexShrink: 0 }}>1</div>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>We review your case</div>
                  <div style={{ fontSize: "0.75rem", color: "#8585A0", marginTop: 2 }}>Our team analyzes your tax situation</div>
                </div>
              </div>
              <div style={{ width: 2, height: 24, background: "linear-gradient(180deg,#003DA5,#E8E8F0)", marginLeft: 15 }} />
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, flexShrink: 0 }}>2</div>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>Match you with an expert</div>
                  <div style={{ fontSize: "0.75rem", color: "#8585A0", marginTop: 2 }}>Paired based on your specific needs</div>
                </div>
              </div>
              <div style={{ width: 2, height: 24, background: "linear-gradient(180deg,#003DA5,#E8E8F0)", marginLeft: 15 }} />
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: 700, flexShrink: 0 }}>3</div>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>Expert guides your resolution</div>
                  <div style={{ fontSize: "0.75rem", color: "#8585A0", marginTop: 2 }}>Ongoing support until resolved</div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="stagger-item d8">
            <div style={{ background: "linear-gradient(135deg,#FAFAFF 0%,#EBF0FF 100%)", borderRadius: 20, padding: 24, border: "1px solid rgba(0,61,165,0.15)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(135deg,#003DA5,#2563EB)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-star" style={{ fontSize: 16, color: "white" }} />
                </div>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E" }}>Expert Consultation</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 6 }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "#003DA5", letterSpacing: "-0.02em" }}>$149</span>
                <span style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 500 }}>/session</span>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", background: "rgba(0,166,81,0.08)", border: "1px solid rgba(0,166,81,0.15)", borderRadius: 9999, fontSize: "0.72rem", fontWeight: 600, color: "#00A651" }}>
                <i className="fas fa-check-circle" style={{ fontSize: 10 }} />
                Included in Pro plan
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="stagger-item d9" style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
            <button className="btn btn-primary" onClick={() => router.push("/pending")} style={{ fontSize: "0.95rem", fontWeight: 700, padding: "16px 28px" }}>
              <i className="fas fa-arrow-right" style={{ fontSize: 14 }} />
              Get Started
            </button>
            <div style={{ textAlign: "center" }}>
              <span onClick={() => router.push("/pending")} style={{ fontSize: "0.82rem", fontWeight: 600, color: "#003DA5", cursor: "pointer" }}>Already on Pro plan? <span style={{ textDecoration: "underline" }}>Start now</span></span>
            </div>
          </div>

          {/* Reassurance */}
          <div className="stagger-item d10" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "8px 0" }}>
            <i className="fas fa-lock" style={{ fontSize: 11, color: "#00A651" }} />
            <span style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500 }}>Secure & confidential consultations</span>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
