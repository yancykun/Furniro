import { products } from "../constants";
import ProductCard from "./ProductCard";

const FeatureProduct = () => {
  const featuredProducts = products
    .filter((product) => product.isFeatured)
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <>
      <h2 className="h2 mb-10 text-center">Popular Products</h2>
      <ProductCard products={featuredProducts} />
    </>
  );
};

export default FeatureProduct;
