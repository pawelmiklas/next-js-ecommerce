import "@testing-library/jest-dom/vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartContents } from "../CartContents";
import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

describe("CartContents Integration", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it("Given an empty cart, When rendering CartContents, Then it should display empty cart message", () => {
    // GIVEN + WHEN
    render(<CartContents />);

    // THEN
    expect(screen.getByTestId("empty-cart-message")).toBeInTheDocument();
    expect(screen.getByTestId("continue-shopping-button")).toBeInTheDocument();
  });

  it("Given a non-empty cart, When rendering CartContents, Then it should display cart items and order summary", () => {
    // GIVEN
    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          id: 1,
          title: "Test Item 1",
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          price: 10,
          quantity: 2,
        },
        {
          id: 2,
          title: "Test Item 2",
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          price: 20,
          quantity: 1,
        },
      ])
    );

    // WHEN
    render(<CartContents />);

    // THEN
    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
    expect(screen.getByText("Test Item 1")).toBeInTheDocument();
    expect(screen.getByText("Test Item 2")).toBeInTheDocument();
  });

  it("Given a non-empty cart, When rendering CartContents, Then it should calculate and display correct subtotal, tax, and total", () => {
    // GIVEN
    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          id: 1,
          title: "Test Item 1",
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          price: 10,
          quantity: 2,
        },
        {
          id: 2,
          title: "Test Item 2",
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          price: 20,
          quantity: 1,
        },
      ])
    );

    // WHEN
    render(<CartContents />);

    // THEN
    expect(screen.getByTestId("subtotal")).toHaveTextContent("$40.00");
    expect(screen.getByTestId("tax-estimate")).toHaveTextContent("$4.00");
    expect(screen.getByTestId("order-total")).toHaveTextContent("$54.00");
  });

  it("Given a non-empty cart, When removing an item, Then it should update the cart contents", () => {
    // GIVEN
    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          id: 1,
          title: "Test Item 1",
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          price: 10,
          quantity: 2,
        },
        {
          id: 2,
          title: "Test Item 2",
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          price: 20,
          quantity: 1,
        },
      ])
    );
    render(<CartContents />);

    // WHEN
    const removeButtons = screen.getAllByTestId("remove-item-button");
    fireEvent.click(removeButtons[0]);

    // THEN
    expect(screen.queryByText("Test Item 1")).not.toBeInTheDocument();
    expect(screen.getByText("Test Item 2")).toBeInTheDocument();
  });

  it("Given a cart with an item, When increase two times the item quantity and decrease one time, Then it should update the quantity and price", () => {
    // GIVEN
    localStorage.setItem(
      "cart",
      JSON.stringify([
        {
          id: 1,
          title: "Test Item",
          image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
          price: 10,
          quantity: 1,
        },
      ])
    );
    render(<CartContents />);

    // WHEN
    const incrementButton = screen.getByTestId("increase-quantity-button");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);

    const decrementButton = screen.getByTestId("decrease-quantity-button");
    fireEvent.click(decrementButton);

    // THEN
    expect(screen.getByTestId("item-quantity")).toHaveTextContent("2");
    expect(screen.getByTestId("subtotal")).toHaveTextContent("$20.00");
  });
});
