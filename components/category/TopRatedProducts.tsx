import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface TopRatedProductsProps {
  products: Product[];
}

export const TopRatedProducts = ({ products }: TopRatedProductsProps) => (
  <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6">Top Rated Products</h2>
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);
