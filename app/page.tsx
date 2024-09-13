"use client";

import { CategorySection } from "@/components/home/CategorySection";
import { Footer } from "@/components/home/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { useCategoriesQuery } from "@/hooks/useCategoriesQuery";

export default function Home() {
  const { data } = useCategoriesQuery();

  return (
    <>
      <HeroSection />
      <CategorySection categories={data} />
      <Footer />
    </>
  );
}
