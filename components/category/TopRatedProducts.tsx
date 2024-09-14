import { Product } from "@/hooks";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

interface TopRatedProductsProps {
  products: Product[];
  isLoading: boolean;
}

export const TopRatedProducts = ({
  products,
  isLoading,
}: TopRatedProductsProps) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6">Top Rated Products</h2>
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {isLoading
        ? Array(3)
            .fill(null)
            .map((_, index) => <ProductCardSkeleton key={index} />)
        : products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  </div>
);
