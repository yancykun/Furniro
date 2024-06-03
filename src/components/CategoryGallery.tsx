import { useParams } from "react-router-dom";
import { products } from "../constants";
import ProductCard from "./ProductCard";
import FeatureProduct from "./FeatureProduct";

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
