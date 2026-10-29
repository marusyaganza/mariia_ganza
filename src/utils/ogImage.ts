import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Shared setup for the generated Open Graph images (opengraph-image.tsx)

export const OG_SIZE = { width: 1200, height: 630 };

// Site palette (globals.css); the image renderer can't read CSS variables
export const OG_COLORS = {
  bg: "#21161a",
  raised: "#2a1d22",
  text: "#d7c7b7",
  dim: "rgba(215, 199, 183, 0.65)",
  border: "rgba(215, 199, 183, 0.15)",
  blue: "#8fbdc6",
  yellow: "#ffe81f",
};

const asset = (file: string) =>
  readFile(join(process.cwd(), "src/assets/og", file));

// The renderer needs TTF/OTF, not the woff2 files next/font serves
export const loadOgFonts = async () => [
  {
    name: "Courier Prime",
    data: await asset("CourierPrime-Bold.ttf"),
    weight: 700 as const,
    style: "normal" as const,
  },
  {
    name: "Fira Mono",
    data: await asset("FiraMono-Regular.ttf"),
    weight: 400 as const,
    style: "normal" as const,
  },
  {
    name: "Fira Mono",
    data: await asset("FiraMono-Medium.ttf"),
    weight: 500 as const,
    style: "normal" as const,
  },
];
