import { useParams } from "react-router-dom";
import ProductCard from "../../Features/Product/ProductCard";
import FeatureProduct from "../../Features/Feature/FeatureProduct";
import { useProductStore } from "../../../store/useProductStore";
import { useEffect } from "react";

const CategoryGallery = () => {
  const { category } = useParams<{ category: string }>();
  const filteredProductsByCategory = useProductStore(
    (state) => state.filteredProductsByCategory,
  );
  const filteredProducts = useProductStore((state) => state.filteredProducts);

  useEffect(() => {
    if (category) {
      filteredProductsByCategory(category);
    }
  }, [category, filteredProductsByCategory]);

  return (
    <>
      <div>
        {category ? (
          <ProductCard products={filteredProducts} />
        ) : (
          <FeatureProduct />
        )}
      </div>
    </>
  );
};

export default CategoryGallery;
