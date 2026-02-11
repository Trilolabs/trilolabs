import fs from "fs";
import path from "path";

function getHeadHtml() {
  try {
    const filePath = path.join(process.cwd(), "index.html");
    const html = fs.readFileSync(filePath, "utf8");

    const partsAfterHead = html.split("<head>");
    if (partsAfterHead.length < 2) return { head: "", modulepreloads: "" };

    const headInner = partsAfterHead[1].split("</head>")[0] || "";

    // Extract modulepreload links from body (they should be in head)
    const bodyParts = html.split("<body");
    let modulepreloads = "";
    if (bodyParts.length >= 2) {
      const bodyAfterOpen = bodyParts[1].split(">").slice(1).join(">");
      const bodyInner = bodyAfterOpen.split("</body>")[0] || "";
      const modulepreloadRegex = /<link\s+rel="modulepreload"[\s\S]*?>/gi;
      const matches = bodyInner.match(modulepreloadRegex) || [];
      modulepreloads = matches.join("\n");
    }

    // Strip out any inline <script> tags from the original head.
    const withoutScripts = headInner.replace(/<script[\s\S]*?<\/script>/gi, "");

    return {
      head: withoutScripts.trim(),
      modulepreloads,
    };
  } catch (error) {
    console.error("Failed to read head from index.html:", error);
    return { head: "", modulepreloads: "" };
  }
}

const { head: HEAD_HTML, modulepreloads } = getHeadHtml();

// Custom overrides on top of the original Framer head.
// - Hide the small "Waitlister Framer Template" badge chip
// - Hide the Framer footer ("Use This Template • Proudly Built In Framer • Created by ...")
const CUSTOM_HEAD_CSS = `<style>
  /* Badge chip */
  .framer-g6dd5 {
    display: none !important;
  }

  /* Footer variants injected by Framer runtime */
  [name="Footer"],
  [data-framer-name="Footer"] {
    display: none !important;
  }
</style>`;

export default function RootLayout({ children }) {
  // Combine head content with modulepreload links
  const fullHeadContent =
    HEAD_HTML +
    (modulepreloads ? "\n" + modulepreloads : "") +
    "\n" +
    CUSTOM_HEAD_CSS;
  
  return (
    <html lang="en">
      <head dangerouslySetInnerHTML={{ __html: fullHeadContent }} />
      <body>
        {/* 
          Framer scripts will handle animations, so we don't need
          the CSS override anymore. The scripts are loaded in page.js.
        */}
        {children}
      </body>
    </html>
  );
}

