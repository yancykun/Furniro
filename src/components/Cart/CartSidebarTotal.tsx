import { useCartStore } from "../../store/useCartStore";

const CartSidebarTotal = () => {
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  return (
    <div className="mx-4 border-b border-color-6/30 pb-4">
      <div className="flex justify-between">
        <p className="font-poppins font-semibold">Subtotal</p>
        <p className="font-poppins font-semibold text-color-4">
          ${getTotalPrice().toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartSidebarTotal;
