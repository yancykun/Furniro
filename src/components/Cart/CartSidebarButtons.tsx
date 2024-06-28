import { useCartSidebarStore } from "../../store/useCartSidebarStore";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const CartSidebarButtons = () => {
  const closeCartSidebar = useCartSidebarStore(
    (state) => state.closeCartSidebar,
  );

  return (
    <div className="flex flex-wrap justify-center gap-2 px-2 py-4">
      <Link to="/cart">
        <Button
          onClick={closeCartSidebar}
          white
          className="h-[30px] w-[120px] rounded-[50px] font-poppins text-xs font-normal capitalize"
        >
          Cart
        </Button>
      </Link>

      <Link to="/billing">
        <Button
          onClick={closeCartSidebar}
          white
          className="h-[30px] w-[120px] rounded-[50px] font-poppins text-xs font-normal capitalize"
        >
          Checkout
        </Button>
      </Link>

      <Link to="/order">
        <Button
          onClick={closeCartSidebar}
          white
          className="h-[30px] w-[120px] rounded-[50px] font-poppins text-xs font-normal capitalize"
        >
          Order
        </Button>
      </Link>
    </div>
  );
};

export default CartSidebarButtons;
