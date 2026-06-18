import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  colors?: string[];
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-stone-100 aspect-[3/4] rounded-sm">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-stone-900 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
              New
            </span>
          )}
          {product.isSale && discount && (
            <span className="bg-red-600 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-1">
              -{discount}%
            </span>
          )}
        </div>
        {/* Quick add overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-stone-900 text-white text-xs tracking-widest uppercase py-3 hover:bg-stone-700 transition-colors">
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-xs text-stone-500 tracking-wide uppercase">{product.category}</p>
        <h3 className="text-sm font-medium text-stone-900 leading-snug">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-sm text-stone-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-stone-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        {product.colors && product.colors.length > 0 && (
          <div className="flex gap-1.5 pt-1">
            {product.colors.map((color) => (
              <span
                key={color}
                title={color}
                className="h-3 w-3 rounded-full border border-stone-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
