import ExtendedHeader from "../components/Features/Header/ExtendedHeader";
import Footer from "../components/Section/Footer/Footer";
import FeatureShowcase from "../components/Features/Feature/FeaturesShowcase";
import { useProducts } from "../hooks/useProducts";
import Error from "../components/UI/Error";
import ProductList from "../components/Features/Product/ProductList";
import ProductSkeletonLoading from "../components/UI/ProductSkeletonLoading";

const ShopPage = () => {
  const { data, error, isLoading } = useProducts();

  const products = data || [];

  if (isLoading) {
    return <ProductSkeletonLoading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <ExtendedHeader />
      <ProductList products={products} />
      <FeatureShowcase />
      <Footer />
    </>
  );
};

export default ShopPage;
