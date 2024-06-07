import ExtendedHeader from "../components/ExtendedHeader";
import Cart from "../components/Cart";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";

const CartPage = () => {
  return (
    <>
      <ExtendedHeader customTitle="Cart" />
      <Cart />
      <FeatureShowcase />
      <Footer />
    </>
  );
};

export default CartPage;
