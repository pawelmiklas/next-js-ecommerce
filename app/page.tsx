import { HomePage } from "@/components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StyleHub - Elevate Your Style",
  description:
    "Discover our curated collection of trendsetting fashion. From casual chic to elegant sophistication, find your perfect look today.",
};

const Page = () => {
  return <HomePage />;
};

export default Page;
