import ExtendedHeader from "../components/Features/Header/ExtendedHeader";
import Cart from "../components/Features/Cart/Cart";
import FeatureShowcase from "../components/Features/Feature/FeaturesShowcase";
import Footer from "../components/Section/Footer/Footer";
import PopularProducts from "../components/Features/Feature/PopularProducts";

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
