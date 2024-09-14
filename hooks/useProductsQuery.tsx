import { BASE_URL } from "@/lib/config";
import { Product } from "@/types";
import useSWR from "swr";

export const useProductsQuery = () => {
  const { data, isLoading } = useSWR<Product[]>(`${BASE_URL}/products?limit=4`);

  return { data: data ?? [], isLoading };
};
