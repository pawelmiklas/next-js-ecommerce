import { describe, it, expect } from "vitest";
import { formatImageFilename } from "./formatImageFilename";

describe("formatImageFilename", () => {
  it("Given a string with spaces, When formatting, Then replace spaces with hyphens", () => {
    expect(formatImageFilename("mens clothing")).toBe("mens-clothing");
  });

  it("Given a string with special characters, When formatting, Then remove special characters", () => {
    expect(formatImageFilename("women's clothing")).toBe("womens-clothing");
  });

  it("Given a mixed case string, When formatting, Then convert to lowercase", () => {
    expect(formatImageFilename("JewelerY")).toBe("jewelery");
  });
});
