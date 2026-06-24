"use client";

import { useState, useEffect, useRef } from "react";
import { type Product, getTrendingProducts } from "@/lib/products";
import ProductCard, { ProductCardText } from "@/components/ProductCard";

type Status = "loading" | "error" | "success";

export default function TrendingSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  const imgScrollRef = useRef<HTMLDivElement>(null);
  const txtScrollRef = useRef<HTMLDivElement>(null);

  /* Keep the text row in sync with the image scroll position */
  function syncTextScroll() {
    if (imgScrollRef.current && txtScrollRef.current) {
      txtScrollRef.current.scrollLeft = imgScrollRef.current.scrollLeft;
    }
  }

  useEffect(() => {
    getTrendingProducts()
      .then((data) => {
        setProducts(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);

  return (
    <section className="bg-brand-offwhite px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-brand-near-black tracking-tight">
            Trending
          </h2>
          <p className="text-brand-near-black/50 text-sm mt-1">
            The pieces everyone&apos;s emotionally budgeting for.
          </p>
        </div>

        {status === "loading" && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col gap-3">
                <div className="aspect-[3/4] bg-brand-near-black/8 rounded-sm" />
                <div className="h-3 bg-brand-near-black/8 rounded w-3/4" />
                <div className="h-3 bg-brand-near-black/8 rounded w-1/3" />
              </div>
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="text-brand-near-black/60 text-sm">
            Couldn&apos;t load the goods right now — refresh to try again.
          </p>
        )}

        {status === "success" && (
          <>
            {/*
             * Image-only scroll container. Names and prices live in the synced
             * text row below, so the overlay scrollbar appears in empty space
             * at the bottom of this container — never over any text.
             *
             * -mx-6 bleeds past the section's px-6 so the track runs edge-to-edge.
             * Leading/trailing w-6 spacers align cards with the heading above.
             * scroll-padding-left matches the spacer so snap targets land flush.
             */}
            <div
              ref={imgScrollRef}
              onScroll={syncTextScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 [scroll-padding-left:1.5rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
              tabIndex={0}
              role="region"
              aria-label="Trending products — scroll sideways to see more"
            >
              <div className="w-6 shrink-0" aria-hidden="true" />
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-[62vw] sm:w-[42vw] lg:w-72 flex-none snap-start"
                >
                  <ProductCard product={product} imageOnly />
                </div>
              ))}
              <div className="w-6 shrink-0" aria-hidden="true" />
            </div>

            {/*
             * Text row — mirrors the image container's layout exactly so names
             * and prices stay aligned with their cards. Driven by syncTextScroll,
             * not by the user; pointer-events-none prevents independent scrolling.
             */}
            <div
              ref={txtScrollRef}
              className="flex gap-4 overflow-x-hidden -mx-6 pointer-events-none"
              aria-hidden="true"
            >
              <div className="w-6 shrink-0" />
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-[62vw] sm:w-[42vw] lg:w-72 flex-none"
                >
                  <ProductCardText product={product} />
                </div>
              ))}
              <div className="w-6 shrink-0" />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
