"use client";

import { useCategoriesQuery } from "@/hooks";
import { CategoryTile } from "./CategoryTile";

export const CategorySection = () => {
  const { data, isLoading } = useCategoriesQuery();

  return (
    <section className="py-12 mx-auto container px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Explore Our Collections
        </h2>
      </div>
      <p className="mt-2 text-gray-600 max-w-xl">
        Discover curated styles for every occasion. From timeless classics to
        the latest trends, find your perfect look in our diverse collections.
      </p>
      <div className="mt-4">
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-4 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="relative flex h-64 w-full flex-col overflow-hidden rounded-lg bg-gray-200 animate-pulse"
                />
              ))
            : data.map((category) => (
                <CategoryTile key={category} name={category} />
              ))}
        </div>
      </div>
    </section>
  );
};
