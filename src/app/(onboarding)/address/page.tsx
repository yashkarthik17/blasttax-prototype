"use client";
import { useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const states = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

const confettiColors = ["#003DA5", "#00A651", "#7C3AED", "#E63946", "#F5A623", "#2563EB"];

export default function AddressPage() {
  const router = useRouter();
  const [street, setStreet] = useState("");
  const [apt, setApt] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const confettiRef = useRef<Array<{
    left: string; top: string; bg: string; delay: string; duration: string;
    width: string; height: string; radius: string;
  }>>([]);

  const isValid = street.trim() !== "" && city.trim() !== "" && state !== "" && zip.trim() !== "";

  const completeSetup = useCallback(() => {
    // Generate confetti particles
    const particles = Array.from({ length: 30 }, () => ({
      left: Math.random() * 100 + "%",
      top: "-10px",
      bg: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      delay: Math.random() * 0.8 + "s",
      duration: (1.5 + Math.random()) + "s",
      width: (5 + Math.random() * 8) + "px",
      height: (5 + Math.random() * 8) + "px",
      radius: Math.random() > 0.5 ? "50%" : "2px",
    }));
    confettiRef.current = particles;
    setShowSuccess(true);

    setTimeout(() => {
      router.push("/dashboard");
    }, 3000);
  }, [router]);

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "13px 16px", background: "var(--color-surface-alt)",
    border: "1.5px solid var(--color-border)", borderRadius: 12,
    fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
    color: "var(--color-fg)", transition: "all 0.2s ease", outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 12, fontWeight: 700, color: "var(--color-muted)",
    textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6,
  };

  const selectStyle: React.CSSProperties = {
    width: "100%", padding: "13px 36px 13px 16px",
    background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)",
    borderRadius: 12, fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 500,
    color: "var(--color-fg)", transition: "all 0.2s ease", outline: "none",
    appearance: "none" as const, cursor: "pointer", boxSizing: "border-box" as const,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%238585A0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center",
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ position: "relative" }}>
        <div className="floating-shapes">
          <div className="float-shape float-shape-1" />
          <div className="float-shape float-shape-2" />
        </div>

        {/* Success overlay */}
        {showSuccess && (
          <div style={{
            position: "absolute", inset: 0,
            background: "rgba(250,250,255,0.97)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            zIndex: 100, textAlign: "center", padding: 40,
            animation: "fadeIn 0.4s ease",
          }}>
            {/* Confetti */}
            {confettiRef.current.map((p, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: p.width, height: p.height,
                  borderRadius: p.radius, background: p.bg,
                  left: p.left, top: p.top,
                  animation: `confettiFall ${p.duration} ease-out ${p.delay} forwards`,
                }}
              />
            ))}
            <div style={{
              width: 100, height: 100, borderRadius: "50%",
              background: "linear-gradient(135deg, #E6F9EE 0%, #CCF2DD 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 24,
              animation: "fadeInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}>
              <i className="fas fa-check" style={{
                fontSize: 42, color: "#00A651",
                animation: "checkPop 0.5s 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both",
              }} />
            </div>
            <h2 style={{
              fontSize: "1.5rem", fontWeight: 800, color: "var(--color-fg)",
              marginBottom: 8, opacity: 0,
              animation: "fadeInUp 0.5s 0.4s ease forwards",
            }}>
              You&apos;re all set!
            </h2>
            <p style={{
              fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5,
              opacity: 0, animation: "fadeInUp 0.5s 0.55s ease forwards",
            }}>
              We&apos;re preparing your personalized tax resolution analysis...
            </p>
          </div>
        )}

        {/* Header */}
        <div style={{ padding: "8px 20px 0", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <button
              onClick={() => router.push("/business")}
              style={{
                width: 40, height: 40, borderRadius: 12, border: "none",
                background: "var(--color-surface-alt)", color: "var(--color-fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 8 of 9</span>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "89%" }} />
          </div>
        </div>

        {/* Question */}
        <div className="stagger-item d1" style={{ padding: "24px 24px 0", position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontSize: "1.625rem", fontWeight: 800, color: "var(--color-fg)",
            lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 8,
          }}>
            Where do you live?
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 24 }}>
            We need this for IRS correspondence
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: "0 24px", flex: 1, overflowY: "auto", position: "relative", zIndex: 2 }}>
          {/* Street */}
          <div className="stagger-item d1" style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Street Address</label>
            <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="123 Main Street" autoFocus style={inputStyle} />
          </div>

          {/* Apt */}
          <div className="stagger-item d2" style={{ marginBottom: 16 }}>
            <label style={labelStyle}>
              Apt / Suite / Unit <span style={{ fontSize: 11, fontWeight: 500, color: "var(--color-placeholder)", textTransform: "none", letterSpacing: "normal", marginLeft: 4 }}>(optional)</span>
            </label>
            <input type="text" value={apt} onChange={(e) => setApt(e.target.value)} placeholder="Apt 4B" style={inputStyle} />
          </div>

          {/* City */}
          <div className="stagger-item d3" style={{ marginBottom: 16 }}>
            <label style={labelStyle}>City</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="New York" style={inputStyle} />
          </div>

          {/* State + ZIP */}
          <div className="stagger-item d4" style={{ display: "flex", gap: 12 }}>
            <div style={{ flex: 1.2, marginBottom: 16 }}>
              <label style={labelStyle}>State</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                style={{ ...selectStyle, color: state === "" ? "var(--color-placeholder)" : "var(--color-fg)" }}
              >
                <option value="" disabled>Select</option>
                {states.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div style={{ flex: 0.8, marginBottom: 16 }}>
              <label style={labelStyle}>ZIP Code</label>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="10001"
                maxLength={10}
                inputMode="numeric"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Reassurance */}
          <div className="stagger-item d5" style={{
            display: "flex", alignItems: "center", gap: 8, marginTop: 4,
            fontSize: 13, color: "var(--color-muted-light)",
          }}>
            <i className="fas fa-map-pin" style={{ fontSize: 13 }} />
            <span>Used only for IRS forms</span>
          </div>
        </div>

        {/* Complete Setup button */}
        <div style={{ padding: "16px 24px 40px", flexShrink: 0, position: "relative", zIndex: 2 }}>
          <button
            className="btn btn-primary"
            onClick={completeSetup}
            style={{
              fontSize: "1rem", padding: "16px 28px",
              opacity: isValid ? 1 : 0.5,
              pointerEvents: isValid ? "auto" : "none",
            }}
          >
            <i className="fas fa-check-circle" style={{ marginRight: 4 }} /> Complete Setup
          </button>
        </div>
      </div>

      {/* Keyframe animations for success overlay */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes checkPop {
          from { opacity: 0; transform: scale(0.3); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes confettiFall {
          0% { transform: translateY(-20px) rotate(0deg) scale(1); opacity: 1; }
          100% { transform: translateY(400px) rotate(720deg) scale(0.3); opacity: 0; }
        }
      `}</style>
    </PhoneFrame>
  );
}
