"use client";

import { useCategoryProductsQuery } from "@/hooks";
import { useMemo } from "react";
import { CategoryStats } from "./CategoryStats";
import { TopRatedProducts } from "./TopRatedProducts";
import { ProductGrid } from "./ProductGrid";

interface CategoryPageProps {
  categoryName: string;
}

export const CategoryPage = ({ categoryName }: CategoryPageProps) => {
  const { data: products = [], isLoading } =
    useCategoryProductsQuery(categoryName);

  const stats = useMemo(
    () => ({
      totalProducts: products.length,
      averagePrice: products.length
        ? (
            products.reduce((sum, p) => sum + p.price, 0) / products.length
          ).toFixed(2)
        : "0.00",
      averageRating: products.length
        ? (
            products.reduce((sum, p) => sum + p.rating.rate, 0) /
            products.length
          ).toFixed(1)
        : "0.0",
    }),
    [products]
  );

  const topRatedProducts = useMemo(
    () =>
      [...products].sort((a, b) => b.rating.rate - a.rating.rate).slice(0, 3),
    [products]
  );

  return (
    <div className="container mx-auto px-4 py-8 min-h-min flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {decodeURIComponent(categoryName)}
        </h1>
      </div>

      <TopRatedProducts products={topRatedProducts} isLoading={isLoading} />
      <CategoryStats stats={stats} />
      <ProductGrid products={products} isLoading={isLoading} />
    </div>
  );
};
