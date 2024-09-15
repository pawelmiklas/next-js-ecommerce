import { CategorySection } from "@/components/home/CategorySection";
import { HeroSection } from "@/components/home/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StyleHub - Elevate Your Style",
  description:
    "Discover our curated collection of trendsetting fashion. From casual chic to elegant sophistication, find your perfect look today.",
};

const Home = () => (
  <>
    <HeroSection />
    <CategorySection />
  </>
);

export default Home;
