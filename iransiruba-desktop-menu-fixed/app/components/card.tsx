// "use client";
// /* eslint-disable @next/next/no-img-element */
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import useNextBlurhash from "use-next-blurhash";
// import numberIcons, {
//   SewingMachineIcon,
//   getCategory,
//   getMachineInfo,
// } from "../../utils/functions";
// import { IfMachineType } from "../../utils/types";

// interface Props {
//   machines: IfMachineType[];
//   id: string;
// }

// const Card = ({ machines, id }: Props) => {
//   const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

//   console.log("--- id --- ", id)
//   const machineInfo = getMachineInfo(machines, id);
//   if (machineInfo === undefined || machineInfo.length === 0) return null;

//   const NumberIcon = numberIcons[machineInfo.models.length];

//   return (
//     <div className="group bg-white m-2.5 sm:my-4 rounded-[5px] overflow-hidden z-100 hover:ring-slate-300/50 hover:ring-1 hover:ring-offset-4 hover:border-slate-300 hover:cursor-pointer hover:shadow hover:outline-stone-900 flex flex-col p-1 border-2 border-slate-200">
//       <Link href={`/products/${getCategory(machineInfo.category) || ""}`} className="flex flex-col items-between justify-between">
//         <section className="relative sm:w-50 sm:h-62.5 w-45 h-45 overflow-hidden m-auto">
//           <Image
//             src={`/images/siruba-swing-machines/webp_tn_${machineInfo.main_image.split(".")[0]
//               }.webp`}
//             fill={true}
//             alt={`صنعتی سیروبا ${machineInfo.farsi} چرخ `}
//             className="object-contain w-full aspect-square group-hover:scale-105 overflow-hidden duration-300 ease-in-out"
//             // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             placeholder="blur"
//             blurDataURL={blurDataUrl}
//           />
//         </section>
//         <section className="flex justify-center shadow items-center rounded-[5px] w-full mt-1 text-white sm:py-2 p-1 bg-[#ed461d] hover:bg-red-700">
//           <div className="w-full mx-2 ">
//             <h3 className="text-center font-bold w-full text-sm  group-hover:text-yellow-200 select-none">
//               {machineInfo.farsi}
//               {/* <span className="relative group-hover:icon-yellow flex items-center">
//                 <SewingMachineIcon
//                   className="icon-white group-hover:icon-yellow sm:w-[20px] w-[14px]"
//                   size={18}
//                 />
//                 <NumberIcon
//                   size={15}
//                   className="icon-white group-hover:icon-yellow sm:w-[15px] w-[12px]"
//                   id="svg-number"
//                 />
//               </span> */}
//             </h3>
//           </div>
//         </section>
//       </Link>
//     </div>
//   );
// };

// export default Card;


"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";
import { getCategory, getMachineInfo } from "../../utils/functions";
import { IfMachineType } from "../../utils/types";

interface Props {
  machines: IfMachineType[];
  id: string;
}

const Card = ({ machines, id }: Props) => {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  const machineInfo = getMachineInfo(machines, id);

  if (!machineInfo) return null;

  const categorySlug = getCategory(machineInfo.category) || "";
  const imageName = machineInfo.main_image?.split(".")[0] || "";
  const modelCount = machineInfo.models?.length ?? 0;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl m-2.5">
      {/* Top Brand Accent Highlight */}
      <div className="h-1 w-full bg-gradient-to-r from-red-500 via-[#ed461d] to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity" />

      <Link
        href={`/products/${categorySlug}`}
        className="flex h-full flex-col justify-between p-4"
        title={`ماشین آلات دوخت سیروبا - ${machineInfo.farsi}`}
      >
        {/* Top Badges: Model Count & Brand Tag */}
        <div className="flex items-center justify-between w-full mb-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600 group-hover:bg-red-50 group-hover:text-red-700 transition-colors">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span>{modelCount} مدل</span>
          </span>

          <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 group-hover:text-neutral-500">
            {machineInfo.category}
          </span>
        </div>

        {/* Machine Image Showcase */}
        <div className="relative my-3 flex items-center justify-center sm:w-48 sm:h-52 w-40 h-44 mx-auto overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 rounded-full bg-neutral-50 opacity-60 transition-transform duration-500 group-hover:scale-125 group-hover:bg-red-50/40" />

          {imageName ? (
            <Image
              src={`/images/siruba-swing-machines/webp_tn_${imageName}.webp`}
              fill
              alt={`صنعتی سیروبا ${machineInfo.farsi}`}
              className="object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-110"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              sizes="(max-width: 640px) 160px, 192px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-neutral-300 text-xs">
              بدون تصویر
            </div>
          )}
        </div>

        {/* Card Footer: Category Persian Title & Action Button */}
        <div className="mt-2 pt-3 border-t border-neutral-100 flex items-center justify-between">
          <div className="flex flex-col text-right">
            <h3 className="text-sm font-bold text-neutral-800 transition-colors group-hover:text-[#ed461d] line-clamp-1">
              {machineInfo.farsi}
            </h3>
            <span className="text-[11px] text-neutral-400 font-sans tracking-wide line-clamp-1">
              {machineInfo.category} Series
            </span>
          </div>

          {/* Action Arrow Icon Button */}
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-neutral-100 text-neutral-600 transition-all duration-300 group-hover:bg-[#ed461d] group-hover:text-white group-hover:translate-x-[-2px]">
            <svg
              className="w-4 h-4 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
