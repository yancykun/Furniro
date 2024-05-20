import Section from './Section';
import ProductCard from './ProductCard';

const Product = () => {
    return (
        <Section id="shop">
            <h2 className="h2 text-center mb-[2rem] md:mb-[2.5rem] lg:mb-[4rem]">
                Our Products
            </h2>
            <ProductCard />
        </Section>
    );
};

export default Product;
