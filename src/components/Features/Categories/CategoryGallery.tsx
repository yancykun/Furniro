import { useParams } from "react-router-dom";
import FeatureProduct from "../../Features/Feature/FeatureProduct";
import { useProducts } from "../../../hooks/useProducts";
import ProductList from "../Product/ProductList";
import ProductSkeletonLoading from "../../UI/ProductSkeletonLoading";
import Error from "../../UI/Error";

const CategoryGallery = () => {
  const { category } = useParams<{ category: string }>();
  const { data, error, isLoading } = useProducts();

  const products = data || [];

  if (isLoading) {
    return <ProductSkeletonLoading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  return (
    <div>
      {category ? (
        <ProductList products={filteredProducts} />
      ) : (
        <FeatureProduct />
      )}
    </div>
  );
};

export default CategoryGallery;
