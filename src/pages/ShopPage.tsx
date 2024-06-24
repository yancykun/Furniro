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
    return (
      <>
        <ExtendedHeader />
        <div className="mx-auto mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(24)].map((_, index) => (
            <ProductSkeletonLoading key={index} />
          ))}
        </div>
        <FeatureShowcase />
        <Footer />
      </>
    );
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
