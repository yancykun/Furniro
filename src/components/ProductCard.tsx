import { products } from '../constants';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import star icons
import Button from './Button';

type ProductCardProps = {
    showMore?: boolean;
    visibleProducts?: number;
    handleShowMore?: () => void;
};

const ProductCard = ({
    showMore = true,
    visibleProducts = products.length,
    handleShowMore,
}: ProductCardProps) => {
    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 !== 0 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;
        return (
            <div className="flex gap-1">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                ))}
                {halfStars === 1 && (
                    <FaStarHalfAlt className="text-yellow-500" />
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={i} className="text-yellow-500" />
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="relative flex flex-wrap justify-center gap-x-8 gap-y-12">
                {products.slice(0, visibleProducts).map((product) => (
                    <div className="flex flex-col" key={product.id}>
                        <img
                            className="w-[292px] h-[318px] rounded-3xl mb-4"
                            src={product.image}
                            alt={product.name}
                        />

                        <div className="flex items-center justify-between mx-2 mb-1">
                            <p className="font-poppins font-semibold text-[1rem] md:text-[1.25rem]">
                                {product.name}
                            </p>
                            <p className="font-poppins font-bold text-[1.25rem] md:text-[1.5rem]">
                                ${product.price}
                            </p>
                        </div>

                        <div className="flex  items-center gap-4 mx-2">
                            {renderStars(product.rating)}
                            <p className="font-poppins text-[0.875rem] md:text-[1rem]">
                                ({product.popularity})
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {handleShowMore && (
                <div className="flex justify-center mt-14">
                    <Button onClick={handleShowMore}>
                        {showMore ? 'show more' : 'show less'}
                    </Button>
                </div>
            )}
        </>
    );
};

export default ProductCard;
