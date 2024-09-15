import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "../ProductCard";
import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

const { useCart } = vi.hoisted(() => ({
  useCart: vi.fn().mockReturnValue({
    addToCart: vi.fn(),
  }),
}));

vi.mock("@/hooks", async () => {
  const actual = await vi.importActual("@/hooks");

  return { ...actual, useCart };
});

const fakeProduct = {
  id: 1,
  title: "Test Product",
  description: "This is a test product description",
  price: 19.99,
  image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
  rating: { rate: 4.5, count: 100 },
  category: "test",
};

describe("ProductCard Integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("Given a product, When rendering ProductCard, Then it should display product information correctly", () => {
    // GIVEN + WHEN
    render(<ProductCard product={fakeProduct} />);

    // THEN
    expect(screen.getByTestId("product-title")).toHaveTextContent(
      fakeProduct.title
    );
    expect(screen.getByTestId("product-description")).toHaveTextContent(
      fakeProduct.description
    );
    expect(screen.getByTestId("product-price")).toHaveTextContent(
      fakeProduct.price.toString()
    );
  });

  it("Given a product, When clicking 'Add to Cart' button, Then it should call addToCart", () => {
    // GIVEN
    render(<ProductCard product={fakeProduct} />);

    // WHEN
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    fireEvent.click(addToCartButton);

    // THEN
    expect(useCart).toHaveBeenCalledTimes(1);
  });
});
