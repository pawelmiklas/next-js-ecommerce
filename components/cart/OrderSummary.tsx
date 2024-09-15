import { formatPrice } from "@/utils";

interface OrderSummaryProps {
  subtotal: number;
  shippingEstimate: number;
  taxEstimate: number;
  orderTotal: number;
}

export const OrderSummary = ({
  subtotal,
  shippingEstimate,
  taxEstimate,
  orderTotal,
}: OrderSummaryProps) => (
  <div className="bg-gray-100 p-6 rounded-lg shadow">
    <h2 className="text-xl font-bold mb-4">Order Summary</h2>
    <div className="space-y-2 mb-4">
      <div className="flex justify-between" data-testid="subtotal">
        <span>Subtotal</span>
        <span>{formatPrice(subtotal)}</span>
      </div>
      <div className="flex justify-between">
        <span>Shipping Estimate</span>
        <span>{formatPrice(shippingEstimate)}</span>
      </div>
      <div className="flex justify-between" data-testid="tax-estimate">
        <span>Tax Estimate</span>
        <span>{formatPrice(taxEstimate)}</span>
      </div>
      <div
        className="flex justify-between font-bold text-lg"
        data-testid="order-total"
      >
        <span>Order Total</span>
        <span>{formatPrice(orderTotal)}</span>
      </div>
    </div>
    <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition-colors">
      Proceed to Checkout
    </button>
  </div>
);
