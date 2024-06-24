import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import { useCartStore } from "../../../store/useCartStore";

const CartTotals = () => {
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  return (
    <div className="flex h-auto w-full flex-col items-center bg-color-2 p-4 sm:w-[350px] lg:h-[330px]">
      <h3 className="mb-8 font-poppins text-[2rem] font-semibold">
        Cart Totals
      </h3>
      <div className="mb-4 flex w-full justify-normal gap-20 font-poppins text-base font-medium sm:justify-between">
        <span className="text-color-7">Subtotal:</span>
        <span className="text-color-6">${getTotalPrice().toFixed(2)}</span>
      </div>
      <div className="mb-8 flex w-full justify-normal gap-20 font-poppins text-base font-medium sm:justify-between">
        <span className="text-color-7">Total:</span>
        <span className="text-color-4">${getTotalPrice().toFixed(2)}</span>
      </div>
      <Link to="/billing">
        <Button
          white
          className="rounded-xl text-[1.25rem] font-normal capitalize"
        >
          Check Out
        </Button>
      </Link>
    </div>
  );
};

export default CartTotals;
