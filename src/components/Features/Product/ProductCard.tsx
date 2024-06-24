import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { Product } from "../../../types/types";

type ProductCardProps = {
  products: Product[];
};

const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <div className="mx-auto mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <div className="relative grid" key={product.id}>
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
  );
};

export default ProductCard;
