import { ImageResponse } from "next/og";
import { projects } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Params = { params: { slug: string } };

export function generateImageMetadata({ params }: Params) {
  const project = projects.find((item) => item.id === params.slug);

  return [
    {
      id: "opengraph",
      alt: project
        ? `${project.name} — case study by Yuzy`
        : "Yuzy — AI Product Builder",
      size,
      contentType,
    },
  ];
}

export default function OpengraphImage({ params }: Params) {
  const project = projects.find((item) => item.id === params.slug);

  const name = project?.name ?? "Yuzy";
  const tagline = project?.detail.positioning ?? "AI Product Builder · Content Creator";
  const stack = project?.detail.stack.slice(0, 4).join(" · ") ?? "";

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
            right: -140,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.13) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#a1a1aa",
            fontSize: 26,
            fontFamily: "monospace",
            letterSpacing: "0.02em",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#fafafa" }}>
            <div
              style={{
                width: 16,
                height: 16,
                background: "#ffffff",
                borderRadius: 4,
                transform: "rotate(45deg)",
              }}
            />
            YUZY
          </div>
          <div>Case study</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: "#fafafa",
              maxWidth: 1000,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.35,
              color: "#a1a1aa",
              maxWidth: 900,
            }}
          >
            {tagline}
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
          <span>{stack}</span>
          <span>yuzy-portfolio-udji.vercel.app</span>
        </div>
      </div>
    ),
    size
  );
}
