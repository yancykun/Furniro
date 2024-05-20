import { useState } from 'react';
import Button from './Button';
import { products } from '../constants';

const ProductCard = () => {
    // State to manage the number of visible products
    const [visibleProducts, setVisibleProducts] = useState(8);

    // State to manage the button text and functionality
    const [showMore, setShowMore] = useState(true);

    // Function to handle showing more or less products
    const handleShowMore = () => {
        // If all products are already visible, reset to default
        if (visibleProducts >= products.length) {
            setVisibleProducts(8);
            setShowMore(true); // Reset button text to "Show More"
        } else {
            // Show more products
            setVisibleProducts(
                (prevVisibleProducts) => prevVisibleProducts + 8
            );

            // Update button text to "Show Less" if all products will be visible
            if (visibleProducts + 8 >= products.length) {
                setShowMore(false);
            }
        }
    };

    return (
        <div>
            <div className="relative flex flex-wrap justify-center gap-6">
                {/* Render visible products */}
                {products.slice(0, visibleProducts).map((product) => (
                    <div
                        className="flex flex-col gap-4 bg-color-3"
                        key={product.id}
                    >
                        <img
                            className="w-[292px] h-[318px]"
                            src={product.image}
                            alt={product.name}
                        />

                        <div className="flex items-center justify-between mx-6">
                            <p className="font-poppins font-bold text-[1.25rem] md:text-[1.5rem]">
                                {product.name}
                            </p>
                            <p className="font-poppins font-semibold text-[1rem] md:text-[1.25rem]">
                                ${product.price}
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                className="text-[1rem] text-center mb-4"
                                white
                                border
                            >
                                ADD TO CART
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Button to show more or less products */}
            <div className="flex justify-center mt-6">
                <Button
                    className="text-[1rem] text-center"
                    onClick={handleShowMore}
                >
                    {/* Conditional button text */}
                    {showMore ? 'SHOW MORE' : 'SHOW LESS'}
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
