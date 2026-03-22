"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function HouseholdInfoPage() {
  const router = useRouter();
  const [memberCount, setMemberCount] = useState(1);
  const [vehicles, setVehicles] = useState(1);
  const [paymentType, setPaymentType] = useState("payments");
  const [healthInsurance, setHealthInsurance] = useState(true);
  const [showNewMember, setShowNewMember] = useState(false);
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);

  useEffect(() => {
    [0, 1, 2, 3, 4].forEach((i) => {
      setTimeout(() => setAnimatedCards((p) => [...p, i]), 300 + i * 150);
    });
  }, []);

  const cardStyle = (i: number) => ({
    background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: 16,
    boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 12,
    opacity: animatedCards.includes(i) ? 1 : 0,
    transform: animatedCards.includes(i) ? "translateY(0)" : "translateY(12px)",
    transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
  });

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px" }}>
          <div className="progress-bar-wrapper" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: "30%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 3 of 6</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-blue)" }}>Household</span>
          </div>
        </div>

        <div className="screen-content" style={{ paddingTop: 16 }}>
          <div style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Tell us about your household</h1>
            <p style={{ fontSize: 13, color: "var(--color-muted-light)", marginTop: 4, lineHeight: 1.5 }}>The IRS uses your household size to determine allowable living expenses</p>
          </div>

          {/* Household Size */}
          <div style={cardStyle(0)}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>Total Household Members</div>
                <div style={{ fontSize: 12, color: "var(--color-muted-light)", marginTop: 2 }}>Including yourself</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <button onClick={() => setMemberCount(Math.max(1, memberCount - 1))} style={{ width: 40, height: 40, borderRadius: 12, border: "1.5px solid var(--color-border)", background: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 16, color: "var(--color-foreground)" }}>
                  <i className="fas fa-minus" style={{ fontSize: 12 }} />
                </button>
                <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--color-foreground)", minWidth: 40, textAlign: "center" }}>{memberCount}</span>
                <button onClick={() => setMemberCount(Math.min(10, memberCount + 1))} style={{ width: 40, height: 40, borderRadius: 12, border: "1.5px solid var(--color-border)", background: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 16, color: "var(--color-foreground)" }}>
                  <i className="fas fa-plus" style={{ fontSize: 12 }} />
                </button>
              </div>
            </div>
          </div>

          {/* Members List */}
          <div style={cardStyle(1)}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 10 }}>Household Members</div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, background: "var(--color-surface-alt)", borderRadius: 12, marginBottom: 8 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, background: "var(--brand-blue-light)", color: "var(--brand-blue)" }}>
                <i className="fas fa-user" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>Jane Doe</div>
                <div style={{ fontSize: 11, color: "var(--color-muted-light)" }}>Taxpayer &middot; Age 40</div>
              </div>
              <span className="badge badge-primary">Primary</span>
            </div>
            <button onClick={() => setShowNewMember(!showNewMember)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 12, border: "2px dashed var(--color-border)", borderRadius: 12, cursor: "pointer", color: "var(--color-muted)", fontSize: 13, fontWeight: 600, background: "transparent", width: "100%", marginTop: 8 }}>
              <i className="fas fa-plus" style={{ fontSize: 11 }} /> Add family member
            </button>
            {showNewMember && (
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--color-border-light)" }}>
                <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Name</label>
                    <input type="text" className="field-input" placeholder="Full name" style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <div style={{ maxWidth: 80 }}>
                    <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Age</label>
                    <input type="number" placeholder="0" style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Location */}
          <div style={cardStyle(2)}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 10 }}>Location</div>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>County</label>
                <input type="text" defaultValue="Maricopa" style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>State</label>
                <select defaultValue="AZ" style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box", appearance: "none" }}>
                  <option>AZ</option><option>CA</option><option>TX</option><option>NY</option><option>FL</option>
                </select>
              </div>
            </div>
          </div>

          {/* Health */}
          <div style={cardStyle(3)}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 10 }}>Health & Medical</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)" }}>Health Insurance?</span>
              <div onClick={() => setHealthInsurance(!healthInsurance)} style={{ width: 48, height: 28, background: healthInsurance ? "var(--brand-green)" : "var(--color-border)", borderRadius: 14, position: "relative", cursor: "pointer", transition: "background 0.3s ease" }}>
                <div style={{ position: "absolute", width: 22, height: 22, background: "white", borderRadius: "50%", top: 3, left: healthInsurance ? 23 : 3, transition: "transform 0.3s ease, left 0.3s ease", boxShadow: "0 2px 4px rgba(0,0,0,0.15)" }} />
              </div>
            </div>
            <div style={{ marginTop: 4 }}>
              <label style={{ display: "block", fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 5 }}>Out-of-Pocket Medical Expenses</label>
              <input type="text" placeholder="$0" style={{ width: "100%", padding: "10px 12px", background: "var(--color-surface-alt)", border: "1.5px solid var(--color-border)", borderRadius: 10, fontSize: 14, fontWeight: 600, color: "var(--color-foreground)", outline: "none", boxSizing: "border-box" }} />
            </div>
          </div>

          {/* Vehicles */}
          <div style={cardStyle(4)}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 10 }}>Vehicles</div>
            <div style={{ display: "flex", gap: 10 }}>
              {[{ v: 0, l: "None" }, { v: 1, l: "Vehicle" }, { v: 2, l: "Vehicles" }].map((opt) => (
                <div key={opt.v} onClick={() => setVehicles(opt.v)} style={{ flex: 1, padding: "14px 10px", border: `1.5px solid ${vehicles === opt.v ? "var(--brand-blue)" : "var(--color-border)"}`, borderRadius: 12, textAlign: "center", cursor: "pointer", background: vehicles === opt.v ? "var(--brand-blue-light)" : "white", boxShadow: vehicles === opt.v ? "0 0 0 3px rgba(0, 61, 165, 0.1)" : "none", transition: "all 0.25s ease" }}>
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{opt.v === 2 ? "2+" : opt.v}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-muted-light)" }}>{opt.l}</div>
                </div>
              ))}
            </div>
            {vehicles > 0 && (
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--color-border-light)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <i className="fas fa-car" style={{ fontSize: 14, color: "var(--color-muted)" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-foreground)" }}>Vehicle 1</span>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {[{ id: "owned", icon: "fa-check-circle", color: "var(--color-success)", label: "Owned Outright" }, { id: "payments", icon: "fa-credit-card", color: "var(--brand-blue)", label: "Making Payments" }].map((pt) => (
                    <div key={pt.id} onClick={() => setPaymentType(pt.id)} style={{ flex: 1, padding: "10px 8px", border: `1.5px solid ${paymentType === pt.id ? "var(--brand-blue)" : "var(--color-border)"}`, borderRadius: 12, textAlign: "center", cursor: "pointer", background: paymentType === pt.id ? "var(--brand-blue-light)" : "white", transition: "all 0.25s ease" }}>
                      <i className={`fas ${pt.icon}`} style={{ fontSize: 14, color: pt.color, marginBottom: 2, display: "block" }} />
                      <div style={{ fontSize: 11, fontWeight: 600, color: "var(--color-foreground)" }}>{pt.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="alert alert-info">
            <i className="fas fa-circle-info" />
            <span>These details determine your IRS National and Local Standards allowances</span>
          </div>

          <div style={{ flex: 1, minHeight: 16 }} />

          <div style={{ padding: "12px 0 20px" }}>
            <button className="btn btn-primary" onClick={() => router.push("/transcript-upload")} style={{ fontSize: 15, padding: "16px 28px" }}>
              Continue <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
