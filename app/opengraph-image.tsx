import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Link preview image shown when the site is shared (WhatsApp, LinkedIn, X, ...).
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const red = "#e3343f";
const highlight = "Revolucionando";

export default function Image() {
  const rest = site.tagline.replace(highlight, "").trim();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "white",
          background: "radial-gradient(circle at 85% 60%, #4a0c14 0%, #0b0b0d 55%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="76" height="76" viewBox="0 0 40 40">
            <path
              fill={red}
              fillRule="evenodd"
              d="M5 4h16.5a11 11 0 0 1 0 22H14v10H5Zm9 8v6h7.2a3 3 0 0 0 0-6Z"
            />
            <path fill="white" d="M20 24.5h10L37 36H27Z" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: 44 }}>Radical</span>
            <span style={{ fontSize: 40, color: red }}>dev</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.1 }}>
          <span style={{ color: red }}>{highlight}</span>
          <span>{rest}</span>
        </div>
      </div>
    ),
    size,
  );
}
