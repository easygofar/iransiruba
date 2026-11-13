import type { Metadata } from "next";
import RegisterComplaintsClient from "./registercomplaints-client";

const title = "ثبت شکایات مشتریان | ایران سیروبا";
const description = "فرم ثبت شکایات و مشکلات مربوط به چرخ‌های خیاطی صنعتی سیروبا. تیم پشتیبانی ایران سیروبا موارد اعلامی شما را بررسی و پیگیری می‌کند.";
const url = "/customercare/registercomplaints/";

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

export default function RegisterComplaintsPage() {
  return <RegisterComplaintsClient />;
}
