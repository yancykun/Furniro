import { products } from "../constants";

import ExtendedHeader from "../components/ExtendedHeader";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import FeatureShowcase from "../components/FeatureShowcase";
import { CartSidebarProps } from "../types/types";

const ShopPage = ({ toggleCartSidebar, openCart }: CartSidebarProps) => {
  return (
    <>
      <ExtendedHeader
        toggleCartSidebar={toggleCartSidebar}
        openCart={openCart}
      />
      <ProductCard products={products} />
      <FeatureShowcase />
      <Footer />
    </>
  );
};

export default ShopPage;
