import type { Metadata } from "next";
import ContactClient from "./contact-client";

const title = "تماس با ایران سیروبا | آدرس، تلفن و فرم تماس";
const description = "اطلاعات تماس با نمایندگی انحصاری سیروبا در ایران؛ آدرس دفتر مرکزی تهران، شماره تلفن، ایمیل و فرم تماس آنلاین برای مشاوره و خرید.";
const url = "/contact/";

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

export default function ContactPage() {
  return <ContactClient />;
}
