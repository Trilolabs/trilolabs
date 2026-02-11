import fs from "fs";
import path from "path";

function getBodyContent() {
  try {
    const filePath = path.join(process.cwd(), "index.html");
    const html = fs.readFileSync(filePath, "utf8");

    const partsAfterBody = html.split("<body");
    if (partsAfterBody.length < 2) return { html: "", scripts: "", modulepreloads: "" };

    // Drop the opening <body ...> tag.
    const afterOpenTag = partsAfterBody[1].split(">");
    if (afterOpenTag.length < 2) return { html: "", scripts: "", modulepreloads: "" };

    const bodyAndRest = afterOpenTag.slice(1).join(">");
    const bodyInner = bodyAndRest.split("</body>")[0] || "";

    // Extract modulepreload links (these go in head)
    const modulepreloadRegex = /<link\s+rel="modulepreload"[\s\S]*?>/gi;
    const modulepreloadMatches = bodyInner.match(modulepreloadRegex) || [];
    const modulepreloads = modulepreloadMatches.join("\n");

    // Extract all script tags (keep them together)
    const scriptRegex = /<script[\s\S]*?<\/script>/gi;
    const scriptMatches = bodyInner.match(scriptRegex) || [];
    const scripts = scriptMatches.join("\n");

    // Remove both scripts and modulepreload links from HTML
    let cleaned = bodyInner
      .replace(scriptRegex, "")
      .replace(modulepreloadRegex, "");

    // Helper function to remove nested div blocks
    function removeNestedDiv(html, classNameOrId) {
      let result = html;
      let pattern;
      
      if (classNameOrId.startsWith('#')) {
        // Match by ID
        const id = classNameOrId.slice(1);
        pattern = new RegExp(`<div[^>]*id="${id}"[^>]*>`, 'gi');
      } else {
        // Match by class
        pattern = new RegExp(`<div[^>]*class="[^"]*${classNameOrId}[^"]*"`, 'gi');
      }
      
      let match;
      while ((match = pattern.exec(result)) !== null) {
        const startIndex = match.index;
        let depth = 1;
        let i = match.index + match[0].length;
        
        // Find matching closing tag
        while (i < result.length && depth > 0) {
          const nextDiv = result.indexOf('<div', i);
          const nextCloseDiv = result.indexOf('</div>', i);
          
          if (nextCloseDiv === -1) break;
          
          if (nextDiv !== -1 && nextDiv < nextCloseDiv) {
            depth++;
            i = nextDiv + 4;
          } else {
            depth--;
            if (depth === 0) {
              result = result.slice(0, startIndex) + result.slice(nextCloseDiv + 6);
              pattern.lastIndex = 0; // Reset regex
              break;
            }
            i = nextCloseDiv + 6;
          }
        }
      }
      
      return result;
    }

    // Remove unwanted elements:
    // 1. "Waitlister Framer Template" badge (framer-1o3rtau-container)
    // Also remove the ssr-variant wrapper divs that contain it
    cleaned = cleaned.replace(/<div[^>]*class="[^"]*ssr-variant[^"]*"[^>]*>[\s\S]*?<div[^>]*class="[^"]*framer-1o3rtau-container[^"]*"[\s\S]*?<\/div>[\s\S]*?<\/div>/gi, '');
    cleaned = removeNestedDiv(cleaned, 'framer-1o3rtau-container');
    
    // 1b. Also remove the inner badge div (framer-hStjs framer-g6dd5)
    cleaned = removeNestedDiv(cleaned, 'framer-g6dd5');
    
    // 2. Framer badge container (#__framer-badge-container)
    cleaned = removeNestedDiv(cleaned, '#__framer-badge-container');
    
    // 3. Footer (framer-1949tzi-container) - also remove ssr-variant wrappers
    cleaned = cleaned.replace(/<div[^>]*class="[^"]*ssr-variant[^"]*"[^>]*>[\s\S]*?<div[^"]*class="[^"]*framer-1949tzi-container[^"]*"[\s\S]*?<\/div>[\s\S]*?<\/div>/gi, '');
    cleaned = removeNestedDiv(cleaned, 'framer-1949tzi-container');

    // Add trilolabs company name above the heading
    const trilolabsBadge = '<div style="text-align:center;margin-bottom:32px;opacity:1 !important;display:block !important;visibility:visible !important;"><p style="font-family:\'Inter\', \'Inter Placeholder\', sans-serif;font-size:16px;font-weight:500;letter-spacing:-0.03em;color:rgb(240, 240, 240);margin:0;opacity:1 !important;visibility:visible !important;">trilolabs</p></div>';
    
    // Insert trilolabs before the heading section
    cleaned = cleaned.replace(
      /(<div class="framer-3ucszq" data-framer-name="Heading">)/,
      trilolabsBadge + '$1'
    );

    return {
      html: cleaned.trim(),
      scripts,
      modulepreloads,
    };
  } catch (error) {
    console.error("Failed to read body from index.html:", error);
    return { html: "", scripts: "", modulepreloads: "" };
  }
}

const { html: BODY_HTML, scripts, modulepreloads } = getBodyContent();

export default function Page() {
  return (
    <>
      {/* Main body content */}
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      
      {/* Company name - trilolabs - rendered on top with magic */}
      <div 
        style={{
          position: 'fixed',
          top: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          textAlign: 'center',
          pointerEvents: 'none',
          width: '100%'
        }}
      >
        <div style={{
          display: 'inline-block',
          padding: '12px 32px',
          borderRadius: '50px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{
            fontFamily: "'Inter', 'Inter Placeholder', sans-serif",
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: 'rgb(255, 255, 255)',
            margin: 0,
            opacity: 1,
            visibility: 'visible',
            textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)',
            textTransform: 'uppercase'
          }}>
            trilolabs
          </p>
        </div>
      </div>
      
      {/* Framer scripts - included as-is for proper execution */}
      {scripts && (
        <div dangerouslySetInnerHTML={{ __html: scripts }} />
      )}
    </>
  );
}


