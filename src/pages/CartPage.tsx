import ExtendedHeader from "../components/ExtendedHeader";
import Cart from "../components/Cart";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";
import { CartSidebarProps } from "../types/cartSidebarProps";

const CartPage = ({ toggleCartSidebar, openCart }: CartSidebarProps) => {
  return (
    <>
      <ExtendedHeader
        toggleCartSidebar={toggleCartSidebar}
        openCart={openCart}
        customTitle="Cart"
      />
      <Cart />
      <FeatureShowcase />
      <Footer />
    </>
  );
};

export default CartPage;
