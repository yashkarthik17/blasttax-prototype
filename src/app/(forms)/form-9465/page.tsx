"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

export default function Form9465Page() {
  const router = useRouter();
  const [payment, setPayment] = useState(657);
  const [selectedMethod, setSelectedMethod] = useState(0);

  const total = 47250;
  const months = Math.ceil(total / payment);
  const targetDate = new Date(2026, 2);
  targetDate.setMonth(targetDate.getMonth() + months);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const payoffDate = `~${monthNames[targetDate.getMonth()]} ${targetDate.getFullYear()}`;
  const pct = ((payment - 657) / (2000 - 657)) * 100;

  const methods = [
    { title: "Direct Debit", recommended: true, desc: "Automatic withdrawal, lower setup fee" },
    { title: "Check / Money Order", recommended: false, desc: "Mail monthly payment to IRS" },
    { title: "Payroll Deduction", recommended: false, desc: "Deducted from your paycheck" },
  ];

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.back()} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Form 9465 &mdash; IA</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        {/* Progress */}
        <div className="stagger-item d1" style={{ padding: "0 20px 4px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#8585A0" }}>Step 1 of 5</span>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#003DA5" }}>20%</span>
          </div>
          <div style={{ height: 5, background: "#F0F0F5", borderRadius: 9999, overflow: "hidden" }}>
            <div style={{ width: "20%", height: "100%", background: "linear-gradient(135deg,#003DA5,#2563EB)", borderRadius: 9999 }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 100, gap: 18, paddingTop: 8 }}>
          <div className="stagger-item d2">
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", lineHeight: 1.3 }}>Set up your Installment Agreement</div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, padding: "5px 12px", background: "#EBF0FF", borderRadius: 9999, fontSize: "0.72rem", fontWeight: 600, color: "#003DA5" }}>
              <i className="fas fa-shield-halved" style={{ fontSize: 10 }} /> Streamlined IA (under $50,000)
            </div>
          </div>

          {/* Taxpayer Info */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>Taxpayer Info</div>
            <div style={{ background: "white", borderRadius: 16, padding: 16, border: "1px solid #E8E8F0" }}>
              {[{ l: "Name", v: "Jane M. Doe" }, { l: "SSN", v: "***-**-4589" }, { l: "Address", v: "1234 Elm St, Austin, TX" }].map((r, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: i < 2 ? 8 : 0 }}>
                  <span style={{ fontSize: "0.78rem", color: "#8585A0" }}>{r.l}</span>
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#1A1A2E", textAlign: "right", maxWidth: r.l === "Address" ? "55%" : undefined }}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Total Owed */}
          <div className="stagger-item d4" style={{ background: "linear-gradient(135deg,#FFF0F1,#FFF5F5)", borderRadius: 16, padding: 18, border: "1px solid rgba(230,57,70,0.1)" }}>
            <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>Total Amount Owed</div>
            <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "#E63946", letterSpacing: "-0.02em", lineHeight: 1 }}>$47,250</div>
          </div>

          {/* Payment Slider */}
          <div className="stagger-item d5">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Proposed Monthly Payment</div>
            <div style={{ background: "white", borderRadius: 20, padding: "24px 20px", border: "1px solid #E8E8F0" }}>
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <div style={{ fontSize: "2.2rem", fontWeight: 900, color: "#003DA5", letterSpacing: "-0.02em", lineHeight: 1 }}>${payment.toLocaleString()}</div>
                <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 6 }}>per month</div>
              </div>
              <div style={{ padding: "0 4px" }}>
                <input type="range" min={657} max={2000} value={payment} onChange={(e) => setPayment(parseInt(e.target.value))} style={{ width: "100%", height: 6, borderRadius: 9999, background: `linear-gradient(to right, #003DA5 0%, #2563EB ${pct}%, #F0F0F5 ${pct}%, #F0F0F5 100%)`, outline: "none", WebkitAppearance: "none", appearance: "none" }} />
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#B0B0C8" }}>$657/mo</span>
                  <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#B0B0C8" }}>$2,000/mo</span>
                </div>
              </div>
              <div style={{ marginTop: 16, padding: "12px 14px", background: "#EBF0FF", borderRadius: 12, textAlign: "center" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <i className="fas fa-calendar" style={{ fontSize: 11, color: "#003DA5" }} />
                  <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#003DA5" }}>Payoff in {months} months</span>
                </div>
                <div style={{ fontSize: "0.7rem", color: "#5C5C7A", marginTop: 4 }}>{payoffDate}</div>
              </div>
              <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 6, fontSize: "0.72rem", color: "#8585A0" }}>
                <i className="fas fa-lightbulb" style={{ fontSize: 10, color: "#F5A623" }} /> Minimum suggested: $657/mo (72-month term)
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="stagger-item d6">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Payment Method</div>
            {methods.map((m, i) => (
              <div key={i} onClick={() => setSelectedMethod(i)} style={{ display: "flex", gap: 14, padding: 16, background: selectedMethod === i ? "#EBF0FF" : "white", border: `1.5px solid ${selectedMethod === i ? "#003DA5" : "#E8E8F0"}`, borderRadius: 14, marginBottom: 8, cursor: "pointer", boxShadow: selectedMethod === i ? "0 0 0 3px rgba(0,61,165,0.1)" : "none", transition: "all 0.3s ease" }}>
                <div style={{ width: 22, height: 22, border: `2px solid ${selectedMethod === i ? "#003DA5" : "#D5D5E0"}`, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1, background: selectedMethod === i ? "#003DA5" : "transparent" }}>
                  {selectedMethod === i && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>{m.title}</span>
                    {m.recommended && <span style={{ display: "inline-flex", padding: "2px 7px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.58rem", fontWeight: 700, color: "#00A651" }}>RECOMMENDED</span>}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#8585A0", lineHeight: 1.4 }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Setup Fee Info */}
          <div className="stagger-item d7" style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "14px 16px", background: "#FFFBEB", border: "1px solid rgba(245,166,35,0.15)", borderRadius: 14 }}>
            <i className="fas fa-info-circle" style={{ fontSize: 14, color: "#D97706", flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#92400E", marginBottom: 4 }}>Setup Fee</div>
              <div style={{ fontSize: "0.75rem", color: "#92400E", lineHeight: 1.5 }}><strong>$22</strong> for low-income applicants &middot; <strong>$69</strong> for direct debit &middot; <strong>$178</strong> for standard</div>
            </div>
          </div>

          {/* Continue */}
          <div className="stagger-item d8" style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
            <div onClick={() => router.push("/confirm")} style={{ padding: 16, background: "linear-gradient(135deg,#00A651,#10B981)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,166,81,0.2)", cursor: "pointer" }}>
              Continue <i className="fas fa-arrow-right" style={{ marginLeft: 6, fontSize: 12 }} />
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="Resolve" />
    </PhoneFrame>
  );
}
