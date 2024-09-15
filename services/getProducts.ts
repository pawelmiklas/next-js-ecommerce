import { BASE_URL } from "@/lib/config";
import { Product } from "@/types";

export const getProducts = async (limit = 4): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}`);

  if (!res.ok) {
    throw new Error("Failed to fetch category products");
  }

  return res.json();
};
