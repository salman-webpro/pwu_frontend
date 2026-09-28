import { ProductCard } from "@/components/products/product-card";
import type { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
  variant?: "catalog" | "locked";
}

export function ProductGrid({ products, variant }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variant={variant} />
      ))}
    </div>
  );
}
