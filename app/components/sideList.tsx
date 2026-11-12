// "use client"
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// // import _ from "lodash";
// import { sortBy } from "@/lib";

// // import { machines } from "../data/machines";
// import { getCategory } from "../../utils/functions";
// import { IfMachineType } from "../../utils/types"

// interface Props {
// 	machines: IfMachineType[];
// }

// const SideList = ({ machines }: Props) => {
// 	const pathname = usePathname()

// 	return (
// 		<nav aria-label="Sidebar Menu" className="hidden lg:block">
// 			<div className="flex flex-col flex-wrap justify-center items-center bg-slate-200 pb-2 drop-shadow rounded-lg rounded-b-none">
// 				<h2 className="w-full text-center p-2 rounded-t-lg font-bold text-sm sm:text-base md:text-lg bg-slate-200 mb-2">
// 					چرخ خیاطی‌های صنعتی سیروبا
// 				</h2>
// 				<ul className="flex flex-wrap w-full justify-around">
// 					{sortBy(machines, ["id"]).map((item: any) => {
// 						const bgSelectedToggle = pathname.split("/")[2] === getCategory(item.category)
// 							? "bg-red-300/25"
// 							: "bg-white";

// 						return (
// 							<li
// 								key={item.id}
// 								className={`
// 								flex items-center justify-centershadow-sm  
// 								text-sm text-center rounded-md px-2 my-[3px]  
// 								sm:text-base md:py-[4px] mx-1 w-1/3 grow    
// 								hover:ring-slate-300 hover:bg-red-500/25  
// 								hover:cursor-pointer transition
// 								${bgSelectedToggle}`}
// 							>
// 								<Link
// 									href={`/products/${getCategory(item.category)}`}
// 									className="w-full h-full overflow-hidden"
// 								>
// 									<span>{item.farsi}</span>
// 								</Link>
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };

// export default SideList;

// "use client";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { sortBy } from "@/lib";
// import { getCategory } from "../../utils/functions";
// import { IfMachineType } from "../../utils/types";

// interface Props {
// 	machines: IfMachineType[];
// }

// const SideList = ({ machines }: Props) => {
// 	const pathname = usePathname();

// 	return (
// 		<nav aria-label="Sidebar Menu" className="hidden lg:block w-64 shrink-0">
// 			<div className="flex flex-col bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden">
// 				{/* Header */}
// 				<div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200">
// 					<h2 className="font-bold text-neutral-800 text-sm">
// 						دسته‌بندی محصولات سیروبا
// 					</h2>
// 				</div>

// 				{/* Categories List */}
// 				<ul className="flex flex-col py-2">
// 					{sortBy(machines, ["id"]).map((item: any) => {
// 						const categorySlug = getCategory(item.category);
// 						const isActive = pathname.split("/")[2] === categorySlug;

// 						return (
// 							<li key={item.id} className="group relative">
// 								<Link
// 									href={`/products/${categorySlug}`}
// 									className={`block px-4 py-2.5 text-sm transition-all duration-200 
//                     ${isActive
// 											? "bg-red-50 text-red-700 font-semibold"
// 											: "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
// 										}`}
// 									aria-current={isActive ? "page" : undefined}
// 								>
// 									{item.farsi}
// 								</Link>

// 								{/* Active Indicator Accent */}
// 								{isActive && (
// 									<div className="absolute right-0 top-0 bottom-0 w-1 bg-[#FA461C]" />
// 								)}
// 							</li>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };

// export default SideList;


"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { sortBy } from "@/lib";

import { getCategory } from "../../utils/functions";
import { IfMachineType } from "../../utils/types";

interface Props {
	machines: IfMachineType[];
}

const SideList = ({ machines }: Props) => {
	const pathname = usePathname();
	const selectedCategory = pathname.split("/")[2];

	return (
		<nav
			dir="rtl"
			aria-label="دسته‌بندی چرخ‌های خیاطی صنعتی"
			className="hidden lg:block"
		>
			<div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
				<header className="px-4 pb-4 pt-5">
					<div className="mb-2 flex items-center justify-center gap-2">
						<span
							aria-hidden="true"
							className="h-1.5 w-1.5 rounded-full bg-orange-600"
						/>
						<span
							dir="ltr"
							className="text-[10px] font-semibold tracking-widest text-orange-600"
						>
							SIRUBA INDUSTRIAL
						</span>
					</div>

					<h2 className="text-center text-base font-bold leading-7 text-slate-800">
						چرخ خیاطی‌های صنعتی سیروبا
					</h2>

					<p className="mt-1 text-center text-xs leading-6 text-slate-500">
						دسته‌بندی دستگاه مورد نظر را انتخاب کنید
					</p>
				</header>

				<ul className="m-0 grid list-none grid-cols-2 items-stretch gap-2 px-3 pb-4">
					{sortBy(machines, ["id"]).map((item: IfMachineType) => {
						const category = getCategory(item.category);
						const isSelected = selectedCategory === category;

						return (
							<li key={item.id} className="min-w-0">
								<Link
									href={`/products/${category}`}
									aria-current={isSelected ? "page" : undefined}
									className={`
										flex h-full min-h-[46px] w-full
										items-center justify-center
										rounded-lg border px-2 py-2.5
										text-center text-xs leading-6
										transition-colors duration-150
										focus-visible:outline-none
										focus-visible:ring-2
										focus-visible:ring-orange-500
										focus-visible:ring-offset-2
										${isSelected
											? "border-orange-300 bg-orange-50 font-semibold text-orange-800 shadow-sm"
											: "border-slate-200 bg-white font-medium text-slate-600 hover:border-orange-300 hover:bg-orange-50/60 hover:text-orange-800"
										}
									`}
								>
									<span className="break-words">{item.farsi}</span>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default SideList;
