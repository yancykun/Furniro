import { useParams } from "react-router-dom";
import { products } from "../constants";
import StarRating from "./StarRating";
import Button from "./Button";
import { useState } from "react";
import { useCart } from "../hooks/useCart";

const SingleProductCard = () => {
  const [count, setCount] = useState<number>(1);
  const { addToCart } = useCart();

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((count) => count - 1);
    }
  };

  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <p>Product not found!</p>;
  }

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
    <div className="flex w-full flex-col justify-center gap-10 px-[2rem] pt-[33px] md:flex-row md:gap-20 lg:px-[99px]">
      <div className="flex w-full justify-center md:justify-end">
        <img
          className="h-[400px] w-[350px] rounded-xl"
          src={product.image}
          alt={product.name}
        />
      </div>

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
            <div className="flex h-[55px] w-[120px] items-center justify-center gap-6 rounded-lg border border-color-6 hover:border-2 hover:border-color-7">
              <button
                onClick={decrement}
                className="font-poppins text-color-7 hover:font-bold"
              >
                -
              </button>
              <p className="font-poppins font-medium text-color-7">{count}</p>
              <button
                onClick={increment}
                className="font-poppins text-color-7 hover:font-bold"
              >
                +
              </button>
            </div>
            <Button
              white
              border
              className="h-[55px] rounded-lg border border-color-7 font-medium text-color-7"
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
    </div>
  );
};

export default SingleProductCard;
