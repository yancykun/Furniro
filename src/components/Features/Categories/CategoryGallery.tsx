import { useParams } from "react-router-dom";
import ProductCard from "../../Features/Product/ProductCard";
import FeatureProduct from "../../Features/Feature/FeatureProduct";
import { useProducts } from "../../../hooks/useProducts";

const CategoryGallery = () => {
  const { category } = useParams<{ category: string }>();
  const { data } = useProducts();

  const products = data || [];

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  return (
    <div>
      {category ? (
        <ProductCard products={filteredProducts} />
      ) : (
        <FeatureProduct />
      )}
    </div>
  );
};

export default CategoryGallery;
