import StarRating from "../StarRating/StarRating";
import Button from "../UI/Button";
import { Product } from "../../types/types";
import { useSingleProductStore } from "../../store/useSingleProductStore";
import { useCartStore } from "../../store/useCartStore";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { count, increment, decrement } = useSingleProductStore();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: product.name,
      price: product.price,
      image: product.image,
      quantity: count,
    });
  };

  return (
    <div className="flex w-full flex-col items-center md:items-start">
      <div className="border-b border-color-6/50 pb-10">
        <p className="font-poppins text-[2.63rem]">{product.name}</p>
        <div className="flex justify-between md:flex-col">
          <p className="pb-1 font-poppins text-[1.5rem] font-medium text-color-6">
            $ {product.price}
          </p>
          <div className="flex items-center gap-4 pb-2">
            <StarRating rating={product.rating} />
            <p className="font-poppins text-base text-color-6">
              ({product.popularity})
            </p>
          </div>
        </div>
        <p className="max-w-[424px] pb-6 font-poppins text-[0.8125rem] font-medium text-color-7">
          {product.description}
        </p>
        <div className="flex items-center gap-5 max-sm:flex-col">
          <div className="flex h-[55px] w-[120px] items-center justify-center gap-6 rounded-lg border border-color-6 hover:border-2 hover:border-color-4">
            <button
              onClick={decrement}
              className="font-poppins text-color-7 hover:font-bold hover:text-color-4"
            >
              -
            </button>
            <p className="font-poppins font-medium text-color-7">{count}</p>
            <button
              onClick={increment}
              className="font-poppins text-color-7 hover:font-bold hover:text-color-4"
            >
              +
            </button>
          </div>
          <Button
            white
            className="h-[55px] rounded-lg border border-color-7 font-medium text-color-7 hover:border-color-4"
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </div>
      </div>
      <div className="py-10">
        <div className="flex">
          <p className="w-28 font-poppins text-color-6">SKU</p>
          <p className="font-poppins text-color-6">: {product.sku}</p>
        </div>
        <div className="flex">
          <p className="w-28 font-poppins text-color-6">Category</p>
          <p className="font-poppins capitalize text-color-6">
            : {product.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
