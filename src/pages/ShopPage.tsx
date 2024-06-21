import ExtendedHeader from "../components/Features/Header/ExtendedHeader";
import Footer from "../components/Section/Footer/Footer";
import ProductCard from "../components/Features/Product/ProductCard";
import FeatureShowcase from "../components/Features/Feature/FeatureShowcase";
import { useProducts } from "../hooks/useProducts";
import Error from "../components/UI/Error";
import Loading from "../components/UI/Loading";

const ShopPage = () => {
  const { data, error, isLoading } = useProducts();

  const products = data || [];

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

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
