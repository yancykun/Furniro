import ProductCard from "../../../components/Features/Product/ProductCard";
import { useProductStore } from "../../../store/useProductStore";
import { useEffect } from "react";

const FeatureProduct = () => {
  const getFeaturedProducts = useProductStore(
    (state) => state.getFeaturedProducts,
  );
  const featuredProducts = useProductStore((state) => state.featuredProducts);

  useEffect(() => {
    getFeaturedProducts();
  }, [getFeaturedProducts]);

  return (
    <>
      <h2 className="h2 mb-10 text-center">Popular Products</h2>
      <ProductCard products={featuredProducts} />
    </>
  );
};

export default FeatureProduct;
