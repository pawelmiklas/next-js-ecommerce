"use client";

import Image from "next/image";
import { useCart } from "@/hooks";
import { StarRating } from "./StartRating";
import { formatPrice } from "@/utils";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="border border-gray-200 rounded-lg flex flex-col h-full overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="object-cover h-72 w-full"
      />
      <div className="flex flex-col flex-grow p-4">
        <p
          className="line-clamp-1 text-center text-gray-800 mb-2"
          title={product.title}
        >
          {product.title}
        </p>
        <p
          className="line-clamp-2 text-sm text-center text-gray-500"
          title={product.description}
        >
          {product.description}
        </p>
        <p className="text-gray-900 py-2 text-center text-xl font-bold">
          {formatPrice(product.price)}
        </p>
        <div className="flex justify-center mb-2">
          <StarRating rating={product.rating.rate} />
        </div>
      </div>
      <button
        onClick={() => addToCart(product)}
        className="bg-gray-800 text-white py-3 hover:bg-gray-900 w-full uppercase font-bold transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};
