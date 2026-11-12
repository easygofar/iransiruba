"use client";
import Link from "next/link";
import { useState } from "react";
const menuItems = [
  { title: "محصولات و خدمات", description: "آشنایی با راهکارهای ما", href: "/services", icon: "◈" },
  { title: "درباره ایران سیروبا", description: "داستان و مسیر مجموعه", href: "/about", icon: "◎" },
  { title: "ارتباط با ما", description: "پاسخ‌گوی پرسش‌های شما هستیم", href: "/contact", icon: "↗" },
];
export function SiteHeader() {
 const [open, setOpen] = useState(false); const [mega, setMega] = useState(false);
 const close = () => { setOpen(false); setMega(false); };
 return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
  <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
   <Link href="/" onClick={close} className="flex items-center gap-3" aria-label="ایران سیروبا، صفحه نخست"><span className="grid size-11 place-items-center rounded-xl bg-red-700 text-xl font-black text-white">س</span><span><b className="block text-base font-extrabold text-slate-900">ایران سیروبا</b><small className="text-xs text-slate-500">راهکارهای تخصصی</small></span></Link>
   <nav aria-label="منوی اصلی" className="hidden items-center gap-8 md:flex">
    <Link className="text-sm font-semibold text-slate-700 transition hover:text-red-700" href="/">خانه</Link>
    <div className="relative" onMouseEnter={()=>setMega(true)} onMouseLeave={()=>setMega(false)}>
     <button aria-expanded={mega} aria-controls="desktop-mega" onClick={()=>setMega(!mega)} className="flex items-center gap-2 py-5 text-sm font-semibold text-slate-700 hover:text-red-700">راهکارها <span aria-hidden="true">⌄</span></button>
     {mega && <div id="desktop-mega" className="absolute right-1/2 top-full w-[580px] translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_18px_60px_-20px_rgba(15,23,42,.3)]"><div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-4"><div><p className="font-extrabold">در کنار شما، در هر قدم</p><p className="mt-1 text-xs text-slate-500">از آشنایی تا انتخاب راهکار مناسب</p></div><span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-700">ایران سیروبا</span></div><div className="grid grid-cols-2 gap-2">{menuItems.map(item=><Link key={item.href} href={item.href} onClick={close} className="group flex gap-3 rounded-xl p-3 hover:bg-slate-50"><span className="grid size-10 shrink-0 place-items-center rounded-lg bg-red-50 text-lg text-red-700 group-hover:bg-red-700 group-hover:text-white">{item.icon}</span><span><b className="block text-sm">{item.title}</b><small className="mt-1 block text-xs leading-5 text-slate-500">{item.description}</small></span></Link>)}</div></div>}
    </div>
    <Link className="text-sm font-semibold text-slate-700 hover:text-red-700" href="/about">درباره ما</Link>
   </nav>
   <Link href="/contact" className="hidden rounded-lg bg-red-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-red-800 md:inline-flex">تماس با ما</Link>
   <button className="grid size-11 place-items-center rounded-lg border border-slate-200 text-2xl md:hidden" onClick={()=>setOpen(!open)} aria-label={open ? "بستن منو" : "باز کردن منو"} aria-expanded={open} aria-controls="mobile-navigation">{open ? "×" : "☰"}</button>
  </div>
  {open && <nav id="mobile-navigation" aria-label="منوی موبایل" className="border-t border-slate-100 bg-white px-4 py-3 md:hidden"><Link onClick={close} className="block rounded-lg px-3 py-3 font-semibold hover:bg-slate-50" href="/">خانه</Link><button onClick={()=>setMega(!mega)} aria-expanded={mega} className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-right font-semibold hover:bg-slate-50">راهکارها <span>⌄</span></button>{mega && <div className="mb-2 border-r-2 border-red-200 pr-3">{menuItems.map(item=><Link key={item.href} onClick={close} className="block rounded-lg px-3 py-3 text-sm text-slate-600 hover:bg-slate-50" href={item.href}>{item.title}</Link>)}</div>}<Link onClick={close} className="block rounded-lg px-3 py-3 font-semibold hover:bg-slate-50" href="/about">درباره ما</Link><Link onClick={close} className="mt-2 block rounded-lg bg-red-700 px-3 py-3 text-center font-bold text-white" href="/contact">تماس با ما</Link></nav>}
 </header>;
}
