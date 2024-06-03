import ExtendedHeader from "../components/ExtendedHeader";
import Footer from "../components/Footer";
import FeatureShowcase from "../components/FeatureShowcase";
import CategoryShowcase from "../components/CategoryShowcase";
import { CartProps } from "../types/cartTypes";

const CategoriesPage = ({ openCart, toggleCart }: CartProps) => {
  return (
    <>
      <ExtendedHeader openCart={openCart} toggleCart={toggleCart} />
      <CategoryShowcase />
      <FeatureShowcase />
      <Footer />
    </>
  );
};

export default CategoriesPage;
