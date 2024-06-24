import { useProducts } from "../../../hooks/useProducts";
import Error from "../../UI/Error";
import ProductList from "../Product/ProductList";
import ProductSkeletonLoading from "../../UI/ProductSkeletonLoading";

const FeatureProduct = () => {
  const { data, error, isLoading } = useProducts();

  const products = data || [];

  if (isLoading) {
    return <ProductSkeletonLoading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  const featuredProducts = products
    .filter((product) => product.featured)
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="grid">
      <h2 className="h2 mb-10 text-center">Popular Products</h2>
      <ProductList products={featuredProducts} />
    </div>
  );
};

export default FeatureProduct;
