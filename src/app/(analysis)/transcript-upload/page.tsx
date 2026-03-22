"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

export default function TranscriptUploadPage() {
  const router = useRouter();
  const [showGuide, setShowGuide] = useState(false);
  const [showDropZone, setShowDropZone] = useState(false);
  const [showConnect, setShowConnect] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [animatedOpts, setAnimatedOpts] = useState<number[]>([]);

  useEffect(() => {
    [0, 1, 2].forEach((i) => {
      setTimeout(() => setAnimatedOpts((p) => [...p, i]), 400 + i * 150);
    });
  }, []);

  const canContinue = fileUploaded || showConnect;

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen">
        <div style={{ padding: "0 20px" }}>
          <div className="progress-bar-wrapper" style={{ marginTop: 4 }}>
            <div className="progress-bar-fill" style={{ width: "35%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-muted-light)" }}>Step 3 of 6</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-blue)" }}>Transcript</span>
          </div>
        </div>

        <div className="screen-content" style={{ paddingTop: 16 }}>
          <div style={{ marginBottom: 6 }}>
            <h1 style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--color-foreground)", lineHeight: 1.25 }}>Upload Your IRS Transcript</h1>
            <p style={{ fontSize: 13, color: "var(--color-muted-light)", marginTop: 4, lineHeight: 1.5 }}>Your transcript helps us verify your tax account details and find all penalties, payments, and assessments</p>
          </div>

          {/* Option 1: Download from IRS */}
          <div onClick={() => setShowGuide(!showGuide)} style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: 16, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 10, cursor: "pointer", transition: "all 0.3s ease", opacity: animatedOpts.includes(0) ? 1 : 0, transform: animatedOpts.includes(0) ? "translateY(0)" : "translateY(12px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, background: "var(--color-info-light)", color: "var(--color-info)" }}>
                <i className="fas fa-globe" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>Download from IRS.gov</div>
                <div style={{ fontSize: 12, color: "var(--color-muted-light)" }}>Step-by-step guide</div>
              </div>
              <i className="fas fa-chevron-down" style={{ fontSize: 11, color: "var(--color-disabled)", transition: "transform 0.3s ease", transform: showGuide ? "rotate(180deg)" : "none" }} />
            </div>
            {showGuide && (
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--color-border-light)" }}>
                {["Go to irs.gov/transcripts", "Sign in with your ID.me or IRS account", 'Select "Account Transcript" for each year', "Download as PDF and upload below"].map((step, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0" }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--brand-blue-light)", color: "var(--brand-blue)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
                    <div style={{ fontSize: 12, color: "var(--color-muted)", lineHeight: 1.5 }}>{step}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Option 2: Upload PDF */}
          <div onClick={() => { if (!showDropZone) setShowDropZone(true); }} style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: 16, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 10, cursor: "pointer", transition: "all 0.3s ease", opacity: animatedOpts.includes(1) ? 1 : 0, transform: animatedOpts.includes(1) ? "translateY(0)" : "translateY(12px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, background: "var(--color-success-light)", color: "var(--color-success)" }}>
                <i className="fas fa-cloud-arrow-up" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>Upload PDF</div>
                <div style={{ fontSize: 12, color: "var(--color-muted-light)" }}>Drag and drop or browse</div>
              </div>
            </div>
            {showDropZone && (
              <div style={{ marginTop: 12 }}>
                <div onClick={(e) => { e.stopPropagation(); setFileUploaded(true); }} style={{ border: "2px dashed var(--color-border)", borderRadius: 14, padding: "28px 20px", textAlign: "center", cursor: "pointer", transition: "all 0.3s ease" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--color-surface-alt)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 20, color: "var(--color-muted)" }}>
                    <i className="fas fa-file-arrow-up" />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)", marginBottom: 4 }}>Drop your transcript here</div>
                  <div style={{ fontSize: 12, color: "var(--color-muted-light)" }}>or tap to browse</div>
                  <div style={{ fontSize: 11, color: "var(--color-placeholder)", marginTop: 8 }}>Accepts PDF, PNG, JPG</div>
                </div>
                {fileUploaded && (
                  <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "var(--color-success-light)", border: "1px solid var(--color-success-border)", borderRadius: 12, marginTop: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: "var(--brand-red)", flexShrink: 0 }}>
                      <i className="fas fa-file-pdf" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-foreground)" }}>account_transcript_2022.pdf</div>
                      <div style={{ fontSize: 11, color: "var(--color-muted-light)" }}>245 KB</div>
                    </div>
                    <i className="fas fa-circle-check" style={{ color: "var(--color-success)", fontSize: 16 }} />
                    <button onClick={(e) => { e.stopPropagation(); setFileUploaded(false); }} style={{ fontSize: 12, color: "var(--brand-red)", fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>Remove</button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Option 3: Connect e-Services */}
          <div onClick={() => { setShowConnect(!showConnect); }} style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, padding: 16, boxShadow: "0 2px 8px rgba(26,26,46,0.04)", marginBottom: 10, cursor: "pointer", transition: "all 0.3s ease", opacity: animatedOpts.includes(2) ? 1 : 0, transform: animatedOpts.includes(2) ? "translateY(0)" : "translateY(12px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, background: "var(--color-violet-bg)", color: "var(--color-violet)" }}>
                <i className="fas fa-link" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-foreground)" }}>Connect IRS e-Services</div>
                <div style={{ fontSize: 12, color: "var(--color-muted-light)" }}>Automatically retrieve your transcript</div>
              </div>
            </div>
            {showConnect && (
              <div style={{ marginTop: 12 }}>
                <button className="btn btn-secondary" onClick={(e) => e.stopPropagation()} style={{ fontSize: 13, padding: "12px 20px" }}>
                  <i className="fas fa-plug" style={{ fontSize: 12 }} /> Connect to IRS
                </button>
              </div>
            )}
          </div>

          <div className="alert alert-info" style={{ marginTop: 4 }}>
            <i className="fas fa-circle-info" />
            <span>We look for Transaction Codes (TC) that determine your eligibility for each resolution type</span>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: 10 }}>
            <div onClick={() => setShowFaq(!showFaq)} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", padding: "10px 0" }}>
              <i className="fas fa-question-circle" style={{ fontSize: 14, color: "var(--color-muted)" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-muted)" }}>What is a tax transcript?</span>
              <i className="fas fa-chevron-down" style={{ fontSize: 10, color: "var(--color-disabled)", marginLeft: "auto", transform: showFaq ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }} />
            </div>
            {showFaq && (
              <div style={{ fontSize: 12, color: "var(--color-muted-light)", lineHeight: 1.6, padding: "0 0 8px 28px" }}>
                A tax transcript is an official IRS document that shows your tax account activity. It includes all assessments, payments, penalties, and transaction codes for each tax year.
              </div>
            )}
          </div>

          <div style={{ flex: 1, minHeight: 12 }} />

          <div style={{ padding: "12px 0 20px" }}>
            <button className="btn btn-primary" onClick={() => canContinue && router.push("/compliance-check")} style={{ fontSize: 15, padding: "16px 28px", opacity: canContinue ? 1 : 0.5, pointerEvents: canContinue ? "auto" : "none", transition: "all 0.3s ease" }}>
              Continue <i className="fas fa-arrow-right" style={{ fontSize: 13 }} />
            </button>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}
