import { BASE_URL } from "@/lib/config";
import useSWR from "swr";

export const useCategoriesQuery = () => {
  const { data, isLoading } = useSWR<string[]>(
    `${BASE_URL}/products/categories`
  );

  return { data: data ?? [], isLoading };
};
