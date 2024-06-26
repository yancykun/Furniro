import CartSidebarTotal from "./CartSidebarTotal";
import CartSidebarButtons from "./CartSidebarButtons";
import CartSidebarProducts from "./CartSidebarProducts";
import CartSidebarHeader from "./CartSidebarHeader";

const CartSidebar = () => {
  return (
    <div className="relative flex h-full flex-col bg-color-1 shadow-lg">
      <CartSidebarHeader />
      <CartSidebarProducts />
      <CartSidebarTotal />
      <CartSidebarButtons />
    </div>
  );
};

export default CartSidebar;
