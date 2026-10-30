import { ImageResponse } from "next/og";
import { loadOgFonts, OG_COLORS, OG_SIZE } from "@/utils/ogImage";
import { SITE_URL } from "@/utils/site";

export const alt =
  "Mariia Ganza, backend-leaning fullstack engineer: Python, FastAPI, PostgreSQL, React";
export const size = OG_SIZE;
export const contentType = "image/png";

const STACK = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Redis",
  "React",
];

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 88px",
        background: OG_COLORS.bg,
        color: OG_COLORS.text,
        fontFamily: "Fira Mono",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 24,
            letterSpacing: 4,
            color: OG_COLORS.yellow,
            marginBottom: 28,
          }}
        >
          PORTFOLIO
        </div>
        <div
          style={{
            fontFamily: "Courier Prime",
            fontWeight: 700,
            fontSize: 96,
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          Mariia Ganza
        </div>
        <div style={{ fontSize: 38, color: OG_COLORS.blue }}>
          Backend-leaning Fullstack Engineer
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {STACK.map((tag) => (
            <div
              key={tag}
              style={{
                fontSize: 24,
                color: OG_COLORS.blue,
                border: "1px solid rgba(143, 189, 198, 0.4)",
                padding: "8px 18px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: OG_COLORS.dim,
            borderTop: `1px solid ${OG_COLORS.border}`,
            paddingTop: 24,
          }}
        >
          <span>UI · API · database · deployment</span>
          <span>{new URL(SITE_URL).host}</span>
        </div>
      </div>
    </div>,
    { ...size, fonts: await loadOgFonts() },
  );
}
