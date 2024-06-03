import ExtendedHeader from "../components/ExtendedHeader";
import Cart from "../components/Cart";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";
import { CartProps } from "../types/cartTypes";

const CartPage = ({ toggleCart, openCart }: CartProps) => {
  return (
    <>
      <ExtendedHeader
        toggleCart={toggleCart}
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
