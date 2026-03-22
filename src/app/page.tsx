"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();
  const [showTap, setShowTap] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTap(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="phone-frame" style={{ background: "#1A1A2E", maxWidth: "100%", width: "100%" }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 30% 20%, rgba(0,61,165,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(230,57,70,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.05) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div className="screen" style={{ justifyContent: "center", alignItems: "center", textAlign: "center", position: "relative", zIndex: 5 }}>
        <div style={{ opacity: 0, transform: "translateY(30px) scale(0.95)", animation: "logoEntrance 1s 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards" }}>
          <div style={{ fontSize: "3.2rem", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1 }}>
            <span style={{ color: "#E63946" }}>Blast</span>
            <span style={{ color: "#003DA5" }}>Tax</span>
          </div>
          <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#5C5C7A", letterSpacing: "0.35em", textTransform: "uppercase" as const, marginTop: 4, opacity: 0, transform: "translateY(15px)", animation: "debtEntrance 0.8s 1s ease forwards" }}>DEBT</div>
        </div>
        <div style={{ color: "#8585A0", fontSize: "0.9rem", fontWeight: 500, marginTop: 40, opacity: 0, animation: "taglineIn 0.8s 1.5s ease forwards" }}>Your path to tax freedom</div>
        <div style={{ display: "flex", gap: 8, marginTop: 32, opacity: 0, animation: "dotsIn 0.6s 2s ease forwards" }}>
          {[0, 0.16, 0.32].map((d, i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(0,61,165,0.5)", animation: `dotBounce 1.4s ${d}s ease-in-out infinite` }} />
          ))}
        </div>
      </div>
      <div onClick={() => router.push("/login")} style={{
        position: "absolute", bottom: 80, left: "50%", transform: "translateX(-50%)",
        color: "#8585A0", fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.05em",
        cursor: "pointer", opacity: showTap ? 1 : 0, transition: "opacity 0.6s ease",
        animation: showTap ? "gentlePulse 2.5s ease-in-out infinite" : "none",
      }}>Tap to continue</div>
      <style>{`
        @keyframes logoEntrance { from { opacity:0; transform:translateY(30px) scale(0.95); } to { opacity:1; transform:translateY(0) scale(1); } }
        @keyframes debtEntrance { from { opacity:0; transform:translateY(15px); } to { opacity:1; transform:translateY(0); } }
        @keyframes taglineIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes dotsIn { from { opacity:0; } to { opacity:1; } }
        @keyframes dotBounce { 0%,80%,100% { transform:scale(0.6); opacity:0.4; } 40% { transform:scale(1); opacity:1; } }
        @keyframes gentlePulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }
      `}</style>
    </div>
  );
}
