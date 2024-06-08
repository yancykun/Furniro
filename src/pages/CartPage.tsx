import ExtendedHeader from "../components/Features/Header/ExtendedHeader";
import Cart from "../components/Features/Cart/Cart";
import FeatureShowcase from "../components/Features/Feature/FeatureShowcase";
import Footer from "../components/Section/Footer/Footer";

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
