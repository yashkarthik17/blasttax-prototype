"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

interface Dependent {
  firstName: string;
  lastName: string;
  relationship: string;
  dob: string;
}

function emptyDep(): Dependent {
  return { firstName: "", lastName: "", relationship: "", dob: "" };
}

export default function DependentsPage() {
  const router = useRouter();
  const [selectedYN, setSelectedYN] = useState<string | null>(null);
  const [depCount, setDepCount] = useState(1);
  const [dependents, setDependents] = useState<Dependent[]>([emptyDep()]);

  const isValid = selectedYN !== null;

  const handleSelectYN = (val: string) => {
    setSelectedYN(val);
    if (val === "yes" && dependents.length === 0) {
      setDependents([emptyDep()]);
      setDepCount(1);
    }
  };

  const changeCount = useCallback((delta: number) => {
    setDepCount((prev) => {
      const next = Math.max(1, Math.min(10, prev + delta));
      setDependents((deps) => {
        if (next > deps.length) {
          return [...deps, ...Array.from({ length: next - deps.length }, () => emptyDep())];
        }
        return deps.slice(0, next);
      });
      return next;
    });
  }, []);

  const addDependent = () => {
    if (depCount >= 10) return;
    setDepCount((p) => p + 1);
    setDependents((d) => [...d, emptyDep()]);
  };

  const removeDependent = (idx: number) => {
    if (depCount <= 1) return;
    setDepCount((p) => p - 1);
    setDependents((d) => d.filter((_, i) => i !== idx));
  };

  const updateDep = (idx: number, field: keyof Dependent, val: string) => {
    setDependents((d) => d.map((dep, i) => (i === idx ? { ...dep, [field]: val } : dep)));
  };

  const depInputStyle: React.CSSProperties = {
    width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)",
    border: "1.5px solid var(--color-border)", borderRadius: 10,
    fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 500,
    color: "var(--color-fg)", outline: "none", transition: "all 0.2s ease",
    boxSizing: "border-box",
  };

  const depSelectStyle: React.CSSProperties = {
    ...depInputStyle, padding: "10px 30px 10px 12px",
    appearance: "none" as const, cursor: "pointer",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%238585A0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
  };

  const depLabelStyle: React.CSSProperties = {
    display: "block", fontSize: 11, fontWeight: 700, color: "var(--color-muted-light)",
    textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 4,
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ position: "relative" }}>
        <div className="floating-shapes">
          <div className="float-shape float-shape-1" />
          <div className="float-shape float-shape-2" />
        </div>

        {/* Header */}
        <div style={{ padding: "8px 20px 0", flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <button
              onClick={() => router.push("/filing")}
              style={{
                width: 40, height: 40, borderRadius: 12, border: "none",
                background: "var(--color-surface-alt)", color: "var(--color-fg)",
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, transition: "all 0.2s ease",
              }}
            >
              <i className="fas fa-arrow-left" />
            </button>
            <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 5 of 9</span>
          </div>
          <div className="progress-bar-wrapper">
            <div className="progress-bar-fill" style={{ width: "56%" }} />
          </div>
        </div>

        {/* Question */}
        <div className="stagger-item d1" style={{ padding: "24px 24px 0", position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontSize: "1.625rem", fontWeight: 800, color: "var(--color-fg)",
            lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 8,
          }}>
            Do you have any dependents?
          </h1>
          <p style={{ fontSize: "0.9375rem", color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 24 }}>
            Dependents affect your allowable expenses and resolution eligibility
          </p>
        </div>

        {/* Yes / No options */}
        <div style={{ padding: "0 24px", position: "relative", zIndex: 2 }}>
          {[
            { value: "yes", icon: "fa-check", title: "Yes, I have dependents", bg: "#E6F9EE", color: "#00A651" },
            { value: "no", icon: "fa-xmark", title: "No dependents", bg: "#F6F6FB", color: "#8585A0" },
          ].map((opt, i) => {
            const isSel = selectedYN === opt.value;
            return (
              <div
                key={opt.value}
                className={`stagger-item d${i + 1}`}
                onClick={() => handleSelectYN(opt.value)}
                style={{
                  display: "flex", alignItems: "center", gap: 14, padding: 16,
                  background: isSel ? "var(--color-primary-light)" : "white",
                  border: isSel ? "1.5px solid var(--color-primary)" : "1.5px solid var(--color-border)",
                  borderRadius: 14, cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  marginBottom: 10,
                  boxShadow: isSel ? "0 0 0 3px rgba(0,61,165,0.1)" : "none",
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 17, flexShrink: 0, background: opt.bg, color: opt.color,
                }}>
                  <i className={`fas ${opt.icon}`} />
                </div>
                <span style={{ flex: 1, fontSize: 15, fontWeight: 700, color: "var(--color-fg)" }}>
                  {opt.title}
                </span>
                <div style={{
                  width: 22, height: 22,
                  border: isSel ? "2px solid var(--color-primary)" : "2px solid var(--color-border)",
                  borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s ease",
                  background: isSel ? "var(--color-primary)" : "transparent",
                }}>
                  {isSel && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Counter (shown when Yes) */}
        {selectedYN === "yes" && (
          <div style={{ marginTop: 20, padding: "0 24px", position: "relative", zIndex: 2 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-fg)", marginBottom: 10, textAlign: "center" }}>
              How many dependents?
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 20, justifyContent: "center", marginBottom: 20 }}>
              <button
                onClick={() => changeCount(-1)}
                disabled={depCount <= 1}
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  border: "1.5px solid var(--color-border)", background: "white",
                  color: "var(--color-fg)", fontSize: 18, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s ease",
                  opacity: depCount <= 1 ? 0.3 : 1,
                }}
              >
                <i className="fas fa-minus" />
              </button>
              <span style={{ fontSize: "2rem", fontWeight: 800, color: "var(--color-primary)", minWidth: 40, textAlign: "center" }}>
                {depCount}
              </span>
              <button
                onClick={() => changeCount(1)}
                disabled={depCount >= 10}
                style={{
                  width: 44, height: 44, borderRadius: "50%",
                  border: "1.5px solid var(--color-border)", background: "white",
                  color: "var(--color-fg)", fontSize: 18, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.2s ease",
                  opacity: depCount >= 10 ? 0.3 : 1,
                }}
              >
                <i className="fas fa-plus" />
              </button>
            </div>
          </div>
        )}

        {/* Dependent cards */}
        {selectedYN === "yes" && (
          <div style={{ padding: "0 24px", position: "relative", zIndex: 2 }}>
            {dependents.map((dep, i) => (
              <div key={i} style={{
                background: "white", border: "1px solid var(--color-border)",
                borderRadius: 14, padding: 16, marginBottom: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-primary)" }}>
                    Dependent {i + 1}
                  </span>
                  {depCount > 1 && (
                    <button
                      onClick={() => removeDependent(i)}
                      style={{
                        fontSize: 12, color: "var(--color-muted-light)", cursor: "pointer",
                        border: "none", background: "none", padding: "4px 8px", borderRadius: 6,
                        transition: "all 0.2s ease",
                      }}
                    >
                      <i className="fas fa-trash-alt" /> Remove
                    </button>
                  )}
                </div>
                <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                  <div style={{ flex: 1 }}>
                    <label style={depLabelStyle}>First Name</label>
                    <input type="text" value={dep.firstName} onChange={(e) => updateDep(i, "firstName", e.target.value)} placeholder="First" style={depInputStyle} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={depLabelStyle}>Last Name</label>
                    <input type="text" value={dep.lastName} onChange={(e) => updateDep(i, "lastName", e.target.value)} placeholder="Last" style={depInputStyle} />
                  </div>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ flex: 1 }}>
                    <label style={depLabelStyle}>Relationship</label>
                    <select value={dep.relationship} onChange={(e) => updateDep(i, "relationship", e.target.value)} style={depSelectStyle}>
                      <option value="" disabled>Select</option>
                      <option>Son</option><option>Daughter</option><option>Stepchild</option>
                      <option>Foster Child</option><option>Parent</option><option>Other</option>
                    </select>
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={depLabelStyle}>Date of Birth</label>
                    <input type="date" value={dep.dob} onChange={(e) => updateDep(i, "dob", e.target.value)} style={{ ...depInputStyle, color: "var(--color-muted)" }} />
                  </div>
                </div>
              </div>
            ))}

            {/* Add another button */}
            <button
              onClick={addDependent}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                width: "100%", padding: 14,
                border: "2px dashed var(--color-border)", borderRadius: 14,
                background: "transparent", color: "var(--color-muted)",
                fontFamily: "var(--font-sans)", fontSize: 14, fontWeight: 600,
                cursor: "pointer", transition: "all 0.2s ease", marginBottom: 12,
              }}
            >
              <i className="fas fa-plus" style={{ fontSize: 14 }} />
              <span>Add another dependent</span>
            </button>
          </div>
        )}

        {/* Continue */}
        <div style={{ padding: "16px 24px 40px", flexShrink: 0, position: "relative", zIndex: 2 }}>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/income")}
            style={{
              fontSize: "1rem", padding: "16px 28px",
              opacity: isValid ? 1 : 0.5,
              pointerEvents: isValid ? "auto" : "none",
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
