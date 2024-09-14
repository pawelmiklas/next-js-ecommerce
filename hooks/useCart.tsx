"use client";

import { CartItem, Product } from "@/types";
import { useLocalStorage } from "./useLocalStorage";

export const useCart = () => {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);

  const updateQuantity = (productId: number, quantity: number) => {
    setCart(
      cart.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const addToCart = (product: Product) => {
    const existingItem = cart.find(({ id }) => id === product.id);

    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(({ id }) => id !== productId));
  };

  return { cart, addToCart, removeFromCart, updateQuantity };
};
