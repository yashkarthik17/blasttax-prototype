"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ScreenHeader } from "@/components/ScreenHeader";

export default function PaymentPortalPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"irs" | "professional">("irs");
  const [showModal, setShowModal] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(0);

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="Make a Payment" backPath="/billing" />

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 120, gap: 0 }}>

          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.25 }}>Payment Center</h1>
          </div>
          <div className="stagger-item d2" style={{ marginBottom: 18 }}>
            <p style={{ fontSize: "0.8125rem", color: "#5C5C7A" }}>Manage all your tax and professional payments</p>
          </div>

          {/* Tab Bar */}
          <div className="stagger-item d3" style={{ marginBottom: 18 }}>
            <div style={{ display: "flex", background: "#F6F6FB", borderRadius: 12, padding: 3, gap: 2 }}>
              <button
                className={`tab-btn${activeTab === "irs" ? " active" : ""}`}
                onClick={() => setActiveTab("irs")}
              >
                <i className="fas fa-landmark" style={{ marginRight: 4, fontSize: 11 }} /> IRS Payments
              </button>
              <button
                className={`tab-btn${activeTab === "professional" ? " active" : ""}`}
                onClick={() => setActiveTab("professional")}
              >
                <i className="fas fa-user-tie" style={{ marginRight: 4, fontSize: 11 }} /> Professional Fees
              </button>
            </div>
          </div>

          {/* IRS Payments Tab */}
          {activeTab === "irs" && (
            <>
              <div className="stagger-item d4" style={{ marginBottom: 16 }}>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 10 }}>Active Obligations</p>

                {/* OIC Periodic */}
                <div style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 14, padding: 14, marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "#F5F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <i className="fas fa-calendar-days" style={{ fontSize: 14, color: "#7C3AED" }} />
                      </div>
                      <div>
                        <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>OIC Periodic Payment</p>
                        <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>$354/month</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <i className="fas fa-clock" style={{ fontSize: 10, color: "#F5A623" }} />
                      <p style={{ fontSize: "0.6875rem", color: "#92400E", fontWeight: 600 }}>Next due: Apr 15</p>
                    </div>
                    <button onClick={() => setShowModal(true)} style={{ padding: "6px 16px", background: "#00A651", color: "white", border: "none", borderRadius: 8, fontSize: "0.75rem", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Pay Now</button>
                  </div>
                </div>

                {/* Paid items */}
                {[
                  { name: "Application Fee", amount: "$205", icon: "fa-file-invoice" },
                  { name: "Initial Payment (20%)", amount: "$1,700", icon: "fa-hand-holding-dollar" },
                ].map((item) => (
                  <div key={item.name} style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 14, padding: 14, marginBottom: 10, opacity: 0.7 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <i className={`fas ${item.icon}`} style={{ fontSize: 14, color: "#00A651" }} />
                        </div>
                        <div>
                          <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>{item.name}</p>
                          <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{item.amount}</p>
                        </div>
                      </div>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 20, fontSize: "0.6875rem", fontWeight: 700, background: "#E6F9EE", color: "#166534" }}>
                        <i className="fas fa-check" style={{ fontSize: 8 }} /> Paid
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="stagger-item d5" style={{ marginBottom: 16 }}>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 10 }}>Payment Methods</p>
                {[
                  { icon: "fa-university", color: "#003DA5", name: "Direct Pay (IRS.gov)", sub: "Free, instant" },
                  { icon: "fa-building-columns", color: "#7C3AED", name: "EFTPS", sub: "Business tax payments" },
                  { icon: "fa-credit-card", color: "#D97706", name: "Credit/Debit Card", sub: "Processing fee 1.87%" },
                  { icon: "fa-envelope", color: "#0D9488", name: "Check/Money Order", sub: "Mail to IRS" },
                ].map((m) => (
                  <div key={m.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#F6F6FB", borderRadius: 10, marginBottom: 6 }}>
                    <i className={`fas ${m.icon}`} style={{ fontSize: 14, color: m.color }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E" }}>{m.name}</p>
                      <p style={{ fontSize: "0.625rem", color: "#5C5C7A" }}>{m.sub}</p>
                    </div>
                    <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: 10, color: "#B0B0C8" }} />
                  </div>
                ))}
              </div>

              {/* Recent Payments */}
              <div className="stagger-item d6">
                <div style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <i className="fas fa-clock-rotate-left" style={{ fontSize: 13, color: "#5C5C7A" }} />
                    <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>Recent Payments</span>
                  </div>
                  {[
                    { name: "OIC Periodic Payment", date: "Mar 15, 2026", conf: "Conf #IRS-7829341", amount: "$354" },
                    { name: "Initial Payment (20%)", date: "Feb 28, 2026", conf: "Conf #IRS-6541098", amount: "$1,700" },
                    { name: "Application Fee", date: "Feb 28, 2026", conf: "Conf #IRS-6541097", amount: "$205" },
                  ].map((p, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 2 ? "1px solid #E8E8F0" : "none" }}>
                      <div>
                        <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E" }}>{p.name}</p>
                        <p style={{ fontSize: "0.625rem", color: "#5C5C7A" }}>{p.date} &middot; {p.conf}</p>
                      </div>
                      <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>{p.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Professional Fees Tab */}
          {activeTab === "professional" && (
            <>
              {/* Outstanding */}
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 10 }}>Outstanding</p>
                <div style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 14, padding: 14, marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "#FFF7ED", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <i className="fas fa-file-pen" style={{ fontSize: 14, color: "#D97706" }} />
                      </div>
                      <div>
                        <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>Form Preparation</p>
                        <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>$750</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <i className="fas fa-clock" style={{ fontSize: 10, color: "#F5A623" }} />
                      <p style={{ fontSize: "0.6875rem", color: "#92400E", fontWeight: 600 }}>Due Mar 20</p>
                    </div>
                    <button onClick={() => setShowModal(true)} style={{ padding: "6px 16px", background: "#00A651", color: "white", border: "none", borderRadius: 8, fontSize: "0.75rem", fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Pay Now</button>
                  </div>
                </div>
              </div>

              {/* Paid */}
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 10 }}>Paid</p>
                {[
                  { name: "Initial Consultation", amount: "$250", date: "Paid Feb 15", icon: "fa-comments" },
                  { name: "Case Analysis", amount: "$500", date: "Paid Mar 1", icon: "fa-magnifying-glass-chart" },
                ].map((item) => (
                  <div key={item.name} style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 14, padding: 14, marginBottom: 10, opacity: 0.7 }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 36, height: 36, borderRadius: 10, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <i className={`fas ${item.icon}`} style={{ fontSize: 14, color: "#00A651" }} />
                        </div>
                        <div>
                          <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>{item.name}</p>
                          <p style={{ fontSize: "0.6875rem", color: "#5C5C7A" }}>{item.amount} &middot; {item.date}</p>
                        </div>
                      </div>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 20, fontSize: "0.6875rem", fontWeight: 700, background: "#E6F9EE", color: "#166534" }}>
                        <i className="fas fa-check" style={{ fontSize: 8 }} /> Paid
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Methods for Professional */}
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E", marginBottom: 10 }}>Payment Methods</p>
                {[
                  { iconClass: "fab fa-cc-visa", iconSize: 18, color: "#1A1F71", name: "Visa \u2022\u2022\u2022\u2022 4242", sub: "Credit card on file", badge: "Default" },
                  { iconClass: "fas fa-building-columns", iconSize: 14, color: "#003DA5", name: "ACH Bank Transfer", sub: "Direct from bank" },
                  { iconClass: "fas fa-calendar-check", iconSize: 14, color: "#7C3AED", name: "Payment Plan", sub: "Split into installments" },
                ].map((m) => (
                  <div key={m.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: "#F6F6FB", borderRadius: 10, marginBottom: 6 }}>
                    <i className={m.iconClass} style={{ fontSize: m.iconSize, color: m.color }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E" }}>{m.name}</p>
                      <p style={{ fontSize: "0.625rem", color: "#5C5C7A" }}>{m.sub}</p>
                    </div>
                    {m.badge && <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 20, fontSize: "0.6875rem", fontWeight: 700, background: "#EBF0FF", color: "#003DA5" }}>{m.badge}</span>}
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ padding: "14px 16px", background: "linear-gradient(135deg, #EBF0FF, #E6F9EE)", border: "1px solid rgba(0,61,165,0.1)", borderRadius: 14 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", fontWeight: 600 }}>Total Paid</p>
                      <p style={{ fontSize: "1.125rem", fontWeight: 900, color: "#00A651" }}>$750</p>
                    </div>
                    <div style={{ width: 1, height: 36, background: "#E8E8F0" }} />
                    <div style={{ textAlign: "right" }}>
                      <p style={{ fontSize: "0.6875rem", color: "#5C5C7A", fontWeight: 600 }}>Remaining</p>
                      <p style={{ fontSize: "1.125rem", fontWeight: 900, color: "#1A1A2E" }}>$2,750</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <BottomNav />

      {/* Payment Modal */}
      {showModal && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(26,26,46,0.5)", zIndex: 100, borderRadius: 36, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div className="pay-modal" style={{ background: "white", borderRadius: "24px 24px 36px 36px", padding: "24px 20px 32px", width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#1A1A2E" }}>Pay Now</h3>
              <button onClick={() => setShowModal(false)} style={{ width: 28, height: 28, borderRadius: "50%", background: "#F6F6FB", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="fas fa-xmark" style={{ fontSize: 12, color: "#5C5C7A" }} />
              </button>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5C5C7A", display: "block", marginBottom: 6 }}>Amount</label>
              <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 14px", border: "1.5px solid #E8E8F0", borderRadius: 12, background: "#F6F6FB" }}>
                <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E" }}>$</span>
                <input type="text" defaultValue="354.00" style={{ border: "none", background: "transparent", fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", width: "100%", outline: "none", fontFamily: "inherit" }} />
              </div>
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "#5C5C7A", display: "block", marginBottom: 8 }}>Payment Method</label>
              {[
                { icon: "fas fa-university", iconSize: 14, color: "#003DA5", name: "Direct Pay", sub: "Free, instant" },
                { icon: "fab fa-cc-visa", iconSize: 18, color: "#1A1F71", name: "Visa \u2022\u2022\u2022\u2022 4242", sub: "1.87% fee" },
              ].map((method, i) => (
                <div
                  key={method.name}
                  onClick={() => setSelectedMethod(i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: 12,
                    border: `1.5px solid ${selectedMethod === i ? "#003DA5" : "#E8E8F0"}`,
                    borderRadius: 12,
                    cursor: "pointer",
                    marginBottom: 8,
                    background: selectedMethod === i ? "#EBF0FF" : "white",
                  }}
                >
                  <div style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${selectedMethod === i ? "#003DA5" : "#E8E8F0"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {selectedMethod === i && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#003DA5" }} />}
                  </div>
                  <i className={method.icon} style={{ fontSize: method.iconSize, color: method.color }} />
                  <div>
                    <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E" }}>{method.name}</p>
                    <p style={{ fontSize: "0.625rem", color: "#5C5C7A" }}>{method.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <button style={{ width: "100%", padding: 14, background: "#00A651", color: "white", border: "none", borderRadius: 14, fontSize: "0.9375rem", fontWeight: 800, cursor: "pointer", fontFamily: "inherit" }}>
              <i className="fas fa-lock" style={{ marginRight: 6 }} /> Confirm Payment
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .tab-btn {
          flex: 1;
          padding: 10px 12px;
          border: none;
          background: transparent;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #5C5C7A;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .tab-btn.active {
          background: white;
          color: #003DA5;
          box-shadow: 0 2px 8px rgba(26,26,46,0.08);
        }
        .pay-modal {
          animation: slideUp 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </PhoneFrame>
  );
}
