import { useCartStore } from "../../store/useCartStore";

const ProductBill = () => {
  const { cart, getTotalPrice } = useCartStore();
  return (
    <>
      <div className="mb-2 flex justify-between">
        <span className="font-poppins text-2xl font-medium">Product</span>
        <span className="font-poppins text-2xl font-medium">Subtotal</span>
      </div>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="font-poppins text-base text-color-6">
              {item.title}
            </span>
            <span className="font-poppins text-xs font-medium">X</span>
            <span className="font-poppins text-xs font-medium">
              {item.quantity}
            </span>
          </div>
          <div>
            <span className="font-poppins text-base font-light">
              {(item.quantity * item.price).toFixed(2)}
            </span>
          </div>
        </div>
      ))}
      <div className="mt-1 border-b border-color-6 pb-6">
        <div className="flex justify-between">
          <span className="font-poppins text-base font-medium">Subtotal</span>
          <span className="font-poppins text-base font-medium">
            {getTotalPrice().toFixed(2)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-poppins text-base font-medium">Total</span>
          <span className="font-poppins text-2xl font-bold text-color-4">
            {getTotalPrice().toFixed(2)}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductBill;
