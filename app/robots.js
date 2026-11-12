// const base = "https://iransiruba.com";
// export default function robots() {
//   return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${base}/sitemap.xml`, host: base };
// }

export const dynamic = "force-static";

// import type { MetadataRoute } from "next";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://iransiruba.com/sitemap.xml",
  };
}