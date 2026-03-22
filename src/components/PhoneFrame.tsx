"use client";
import React from "react";

export function StatusBar() {
  return (
    <div className="phone-status-bar">
      <span>9:41</span>
      <div className="phone-status-icons">
        <i className="fas fa-signal" style={{ fontSize: 12 }} />
        <i className="fas fa-wifi" style={{ fontSize: 12 }} />
        <i className="fas fa-battery-full" style={{ fontSize: 12 }} />
      </div>
    </div>
  );
}

export function PhoneFrame({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="phone-frame" style={dark ? { background: "#1A1A2E" } : undefined}>
      {children}
    </div>
  );
}
