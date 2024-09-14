"use client";

import { CategoryPage } from "@/components/category/CategoryPage";

const Page = ({ params }: { params: { name: string } }) => {
  return <CategoryPage categoryName={params.name} />;
};

export default Page;
