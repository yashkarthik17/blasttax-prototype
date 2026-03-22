"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const accordions = [
  { id: "bank", icon: "fa-university", bg: "linear-gradient(135deg,#EBF0FF,#D6E2FF)", color: "#003DA5", title: "Business Bank Accounts", defaultOpen: true },
  { id: "receivable", icon: "fa-file-invoice-dollar", bg: "linear-gradient(135deg,#E6F9EE,#CCFBF1)", color: "#00A651", title: "Accounts Receivable", sub: "Total: $8,500" },
  { id: "assets", icon: "fa-box", bg: "linear-gradient(135deg,#F5F0FF,#E8DEFF)", color: "#7C3AED", title: "Business Assets", sub: "Equipment, inventory, vehicles" },
  { id: "income", icon: "fa-chart-line", bg: "linear-gradient(135deg,#FFFBEB,#FEF3C7)", color: "#D97706", title: "Business Income", sub: "Monthly gross receipts" },
  { id: "expenses", icon: "fa-receipt", bg: "linear-gradient(135deg,#FFF0F1,#FECDD3)", color: "#E63946", title: "Business Expenses", sub: "Rent, utilities, payroll, etc." },
];

export default function Form433BPage() {
  const router = useRouter();
  const [openSections, setOpenSections] = useState<string[]>(["bank"]);

  const toggle = (id: string) => {
    setOpenSections((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.back()} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Form 433-B &mdash; Business Financials</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        <div className="stagger-item d1" style={{ padding: "0 20px 4px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#8585A0" }}>Step 2 of 5</span>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#003DA5" }}>40%</span>
          </div>
          <div style={{ height: 5, background: "#F0F0F5", borderRadius: 9999, overflow: "hidden" }}>
            <div style={{ width: "40%", height: "100%", background: "linear-gradient(135deg,#003DA5,#2563EB)", borderRadius: 9999 }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 40, gap: 16, paddingTop: 8 }}>
          <div className="stagger-item d2">
            <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", lineHeight: 1.3 }}>Business Financial Information</div>
            <div style={{ fontSize: "0.82rem", color: "#8585A0", marginTop: 6, lineHeight: 1.5 }}>Required for business tax debt resolutions</div>
          </div>

          {/* Business Info Card */}
          <div className="stagger-item d3" style={{ background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0" }}>
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Business Details</div>
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#5C5C7A", marginBottom: 6 }}>Business Name</div>
              <input type="text" defaultValue="Doe's Consulting LLC" readOnly style={{ width: "100%", padding: "12px 16px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }} />
            </div>
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#5C5C7A", marginBottom: 6 }}>EIN</div>
              <div style={{ background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 12, padding: "12px 16px", position: "relative" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E", letterSpacing: "0.04em" }}>**-***4321</span>
                <i className="fas fa-lock" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#B0B0C8", fontSize: 12 }} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#5C5C7A", marginBottom: 6 }}>Business Type</div>
              <select defaultValue="LLC" style={{ width: "100%", padding: "12px 16px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }}>
                <option>Sole Proprietorship</option>
                <option>LLC</option>
                <option>S-Corp</option>
                <option>C-Corp</option>
                <option>Partnership</option>
              </select>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="stagger-item d4">
            {accordions.map((acc) => (
              <div key={acc.id} style={{ background: "white", border: "1px solid #E8E8F0", borderRadius: 16, overflow: "hidden", marginBottom: 10 }}>
                <div onClick={() => toggle(acc.id)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", cursor: "pointer" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: acc.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`fas ${acc.icon}`} style={{ fontSize: 14, color: acc.color }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>{acc.title}</div>
                    {acc.sub && <div style={{ fontSize: "0.7rem", color: "#8585A0" }}>{acc.sub}</div>}
                  </div>
                  <i className="fas fa-chevron-down" style={{ fontSize: 11, color: "#B0B0C8", transition: "transform 0.3s ease", transform: openSections.includes(acc.id) ? "rotate(180deg)" : "none" }} />
                </div>
                {openSections.includes(acc.id) && (
                  <div style={{ padding: "0 16px 14px" }}>
                    {acc.id === "bank" && (
                      <>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", background: "#F6F6FB", borderRadius: 10, marginBottom: 8 }}>
                          <div><div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>Chase Business Checking</div><div style={{ fontSize: "0.7rem", color: "#8585A0" }}>****6789</div></div>
                          <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>$12,340</span>
                        </div>
                        <button style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#EBF0FF", border: "none", borderRadius: 9999, fontFamily: "inherit", fontSize: "0.72rem", fontWeight: 700, color: "#003DA5", cursor: "pointer" }}>
                          <i className="fas fa-plus" style={{ fontSize: 9 }} /> Add Account
                        </button>
                      </>
                    )}
                    {acc.id === "receivable" && (
                      <div style={{ marginTop: 8 }}>
                        <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#5C5C7A", marginBottom: 6 }}>Total Outstanding</div>
                        <input type="text" defaultValue="$8,500" placeholder="$0" style={{ width: "100%", padding: "12px 16px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }} />
                      </div>
                    )}
                    {acc.id === "assets" && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 4 }}>
                        {[{ n: "Equipment", v: "$15,000" }, { n: "Inventory", v: "$6,200" }, { n: "Vehicles", v: "$8,500" }].map((a, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "#F6F6FB", borderRadius: 10 }}>
                            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>{a.n}</span>
                            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{a.v}</span>
                          </div>
                        ))}
                        <button style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#EBF0FF", border: "none", borderRadius: 9999, fontFamily: "inherit", fontSize: "0.72rem", fontWeight: 700, color: "#003DA5", cursor: "pointer" }}>
                          <i className="fas fa-plus" style={{ fontSize: 9 }} /> Add Asset
                        </button>
                      </div>
                    )}
                    {acc.id === "income" && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 4 }}>
                        {[{ l: "Monthly Gross Receipts", v: "$18,500" }, { l: "Cost of Goods Sold", v: "$4,200" }].map((f, i) => (
                          <div key={i}>
                            <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#5C5C7A", marginBottom: 6 }}>{f.l}</div>
                            <input type="text" defaultValue={f.v} placeholder="$0" style={{ width: "100%", padding: "12px 16px", background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 12, fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E", outline: "none", boxSizing: "border-box" }} />
                          </div>
                        ))}
                      </div>
                    )}
                    {acc.id === "expenses" && (
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 4 }}>
                        {[{ n: "Rent", v: "$3,200" }, { n: "Utilities", v: "$450" }, { n: "Insurance", v: "$380" }, { n: "Payroll", v: "$6,800" }, { n: "Supplies", v: "$920" }].map((e, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px", background: "#F6F6FB", borderRadius: 10 }}>
                            <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>{e.n}</span>
                            <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{e.v}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Net Business Income */}
          <div className="stagger-item d5" style={{ background: "linear-gradient(135deg,#EBF0FF,#F5F0FF)", borderRadius: 16, padding: 16, border: "1px solid rgba(0,61,165,0.12)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5C5C7A" }}>Net Business Income</span>
              <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "#003DA5" }}>$2,550/mo</span>
            </div>
            <div style={{ height: 1, background: "rgba(0,61,165,0.1)", margin: "8px 0" }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#5C5C7A" }}>Total Business Equity</span>
              <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "#1A1A2E" }}>$29,700</span>
            </div>
          </div>

          <div className="stagger-item d6" style={{ paddingTop: 4 }}>
            <div onClick={() => router.push("/confirm")} style={{ padding: 16, background: "linear-gradient(135deg,#00A651,#10B981)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,166,81,0.2)", cursor: "pointer" }}>
              Continue <i className="fas fa-arrow-right" style={{ marginLeft: 6, fontSize: 12 }} />
            </div>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
