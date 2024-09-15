import { CartPage } from "@/components/cart/CartPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Shopping Cart - StyleHub",
  description: "Review and manage items in your shopping cart at StyleHub.",
};

const Page = () => {
  return <CartPage />;
};

export default Page;
