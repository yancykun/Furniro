import BreadcrumbHeader from "../components/BreadcrumbHeader";
import CategoryShowcase from "../components/CategoryShowcase";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";
import { CartSidebarProps } from "../types/cartSidebarProps";

const CategoryPage = ({ toggleCartSidebar, openCart }: CartSidebarProps) => {
  return (
    <div>
      <BreadcrumbHeader
        toggleCartSidebar={toggleCartSidebar}
        openCart={openCart}
      />
      <CategoryShowcase />
      <FeatureShowcase />
      <Footer />
    </div>
  );
};

export default CategoryPage;
