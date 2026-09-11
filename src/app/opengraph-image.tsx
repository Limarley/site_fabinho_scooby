import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Fabinho Scooby — Tecladista, Diretor Musical, Produtor";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/fabinho-scooby.png"));
  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#efeee9",
          color: "#0a0a0a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 72,
            width: "64%",
            height: "100%",
          }}
        >
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#63625c",
              fontWeight: 600,
            }}
          >
            Salvador · Bahia
          </div>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.92,
              marginTop: 18,
            }}
          >
            Fabinho Scooby
          </div>
          <div style={{ fontSize: 26, marginTop: 28, color: "#63625c" }}>
            Tecladista · Diretor Musical · Produtor
          </div>
        </div>
        <img
          alt=""
          src={photoSrc}
          width={520}
          height={630}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            height: "100%",
            width: 520,
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
