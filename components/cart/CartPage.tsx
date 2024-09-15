import { CartContents } from "./CartContents";
import { RecommendedProducts } from "./RecommendedProducts";
import { ShippingInfo } from "./ShippingInfo";

export const CartPage = () => (
  <>
    <CartContents />
    <RecommendedProducts />
    <ShippingInfo />
  </>
);
