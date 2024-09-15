"use client";

import { useCart } from "@/hooks";
import { CartItem } from "@/components/cart/CartItem";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { useMemo } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SHIPPING_PRICE = 10;

export const CartContents = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = useMemo(
    () => cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0),
    [cart]
  );

  const taxEstimate = subtotal * 0.1;
  const orderTotal = subtotal + SHIPPING_PRICE + subtotal * 0.1;

  if (cart.length === 0) {
    return (
      <>
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingBagIcon className="mx-auto h-24 w-24 text-gray-400 mb-4" />
          <h2
            className="text-3xl font-bold mb-4"
            data-testid="empty-cart-message"
          >
            Your bag is empty
          </h2>
          <p className="text-gray-600 mb-8">
            Looks like you have not added any items to your bag yet.
          </p>
          <Link
            href="/"
            className="bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition-colors"
            data-testid="continue-shopping-button"
          >
            Continue Shopping
          </Link>
        </div>
      </>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <div className="divide-y divide-solid divide-gray-200">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onQuantityChange={updateQuantity}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/3">
          <OrderSummary
            subtotal={subtotal}
            shippingEstimate={SHIPPING_PRICE}
            taxEstimate={taxEstimate}
            orderTotal={orderTotal}
          />
        </div>
      </div>
    </div>
  );
};
