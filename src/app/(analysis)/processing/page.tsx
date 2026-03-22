"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function ProcessingPage() {
  const router = useRouter();
  const [percent, setPercent] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const steps = [
    "Reviewing financial profile...",
    "Calculating collection potential...",
    "Evaluating resolution eligibility...",
    "Generating recommendations...",
  ];

  const totalDuration = 8000;
  const circumference = 2 * Math.PI * 68;

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(Math.round((elapsed / totalDuration) * 100), 100);
      setPercent(progress);
      setCurrentStep(Math.min(Math.floor((elapsed / totalDuration) * steps.length), steps.length - 1));
      if (elapsed >= totalDuration) {
        clearInterval(interval);
        setComplete(true);
        setTimeout(() => router.push("/results"), 1500);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [router, steps.length]);

  const offset = circumference - (percent / 100) * circumference;

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background shapes */}
        <div style={{ position: "absolute", width: 180, height: 180, borderRadius: "50%", filter: "blur(60px)", background: "linear-gradient(135deg, rgba(0,61,165,0.08), rgba(99,102,241,0.06))", top: -30, right: -50, opacity: 0.8 }} />
        <div style={{ position: "absolute", width: 140, height: 140, borderRadius: "50%", filter: "blur(60px)", background: "linear-gradient(135deg, rgba(230,57,70,0.06), rgba(124,58,237,0.04))", bottom: "15%", left: -40, opacity: 0.8 }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 30px", position: "relative", zIndex: 5 }}>
          <div style={{ position: "relative", marginBottom: 32 }}>
            <div style={{ position: "relative", width: 160, height: 160, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", boxShadow: complete ? "none" : "0 0 20px rgba(0,61,165,0.1), 0 0 40px rgba(0,61,165,0.05)" }}>
              <svg width="160" height="160" viewBox="0 0 160 160" style={{ transform: "rotate(-90deg)", opacity: complete ? 0.2 : 1, transition: "opacity 0.5s ease" }}>
                <circle cx="80" cy="80" r="68" fill="none" stroke="#F0F0F5" strokeWidth="8" />
                <circle cx="80" cy="80" r="68" fill="none" stroke="url(#progressGrad)" strokeWidth="8" strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.1s linear" }} />
                <defs>
                  <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#003DA5" />
                    <stop offset="50%" stopColor="#2563EB" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
              </svg>

              {!complete && (
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#1A1A2E", letterSpacing: "-0.02em", lineHeight: 1 }}>{percent}%</div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0", marginTop: 4 }}>Analyzing...</div>
                </div>
              )}

              {complete && (
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #00A651, #10B981)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(0,166,81,0.3)" }}>
                    <i className="fas fa-check" style={{ fontSize: 32, color: "white" }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {!complete && (
            <>
              <div style={{ textAlign: "center", minHeight: 44, marginBottom: 24 }}>
                <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "#5C5C7A", lineHeight: 1.5 }}>{steps[currentStep]}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
                {steps.map((_, i) => (
                  <div key={i} style={{ width: i === currentStep ? 24 : 8, height: 8, borderRadius: 9999, background: i < currentStep ? "#10B981" : i === currentStep ? "#003DA5" : "#E8E8F0", transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" }} />
                ))}
              </div>
              <div style={{ fontSize: "0.72rem", color: "#B0B0C8", fontWeight: 500 }}>This may take a moment</div>
            </>
          )}

          {complete && (
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1A1A2E", marginBottom: 6 }}>Analysis Complete!</div>
              <div style={{ fontSize: "0.82rem", color: "#8585A0", lineHeight: 1.5 }}>Your personalized resolution plan is ready</div>
            </div>
          )}
        </div>
      </div>
    </PhoneFrame>
  );
}
