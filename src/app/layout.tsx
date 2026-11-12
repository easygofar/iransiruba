import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "ایران سیروبا | راهکارهای تخصصی", template: "%s | ایران سیروبا" },
  description: "معرفی خدمات و راهکارهای تخصصی ایران سیروبا. برای دریافت اطلاعات بیشتر با ما در ارتباط باشید.",
  applicationName: "ایران سیروبا",
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "fa_IR", siteName: "ایران سیروبا", title: "ایران سیروبا", description: "راهکارهای تخصصی ایران سیروبا" },
  twitter: { card: "summary_large_image", title: "ایران سیروبا", description: "راهکارهای تخصصی ایران سیروبا" },
};
const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: "ایران سیروبا", url: siteUrl, description: "راهکارهای تخصصی ایران سیروبا", inLanguage: "fa-IR" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fa" dir="rtl"><body><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-3">رفتن به محتوای اصلی</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\u003c") }} /></body></html>;
}
