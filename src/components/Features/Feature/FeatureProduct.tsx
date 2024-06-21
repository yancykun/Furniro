import { useProducts } from "../../../hooks/useProducts";
import ProductCard from "../../Features/Product/ProductCard";
import Error from "../../UI/Error";

const FeatureProduct = () => {
  const { data, error } = useProducts();

  const products = data || [];

  if (error) {
    return <Error message={error.message} />;
  }

  const featuredProducts = products
    .filter((product) => product.featured)
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="grid">
      <h2 className="h2 mb-10 text-center">Popular Products</h2>
      <ProductCard products={featuredProducts} />
    </div>
  );
};

export default FeatureProduct;
