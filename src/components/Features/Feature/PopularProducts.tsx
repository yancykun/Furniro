import { useProducts } from "../../../hooks/useProducts";
import Section from "../../Layout/Section";
import Error from "../../UI/Error";
import ProductSkeletonLoading from "../../UI/ProductSkeletonLoading";
import ProductList from "../Product/ProductList";

const PopularProducts = () => {
  const { data, error, isLoading } = useProducts();

  const products = data || [];

  if (isLoading) {
    return (
      <Section>
        <h2 className="h2 mb-10 text-center">Popular Products</h2>
        <div className="mx-auto mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(10)].map((_, index) => (
            <ProductSkeletonLoading key={index} />
          ))}
        </div>
      </Section>
    );
  }

  if (error) {
    return <Error message={error.message} />;
  }

  const featuredProducts = products
    .filter((product) => product.featured)
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="grid">
      <h2 className="h2 mb-10 text-center">Popular Products</h2>
      <ProductList products={featuredProducts} />
    </div>
  );
};

export default PopularProducts;
