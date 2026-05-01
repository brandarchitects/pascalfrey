import { ImageResponse } from "next/og";

export const runtime = "edge";

const COLORS = {
  eggshell: "#fdfcfc",
  obsidian: "#000000",
  gravel: "#777169",
  chalk: "#e5e5e5",
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") ?? "Pascal Frey";
  const eyebrow = url.searchParams.get("eyebrow") ?? "";
  const subtitle =
    url.searchParams.get("subtitle") ??
    "Markenberater & Creative Director · Schweiz";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "96px 96px 80px 96px",
          backgroundColor: COLORS.eggshell,
          color: COLORS.obsidian,
        }}
      >
        {eyebrow && (
          <div
            style={{
              fontSize: 22,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: COLORS.gravel,
              fontWeight: 700,
            }}
          >
            {eyebrow}
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
            marginTop: eyebrow ? 0 : "auto",
          }}
        >
          <div
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              letterSpacing: "-2.4px",
              fontWeight: 300,
              maxWidth: "92%",
              fontFamily: "serif",
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 28,
                color: COLORS.gravel,
                maxWidth: "85%",
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${COLORS.chalk}`,
            paddingTop: 24,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 500 }}>Pascal Frey</div>
          <div style={{ fontSize: 18, color: COLORS.gravel }}>pascalfrey.ch</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
