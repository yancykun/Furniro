import { useProducts } from "../../../hooks/useProducts";
import { useProductVisibilityStore } from "../../../store/useProductVisibilityStore";
import Section from "../../Layout/Section";
import Error from "../../UI/Error";
import ProductList from "../../Features/Product/ProductList";
import ProductSkeletonLoading from "../../UI/ProductSkeletonLoading";
import Button from "../../UI/Button";

const Product = () => {
  const { data, error, isLoading } = useProducts();
  const { visibleProducts, showMore, handleShowMore } =
    useProductVisibilityStore();

  const products = data || [];

  if (isLoading) {
    return (
      <>
        <Section id="shop">
          <h2 className="h2 mb-[2rem] text-center md:mb-[2.5rem] lg:mb-[4rem]">
            Our Products
          </h2>
          <div className="mx-auto mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(visibleProducts)].map((_, index) => (
              <ProductSkeletonLoading key={index} />
            ))}
          </div>
        </Section>
      </>
    );
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <Section id="shop">
      <h2 className="h2 mb-[2rem] text-center md:mb-[2.5rem] lg:mb-[4rem]">
        Our Products
      </h2>
      <ProductList products={products.slice(0, visibleProducts)} />
      <div className="mt-14 flex justify-center">
        <Button
          className="uppercase"
          white
          onClick={() => handleShowMore(products.length)}
        >
          {showMore ? "show more" : "show less"}
        </Button>
      </div>
    </Section>
  );
};

export default Product;
