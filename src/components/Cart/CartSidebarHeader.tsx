import { useCartSidebarStore } from "../../store/useCartSidebarStore";
import { cartClose } from "../../assets";

const CartSidebarHeader = () => {
  const toggleCartSidebar = useCartSidebarStore(
    (state) => state.toggleCartSidebar,
  );

  return (
    <div className="m-6 flex justify-between border-b border-color-6/30 pb-6">
      <h2 className="font-poppins text-base font-semibold md:text-xl lg:text-2xl">
        Shopping Cart
      </h2>
      <img
        src={cartClose}
        alt="cart close icon"
        width={20}
        onClick={toggleCartSidebar}
        className="cursor-pointer"
      />
    </div>
  );
};

export default CartSidebarHeader;
