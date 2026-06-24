/* Price-tag mark: small rotated gold square (diamond) — purely CSS, no SVG file */
export default function Logo({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "on-dark";
}) {
  const houseColor = variant === "on-dark" ? "text-white" : "text-brand-near-black";

  return (
    <span
      className={`inline-flex items-center font-bold tracking-tight leading-none select-none ${className}`}
    >
      <span className="text-brand-gold">wear</span>
      <span className={houseColor}>house</span>
      <span
        className="inline-block w-[7px] h-[7px] bg-brand-gold self-center ml-1.5 shrink-0 rotate-45 rounded-[1px]"
        aria-hidden="true"
      />
    </span>
  );
}
