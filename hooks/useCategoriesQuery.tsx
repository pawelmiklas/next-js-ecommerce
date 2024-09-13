import { BASE_URL } from "@/lib/config";
import useSWR from "swr";

export const useCategoriesQuery = () => {
  const { data } = useSWR<string[]>(`${BASE_URL}/products/categories`);

  return { data: data ?? [] };
};
