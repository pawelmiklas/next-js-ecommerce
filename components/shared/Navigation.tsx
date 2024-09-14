"use client";

import Link from "next/link";
import {
  ShoppingBagIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

export const Navigation = () => (
  <header className="sticky top-0 z-50 bg-white shadow-md">
    <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Link href="/" className="text-gray-800 flex items-center">
          <Square3Stack3DIcon className="h-8 w-8" aria-hidden="true" />
          <span className="sr-only">StyleHub</span>
        </Link>
        <Link href="/cart" className="text-gray-800">
          <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Cart</span>
        </Link>
      </div>
    </nav>
  </header>
);
