import { BASE_URL } from "@/lib/config";
import useSWR from "swr";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const useCategoryProducts = (categoryName: string) => {
  const { data, isLoading } = useSWR<Product[]>(
    `${BASE_URL}/products/category/${categoryName}`
  );

  return { data: data ?? [], isLoading };
};
