import { useParams } from "react-router-dom";
import PopularProducts from "../PopularProducts/PopularProducts";
import { useProducts } from "../../hooks/useProducts";
import ProductList from "../Product/ProductList";
import Error from "../UI/Error";

const CategoryGallery = () => {
  const { category } = useParams<{ category: string }>();
  const { data, error } = useProducts();

  const products = data || [];

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
        <PopularProducts />
      )}
    </div>
  );
};

export default CategoryGallery;
