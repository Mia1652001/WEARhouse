/* Scrolling sale ticker — pure CSS marquee, no client JS needed */
const TRACK = Array(12).fill("SALE ⚠").join("  ") + "  ";

export default function SaleBanner() {
  return (
    <div className="bg-brand-near-black overflow-hidden py-1.5" aria-label="Sale on now">
      {/* Two identical tracks side-by-side; animation moves the pair -50% for a seamless loop */}
      <div className="flex w-max animate-marquee">
        <span className="text-brand-gold text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">
          {TRACK}
        </span>
        <span
          className="text-brand-gold text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
          aria-hidden="true"
        >
          {TRACK}
        </span>
      </div>
    </div>
  );
}
