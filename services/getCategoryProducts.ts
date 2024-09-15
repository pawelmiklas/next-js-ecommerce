import { BASE_URL } from "@/lib/config";
import { Product } from "@/types";

export const getCategoryProducts = async (
  categoryName: string
): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products/category/${categoryName}`);

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  return res.json();
};
