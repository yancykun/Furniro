import ExtendedHeader from "../components/Header/ExtendedHeader";
import Cart from "../components/Cart/Cart";
import FeatureShowcase from "../components/Features/FeaturesShowcase";
import Footer from "../components/Header/Footer";
import PopularProducts from "../components/PopularProducts/PopularProducts";

const CartPage = () => {
  return (
    <>
      <ExtendedHeader customTitle="Cart" />
      <Cart />
      <PopularProducts />
      <FeatureShowcase />
      <Footer />
    </>
  );
};

export default CartPage;
