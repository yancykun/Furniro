import Section from './Section';
import ProductCard from './ProductCard';
import { useState } from 'react';
import { products } from '../constants';

const Product = () => {
    // State to manage the number of visible products
    const [visibleProducts, setVisibleProducts] = useState(8);

    // State to manage showmore button and functionality
    const [showMore, setShowMore] = useState(true);

    // Function to handle showing more or less producs
    const handleShowMore = () => {
        // if products are already visible, reset to default
        if (visibleProducts >= products.length) {
            setVisibleProducts(8);
            setShowMore(true);
        } else {
            setVisibleProducts(
                (prevVisibleProducts) => prevVisibleProducts + 8
            );
            if (visibleProducts + 8 >= products.length) {
                setShowMore(false);
            }
        }
    };

    return (
        <Section id="shop">
            <h2 className="h2 text-center mb-[2rem] md:mb-[2.5rem] lg:mb-[4rem]">
                Our Products
            </h2>
            <ProductCard
                products={products}
                showMore={showMore}
                visibleProducts={visibleProducts}
                handleShowMore={handleShowMore}
            />
        </Section>
    );
};

export default Product;
