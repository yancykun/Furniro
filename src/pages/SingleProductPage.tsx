import BreadcrumbHeader from "../components/BreadcrumbHeader";
import Footer from "../components/Footer";
import SingleProductCard from "../components/SingleProductCard";
import { CartSidebarProps } from "../types/types";

const SingleProductPage = ({
  openCart,
  toggleCartSidebar,
}: CartSidebarProps) => {
  return (
    <div>
      <BreadcrumbHeader
        openCart={openCart}
        toggleCartSidebar={toggleCartSidebar}
      />
      <SingleProductCard />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
