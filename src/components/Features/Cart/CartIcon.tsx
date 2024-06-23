import { cart } from "../../../assets";
import { useCartSidebarStore } from "../../../store/useCartSidebarStore";
import { useCartStore } from "../../../store/useCartStore";

const CartIcon = () => {
  const itemCount = useCartStore((state) => state.itemCount);
  const toggleCartSidebar = useCartSidebarStore(
    (state) => state.toggleCartSidebar,
  );

  return (
    <div className="relative">
      <img
        width={25}
        onClick={toggleCartSidebar}
        className="relative cursor-pointer"
        src={cart}
        alt="Cart"
      />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
          {itemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
