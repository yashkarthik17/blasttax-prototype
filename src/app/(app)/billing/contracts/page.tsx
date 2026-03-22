"use client";

import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { ScreenHeader } from "@/components/ScreenHeader";

const feeStructure = [
  { name: "Initial Consultation", amount: "$250", status: "Paid", statusBg: "#E6F9EE", statusColor: "#166534" },
  { name: "Case Analysis", amount: "$500", status: "Paid", statusBg: "#E6F9EE", statusColor: "#166534" },
  { name: "Form Preparation", amount: "$750", status: "Due", statusBg: "#FFF7ED", statusColor: "#92400E", sub: "Due on completion" },
  { name: "IRS Submission", amount: "$500", status: "Upcoming", statusBg: "#F6F6FB", statusColor: "#5C5C7A", sub: "Due on submission", muted: true },
  { name: "Representation", amount: "$1,000", status: "Upcoming", statusBg: "#F6F6FB", statusColor: "#5C5C7A", sub: "Due on engagement", muted: true },
  { name: "Post-Resolution", amount: "$500", status: "Upcoming", statusBg: "#F6F6FB", statusColor: "#5C5C7A", sub: "Due on resolution", muted: true },
];

const documents = [
  { name: "Engagement Letter", icon: "fa-file-contract", status: "Signed" },
  { name: "Form 2848 (POA)", icon: "fa-file-shield", status: "Signed" },
  { name: "Fee Agreement", icon: "fa-file-invoice-dollar", status: "Signed" },
];

