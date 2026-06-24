import WarningTape from "@/components/WarningTape";
import TrendingSection from "@/components/TrendingSection";
import CategoryPanels from "@/components/CategoryPanels";

export default function HomePage() {
  return (
    <>
      {/* Hero — section is full-bleed, content is capped at max-w-7xl */}
      <section className="min-h-[90vh] bg-brand-offwhite flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-12">
          {/* Warning triangle — CSS border trick, no SVG */}
          <div
            className="relative"
            style={{ width: 104, height: 90 }}
            aria-hidden="true"
          >
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: "52px solid transparent",
                borderRight: "52px solid transparent",
                borderBottom: "90px solid #FFD700",
              }}
            />
            <span className="absolute bottom-3 inset-x-0 text-center text-[2rem] font-black text-brand-near-black leading-none">
              !
            </span>
          </div>

          {/* Tagline — capped at lg:text-8xl so it doesn't over-scale on wide screens */}
          <h1 className="font-bold leading-none tracking-tight">
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-brand-near-black">
              Good Pieces
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-brand-gold">
              Don&apos;t Last
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl text-brand-near-black italic">
              Long.
            </span>
          </h1>
        </div>
      </section>

      <WarningTape />

      <TrendingSection />

      <WarningTape />

      <CategoryPanels />

      <WarningTape />

      {/* Girl-math receipt */}
      <section className="bg-brand-offwhite py-20 px-6">
        <div className="max-w-7xl mx-auto flex justify-center">
        <div className="bg-white max-w-sm w-full px-8 py-10 shadow-md border border-brand-near-black/8 font-mono">
          <div className="text-center mb-4">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-near-black">
              ★ WEARHOUSE ★
            </p>
            <p className="text-[10px] text-brand-near-black/50 mt-1 tracking-wide">
              Kinoo Square, Port Louis, MU
            </p>
          </div>

          <div className="border-t border-dashed border-brand-near-black/25 my-4" />

          <div className="space-y-2 text-xs text-brand-near-black">
            <div className="flex justify-between gap-4">
              <span>1 × Bad Financial Decision</span>
              <span className="shrink-0">✓</span>
            </div>
            <div className="flex justify-between gap-4">
              <span>1 × Main Character Outfit</span>
              <span className="shrink-0">✓</span>
            </div>
          </div>

          <div className="border-t border-dashed border-brand-near-black/25 my-4" />

          <div className="flex justify-between items-center text-sm font-bold text-brand-near-black">
            <span>TOTAL</span>
            <span className="text-brand-gold">Worth It</span>
          </div>

          <div className="border-t-2 border-double border-brand-near-black/20 my-4" />

          <p className="text-center text-[10px] text-brand-near-black/60 leading-relaxed">
            All purchases were emotionally necessary —<br />
            approved by girl-math
          </p>
        </div>
        </div>
      </section>

      <WarningTape />
    </>
  );
}
