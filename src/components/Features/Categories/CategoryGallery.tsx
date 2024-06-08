import { useParams } from "react-router-dom";
import { products } from "../../../constants";
import ProductCard from "../../Features/Product/ProductCard";
import FeatureProduct from "../../Features/Feature/FeatureProduct";

const CategoryGallery = () => {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category,
  );

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
