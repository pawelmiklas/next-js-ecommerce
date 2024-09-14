import { BASE_URL } from "@/lib/config";
import { Product } from "@/types";
import useSWR from "swr";

export const useCategoryProductsQuery = (categoryName: string) => {
  const { data, isLoading } = useSWR<Product[]>(
    `${BASE_URL}/products/category/${categoryName}`
  );

  return { data: data ?? [], isLoading };
};
