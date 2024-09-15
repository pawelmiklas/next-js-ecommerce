import { CategoryPage } from "@/components/category/CategoryPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Category - StyleHub",
  description: "Explore our collection of products in this category.",
};

const Page = ({ params }: { params: { name: string } }) => {
  return <CategoryPage categoryName={params.name} />;
};

export default Page;
