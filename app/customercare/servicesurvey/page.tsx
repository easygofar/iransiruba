import type { Metadata } from "next";
import ServiceSurveyClient from "./servicesurvey-client";

const title = "نظرسنجی خدمات پس از فروش | ایران سیروبا";
const description = "نظرسنجی رضایت مشتریان از خدمات پس از فروش ایران سیروبا. نظر شما به بهبود کیفیت خدمات و پشتیبانی چرخ‌های خیاطی صنعتی سیروبا کمک می‌کند.";
const url = "/customercare/servicesurvey/";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://iransiruba.com/"),
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "website",
    title,
    description,
    url,
    siteName: "شرکت ایران سیروبا | Iran SiRUBA",
    locale: "fa_IR",
  },
};

export default function ServiceSurveyPage() {
  return <ServiceSurveyClient />;
}
