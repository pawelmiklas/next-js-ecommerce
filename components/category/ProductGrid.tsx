import { Product } from "@/hooks";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
}

export const ProductGrid = ({ products, isLoading }: ProductGridProps) => (
  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
    {isLoading
      ? Array(4)
          .fill(null)
          .map((_, index) => <ProductCardSkeleton key={index} />)
      : products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
  </div>
);
