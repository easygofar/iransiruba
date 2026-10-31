
import localFont from "next/font/local";
import MenuResponsive from "./components/menuResponsive";
import TopHeaderInto from "./components/topHeaderInfo";
import GoogleAnalytics from "./GoogleAnalytics";
// import { CiFacebook, CiInstagram } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import "./global.css";
const myFont = localFont({
  src: [
    {
      path: "./iranyekanwebregular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./iranyekanwebbold.woff2",
      weight: "600",
      style: "bold",
    },
  ],
});

export const metadata = {
  // Fallback only - every page.tsx should set its own title/description.
  // This exists so a page that forgets to (or a future page someone adds)
  // doesn't ship a blank <title> and no meta description, which is what
  // was happening on /contact/, /siruba-industrial/, /technology/stepping-motor/,
  // and both /customercare/ form pages before this fix.
  title: {
    default: "ایران سیروبا | نمایندگی انحصاری چرخ خیاطی صنعتی سیروبا",
    template: "%s",
  },
  description: "نمایندگی انحصاری چرخ خیاطی های صنعتی سیروبا در ایران",
  openGraph: {
    siteName: "شرکت ایران سیروبا | Iran SiRUBA",
    type: "website",
    locale: "fa_IR",
  },
  keywords: [
    "چرخ خیاطی",
    "چرخ خیاطی صنعتی",
    "چرخ خیاطی سیروبا",
    "شرکت سیروبا",
    "ایران سیروبا",
    "نمایندگی چرخ سیروبا",
    "خياطي",
    "راسته دوز",
    "سردوز",
    "ماشين خياطي",
    "میاندوز",
    "چرخ صنعتی",
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${myFont.className} text-right text-reg antialiased`}
    >
      <head>
        <link
          rel="apple-touch-icon"
          href="https://iransiruba.com/apple-icon.png"
          type="image/png"
          sizes="180x180"
        />

        <meta name="language" content="fa" />
        <meta property="fb:app_id" content="136127169587782" />
        <meta property="place:location:latitude" content="35.6959543" />
        <meta property="place:location:longitude" content="51.3984215" />
        <meta
          property="business:contact_data:street_address"
          content="خیابان جمهوری اسلامی - ساختمان سجاد"
        />
        <meta property="business:contact_data:locality" content="Tehran" />
        <meta property="business:contact_data:country_name" content="Iran" />
        <meta
          property="business:contact_data:postal_code"
          content="3354718342"
        />
        <meta
          property="business:contact_data:phone_number"
          content="02168527"
        />
        <meta
          property="business:contact_data:website"
          content="https://iransiruba.com"
        />
        <meta
          property="business:contact_data:email"
          content="info@iransiruba.com"
        />
        <GoogleAnalytics />
      </head>
      <body className="sm:leading-8 leading-6 font-extralight">

        <main className="relative bg-[#ffffff] min-h-screen flex flex-col items-center p-0 m-0 w-full">
          <div className="relative w-full h-[40px] bg-[#000000] p-0 m-0 flex justify-center">
            <div className="absolute top-0 z-[100] xl:w-[1250px] sm:w-[85%] w-[96%]  h-[40px] bg-[#000000] flex flex-row sm:justify-end justify-center items-center m-0 p-0">
              <TopHeaderInto />
            </div>
            <div className="absolute z-[310] w-full top-0 h-[40px] flex justify-center shadow-bottom"></div>
          </div>
          <section className="relative xl:w-[1250px] sm:w-[85%] w-[96%] flex flex-col items-center">
            <MenuResponsive />

            <section className="w-full mb-10 p-1 bg-white shadow-md">
              <div className="w-full flex flex-col z-[50]">{children}</div>
            </section>
          </section>
        </main>

        <footer className="bg-[#1A1A1A] text-white mt-auto">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-[#F28B14] font-bold text-lg mb-4">ایران سیروبا</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  نمایندگی رسمی و انحصاری چرخ‌های خیاطی صنعتی SiRUBA در ایران.
                  بیش از ۵۰ سال تجربه در دقت و نوآوری.
                </p>
              </div>
              <div>
                <h3 className="text-[#F28B14] font-bold text-lg mb-4">تماس</h3>
                <p className="text-gray-300 text-sm">تلفن: ۰۲۱۶۸۵۲۷</p>
                <p className="text-gray-300 text-sm">ایمیل: info@iransiruba.com</p>
                <p className="text-gray-300 text-sm mt-2">تهران، خیابان جمهوری، ساختمان سجاد</p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#F28B14] font-bold text-lg mb-4">شبکه‌های اجتماعی</h3>
                <a
                  href="https://www.instagram.com/siruba.ir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-[#F28B14] transition-colors"
                >
                  <CiInstagram size={24} />
                  <span className="mr-2 text-sm">اینستاگرام</span>
                </a>
                <a
                  href="https://www.aparat.com/iransiruba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-[#F28B14] transition-colors"
                >
                  {/* <CiAparat size={24} /> */}
                  <img src="/icons/aparat-icon.png" alt="Aparat" className="w-6 h-6" />
                  <span className="mr-2 text-sm">آپارات</span>
                </a>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
              Copyright © 2026 Iran SiRUBA® — نمایندگی رسمی سیروبا در ایران
            </div>
          </div>
        </footer>      </body>
    </html>
  );
};
export default RootLayout;
