import { ProductCard } from "@/components/category/ProductCard";
import { getProducts } from "@/services/getProducts";

export const RecommendedProducts = async () => {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
