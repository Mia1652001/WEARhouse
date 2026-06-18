import Image from "next/image";
import Link from "next/link";
import ProductCard, { type Product } from "@/components/ProductCard";
import NewsletterForm from "@/components/NewsletterForm";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Classic Linen Shirt",
    price: 89,
    imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80",
    category: "Women",
    colors: ["#f5f5f4", "#44403c", "#d6d3d1"],
    isNew: true,
  },
  {
    id: "2",
    name: "Tailored Wool Trousers",
    price: 145,
    originalPrice: 195,
    imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4b4f10?w=600&q=80",
    category: "Women",
    colors: ["#1c1917", "#78716c"],
    isSale: true,
  },
  {
    id: "3",
    name: "Merino Crew Knit",
    price: 120,
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    category: "Men",
    colors: ["#e7e5e4", "#292524", "#57534e"],
    isNew: true,
  },
  {
    id: "4",
    name: "Relaxed Chino",
    price: 95,
    originalPrice: 130,
    imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    category: "Men",
    colors: ["#d6d3d1", "#a8a29e", "#292524"],
    isSale: true,
  },
  {
    id: "5",
    name: "Silk Slip Dress",
    price: 175,
    imageUrl: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80",
    category: "Women",
    colors: ["#f5f5f4", "#e7e5e4"],
    isNew: true,
  },
  {
    id: "6",
    name: "Cotton Overshirt",
    price: 110,
    imageUrl: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    category: "Men",
    colors: ["#78716c", "#44403c"],
  },
  {
    id: "7",
    name: "Wide-Leg Jeans",
    price: 135,
    originalPrice: 165,
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
    category: "Women",
    colors: ["#1c1917", "#57534e"],
    isSale: true,
  },
  {
    id: "8",
    name: "Structured Blazer",
    price: 220,
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    category: "Men",
    colors: ["#1c1917", "#78716c", "#f5f5f4"],
  },
];

const categories = [
  {
    label: "Women",
    href: "/women",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
  },
  {
    label: "Men",
    href: "/men",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    label: "Sale",
    href: "/sale",
    imageUrl: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[520px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=85"
          alt="New season collection"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-stone-200 mb-4">
            Summer 2026
          </p>
          <h1 className="text-5xl sm:text-7xl font-serif text-white leading-tight max-w-2xl">
            The New Season
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-200 max-w-md">
            Effortless pieces crafted for the warmth ahead.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/women"
              className="px-8 py-3 bg-white text-stone-900 text-sm tracking-widest uppercase hover:bg-stone-100 transition-colors"
            >
              Shop Women
            </Link>
            <Link
              href="/men"
              className="px-8 py-3 border border-white text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Shop Men
            </Link>
          </div>
        </div>
      </section>

      {/* Announcement bar */}
      <div className="bg-stone-900 text-white text-center py-2.5 text-xs tracking-widest uppercase">
        Free shipping on orders over $150 · Free returns
      </div>

      {/* Category grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-serif text-stone-900 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link key={cat.href} href={cat.href} className="group relative overflow-hidden aspect-[3/4] rounded-sm bg-stone-100">
              <Image
                src={cat.imageUrl}
                alt={cat.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-serif text-white">{cat.label}</h3>
                  <span className="text-xs text-stone-200 tracking-widest uppercase mt-1 inline-block group-hover:underline">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-serif text-stone-900">Featured Pieces</h2>
          <Link href="/new-arrivals" className="text-xs tracking-widest uppercase text-stone-600 hover:text-stone-900 transition-colors underline underline-offset-4">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand values strip */}
      <section className="border-t border-stone-200 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "♻", title: "Sustainably Made", body: "Ethical factories & organic materials" },
            { icon: "✦", title: "Timeless Design", body: "Pieces built to outlast trends" },
            { icon: "↩", title: "Free Returns", body: "30-day hassle-free returns" },
            { icon: "✈", title: "Free Shipping", body: "On all orders over $150" },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="text-sm font-semibold text-stone-900">{item.title}</h3>
              <p className="text-xs text-stone-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-serif mb-2">Join the Inner Circle</h2>
          <p className="text-stone-400 text-sm mb-8">Be the first to know about new arrivals, events, and exclusive offers.</p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
