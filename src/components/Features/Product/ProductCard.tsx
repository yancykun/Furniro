import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import { Product } from "../../../types/types";
import StarRating from "../StarRating/StarRating";

type ProductCardProps = {
  products: Product[];
  showMore?: boolean;
  visibleProducts?: number;
  handleShowMore?: () => void;
};

const ProductCard = ({
  products,
  showMore = true,
  visibleProducts = products.length,
  handleShowMore,
}: ProductCardProps) => {
  return (
    <>
      <div className="mx-auto mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, visibleProducts).map((product) => (
          <div className="relative flex flex-col" key={product.id}>
            <Link to={product.url}>
              <img
                className="mb-4 h-[300px] w-[292px] cursor-pointer rounded-xl object-cover"
                src={product.image}
                alt={product.name}
              />
            </Link>

            <div className="mx-3 mb-2 flex items-center justify-end gap-4">
              <StarRating rating={product.rating} />
              <p className="font-poppins text-[0.875rem] md:text-[1rem]">
                ({product.popularity})
              </p>
            </div>
            <div className="mx-3 mb-2 flex items-center justify-between">
              <p className="font-poppins text-[1rem] font-semibold md:text-[1.25rem]">
                {product.name}
              </p>
              <p className="font-poppins text-[1.25rem] font-bold md:text-[1.5rem]">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      {handleShowMore && (
        <div className="mt-14 flex justify-center">
          <Button className="uppercase" white onClick={handleShowMore}>
            {showMore ? "show more" : "show less"}
          </Button>
        </div>
      )}
    </>
  );
};

export default ProductCard;
