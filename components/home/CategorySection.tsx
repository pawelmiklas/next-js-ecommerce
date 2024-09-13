import Link from "next/link";
import Image from "next/image";

interface CategorySectionProps {
  categories: string[];
}

export const CategorySection = ({ categories }: CategorySectionProps) => (
  <section className="py-12 xl:mx-auto xl:max-w-7xl px-8">
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900">
        Explore Our Collections
      </h2>
    </div>
    <p className="mt-2 text-gray-600 max-w-xl">
      Discover curated styles for every occasion. From timeless classics to the
      latest trends, find your perfect look in our diverse collections.
    </p>
    <div className="mt-4">
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-4 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/category/${category}`}
            className="relative flex h-64 w-full flex-col overflow-hidden rounded-lg hover:opacity-90 transition-all"
          >
            <Image
              src={`/${category.toLowerCase()}.jpg`}
              alt={category}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50" />
            <span className="relative mt-auto p-4 text-center text-xl font-bold text-white">
              {category}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
