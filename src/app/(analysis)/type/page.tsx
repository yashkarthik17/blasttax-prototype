"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function AnalysisTypePage() {
  const router = useRouter();
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);
  const [selectedDepth, setSelectedDepth] = useState<string | null>(null);
  const [showDepth, setShowDepth] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const [animatedDepth, setAnimatedDepth] = useState<number[]>([]);

  useEffect(() => {
    [0, 1, 2].forEach((i) => {
      setTimeout(() => setAnimatedCards((p) => [...p, i]), 200 + i * 120);
    });
  }, []);

  function selectEntity(type: string) {
    setSelectedEntity(type);
    if (!showDepth) {
      setShowDepth(true);
      [0, 1, 2, 3].forEach((i) => {
        setTimeout(() => setAnimatedDepth((p) => [...p, i]), 150 + i * 100);
      });
    }
  }

  const entities = [
    { id: "individual", icon: "fa-user", label: "Individual (1040)", desc: "Personal income tax debt", gradient: "linear-gradient(135deg, #003DA5, #2563EB)", badge: "Most Common" },
    { id: "business", icon: "fa-building", label: "Business (941/940)", desc: "Payroll tax / employment tax", gradient: "linear-gradient(135deg, #0D9488, #2dd4bf)", badge: null },
    { id: "both", icon: "fa-users", label: "Both Individual & Business", desc: "I have both types of debt", gradient: "linear-gradient(135deg, #7C3AED, #a78bfa)", badge: null },
  ];

  const depths = [
    { id: "full", icon: "fa-compass", label: "Full Resolution Analysis", desc: "Complete assessment of all 13+ resolution options", iconBg: "linear-gradient(135deg, #EBF0FF, #dbeafe)", iconColor: "#003DA5", recommended: true },
    { id: "quick", icon: "fa-bolt", label: "Quick Eligibility Check", desc: "Fast screening for common resolution types", iconBg: "linear-gradient(135deg, #FEF3C7, #fde68a)", iconColor: "#D97706", recommended: false },
    { id: "penalty", icon: "fa-eraser", label: "Penalty Review Only", desc: "Check penalty abatement eligibility", iconBg: "linear-gradient(135deg, #F5F0FF, #ede9fe)", iconColor: "#7C3AED", recommended: false },
    { id: "csed", icon: "fa-clock", label: "CSED Calculator", desc: "Calculate when your debts expire", iconBg: "linear-gradient(135deg, #F0FDFA, #ccfbf1)", iconColor: "#0D9488", recommended: false },
  ];

  const canContinue = selectedEntity && selectedDepth;

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="New Analysis" backPath="/dashboard" />
        <div className="screen-content" style={{ gap: 0, paddingBottom: 24 }}>
          <div style={{ padding: "4px 0 20px" }}>
            <h1 className="text-h1 text-foreground" style={{ marginBottom: 6 }}>What type of tax debt?</h1>
            <p className="text-body-sm text-muted-light">This determines which resolution paths we evaluate</p>
          </div>

          <div>
            {entities.map((e, i) => (
              <div
                key={e.id}
                onClick={() => selectEntity(e.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "18px 16px",
                  background: selectedEntity === e.id ? "var(--brand-blue-light)" : "white",
                  border: `2px solid ${selectedEntity === e.id ? "var(--brand-blue)" : "var(--color-border)"}`,
                  borderRadius: "var(--radius-xl)", cursor: "pointer",
                  transition: "all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  position: "relative", overflow: "hidden", marginTop: i > 0 ? 10 : 0,
                  opacity: animatedCards.includes(i) ? 1 : 0,
                  transform: animatedCards.includes(i) ? "translateY(0)" : "translateY(16px)",
                  boxShadow: selectedEntity === e.id ? "0 0 0 3px rgba(0, 61, 165, 0.12)" : undefined,
                }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0, color: "white", background: e.gradient }}>
                  <i className={`fas ${e.icon}`} />
                </div>
                <div style={{ flex: 1, paddingRight: 8 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 3 }}>{e.label}</div>
                  <div style={{ fontSize: 13, color: "var(--color-muted-light)", lineHeight: 1.4 }}>{e.desc}</div>
                </div>
                <div style={{ width: 22, height: 22, border: `2px solid ${selectedEntity === e.id ? "var(--brand-blue)" : "var(--color-border)"}`, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: selectedEntity === e.id ? "var(--brand-blue)" : "transparent", marginLeft: "auto" }}>
                  {selectedEntity === e.id && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
                </div>
                {e.badge && (
                  <div style={{ position: "absolute", top: -1, right: 16, background: "linear-gradient(135deg, #003DA5, #2563EB)", color: "white", fontSize: 9, fontWeight: 700, padding: "3px 10px 4px", borderRadius: "0 0 8px 8px", letterSpacing: "0.04em", textTransform: "uppercase" }}>{e.badge}</div>
                )}
              </div>
            ))}
          </div>

          {/* Depth Section */}
          <div style={{ maxHeight: showDepth ? 600 : 0, overflow: "hidden", opacity: showDepth ? 1 : 0, transition: "max-height 0.6s cubic-bezier(0.25,0.1,0.25,1), opacity 0.4s cubic-bezier(0.25,0.1,0.25,1), margin 0.4s ease", marginTop: showDepth ? 24 : 0 }}>
            <div style={{ marginBottom: 14 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-placeholder)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Analysis Depth</div>
            </div>
            {depths.map((d, i) => (
              <div
                key={d.id}
                onClick={() => setSelectedDepth(d.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 12, padding: 14,
                  background: selectedDepth === d.id ? "var(--brand-blue-light)" : "white",
                  border: `1.5px solid ${selectedDepth === d.id ? "var(--brand-blue)" : "var(--color-border)"}`,
                  borderRadius: "var(--radius-lg)", cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  marginBottom: 10, position: "relative",
                  opacity: animatedDepth.includes(i) ? 1 : 0,
                  transform: animatedDepth.includes(i) ? "translateY(0)" : "translateY(12px)",
                  boxShadow: selectedDepth === d.id ? "0 0 0 3px rgba(0, 61, 165, 0.1)" : undefined,
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0, background: d.iconBg, color: d.iconColor }}>
                  <i className={`fas ${d.icon}`} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>{d.label}</span>
                    {d.recommended && (
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 3, fontSize: 9, fontWeight: 700, color: "var(--brand-blue)", background: "rgba(0, 61, 165, 0.08)", padding: "2px 7px", borderRadius: 6, textTransform: "uppercase", letterSpacing: "0.03em" }}>
                        <i className="fas fa-star" style={{ fontSize: 7 }} /> Recommended
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--color-muted-light)", lineHeight: 1.4 }}>{d.desc}</div>
                </div>
                <div style={{ width: 20, height: 20, border: `2px solid ${selectedDepth === d.id ? "var(--brand-blue)" : "var(--color-border)"}`, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: selectedDepth === d.id ? "var(--brand-blue)" : "transparent", marginLeft: "auto" }}>
                  {selectedDepth === d.id && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "white" }} />}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => canContinue && router.push("/analysis-welcome")}
            style={{
              marginTop: 20, width: "100%", padding: 15, border: "none", borderRadius: 9999,
              fontSize: 15, fontWeight: 700, cursor: canContinue ? "pointer" : "default",
              transition: "all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
              background: canContinue ? "linear-gradient(135deg, #00A651 0%, #10B981 100%)" : "var(--color-disabled)",
              color: canContinue ? "white" : "var(--color-placeholder)",
              pointerEvents: canContinue ? "auto" : "none",
              boxShadow: canContinue ? "0 8px 32px rgba(0, 166, 81, 0.2)" : "none",
              opacity: canContinue ? 1 : 0.6,
            }}
          >
            Continue <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
          </button>
        </div>
      </div>
      <BottomNav active="Analysis" />
    </PhoneFrame>
  );
}
