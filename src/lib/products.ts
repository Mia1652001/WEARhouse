export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  /** Cycles the placeholder card background: "offwhite" | "gold" | "ink" */
  placeholderColor: "offwhite" | "gold" | "ink";
}

export function formatPrice(amount: number): string {
  return `Rs ${amount.toLocaleString("en")}`;
}

const PRODUCTS: Product[] = [
  { id: "1", name: "The Main Character Top",          price: 1250,              placeholderColor: "offwhite" },
  { id: "2", name: "Bad Decision Mini Dress",          price: 1890, salePrice: 1290, placeholderColor: "gold" },
  { id: "3", name: '"Where\'s Your Top From?" Tee',   price: 950,               placeholderColor: "ink"  },
  { id: "4", name: "Girl-Math Blazer",                 price: 2750,              placeholderColor: "offwhite" },
  { id: "5", name: "Emotionally Necessary Cargos",     price: 1650, salePrice: 1190, placeholderColor: "gold" },
  { id: "6", name: "Worth-It Knit",                    price: 1450,              placeholderColor: "ink"  },
];

/* Simulates a real API call — swap the body for a fetch() when the backend is ready */
export async function getTrendingProducts(): Promise<Product[]> {
  await new Promise<void>((resolve) => setTimeout(resolve, 600));
  return PRODUCTS;
}
