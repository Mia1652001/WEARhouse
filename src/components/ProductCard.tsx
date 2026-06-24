import { type Product, formatPrice } from "@/lib/products";

/* Maps placeholderColor to Tailwind bg + text classes */
const PLACEHOLDER: Record<
  Product["placeholderColor"],
  { bg: string; text: string }
> = {
  offwhite: { bg: "bg-brand-offwhite border border-brand-near-black/10", text: "text-brand-near-black" },
  gold:     { bg: "bg-brand-gold",                                       text: "text-brand-near-black" },
  ink:      { bg: "bg-brand-near-black",                                 text: "text-white"            },
};

/* Name + price row — exported separately so the slider can render it outside the scroll container */
export function ProductCardText({ product }: { product: Product }) {
  return (
    <div className="mt-3 space-y-1.5">
      <h3 className="text-sm font-semibold text-brand-near-black leading-snug">
        {product.name}
      </h3>
      <div className="flex items-center gap-2 flex-wrap">
        {product.salePrice ? (
          <>
            <span className="text-sm font-bold text-brand-gold">
              {formatPrice(product.salePrice)}
            </span>
            <span className="text-xs text-brand-near-black/40 line-through">
              {formatPrice(product.price)}
            </span>
            <span className="text-[9px] font-bold bg-brand-gold text-brand-near-black px-1.5 py-0.5 uppercase tracking-widest">
              SALE
            </span>
          </>
        ) : (
          <span className="text-sm text-brand-near-black">
            {formatPrice(product.price)}
          </span>
        )}
      </div>
    </div>
  );
}

/* Full card (image + text). Pass imageOnly to render the placeholder block alone. */
export default function ProductCard({
  product,
  imageOnly = false,
}: {
  product: Product;
  imageOnly?: boolean;
}) {
  const { bg, text } = PLACEHOLDER[product.placeholderColor];

  return (
    <div className="flex flex-col">
      {/* Branded placeholder — replace with <Image> when product photos arrive */}
      <div
        className={`${bg} aspect-[3/4] flex items-center justify-center p-5 relative overflow-hidden`}
      >
        <span className={`${text} text-sm font-bold text-center leading-snug`}>
          {product.name}
        </span>
        {/* Price-tag accent in the corner */}
        <span
          className="absolute bottom-3 right-3 w-3 h-3 bg-brand-gold rotate-45 rounded-[1px] opacity-80"
          aria-hidden="true"
        />
      </div>

      {!imageOnly && <ProductCardText product={product} />}
    </div>
  );
}
