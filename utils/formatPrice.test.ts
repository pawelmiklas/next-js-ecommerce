import { describe, it, expect } from "vitest";
import { formatPrice } from "./formatPrice";

describe("formatPrice", () => {
  it("Given whole numbers, When formatting, Then format correctly", () => {
    expect(formatPrice(1000)).toBe("$1,000.00");
  });

  it("Given decimal numbers, When formatting, Then format correctly", () => {
    expect(formatPrice(1234.56)).toBe("$1,234.56");
  });

  it("Given numbers with more than two decimal places, When formatting, Then round to two decimal places", () => {
    expect(formatPrice(9.99999)).toBe("$10.00");
  });
});
