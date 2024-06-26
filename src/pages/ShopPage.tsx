import ExtendedHeader from "../components/Header/ExtendedHeader";
import Footer from "../components/HomePageSections/Footer";
import FeatureShowcase from "../components/Features/FeaturesShowcase";
import { useProducts } from "../hooks/useProducts";
import Error from "../components/UI/Error";
import ProductList from "../components/Product/ProductList";
import ProductSkeletonLoading from "../components/Product/ProductSkeletonLoading";

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
