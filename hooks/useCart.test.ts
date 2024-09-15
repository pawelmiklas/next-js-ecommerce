import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useCart } from "./useCart";
import { useLocalStorage } from "./useLocalStorage";
import { Product } from "@/types";

vi.mock("./useLocalStorage", () => ({
  useLocalStorage: vi.fn(),
}));

const fakeProduct: Product = {
  id: 1,
  title: "Jeans",
  price: 50,
  description: "Description",
  category: "Category",
  image: "Image",
  rating: { rate: 5, count: 10 },
};

describe("useCart", () => {
  const mockSetCart = vi.fn();

  beforeEach(() => {
    vi.mocked(useLocalStorage).mockReturnValue([[], mockSetCart]);
  });

  it("Given an empty cart, When addToCart is called, Then add new item to cart", () => {
    // GIVEN
    const { result } = renderHook(() => useCart());

    // WHEN
    act(() => {
      result.current.addToCart(fakeProduct);
    });

    // THEN
    expect(mockSetCart).toHaveBeenCalledWith([{ ...fakeProduct, quantity: 1 }]);
  });

  it("Given a cart with an item, When addToCart is called with the same item, Then increase quantity", () => {
    // GIVEN
    vi.mocked(useLocalStorage).mockReturnValue([
      [{ ...fakeProduct, quantity: 1 }],
      mockSetCart,
    ]);
    const { result } = renderHook(() => useCart());

    // WHEN
    act(() => {
      result.current.addToCart(fakeProduct);
    });

    // THEN
    expect(mockSetCart).toHaveBeenCalledWith([{ ...fakeProduct, quantity: 2 }]);
  });

  it("Given a cart with items, When removeFromCart is called, Then remove the item from cart", () => {
    // GIVEN
    vi.mocked(useLocalStorage).mockReturnValue([
      [{ ...fakeProduct, quantity: 1 }],
      mockSetCart,
    ]);
    const { result } = renderHook(() => useCart());

    // WHEN
    act(() => {
      result.current.removeFromCart(fakeProduct.id);
    });

    // THEN
    expect(mockSetCart).toHaveBeenCalledWith([]);
  });

  it("Given a cart with items, When updateQuantity is called, Then update the item quantity", () => {
    // GIVEN
    vi.mocked(useLocalStorage).mockReturnValue([
      [{ ...fakeProduct, quantity: 1 }],
      mockSetCart,
    ]);
    const { result } = renderHook(() => useCart());

    // WHEN
    act(() => {
      result.current.updateQuantity(fakeProduct.id, 3);
    });

    // THEN
    expect(mockSetCart).toHaveBeenCalledWith([{ ...fakeProduct, quantity: 3 }]);
  });
});
