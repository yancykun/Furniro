import Section from "../../Layout/Section";
import ProductCard from "../../Features/Product/ProductCard";
import { useState } from "react";
import { products } from "../../../constants/index";

const Product = () => {
  // State to manage the number of visible products
  const [visibleProducts, setVisibleProducts] = useState(6);

  // State to manage showmore button and functionality
  const [showMore, setShowMore] = useState(true);

  // Function to handle showing more or less producs
  const handleShowMore = () => {
    // if products are already visible, reset to default
    if (visibleProducts >= products.length) {
      setVisibleProducts(6);
      setShowMore(true);
    } else {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
      if (visibleProducts + 6 >= products.length) {
        setShowMore(false);
      }
    }
  };

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
