# Desktop Menu Fix

## Changed files
- `app/components/menuResponsive.tsx` — removed the shared `group` class from the main desktop menu UL; other classes and JavaScript hooks were preserved.
- `app/components/menuItemAndSubmenu.tsx` — assigned the named `group/menuitem` to each dropdown parent, made its dropdown hidden by default and reveal only on that desktop parent hover, positioned it at `md:top-full`, and applied opaque white/95 blur, border, shadow, and subtle row hover colors. Added an independent `group/productrow` for each multi-model product row; scoped its third-level flyout hover, placed it at `md:left-full` for RTL, and fixed the invalid border utility. The `group-hover-block` selector remains for the existing mobile JavaScript.
- `app/global.css` — changed `.porduct-details` overflow from hidden to visible so flyouts are not clipped.

Mobile click handlers and route/content data were not rewritten.

## Validation
Static source checks passed for the named hover scopes, hidden/reveal classes, retained JS selector, RTL flyout placement, valid border class, and visible overflow. A Next.js build/lint was not run: the provided archive has no `node_modules`, and dependencies were not installed in this offline workspace.
