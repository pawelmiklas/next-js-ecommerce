import Image from "next/image";
import { formatPrice } from "@/utils";
import { CartItem as CartItemType } from "@/types";
import { XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onQuantityChange: (id: number, quantity: number) => void;
}

export const CartItem = ({
  item,
  onRemove,
  onQuantityChange,
}: CartItemProps) => {
  const handleQuantityChange = (change: number) => {
    const newQuantity = item.quantity + change;

    if (newQuantity > 0) {
      onQuantityChange(item.id, newQuantity);
    }
  };

  return (
    <div className="flex flex-col xs:flex-row bg-white py-4">
      <Image
        src={item.image}
        alt={item.title}
        width={150}
        height={150}
        className="object-cover mr-4 mb-4 xs:mb-0"
      />
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div className="pr-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2 overflow-hidden">
              {item.description}
            </p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
            data-testid="remove-item-button"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex justify-between items-end mt-4">
          <p className="text-lg font-bold">{formatPrice(item.price)}</p>
          <div className="flex items-center">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              data-testid="decrease-quantity-button"
            >
              <MinusIcon className="h-5 w-5" />
            </button>
            <span className="mx-2 w-8 text-center" data-testid="item-quantity">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              data-testid="increase-quantity-button"
            >
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
