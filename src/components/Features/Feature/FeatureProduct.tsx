import { useEffect, useState } from "react";
import { useProductStore } from "../../../store/useProductStore";
import ProductCard from "../../Features/Product/ProductCard"; // Import ProductCard component

const FeatureProduct = () => {
  const getFeaturedProducts = useProductStore(
    (state) => state.getFeaturedProducts,
  );
  const featuredProducts = useProductStore((state) => state.featuredProducts);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getFeaturedProducts(); // Make sure to await the asynchronous action
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [getFeaturedProducts]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid">
      <h2 className="h2 mb-10 text-center">Popular Products</h2>
      {/* Reuse ProductCard component here */}
      <ProductCard products={featuredProducts} />
    </div>
  );
};

export default FeatureProduct;
