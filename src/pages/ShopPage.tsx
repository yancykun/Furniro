import { products } from "../constants";
import ExtendedHeader from "../components/ExtendedHeader";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import FeatureShowcase from "../components/FeatureShowcase";

const ShopPage = () => {
  return (
    <>
      <ExtendedHeader />
      <ProductCard products={products} />
      <FeatureShowcase />
      <Footer />
    </>
  );
};

export default ShopPage;
