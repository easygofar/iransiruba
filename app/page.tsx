import ListCategories from "./components/listCategories";
import useNextBlurhash from "use-next-blurhash";
import SliderSwiperJs from "./components/slider-swiperjs";

const description =
  "ایران سیروبا نمایندگی رسمی چرخ خیاطی صنعتی سیروبا در ایران. فروش انواع چرخ خیاطی، خدمات پس از فروش، مشاوره رایگان.";
const title = "نمایندگی رسمی چرخ خیاطی صنعتی سیروبا | ایران سیروبا";
export const metadata = {
  title: title,
  description: description,
  robots: { index: true, follow: true },
  "DC.Title": title,
  "DC.Description": description,
  metadataBase: new URL("https://iransiruba.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://iransiruba.com",
    siteName: "شرکت ایران سیروبا | Iran SiRUBA",
    title: title,
    type: "website",
    description: description,
    locale: "fa_IR",
    images: [
      {
        url: "https://iransiruba.com/images/siruba-swing-machines/og_image.jpg",
        width: "1200",
        height: "630",
      },
    ],
  },
  appleWebApp: {
    title: "Iran SiRUBA",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "ایران سیروبا - نمایندگی انحصاری چرخ خیاطی صنعتی سیروبا",
  "url": "https://iransiruba.com",
  "description": "نماینده انحصاری چرخ خیاطی صنعتی سیروبا در ایران، ارائه‌دهنده انواع چرخ‌های صنعتی با کیفیت بالا و خدمات پس از فروش.",
  "inLanguage": "fa-IR"
}

const HomePage = () => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  return (
    <>
      <section>
        <SliderSwiperJs />
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", margin: "2rem" }}>
          شرکت سیروبا
        </h1>
        <section className="pb-6">
          <article className="md:my-8 sm:my-4 my-2">
            <h2 className="text-base font-bold sm:text-base md:text-xl my-4">
              سیروبا، چرخ خیاطی‌های صنعتی با تمرکز بر کیفیت و نوآوری
            </h2>
            <p className="text-base lg:text-lg my-4">
              نام برند سیروبا یکی از بهترین و خوشنام ترین برند
              <em> چرخ خیاطی صنعتی </em>
              دنیاست. با تاسیس شرکت تولیدی کائولین در سال 1965 میلادی، طراحی و
              ساخت چرخ خياطي های صنعتی با برند سیروبا شکل گرفت.
            </p>
            <p className="text-base lg:text-lg my-4">
              سیروبا با رعایت استانداردهای بالای کیفیت، آموزش جامع و همکاری در
              انتقال دانش فنی، پیشتاز در بین شرکت های مبتنی بر تحقیق و پژوهش است.
              سیروبا با تکیه بر بخش &quot;تحقیق و توسعه &quot; چرخ خیاطی های خود
              را به روز رسانی می کند و از رقبای خود پیشی می گیرد. سیروبا انواع چرخ
              خياطي صنعتی را برای پارچه های مختلف و کاربردهای متنوع ارائه می دهد.
            </p>
          </article>
          <div className="w-full flex justify-center md:my-8 sm:my-4 my-2">
            <section
              className={`relative w-full aspect-[16/6] bg-top bg-cover bg-[url("../public/webp_siruba-industrial-sewing-machine.webp")]`}
            >
              <div className="absolute top-1 right-1 sm:top-2 sm:right:2 sm:font-bold">
                <h2 className="text-xs sm:text-base md:text-lg">ایران سیروبا</h2>
              </div>
            </section>
          </div>

          <article className="md:my-8 sm:my-4 my-2">
            <h2 className="text-base font-bold sm:text-base md:text-xl my-4">
              چرا سیروبا بهترین گزینه برای خرید <em> چرخ خیاطی صنعتی </em> است؟
            </h2>

            <p className="text-base lg:text-lg my-4">
              با تمرکز بر کیفیت، مهندسین و طراحان<em> چرخ خیاطی صنعتی </em> سیروبا
              می‌توانند چالش‌های روز بازار را درک کرده و برای آن‌ها راه‌حل مناسب
              پیدا کنند. تعهد سیروبا بر توسعه چرخ خیاطی های صنعتی بهتر برای برآورد
              کردن تمام نیازهای مشتریان است. در حال حاضر، سیروبا 12 خط مختلف
              <em> چرخ خیاطی صنعتی </em>
              تولید می‌کند که به 129 مدل مختلف تبدیل می‌شود. با وجود چنین طیف
              گسترده‌ای از طراحی و تولید، سیروبا همچنان بر درک بازار و نیازهای
              مشتریان خود متمرکز است و دائماً در حال بهبود همه خطوط تولید محصولات
              خود است.
            </p>
          </article>
          <article className="md:my-8 sm:my-4 my-1">
            <h2 className="text-base font-bold sm:text-base md:text-xl my-4">
              شرکت
              <span className="text-red-600"> قطعه سازان چرخ دوخت نماینده </span>
              نمایندگی انحصاری سیروبا در ایران
            </h2>
            <p className="text-base lg:text-lg my-4">
              شرکت قطعه سازان چرخ دوخت نماینده انحصاری برند معتبر سیروبا در ایران
              است. سیروبا یکی از پیشروان تولید <em> چرخ خياطي صنعتي </em> با کیفیت
              و نوآوری در جهان محسوب می‌شود.
            </p>
            <p className="text-base lg:text-lg my-4">
              شرکت قطعه سازان چرخ دوخت با ارائه 26 مدل <em>چرخ اطی صنعتی</em>{" "}
              سیروبا در{" "}
              <a className="internal_link" href="/products/">
                {" "}
                18 گروه بندی مختلف
              </a>{" "}
              و خدمات پس از فروش، علاقمندان دوخت صنعتی در ایران را یاری می‌کند.
              اگر به دنبال <em> چرخ خياطي صنعتي </em> با کارایی بالا و قابل اعتماد
              هستید، سیروبا را انتخاب کنید.
            </p>

            <p className="text-base lg:text-lg my-4">
              برای مشاوره و خرید با دفتر مرکزی شرکت قطعه سازان چرخ دوخت در تهران{" "}
              <a className="internal_link" href="/contact/">
                تماس
              </a>{" "}
              بگیرید.
            </p>
          </article>
          <div>
            <ListCategories />
          </div>
        </section>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    </>
  );
};

export default HomePage;
