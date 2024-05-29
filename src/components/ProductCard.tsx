import { Link } from 'react-router-dom';
import Button from './Button';
import { Product } from '../types/productTypes';
import StarRating from './StarRating';

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
            <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5">
                {products.slice(0, visibleProducts).map((product) => (
                    <div className="relative flex flex-col" key={product.id}>
                        <Link to={product.url}>
                            <img
                                className="w-[292px] h-[300px] mb-4 cursor-pointer rounded-xl object-cover"
                                src={product.image}
                                alt={product.name}
                            />
                        </Link>

                        <div className="flex justify-end items-center gap-4 mx-3 mb-2">
                            <StarRating rating={product.rating} />
                            <p className="font-poppins text-[0.875rem] md:text-[1rem]">
                                ({product.popularity})
                            </p>
                        </div>
                        <div className="flex items-center justify-between mx-3 mb-2">
                            <p className="font-poppins font-semibold text-[1rem] md:text-[1.25rem]">
                                {product.name}
                            </p>
                            <p className="font-poppins font-bold text-[1.25rem] md:text-[1.5rem]">
                                ${product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {handleShowMore && (
                <div className="flex justify-center mt-14">
                    <Button white border onClick={handleShowMore}>
                        {showMore ? 'show more' : 'show less'}
                    </Button>
                </div>
            )}
        </>
    );
};

export default ProductCard;
