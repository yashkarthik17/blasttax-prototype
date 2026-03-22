"use client";

import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";

const payments = [
  { date: "Mar 15, 2026", amount: "$49.00", status: "Paid", statusBg: "#E6F9EE", statusColor: "#00A651", iconBg: "#E6F9EE", iconColor: "#00A651", icon: "fa-check" },
  { date: "Feb 15, 2026", amount: "$49.00", status: "Paid", statusBg: "#E6F9EE", statusColor: "#00A651", iconBg: "#E6F9EE", iconColor: "#00A651", icon: "fa-check" },
  { date: "Jan 15, 2026", amount: "$49.00", status: "Paid", statusBg: "#E6F9EE", statusColor: "#00A651", iconBg: "#E6F9EE", iconColor: "#00A651", icon: "fa-check" },
  { date: "Apr 15, 2026", amount: "$49.00", status: "Pending", statusBg: "#FEF3C7", statusColor: "#D97706", iconBg: "#FEF3C7", iconColor: "#D97706", icon: "fa-clock" },
];

export default function BillingPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />

      <div className="screen-header stagger-item d1">
        <div className="screen-header-title" style={{ fontSize: "1.2rem", fontWeight: 800 }}>Billing</div>
        <button className="btn-icon"><i className="fas fa-gear" /></button>
      </div>

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 20 }}>

          {/* Current Plan Card */}
          <div className="plan-card stagger-item d2">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.05em" }}>Current Plan</div>
                <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1A1A2E", marginTop: 2 }}>Pro Plan</div>
              </div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "5px 12px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.68rem", fontWeight: 700, color: "#00A651" }}>
                <i className="fas fa-circle" style={{ fontSize: 5 }} /> Active
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 10 }}>
              <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "#003DA5" }}>$49</span>
              <span style={{ fontSize: "0.82rem", color: "#8585A0", fontWeight: 500 }}>/month</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.72rem", color: "#5C5C7A", fontWeight: 500 }}>
              <i className="far fa-calendar" style={{ fontSize: 11, color: "#8585A0" }} />
              Next billing: April 15, 2026
            </div>
          </div>

          {/* Quick Stats */}
          <div className="stagger-item d3" style={{ display: "flex", gap: 10 }}>
            <div className="stat-card">
              <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em" }}>Total Paid</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1A2E", marginTop: 4 }}>$294</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em" }}>Upcoming</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#2563EB", marginTop: 4 }}>$49</div>
            </div>
            <div className="stat-card">
              <div style={{ fontSize: "0.65rem", fontWeight: 600, color: "#8585A0", textTransform: "uppercase", letterSpacing: "0.04em" }}>Method</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1A1A2E", marginTop: 4 }}>
                <i className="fab fa-cc-visa" style={{ color: "#1A1F71" }} />
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div className="stagger-item d4">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Payment History</div>
            <div style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", padding: "4px 16px", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
              {payments.map((p, i) => (
                <div key={i} className="payment-item" style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 0", borderBottom: i < payments.length - 1 ? "1px solid #F0F0F5" : "none" }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: p.iconBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <i className={`fas ${p.icon}`} style={{ fontSize: 12, color: p.iconColor }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E" }}>Pro Plan — Monthly</div>
                    <div style={{ fontSize: "0.68rem", color: "#8585A0", marginTop: 1 }}>{p.date}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>{p.amount}</div>
                    <div style={{ display: "inline-flex", padding: "2px 8px", background: p.statusBg, borderRadius: 9999, fontSize: "0.6rem", fontWeight: 600, color: p.statusColor, marginTop: 2 }}>{p.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className="stagger-item d5">
            <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#B0B0C8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12, padding: "0 4px" }}>Payment Method</div>
            <div className="credit-card">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, position: "relative", zIndex: 1 }}>
                <i className="fab fa-cc-visa" style={{ fontSize: 28, color: "white", opacity: 0.9 }} />
                <div style={{ display: "flex", gap: 3 }}>
                  <div style={{ width: 24, height: 16, borderRadius: "50%", background: "rgba(255,255,255,0.2)" }} />
                  <div style={{ width: 24, height: 16, borderRadius: "50%", background: "rgba(255,255,255,0.15)", marginLeft: -10 }} />
                </div>
              </div>
              <div style={{ fontSize: "1rem", fontWeight: 600, letterSpacing: "0.15em", marginBottom: 16, position: "relative", zIndex: 1 }}>
                <span style={{ opacity: 0.5 }}>****</span>
                <span style={{ opacity: 0.5, marginLeft: 8 }}>****</span>
                <span style={{ opacity: 0.5, marginLeft: 8 }}>****</span>
                <span style={{ marginLeft: 8 }}>4242</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
                <div>
                  <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Card Holder</div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, marginTop: 2 }}>Jane Doe</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Expires</div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 600, marginTop: 2 }}>08/28</div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: 12 }}>
              <a style={{ fontSize: "0.78rem", fontWeight: 600, color: "#2563EB", textDecoration: "none", cursor: "pointer" }}>Change payment method</a>
            </div>
          </div>

          {/* View Plans Button */}
          <div className="stagger-item d6" style={{ paddingTop: 4 }}>
            <button
              onClick={() => router.push("/billing/plans")}
              style={{ width: "100%", padding: "14px 28px", background: "white", color: "#1A1A2E", border: "1.5px solid #E8E8F0", borderRadius: 9999, fontFamily: "inherit", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 1px 4px rgba(26,26,46,0.03)" }}
            >
              <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: 12, marginRight: 6 }} />
              View Plans
            </button>
          </div>
        </div>
      </div>

      <BottomNav />

      <style jsx>{`
        .plan-card {
          background: linear-gradient(145deg, #FAFAFF 0%, #EBF0FF 100%);
          border: 1.5px solid #003DA5;
          border-radius: 20px;
          padding: 22px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .plan-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(135deg, #003DA5, #2563EB);
        }
        .plan-card:hover {
          box-shadow: 0 8px 28px rgba(0,61,165,0.12);
        }
        .stat-card {
          flex: 1;
          background: white;
          border: 1px solid #E8E8F0;
          border-radius: 14px;
          padding: 14px;
          text-align: center;
          transition: all 0.25s ease;
        }
        .stat-card:hover {
          box-shadow: 0 4px 16px rgba(26,26,46,0.06);
          transform: translateY(-1px);
        }
        .payment-item {
          transition: all 0.2s ease;
        }
        .payment-item:hover {
          background: #F6F6FB;
          margin: 0 -12px;
          padding: 14px 12px;
          border-radius: 12px;
        }
        .credit-card {
          background: linear-gradient(135deg, #1A1A2E 0%, #2D2B3D 100%);
          border-radius: 16px;
          padding: 20px;
          color: white;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .credit-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(26,26,46,0.3);
        }
        .credit-card::before {
          content: '';
          position: absolute;
          top: -20px; right: -20px;
          width: 100px; height: 100px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
        }
        .credit-card::after {
          content: '';
          position: absolute;
          bottom: -15px; left: 30%;
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
        }
      `}</style>
    </PhoneFrame>
  );
}
