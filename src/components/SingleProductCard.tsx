import { useParams } from 'react-router-dom';
import { products } from '../constants';
import StarRating from './StarRating';
import Button from './Button';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';

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
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 px-[2rem] lg:px-[99px] pt-[33px] w-full">
            <div className="flex justify-center md:justify-end w-full">
                <img
                    className="w-[350px] h-[400px] rounded-xl"
                    src={product.image}
                    alt={product.name}
                />
            </div>

            <div className="flex flex-col items-center md:items-start w-full">
                <div className="border-b border-color-6/50 pb-10">
                    <p className="font-poppins text-[2.63rem]">
                        {product.name}
                    </p>
                    <div className="flex md:flex-col justify-between">
                        <p className="font-poppins text-[1.5rem] font-medium text-color-6 pb-1">
                            $ {product.price}
                        </p>
                        <div className="flex items-center gap-4 pb-2">
                            <StarRating rating={product.rating} />
                            <p className="font-poppins text-base text-color-6">
                                ({product.popularity})
                            </p>
                        </div>
                    </div>
                    <p className="font-poppins text-[0.8125rem] text-color-7 font-medium max-w-[424px] pb-6">
                        {product.description}
                    </p>
                    <div className="flex max-sm:flex-col gap-5 items-center">
                        <div className="flex items-center justify-center gap-6 border border-color-6 h-[55px] w-[120px] rounded-lg hover:border-2 hover:border-color-7">
                            <button
                                onClick={decrement}
                                className="font-poppins text-color-7 hover:font-bold"
                            >
                                -
                            </button>
                            <p className="font-poppins text-color-7 font-medium">
                                {count}
                            </p>
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
                            className="capitalize text-color-7 font-medium border border-color-7 rounded-lg h-[55px]"
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
                <div className="py-10">
                    <div className="flex">
                        <p className="font-poppins text-color-6 w-28">SKU</p>
                        <p className="font-poppins text-color-6">
                            : {product.sku}
                        </p>
                    </div>
                    <div className="flex">
                        <p className="font-poppins text-color-6 w-28">
                            Category
                        </p>
                        <p className="font-poppins text-color-6 capitalize">
                            : {product.category}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductCard;
