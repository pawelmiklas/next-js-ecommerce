import { ProductCard } from "@/components/category/ProductCard";
import { useProductsQuery } from "@/hooks/useProductsQuery";
import { ProductCardSkeleton } from "../category/ProductCardSkeleton";

export const RecommendedProducts = () => {
  const { data: products, isLoading } = useProductsQuery();

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array(4)
              .fill(null)
              .map((_, index) => <ProductCardSkeleton key={index} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};
