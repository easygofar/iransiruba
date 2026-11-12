// /* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
// import Link from "next/link";
// import useNextBlurhash from "use-next-blurhash";
// import ButtonIcon from "./buttonIcon";
// import { getCategory } from "../../utils/functions";

// interface Props {
//   farsi: string;
//   title: string;
//   detail: string;
//   image: string;
//   category: string;
//   sub_category: string;
// }

// const ModelCard = ({
//   farsi,
//   title,
//   detail,
//   image,
//   category,
//   sub_category,
// }: Props) => {
//   const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
//   const details = detail + "-" + "چرخ خیاطی صنعتی" + "-" + "سیروبا";
//   return (
//     <div className="group bg-white border-[#e0e0e0] sm:w-75 w-62.5 rounded-[5px] overflow-hidden border-x z-100 hover:ring-slate-300/50 hover:ring  hover:ring-offset-4 flex flex-col items-center border sm:mb-8 mb-2 border-y-4 border-y-[#FA461C] p-0">
//       <div className="flex justify-center w-full h-auto overflow-hidden">
//         <Image
//           src={`/images/siruba-swing-machines/webp_tn_${image.split(".")[0]
//             }.webp`}
//           className="group-hover:scale-105 overflow-hidden w-62.5 h-auto duration-300 ease-in-out"
//           width={250}
//           height={50}
//           style={{ height: "auto" }}
//           priority={true}
//           alt={`${title} صنعتی سیروبا مدل  ${farsi} چرخ`}
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//           placeholder="blur"
//           blurDataURL={blurDataUrl}
//         />
//       </div>
//       <div className="w-full border-t pt-2 border-[#e0e0e0] select-none">
//         <h2 className="w-full text-center lg:text-base font-bold group-hover:font-bold">
//           {title}
//         </h2>
//       </div>
//       <div className="w-full pb-2 select-none">
//         <h2 className="w-full text-center sm:text-base text-sm group-hover:font-bold">
//           {` چرخ ${sub_category}`}
//         </h2>
//       </div>

//       <div className="w-full pb-2 select-none flex flex-col justify-between grow">
//         <div className="w-full text-center sm:text-base text-sm group-hover:font-bold flex flex-wrap justify-center">
//           {details
//             ? details.split("-").map((p, index) => (
//               <span
//                 key={p + index}
//                 className="px-2 m-[0.13rem] bg-slate-200 rounded-full"
//               >
//                 {p}
//               </span>
//             ))
//             : ""}
//         </div>
//         <div>
//           <Link
//             href={`/products/${getCategory(category)}/${title}`}
//             className="flex justify-center items-center rounded-[5px] w-full p-2"
//           >
//             <ButtonIcon>{`اطلاعات بیشتر`}</ButtonIcon>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ModelCard;

"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useNextBlurhash from "use-next-blurhash";
import ButtonIcon from "./buttonIcon";
import { getCategory } from "../../utils/functions";

interface Props {
  farsi: string;
  title: string;
  detail: string;
  image: string;
  category: string;
  sub_category: string;
}

const ModelCard = ({
  farsi,
  title,
  detail,
  image,
  category,
  sub_category,
}: Props) => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

  const imageName = (image || "").split(".")[0];
  const targetCategory = getCategory(category) || "";
  const productHref = `/products/${targetCategory}/${title}`;

  // Build clean chip list without duplicates or empty tokens
  const chips = [
    ...(detail ? detail.split("-") : []),
    "چرخ خیاطی صنعتی",
    "سیروبا",
  ]
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/90 bg-white sm:w-75 w-64 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-red-200 hover:shadow-xl sm:mb-8 mb-4">
      {/* Top Siruba Brand Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-[#FA461C] to-amber-500 opacity-85 group-hover:opacity-100 transition-opacity" />

      {/* Whole Card as Link */}
      <Link
        href={productHref}
        className="flex h-full flex-col justify-between cursor-pointer"
        title={`${title} - چرخ صنعتی سیروبا`}
      >
        {/* Top Badges & Machine Image */}
        <div className="relative flex flex-col items-center p-4 pb-2">
          {/* Subtle Category Tag & Brand */}
          <div className="w-full flex items-center justify-between text-[11px] font-semibold text-neutral-400 mb-2">
            <span className="inline-block rounded-md bg-neutral-100 px-2 py-0.5 text-neutral-600 group-hover:bg-red-50 group-hover:text-red-700 transition-colors">
              {farsi}
            </span>
            <span className="font-mono uppercase tracking-wider text-[10px] text-neutral-400">
              SIRUBA
            </span>
          </div>

          {/* Image Showcase with Ambient Glow */}
          <div className="relative flex items-center justify-center w-full h-44 overflow-hidden my-1">
            <div className="absolute inset-2 rounded-full bg-neutral-50/80 group-hover:bg-red-50/40 group-hover:scale-110 transition-all duration-500" />

            {imageName ? (
              <Image
                src={`/images/siruba-swing-machines/webp_tn_${imageName}.webp`}
                alt={`${title} چرخ صنعتی سیروبا مدل ${farsi}`}
                width={240}
                height={160}
                style={{ width: "auto", height: "auto", maxHeight: "10rem" }}
                priority={true}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                sizes="(max-width: 640px) 200px, 240px"
                className="relative z-10 object-contain p-1 transition-transform duration-500 ease-out group-hover:scale-108"
              />
            ) : (
              <div className="relative z-10 flex h-full w-full items-center justify-center text-xs text-neutral-400">
                بدون تصویر
              </div>
            )}
          </div>
        </div>

        {/* Model Titles & Details */}
        <div className="flex flex-col grow justify-between px-4 pb-4 select-none">
          <div>
            {/* Model Title */}
            <h2 className="text-center font-bold text-base text-neutral-900 group-hover:text-[#FA461C] transition-colors tracking-tight">
              {title}
            </h2>

            {/* Sub-Category Label */}
            {sub_category && (
              <p className="mt-1 text-center text-xs font-medium text-neutral-500 line-clamp-1">
                چرخ {sub_category.trim()}
              </p>
            )}

            {/* Feature Chips - Tighter spacing and compact layout */}
            <div className="mt-2.5 flex flex-wrap justify-center gap-1 items-start">
              {chips.map((chip, idx) => (
                <span
                  key={`${chip}-${idx}`}
                  className="inline-flex items-center rounded-full border border-neutral-200/80 bg-neutral-50 px-2 py-0.5 text-[10.5px] font-medium text-neutral-600 transition-colors group-hover:border-red-100 group-hover:bg-red-50/50 group-hover:text-neutral-800"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Action Button Bar - Highlights seamlessly on card hover */}
          <div className="mt-3.5 pt-3 border-t border-neutral-100">
            <div className="flex w-full items-center justify-center rounded-xl bg-neutral-100/80 p-2 transition-all duration-300 group-hover:bg-[#FA461C] group-hover:text-white">
              <ButtonIcon>اطلاعات بیشتر</ButtonIcon>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ModelCard;
