"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

export default function Form656Page() {
  const router = useRouter();
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [offerAmount, setOfferAmount] = useState("8,500");
  const [infoOpen, setInfoOpen] = useState(false);

  const handleOfferChange = (val: string) => {
    const cleaned = val.replace(/[^0-9]/g, "");
    setOfferAmount(cleaned ? parseInt(cleaned).toLocaleString() : "");
  };

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-header" style={{ padding: "14px 20px 12px" }}>
          <div onClick={() => router.push("/results")} style={{ width: 36, height: 36, borderRadius: 12, background: "#F6F6FB", border: "1px solid #E8E8F0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
            <i className="fas fa-arrow-left" style={{ fontSize: 14, color: "#5C5C7A" }} />
          </div>
          <div style={{ flex: 1, fontSize: "0.95rem", fontWeight: 800, color: "#1A1A2E", textAlign: "center" }}>Form 656 &mdash; OIC</div>
          <div style={{ width: 36, flexShrink: 0 }} />
        </div>

        {/* Progress bar */}
        <div className="stagger-item d1" style={{ padding: "0 20px 4px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "#8585A0" }}>Step 1 of 8</span>
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#003DA5" }}>12%</span>
          </div>
          <div style={{ height: 5, background: "#F0F0F5", borderRadius: 9999, overflow: "hidden" }}>
            <div style={{ width: "12.5%", height: "100%", background: "linear-gradient(135deg,#003DA5,#2563EB)", borderRadius: 9999 }} />
          </div>
        </div>

        <div className="screen-content" style={{ paddingBottom: 100, gap: 18, paddingTop: 8 }}>
          <div className="stagger-item d2">
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.01em", lineHeight: 1.3 }}>Let&apos;s prepare your Offer in Compromise</div>
            <div style={{ fontSize: "0.82rem", color: "#8585A0", marginTop: 6, lineHeight: 1.5 }}>We&apos;ve pre-filled your info from onboarding. Just review and continue.</div>
          </div>

          {/* Taxpayer Information */}
          <div className="stagger-item d3">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Taxpayer Information</div>
            {[
              { label: "Full Name", value: "Jane M. Doe" },
              { label: "Social Security Number", value: "***-**-4589" },
              { label: "Address", value: "1234 Elm Street, Austin, TX 78701" },
            ].map((field, i) => (
              <div key={i} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: "0.72rem", fontWeight: 600, color: "#5C5C7A", marginBottom: 6 }}>{field.label}</div>
                <div style={{ background: "#F6F6FB", border: "1.5px solid #E8E8F0", borderRadius: 12, padding: "12px 16px", position: "relative" }}>
                  <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#1A1A2E", letterSpacing: field.label === "Social Security Number" ? "0.05em" : undefined }}>{field.value}</span>
                  <i className="fas fa-lock" style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "#B0B0C8", fontSize: 12 }} />
                </div>
              </div>
            ))}
          </div>

          {/* Offer Amount */}
          <div className="stagger-item d4">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Offer Amount</div>
            <div style={{ background: "white", borderRadius: 16, padding: 20, border: "1.5px solid #E8E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: "2rem", fontWeight: 900, color: "#B0B0C8" }}>$</span>
                <input type="text" value={offerAmount} onChange={(e) => handleOfferChange(e.target.value)} style={{ fontSize: "2rem", fontWeight: 900, color: "#1A1A2E", letterSpacing: "-0.02em", background: "transparent", border: "none", outline: "none", width: "100%", fontFamily: "inherit", caretColor: "#003DA5" }} />
              </div>
              <div style={{ fontSize: "0.72rem", color: "#8585A0", marginTop: 6 }}>
                <i className="fas fa-calculator" style={{ fontSize: 10, marginRight: 3, color: "#003DA5" }} /> Based on your financial analysis
              </div>
            </div>
          </div>

          {/* Payment Option */}
          <div className="stagger-item d5">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Payment Option</div>
            {[
              { title: "Lump Sum", recommended: true, desc: "20% upfront ($1,700), remainder within 5 months of acceptance" },
              { title: "Periodic Payment", recommended: false, desc: "Monthly payments over 6-24 months during IRS review" },
            ].map((opt, i) => (
              <div key={i} onClick={() => setSelectedPayment(i)} style={{ display: "flex", gap: 14, padding: 18, background: selectedPayment === i ? "#EBF0FF" : "white", border: `1.5px solid ${selectedPayment === i ? "#003DA5" : "#E8E8F0"}`, borderRadius: 16, marginBottom: 10, cursor: "pointer", boxShadow: selectedPayment === i ? "0 0 0 3px rgba(0,61,165,0.1)" : "none", transition: "all 0.3s ease" }}>
                <div style={{ width: 22, height: 22, border: `2px solid ${selectedPayment === i ? "#003DA5" : "#D5D5E0"}`, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2, background: selectedPayment === i ? "#003DA5" : "transparent" }}>
                  {selectedPayment === i && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#1A1A2E" }}>{opt.title}</span>
                    {opt.recommended && <span style={{ display: "inline-flex", padding: "2px 8px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.6rem", fontWeight: 700, color: "#00A651" }}>RECOMMENDED</span>}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#8585A0", lineHeight: 1.5 }}>{opt.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Helpful Info */}
          <div className="stagger-item d6">
            <div onClick={() => setInfoOpen(!infoOpen)} style={{ background: "linear-gradient(135deg,#F5F0FF,#EEF2FF)", borderRadius: 16, border: "1px solid rgba(124,58,237,0.1)", overflow: "hidden", cursor: "pointer" }}>
              <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 10, background: "rgba(124,58,237,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <i className="fas fa-lightbulb" style={{ fontSize: 14, color: "#7C3AED" }} />
                </div>
                <div style={{ flex: 1, fontSize: "0.82rem", fontWeight: 600, color: "#5C5C7A" }}>How is the offer amount calculated?</div>
                <i className="fas fa-chevron-down" style={{ fontSize: 10, color: "#B0B0C8", transition: "transform 0.3s ease", transform: infoOpen ? "rotate(180deg)" : "none" }} />
              </div>
              {infoOpen && (
                <div style={{ padding: "0 16px 14px" }}>
                  <div style={{ fontSize: "0.78rem", color: "#8585A0", lineHeight: 1.6 }}>
                    The IRS uses a formula based on your <strong style={{ color: "#5C5C7A" }}>Reasonable Collection Potential (RCP)</strong>: your assets&apos; equity plus future disposable income. Our AI analyzed your financial data to calculate the lowest defensible offer amount.
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="stagger-item d7" style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 4 }}>
            <div onClick={() => router.push("/confirm")} style={{ padding: 16, background: "linear-gradient(135deg,#00A651,#10B981)", borderRadius: 9999, textAlign: "center", color: "white", fontSize: "0.88rem", fontWeight: 700, boxShadow: "0 8px 24px rgba(0,166,81,0.2)", cursor: "pointer" }}>
              Continue <i className="fas fa-arrow-right" style={{ marginLeft: 6, fontSize: 12 }} />
            </div>
            <div style={{ padding: 12, textAlign: "center", color: "#8585A0", fontSize: "0.82rem", fontWeight: 600, cursor: "pointer" }}>
              <i className="fas fa-bookmark" style={{ marginRight: 6, fontSize: 11 }} /> Save & Exit
            </div>
          </div>
        </div>
      </div>
      <BottomNav active="Resolve" />
    </PhoneFrame>
  );
}
