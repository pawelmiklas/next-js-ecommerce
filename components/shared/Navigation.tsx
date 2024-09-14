"use client";

import Link from "next/link";
import {
  ShoppingBagIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "@/hooks";

export const Navigation = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-gray-800 flex items-center">
            <Square3Stack3DIcon className="h-8 w-8" />
            <span className="sr-only">StyleHub</span>
          </Link>
          <Link href="/cart" className="text-gray-800 relative">
            <ShoppingBagIcon className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};
