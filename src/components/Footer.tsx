export default function Footer() {
  return (
    <footer className="bg-brand-near-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center text-center gap-3">
        <img src="/wearhouse-logo-white.svg" alt="WEARhouse" className="h-9 w-auto" />
        <p className="text-sm text-white/50 mt-1">Good Pieces Don&apos;t Last Long.</p>
        <p className="text-xs text-white/40">Kinoo Square, Port Louis, Mauritius</p>
        <p className="text-xs text-white/30 mt-4">
          © {new Date().getFullYear()} WEARhouse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