export default function ContractsPage() {
  const router = useRouter();

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="Service Agreement" backPath="/billing" />

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 0 }}>

          {/* Title */}
          <div className="stagger-item d1" style={{ marginBottom: 4 }}>
            <h1 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1A1A2E", lineHeight: 1.25 }}>Your Tax Professional Engagement</h1>
          </div>
          <div className="stagger-item d2" style={{ marginBottom: 20 }}>
            <p style={{ fontSize: "0.8125rem", color: "#5C5C7A" }}>Contract details and payment tracking</p>
          </div>

          {/* Active Contract Card */}
          <div className="stagger-item d3" style={{ marginBottom: 16 }}>
            <div style={{ background: "linear-gradient(135deg, #003DA5, #002D7A)", borderRadius: 16, padding: 18, color: "white" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-user-tie" style={{ fontSize: 18 }} />
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9375rem", fontWeight: 800 }}>Michael Chen, EA</p>
                    <p style={{ fontSize: "0.6875rem", opacity: 0.8 }}>Enrolled Agent</p>
                  </div>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 20, fontSize: "0.6875rem", fontWeight: 700, background: "rgba(0,166,81,0.2)", color: "#4ADE80" }}>
                  <i className="fas fa-circle" style={{ fontSize: 6 }} /> Active
                </span>
              </div>
              <div style={{ display: "flex", gap: 16, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <div>
                  <p style={{ fontSize: "0.625rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.5px" }}>Service</p>
                  <p style={{ fontSize: "0.75rem", fontWeight: 600 }}>OIC Preparation & IRS Representation</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
                <div>
                  <p style={{ fontSize: "0.625rem", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.5px" }}>Contract Date</p>
                  <p style={{ fontSize: "0.75rem", fontWeight: 600 }}>Mar 1, 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fee Structure Card */}
          <div className="stagger-item d4" style={{ marginBottom: 16 }}>
            <div style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: "#EBF0FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <i className="fas fa-receipt" style={{ fontSize: 13, color: "#003DA5" }} />
                  </div>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>Fee Structure</span>
                </div>
                <span style={{ fontSize: "0.9375rem", fontWeight: 900, color: "#1A1A2E" }}>$3,500</span>
              </div>

              {feeStructure.map((fee, i) => (
                <div key={fee.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < feeStructure.length - 1 ? "1px solid #E8E8F0" : "none" }}>
                  <div>
                    <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E" }}>{fee.name}</p>
                    {fee.sub && <p style={{ fontSize: "0.625rem", color: "#5C5C7A" }}>{fee.sub}</p>}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: fee.muted ? "#5C5C7A" : "#1A1A2E" }}>{fee.amount}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 20, fontSize: "0.6875rem", fontWeight: 700, background: fee.statusBg, color: fee.statusColor }}>
                      {fee.status === "Paid" && <i className="fas fa-check" style={{ fontSize: 8 }} />}
                      {fee.status}
                    </span>
                  </div>
                </div>
              ))}

              {/* Progress Bar */}
              <div style={{ marginTop: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#5C5C7A" }}>$750 / $3,500 paid</span>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 800, color: "#003DA5" }}>21%</span>
                </div>
                <div style={{ width: "100%", height: 8, background: "#E8E8F0", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ width: "21%", height: "100%", borderRadius: 4, background: "linear-gradient(90deg, #003DA5, #2563EB)", transition: "width 1s ease" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Schedule */}
          <div className="stagger-item d5" style={{ marginBottom: 16 }}>
            <div style={{ padding: "14px 16px", background: "#FFF7ED", border: "1px solid rgba(245,166,35,0.15)", borderRadius: 14, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-calendar-check" style={{ color: "#D97706", fontSize: 14 }} />
              <div>
                <p style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#92400E" }}>Next Payment</p>
                <p style={{ fontSize: "0.75rem", color: "#92400E" }}>$750 due when forms are ready</p>
              </div>
            </div>
          </div>

          {/* Retainer */}
          <div className="stagger-item d6" style={{ marginBottom: 16 }}>
            <div style={{ padding: "12px 14px", background: "#EBF0FF", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-wallet" style={{ color: "#003DA5", fontSize: 14 }} />
              <p style={{ fontSize: "0.8125rem", color: "#003DA5", fontWeight: 600 }}>Retainer balance: $250 remaining</p>
            </div>
          </div>

          {/* Contract Documents */}
          <div className="stagger-item d7" style={{ marginBottom: 20 }}>
            <div style={{ background: "white", border: "1.5px solid #E8E8F0", borderRadius: 16, padding: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: "#E6F9EE", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-folder-open" style={{ fontSize: 13, color: "#00A651" }} />
                </div>
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1A1A2E" }}>Contract Documents</span>
              </div>
              {documents.map((doc, i) => (
                <div key={doc.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: i < documents.length - 1 ? "1px solid #E8E8F0" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <i className={`fas ${doc.icon}`} style={{ fontSize: 14, color: "#5C5C7A" }} />
                    <p style={{ fontSize: "0.8125rem", fontWeight: 600, color: "#1A1A2E" }}>{doc.name}</p>
                  </div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 20, fontSize: "0.6875rem", fontWeight: 700, background: "#E6F9EE", color: "#166534" }}>
                    <i className="fas fa-check" style={{ fontSize: 8 }} /> {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="stagger-item d8">
            <button className="btn btn-primary" style={{ width: "100%", background: "#00A651", borderColor: "#00A651" }}>
              <i className="fas fa-credit-card" /> Make Payment
            </button>
          </div>
          <div className="stagger-item d9" style={{ marginTop: 10, display: "flex", gap: 10 }}>
            <a style={{ flex: 1, textAlign: "center", padding: 12, background: "white", border: "1.5px solid #E8E8F0", borderRadius: 12, fontSize: "0.8125rem", fontWeight: 600, color: "#003DA5", textDecoration: "none", cursor: "pointer" }}>
              <i className="fas fa-file-lines" style={{ marginRight: 4 }} /> View Full Contract
            </a>
            <a style={{ flex: 1, textAlign: "center", padding: 12, background: "white", border: "1.5px solid #E8E8F0", borderRadius: 12, fontSize: "0.8125rem", fontWeight: 600, color: "#003DA5", textDecoration: "none", cursor: "pointer" }}>
              <i className="fas fa-message" style={{ marginRight: 4 }} /> Contact Professional
            </a>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
