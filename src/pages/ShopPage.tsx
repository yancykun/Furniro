import { products } from "../constants";
import ExtendedHeader from "../components/Features/Header/ExtendedHeader";
import Footer from "../components/Section/Footer/Footer";
import ProductCard from "../components/Features/Product/ProductCard";
import FeatureShowcase from "../components/Features/Feature/FeatureShowcase";

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
