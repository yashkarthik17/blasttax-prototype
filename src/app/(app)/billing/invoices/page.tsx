"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ScreenHeader } from "@/components/ScreenHeader";

const invoices = [
  { id: "INV-2026-003", date: "Mar 15, 2026", amount: "$49.00", status: "Paid", plan: "Pro Plan - Monthly", txn: "txn_3N8kQL2e...x9f" },
  { id: "INV-2026-002", date: "Feb 15, 2026", amount: "$49.00", status: "Paid", plan: "Pro Plan - Monthly", txn: "txn_2M7jPK1d...w8e" },
  { id: "INV-2026-001", date: "Jan 15, 2026", amount: "$49.00", status: "Paid", plan: "Pro Plan - Monthly", txn: "txn_1L6iOJ0c...v7d" },
  { id: "INV-2025-012", date: "Dec 15, 2025", amount: "$19.00", status: "Paid", plan: "Starter Plan - Monthly", txn: "txn_0K5hNI9b...u6c" },
];

export default function BillingInvoicesPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <PhoneFrame>
      <StatusBar />
      <ScreenHeader title="Invoices" backPath="/billing" rightAction={<div style={{ width: 36 }} />} />

      <div className="screen" style={{ paddingBottom: 0 }}>
        <div className="screen-content" style={{ paddingBottom: 100, gap: 18 }}>

          {/* Filter chips */}
          <div className="stagger-item d2" style={{ display: "flex", gap: 8 }}>
            {["All", "Paid", "Pending"].map((f) => (
              <div
                key={f}
                className={`filter-chip${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </div>
            ))}
          </div>

          {/* Invoice List */}
          <div className="stagger-item d3" style={{ background: "white", borderRadius: 16, border: "1px solid #E8E8F0", padding: "4px 16px", boxShadow: "0 2px 8px rgba(26,26,46,0.04)" }}>
            {invoices.map((inv, i) => (
              <div key={inv.id} style={{ padding: "14px 0", borderBottom: i < invoices.length - 1 ? "1px solid #F0F0F5" : "none", cursor: "pointer" }} onClick={() => setExpandedId(expandedId === inv.id ? null : inv.id)}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#1A1A2E" }}>{inv.id}</span>
                      <span style={{ padding: "2px 8px", background: "#E6F9EE", borderRadius: 9999, fontSize: "0.6rem", fontWeight: 600, color: "#00A651" }}>{inv.status}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: "0.72rem", color: "#8585A0", fontWeight: 500 }}>{inv.date}</span>
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1A1A2E" }}>{inv.amount}</span>
                    </div>
                  </div>
                  <a onClick={(e) => e.stopPropagation()} style={{ fontSize: "0.72rem", fontWeight: 600, color: "#2563EB", textDecoration: "none", cursor: "pointer" }}>Download</a>
                </div>
                {expandedId === inv.id && (
                  <div style={{ background: "#F6F6FB", borderRadius: 10, padding: "12px 14px", marginTop: 10 }}>
                    {[
                      { label: "Line item", value: inv.plan },
                      { label: "Payment method", value: "Visa **** 4242" },
                      { label: "Transaction ID", value: inv.txn },
                    ].map((d) => (
                      <div key={d.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5px 0" }}>
                        <span style={{ fontSize: "0.72rem", color: "#8585A0" }}>{d.label}</span>
                        <span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#1A1A2E" }}>{d.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Download All */}
          <div className="stagger-item d4">
            <button style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 14, background: "white", border: "1.5px solid #E8E8F0", borderRadius: 14, fontFamily: "inherit", fontSize: "0.82rem", fontWeight: 600, color: "#1A1A2E", cursor: "pointer" }}>
              <i className="fas fa-download" style={{ fontSize: 13 }} /> Download All
            </button>
          </div>

          {/* Total Paid */}
          <div className="stagger-item d5" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: "linear-gradient(135deg, #EBF0FF, #D6E2FF)", borderRadius: 16 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "#003DA5", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>Total Paid</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "#003DA5" }}>$166.00</div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />

      <style jsx>{`
        .filter-chip {
          padding: 8px 16px;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          border: 1px solid #E8E8F0;
          background: white;
          color: #5C5C7A;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .filter-chip:hover {
          border-color: #003DA5;
          color: #003DA5;
        }
        .filter-chip.active {
          background: #003DA5;
          color: white;
          border-color: #003DA5;
        }
      `}</style>
    </PhoneFrame>
  );
}
