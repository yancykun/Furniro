import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import ProductDetails from "./ProductDetails";
import ProductNotFound from "../../components/UI/PageNotFound";
import ProductSkeletonLoading from "./ProductSkeletonLoading";
import Error from "../UI/Error";
import ProductDetailsLoading from "./ProductDetailsLoading";
import Section from "../UI/Section";

const SingleProductCard = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useProducts();
  const products = data || [];
  const product = products.find((product) => product.id === productId);

  if (isLoading) {
    return (
      <Section>
        <div className="flex w-full flex-col justify-center gap-10 px-[2rem] pt-[33px] md:flex-row md:gap-20 lg:px-[99px]">
          <div className="flex w-full justify-center md:justify-end">
            <ProductSkeletonLoading />
          </div>
          <ProductDetailsLoading />
        </div>
      </Section>
    );
  }

  if (!product) {
    return <ProductNotFound />;
  }

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <div className="flex w-full flex-col justify-center gap-10 px-[2rem] pt-[33px] md:flex-row md:gap-20 lg:px-[99px]">
      <div className="flex w-full justify-center md:justify-end">
        <img
          className="h-[400px] w-[350px] rounded-xl"
          src={product.image}
          alt={product.name}
        />
      </div>
      <ProductDetails product={product} />
    </div>
  );
};

export default SingleProductCard;
