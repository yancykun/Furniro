import ExtendedHeader from "../components/ExtendedHeader";
import Footer from "../components/Footer";
import FeatureShowcase from "../components/FeatureShowcase";
import CategoryShowcase from "../components/CategoryShowcase";
import { CartSidebarProps } from "../types/cartSidebarProps";

const CategoriesPage = ({ toggleCartSidebar, openCart }: CartSidebarProps) => {
  return (
    <>
      <ExtendedHeader
        toggleCartSidebar={toggleCartSidebar}
        openCart={openCart}
      />
      <CategoryShowcase />
      <FeatureShowcase />
      <Footer />
    </>
  );
};

export default CategoriesPage;
