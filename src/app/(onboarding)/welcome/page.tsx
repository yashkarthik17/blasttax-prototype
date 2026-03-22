"use client";
import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PhoneFrame, StatusBar } from "@/components/PhoneFrame";

const slides = [
  {
    icon: "fa-search-dollar",
    title: "Understand Your Tax Debt",
    desc: "We'll analyze your situation and find the best path forward",
    circleStyle: { background: "linear-gradient(135deg, #EBF0FF 0%, #D6E0FF 100%)" } as React.CSSProperties,
    circleBeforeStyle: { background: "linear-gradient(135deg, rgba(0,61,165,0.08) 0%, rgba(37,99,235,0.06) 100%)" } as React.CSSProperties,
    iconColor: "#003DA5",
  },
  {
    icon: "fa-wand-magic-sparkles",
    title: "AI-Powered Analysis",
    desc: "Our smart engine evaluates 13+ resolution strategies to find your best option",
    circleStyle: { background: "linear-gradient(135deg, #F5F0FF 0%, #E8DEFF 100%)" } as React.CSSProperties,
    circleBeforeStyle: { background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(99,102,241,0.06) 100%)" } as React.CSSProperties,
    iconColor: "#7C3AED",
  },
  {
    icon: "fa-headset",
    title: "Expert Support",
    desc: "Connect with licensed tax professionals when you need them",
    circleStyle: { background: "linear-gradient(135deg, #E6F9EE 0%, #CCF2DD 100%)" } as React.CSSProperties,
    circleBeforeStyle: { background: "linear-gradient(135deg, rgba(0,166,81,0.08) 0%, rgba(16,185,129,0.06) 100%)" } as React.CSSProperties,
    iconColor: "#00A651",
  },
];

export default function WelcomePage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(0);

  const goToSlide = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    setCurrentSlide(clamped);
  }, []);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    } else {
      router.push("/name");
    }
  };

  const handleSkip = () => {
    router.push("/name");
  };

  const isLastSlide = currentSlide === slides.length - 1;

  return (
    <PhoneFrame>
      <StatusBar />
      <div className="screen" style={{ position: "relative" }}>
        {/* Floating background shapes */}
        <div className="floating-shapes">
          <div className="float-shape float-shape-1" />
          <div className="float-shape float-shape-2" />
          <div className="float-shape float-shape-3" />
        </div>

        {/* Skip link */}
        <div style={{ position: "relative", zIndex: 5, display: "flex", justifyContent: "flex-end", padding: "12px 20px 0" }}>
          <button
            className="btn-ghost"
            onClick={handleSkip}
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--color-muted-light)",
              padding: "8px 16px",
              border: "none",
              cursor: "pointer",
              background: "transparent",
              opacity: isLastSlide ? 0 : 1,
              pointerEvents: isLastSlide ? "none" : "auto",
              transition: "opacity 0.3s ease",
            }}
          >
            Skip
          </button>
        </div>

        {/* Carousel */}
        <div
          style={{ position: "relative", zIndex: 2, flex: 1, overflow: "hidden" }}
          onTouchStart={(e) => {
            touchStartX.current = e.changedTouches[0].screenX;
          }}
          onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) {
              if (diff > 0) goToSlide(currentSlide + 1);
              else goToSlide(currentSlide - 1);
            }
          }}
        >
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
              transform: `translateX(-${currentSlide * 100}%)`,
              height: "100%",
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                style={{
                  minWidth: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 32px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    opacity: currentSlide === i ? 1 : 0,
                    transform: currentSlide === i ? "translateY(0)" : "translateY(16px)",
                    transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
                    transitionDelay: currentSlide === i ? "0.15s" : "0s",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Illustration circle */}
                  <div
                    style={{
                      width: 180,
                      height: 180,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 32,
                      position: "relative",
                      ...slide.circleStyle,
                    }}
                  >
                    {/* Breathing ring */}
                    <div
                      style={{
                        position: "absolute",
                        inset: -12,
                        borderRadius: "50%",
                        opacity: 0.4,
                        animation: "breathe 6s ease-in-out infinite",
                        ...slide.circleBeforeStyle,
                      }}
                    />
                    <i
                      className={`fas ${slide.icon}`}
                      style={{ fontSize: 56, color: slide.iconColor, position: "relative", zIndex: 1 }}
                    />
                  </div>
                  <h2
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--color-fg)",
                      lineHeight: 1.25,
                      marginBottom: 12,
                    }}
                  >
                    {slide.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.6,
                      maxWidth: 280,
                    }}
                  >
                    {slide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section: dots + button */}
        <div style={{ position: "relative", zIndex: 5, padding: "0 24px 40px", flexShrink: 0 }}>
          {/* Dot indicators */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 24 }}>
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => goToSlide(i)}
                style={{
                  width: currentSlide === i ? 28 : 8,
                  height: 8,
                  borderRadius: 9999,
                  background: currentSlide === i ? "var(--color-primary)" : "var(--color-border)",
                  transition: "all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="btn btn-primary"
            onClick={handleNext}
            style={{
              fontSize: "1rem",
              padding: "16px 28px",
              background: isLastSlide
                ? "linear-gradient(135deg, #00A651 0%, #10B981 100%)"
                : "linear-gradient(135deg, #003DA5 0%, #2563EB 100%)",
              transition: "background 0.3s ease",
            }}
          >
            {isLastSlide ? "Get Started" : "Next"}
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}
