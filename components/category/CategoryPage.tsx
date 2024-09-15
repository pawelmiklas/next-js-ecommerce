import { CategoryStats } from "./CategoryStats";
import { TopRatedProducts } from "./TopRatedProducts";
import { ProductGrid } from "./ProductGrid";
import { getCategoryProducts } from "@/services";

interface CategoryPageProps {
  categoryName: string;
}

export const CategoryPage = async ({ categoryName }: CategoryPageProps) => {
  const products = await getCategoryProducts(categoryName);

  const stats = {
    totalProducts: products.length,
    averagePrice: products.length
      ? (
          products.reduce((sum, { price }) => sum + price, 0) / products.length
        ).toFixed(2)
      : "0.00",
    averageRating: products.length
      ? (
          products.reduce((sum, { rating }) => sum + rating.rate, 0) /
          products.length
        ).toFixed(1)
      : "0.0",
  };

  const topRatedProducts = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8 min-h-min flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {decodeURIComponent(categoryName)}
        </h1>
      </div>

      <TopRatedProducts products={topRatedProducts} />
      <CategoryStats stats={stats} />
      <ProductGrid products={products} />
    </div>
  );
};
