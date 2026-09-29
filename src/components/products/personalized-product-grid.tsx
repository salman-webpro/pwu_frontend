import { PersonalizedProductCard } from "@/components/products/personalized-product-card";
import type { PersonalizedProduct } from "@/types/product";

interface PersonalizedProductGridProps {
  products: PersonalizedProduct[];
}

export function PersonalizedProductGrid({ products }: PersonalizedProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <PersonalizedProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
