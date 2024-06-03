import BreadcrumbHeader from "../components/BreadcrumbHeader";
import CategoryShowcase from "../components/CategoryShowcase";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";
import { CartProps } from "../types/cartTypes";

const CategoryPage = ({ toggleCart, openCart }: CartProps) => {
  return (
    <div>
      <BreadcrumbHeader toggleCart={toggleCart} openCart={openCart} />
      <CategoryShowcase />
      <FeatureShowcase />
      <Footer />
    </div>
  );
};

export default CategoryPage;
