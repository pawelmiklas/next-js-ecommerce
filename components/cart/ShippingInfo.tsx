import {
  TruckIcon,
  ArrowPathIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const InfoItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <Icon className="h-12 w-12 text-gray-600 mb-4" />
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-600 max-w-xs">{description}</p>
  </div>
);

export const ShippingInfo = () => (
  <div className="bg-gray-100 w-full pt-12 mt-12">
    <div className="container mx-auto px-4 border-b border-gray-300 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <InfoItem
          icon={ArrowPathIcon}
          title="Free Returns"
          description="We offer hassle-free returns within 30 days of purchase. If you're not completely satisfied with your order, simply return it for a full refund or exchange."
        />
        <InfoItem
          icon={TruckIcon}
          title="Free Shipping"
          description="Enjoy free shipping on all orders over $200. We believe in providing value to our customers, and this is just one way we show our appreciation for your business."
        />
        <InfoItem
          icon={ClockIcon}
          title="Fast Delivery"
          description="Experience lightning-fast delivery with our 24-hour shipping on all in-stock items. We understand the excitement of receiving your purchase and strive to get it to you as quickly as possible."
        />
      </div>
    </div>
  </div>
);
