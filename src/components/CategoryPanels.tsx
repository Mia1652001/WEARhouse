import Link from "next/link";

/* Tape strip that switches from horizontal (mobile stacked) to vertical (desktop side-by-side) */
function TapeDivider() {
  return (
    <div
      className="h-6 w-full md:h-auto md:w-6 shrink-0"
      style={{
        backgroundImage:
          "repeating-linear-gradient(45deg, #FFD700 0px, #FFD700 15px, #1A1A1A 15px, #1A1A1A 30px)",
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}

/* Two full-bleed category panels with a tape divider between them */
export default function CategoryPanels() {
  return (
    <section aria-label="Shop by category">
      <div className="flex flex-col md:flex-row">

        {/* ── WOMEN ── */}
        <Link
          href="/shop/women"
          className="group relative flex-1 overflow-hidden"
        >
          {/*
           * BACKGROUND — when the photo arrives, replace the div below with:
           *   <div className="absolute inset-0 bg-[url('/images/women.jpg')] bg-cover bg-center
           *                   transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
           */}
          <div className="absolute inset-0 bg-brand-gold transition-transform duration-500 ease-out group-hover:scale-[1.04]" />

          {/* Hover scrim */}
          <div className="absolute inset-0 bg-brand-near-black/0 group-hover:bg-brand-near-black/10 transition-colors duration-500" />

          {/* Label — sized to set the panel's proportions */}
          <div className="relative flex items-center justify-center aspect-[3/2] md:aspect-[4/5]">
            <span className="text-5xl md:text-7xl font-black tracking-[0.15em] text-brand-near-black select-none">
              WOMEN
            </span>
          </div>
        </Link>

        <TapeDivider />

        {/* ── MEN ── */}
        <Link
          href="/shop/men"
          className="group relative flex-1 overflow-hidden"
        >
          {/*
           * BACKGROUND — when the photo arrives, replace the div below with:
           *   <div className="absolute inset-0 bg-[url('/images/men.jpg')] bg-cover bg-center
           *                   transition-transform duration-500 ease-out group-hover:scale-[1.04]" />
           */}
          <div className="absolute inset-0 bg-brand-near-black transition-transform duration-500 ease-out group-hover:scale-[1.04]" />

          {/* Hover scrim — subtle lighten on the dark panel */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />

          {/* Label — sized to set the panel's proportions */}
          <div className="relative flex items-center justify-center aspect-[3/2] md:aspect-[4/5]">
            <span className="text-5xl md:text-7xl font-black tracking-[0.15em] text-brand-gold select-none">
              MEN
            </span>
          </div>
        </Link>

      </div>
    </section>
  );
}
