import { ImageResponse } from "next/og";

export const alt = "Yuzy — AI Product Builder & Content Creator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: -120,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.14) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            right: -140,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.09) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#fafafa",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "-0.02em",
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              background: "#ffffff",
              borderRadius: 4,
              transform: "rotate(45deg)",
              boxShadow: "0 0 24px rgba(255,255,255,0.7)",
            }}
          />
          YUZY
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.04,
              letterSpacing: "-0.035em",
              color: "#fafafa",
              maxWidth: 940,
            }}
          >
            Building AI products that people actually use.
          </div>
          <div style={{ fontSize: 30, color: "#a1a1aa" }}>
            AI Product Builder · Content Creator · Founder
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#71717a",
            fontFamily: "monospace",
          }}
        >
          <span>LOCKED IN AI · DOORMED · YUZY AI</span>
          <span>yuzy.creates</span>
        </div>
      </div>
    ),
    size
  );
}
