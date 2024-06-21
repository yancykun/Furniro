import { useParams } from "react-router-dom";
import ProductCard from "../../Features/Product/ProductCard";
import FeatureProduct from "../../Features/Feature/FeatureProduct";
import Loading from "../../UI/Loading";
import Error from "../../UI/Error";
import { useProducts } from "../../../hooks/useProducts";

const CategoryGallery = () => {
  const { category } = useParams<{ category: string }>();
  const { data, error, isLoading } = useProducts();

  const products = data || [];

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

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
