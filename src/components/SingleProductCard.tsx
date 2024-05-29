import { useParams } from 'react-router-dom';
import { products } from '../constants';
import StarRating from './StarRating';
import Button from './Button';

const SingleProductCard = () => {
    const { productId } = useParams();

    const product = products.find((product) => product.id === productId);

    if (!product) {
        return <p>Product not found!</p>;
    }

    return (
        <div className="flex flex-col justify-center md:flex-row lg:px-[99px] pt-[33px] gap-4 w-full">
            <div className="w-full">
                <img
                    className="lg:w-[423px] lg:h-[500px]"
                    src={product.image}
                    alt={product.name}
                />
            </div>
            <div className="flex flex-col w-full">
                <div className="border-b border-color-6/50 pb-10">
                    <p className="font-poppins text-[2.63rem]">
                        {product.name}
                    </p>
                    <p className="font-poppins text-[1.5rem] font-medium text-color-6 pb-1">
                        {product.price}
                    </p>
                    <div className="flex items-center gap-4 pb-2">
                        <StarRating rating={product.rating} />
                        <p className="font-poppins text-base text-color-6">
                            ({product.popularity})
                        </p>
                    </div>
                    <p className="font-poppins text-[0.8125rem] text-color-7 font-medium max-w-[424px] pb-6">
                        {product.description}
                    </p>
                    <div className="flex gap-5 items-center">
                        <div className="flex items-center justify-center gap-6 border border-color-6 h-[55px] w-[120px] rounded-lg">
                            <button className="font-poppins text-color-7">
                                -
                            </button>
                            <p className="font-poppins text-color-7 font-medium">
                                1
                            </p>
                            <button className="font-poppins text-color-7">
                                +
                            </button>
                        </div>
                        <Button
                            white
                            border
                            className="capitalize text-color-7 font-medium border border-color-7 rounded-lg h-[55px]"
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
