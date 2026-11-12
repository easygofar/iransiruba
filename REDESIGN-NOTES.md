# Redesign / desktop menu visibility notes

## Changes
- Desktop primary dropdowns now use Tailwind's native `md:group-hover:block` variant on the submenu `<ul>`; removed reliance on the old `group-hover-block` marker selector.
- Product detail flyouts now use `md:left-full` for their RTL placement, have a valid `border-slate-300` utility, and are no longer clipped by `.porduct-details { overflow-hidden; }`.
- Mobile menu open/close and submenu cleanup routines return without DOM mutations at desktop widths (768px and above). Added guards for the hover indicator and menu-button measurement.
- Added optional checks when accessing menu icon elements.

## Scope and packaging
- No route, page, layout, or data source was modified. Original non-image project files are retained.
- This delivery intentionally excludes `public/`, images, `node_modules/`, `.next/`, and `.git/` as requested. Image assets therefore need to be restored from the original project for a complete runtime build.
- The project uses Tailwind v4 native `md:group-hover:block`; no custom `group-hover-block` utility is required.
