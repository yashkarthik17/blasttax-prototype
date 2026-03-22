"use client";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function CompatibilityMatrixPage() {
  const router = useRouter();

  const simultaneous = ["IA + Penalty Abatement", "IA + Innocent Spouse (pending)", "IA + Amended Return", "CNC + Penalty Abatement", "CDP + Any collection alternative"];
  const exclusive = [
    { pair: "IA + OIC", note: "Must terminate IA first" }, { pair: "IA + CNC", note: "Paying vs. can't pay conflict" },
    { pair: "OIC + CNC", note: "Both address inability to pay" }, { pair: "OIC + Bankruptcy", note: "TC 520 blocks OIC processing" },
  ];
  const sequential = [
    { pair: "Penalty Abatement \u2192 OIC", note: "Reduce balance first, then offer" },
    { pair: "Amended Return \u2192 OIC", note: "Wait for processing before filing" },
    { pair: "Innocent Spouse \u2192 IA/OIC", note: "Resolve allocation first" },
  ];
  const special = [
    { ok: true, text: "Different resolutions for different tax years", note: "CNC for 2020, IA for 2023 -- allowed" },
    { ok: true, text: "Business 941 + Individual 1040", note: "Separate tracks, separate resolutions" },
    { ok: false, text: "Cannot have two IAs for same tax type", note: "Only one active IA per entity type" },
  ];

  const SectionLabel = ({ color, label, sub }: { color: string; label: string; sub: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, marginTop: 4 }}>
      <div style={{ width: 8, height: 8, borderRadius: "50%", background: color, flexShrink: 0 }} />
      <span style={{ fontSize: "0.75rem", fontWeight: 700, color, textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</span>
      <span style={{ fontSize: "0.6875rem", color: "var(--color-muted-light)", fontWeight: 500 }}>{sub}</span>
    </div>
  );

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <ScreenHeader title="Can I Combine?" backPath="/strategic-plays" />
        <div className="screen-content" style={{ paddingBottom: 100 }}>
          <div style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Resolution Compatibility</h1>
          </div>
          <div style={{ marginBottom: 22 }}>
            <p style={{ fontSize: "0.8125rem", color: "var(--color-muted)" }}>Not all resolutions can run together</p>
          </div>

          {/* Simultaneous */}
          <div style={{ marginBottom: 16 }}>
            <SectionLabel color="#00A651" label="Simultaneous" sub="Can coexist" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {simultaneous.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", background: "var(--color-surface)", border: "1px solid var(--color-border-light)", borderRadius: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-check" style={{ fontSize: 11, color: "#00A651" }} />
                  </div>
                  <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-foreground)" }}>{s}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mutually Exclusive */}
          <div style={{ marginBottom: 16 }}>
            <SectionLabel color="#E63946" label="Mutually Exclusive" sub="Cannot coexist" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {exclusive.map((e, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", background: "var(--color-surface)", border: "1px solid rgba(230,57,70,0.12)", borderRadius: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#FFF0F1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-xmark" style={{ fontSize: 12, color: "#E63946" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-foreground)" }}>{e.pair}</p>
                    <p style={{ fontSize: "0.6875rem", color: "var(--color-muted-light)" }}>{e.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sequential */}
          <div style={{ marginBottom: 16 }}>
            <SectionLabel color="#2563EB" label="Sequential" sub="Do one, then the other" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {sequential.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", background: "var(--color-surface)", border: "1px solid rgba(37,99,235,0.12)", borderRadius: 12 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-arrow-right" style={{ fontSize: 11, color: "#2563EB" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-foreground)" }}>{s.pair}</p>
                    <p style={{ fontSize: "0.6875rem", color: "var(--color-muted-light)" }}>{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Special Cases */}
          <div style={{ marginBottom: 16 }}>
            <SectionLabel color="#7C3AED" label="Special Cases" sub="" />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {special.map((s, i) => (
                <div key={i} style={{ padding: "14px", background: "var(--color-surface)", border: "1px solid var(--color-border-light)", borderRadius: 14, display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <i className={`fas ${s.ok ? "fa-circle-check" : "fa-circle-xmark"}`} style={{ color: s.ok ? "#00A651" : "#E63946", fontSize: 14, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-foreground)" }}>{s.text}</p>
                    <p style={{ fontSize: "0.6875rem", color: "var(--color-muted-light)", marginTop: 2 }}>{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 20, textAlign: "center" }}>
            <a onClick={() => router.push("/strategic-plays")} style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-muted)", cursor: "pointer" }}>
              <i className="fas fa-arrow-left" style={{ fontSize: 10, marginRight: 4 }} /> Back to Strategy
            </a>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
