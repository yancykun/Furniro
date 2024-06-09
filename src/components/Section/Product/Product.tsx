import Section from "../../Layout/Section";
import ProductCard from "../../Features/Product/ProductCard";
import { useProductStore } from "../../../store/useProductStore";

const Product = () => {
  const products = useProductStore((state) => state.products);
  const showMore = useProductStore((state) => state.showMore);
  const visibleProducts = useProductStore((state) => state.visibleProducts);
  const handleShowMore = useProductStore((state) => state.handleShowMore);

  return (
    <Section id="shop">
      <h2 className="h2 mb-[2rem] text-center md:mb-[2.5rem] lg:mb-[4rem]">
        Our Products
      </h2>
      <ProductCard
        products={products}
        showMore={showMore}
        visibleProducts={visibleProducts}
        handleShowMore={handleShowMore}
      />
    </Section>
  );
};

export default Product;
