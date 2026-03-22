"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function ExpertPendingPage() {
  const router = useRouter();
  const [pushChecked, setPushChecked] = useState(true);
  const [emailChecked, setEmailChecked] = useState(true);

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div className="screen-content-centered" style={{ padding: "20px 24px 40px", gap: 0 }}>
          {/* Animated Matching Illustration */}
          <div className="stagger-item d1" style={{ marginBottom: 24 }}>
            <div style={{ width: 160, height: 160, position: "relative", margin: "0 auto" }}>
              {/* Outer dashed ring */}
              <div style={{ position: "absolute", inset: 0, border: "3px dashed #E8E8F0", borderRadius: "50%", animation: "spinSlow 12s linear infinite" }} />
              {/* Inner ring */}
              <div style={{ position: "absolute", inset: 20, border: "2px solid rgba(0,61,165,0.15)", borderRadius: "50%", animation: "spinSlow 8s linear infinite reverse" }} />

              {/* Avatar slots */}
              <div style={{ width: 40, height: 40, borderRadius: "50%", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "white", boxShadow: "0 4px 12px rgba(26,26,46,0.1)", top: 0, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#7C3AED,#A78BFA)", animation: "avatarPulse 2s ease-in-out infinite" }}>MC</div>
              <div style={{ width: 40, height: 40, borderRadius: "50%", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "white", boxShadow: "0 4px 12px rgba(26,26,46,0.1)", top: "50%", right: 0, transform: "translateY(-50%)", background: "linear-gradient(135deg,#0D9488,#5EEAD4)", animation: "avatarPulse 2s ease-in-out infinite 0.4s" }}>SL</div>
              <div style={{ width: 40, height: 40, borderRadius: "50%", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "white", boxShadow: "0 4px 12px rgba(26,26,46,0.1)", bottom: 0, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#D97706,#FCD34D)", animation: "avatarPulse 2s ease-in-out infinite 0.8s" }}>RK</div>
              <div style={{ width: 40, height: 40, borderRadius: "50%", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: "white", boxShadow: "0 4px 12px rgba(26,26,46,0.1)", top: "50%", left: 0, transform: "translateY(-50%)", background: "linear-gradient(135deg,#E63946,#FB7185)", animation: "avatarPulse 2s ease-in-out infinite 1.2s" }}>AP</div>

              {/* Center search icon */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#003DA5,#2563EB)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(0,61,165,0.25)" }}>
                <i className="fas fa-search" style={{ fontSize: 20, color: "white" }} />
              </div>
            </div>

            {/* Matching text with dots */}
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#003DA5" }}>Matching</span>
              <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 8 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#003DA5", display: "inline-block", animation: "dotBounce 1.4s ease-in-out infinite" }} />
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#003DA5", display: "inline-block", animation: "dotBounce 1.4s ease-in-out infinite 0.2s" }} />
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#003DA5", display: "inline-block", animation: "dotBounce 1.4s ease-in-out infinite 0.4s" }} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="stagger-item d2" style={{ textAlign: "center", marginBottom: 20 }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", marginBottom: 8 }}>Finding your expert</h1>
            <p style={{ fontSize: "0.88rem", color: "#8585A0", fontWeight: 400, lineHeight: 1.5, maxWidth: 280, margin: "0 auto" }}>We&apos;re matching you with the best tax professional for your case</p>
          </div>

          {/* Case Details Card */}
          <div className="stagger-item d3" style={{ width: "100%", background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0", marginBottom: 16, textAlign: "left" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,#EBF0FF,#D6E2FF)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <i className="fas fa-folder-open" style={{ fontSize: 16, color: "#003DA5" }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>Case #1042</div>
                <div style={{ fontSize: "0.72rem", color: "#8585A0" }}>Offer in Compromise</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#E63946" }}>$47,250</div>
                <div style={{ fontSize: "0.65rem", color: "#8585A0" }}>Total debt</div>
              </div>
            </div>
          </div>

          {/* What We're Looking For */}
          <div className="stagger-item d4" style={{ width: "100%", background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0", marginBottom: 16, textAlign: "left" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>What we&apos;re looking for</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["Licensed Enrolled Agent or CPA", "OIC specialization", "10+ years IRS experience", "Available this week"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className="fas fa-check" style={{ fontSize: 9, color: "#00A651" }} />
                  </div>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Average match time */}
          <div className="stagger-item d5" style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{ fontSize: "0.78rem", color: "#8585A0", marginBottom: 6 }}>
              <i className="fas fa-clock" style={{ fontSize: 11, marginRight: 4 }} />
              Average match time: <strong style={{ color: "#1A1A2E" }}>2-4 hours</strong>
            </div>
            <div style={{ fontSize: "0.78rem", color: "#8585A0" }}>
              <i className="fas fa-bell" style={{ fontSize: 11, marginRight: 4, color: "#003DA5" }} />
              We&apos;ll notify you when your expert is assigned
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="stagger-item d6" style={{ width: "100%", background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0", marginBottom: 20, textAlign: "left" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Notification Preference</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div onClick={() => setPushChecked(!pushChecked)} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, border: "2px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: pushChecked ? "#003DA5" : "transparent", borderColor: pushChecked ? "#003DA5" : "#E8E8F0", transition: "all 0.2s ease" }}>
                  {pushChecked && <i className="fas fa-check" style={{ fontSize: 11, color: "white" }} />}
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>Push Notifications</div>
              </div>
              <div onClick={() => setEmailChecked(!emailChecked)} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <div style={{ width: 22, height: 22, borderRadius: 6, border: "2px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, background: emailChecked ? "#003DA5" : "transparent", borderColor: emailChecked ? "#003DA5" : "#E8E8F0", transition: "all 0.2s ease" }}>
                  {emailChecked && <i className="fas fa-check" style={{ fontSize: 11, color: "white" }} />}
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E" }}>Email</div>
              </div>
            </div>
          </div>

          {/* Go to Dashboard */}
          <div style={{ width: "100%" }}>
            <button className="btn btn-outline" onClick={() => router.push("/dashboard")} style={{ fontSize: "0.88rem", fontWeight: 700, padding: "14px 28px" }}>
              <i className="fas fa-house" style={{ fontSize: 14, marginRight: 4 }} />
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinSlow { to { transform: rotate(360deg); } }
        @keyframes avatarPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </PhoneFrame>
  );
}
