import { BASE_URL } from "@/lib/config";

export const getCategories = async (): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}/products/categories`);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};
