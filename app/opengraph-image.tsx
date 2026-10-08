import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Link preview image shown when the site is shared (WhatsApp, LinkedIn, X, ...).
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const red = "#c8102e";
const redDeep = "#9e0b1e";

export default function Image() {
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
          background: `linear-gradient(135deg, ${red} 0%, ${redDeep} 100%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 12,
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke={red}
              strokeWidth={2.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 20V4h6a4 4 0 0 1 0 8H7M12.5 12l5 8" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: 72, fontWeight: 800, letterSpacing: -2 }}>
              radical
            </span>
            <span style={{ fontSize: 28, opacity: 0.9 }}>code &amp; create</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            {site.tagline}
          </span>
          <span
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 24px",
              borderRadius: 999,
              border: "2px solid rgba(255, 255, 255, 0.6)",
              fontSize: 28,
            }}
          >
            Under development
          </span>
        </div>
      </div>
    ),
    size,
  );
}
