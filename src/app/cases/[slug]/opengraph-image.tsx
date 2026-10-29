import { ImageResponse } from "next/og";
import { caseSlugs, getCaseStudy } from "@/content/cases";
import { OG_COLORS, OG_SIZE, loadOgFonts } from "@/utils/ogImage";
import { SITE_URL } from "@/utils/site";

export const alt =
  "Case study card with the case title, headline, and technology stack";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // The page's dynamicParams = false means only known slugs get here
  const { meta } = getCaseStudy(slug)!;

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
          {`CASE FILE ${meta.number} · ${meta.title.toUpperCase()}`}
        </div>
        <div
          style={{
            fontFamily: "Courier Prime",
            fontWeight: 700,
            fontSize: 60,
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {meta.headline}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          {meta.stack.map((tag) => (
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
          <span>Mariia Ganza · Backend-leaning Fullstack Engineer</span>
          <span>{new URL(SITE_URL).host}</span>
        </div>
      </div>
    </div>,
    { ...size, fonts: await loadOgFonts() },
  );
}
