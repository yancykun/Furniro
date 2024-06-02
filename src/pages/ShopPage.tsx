import { products } from '../constants';

import ExtendedHeader from '../components/ExtendedHeader';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import FeatureShowcase from '../components/FeatureShowcase';
import { CartProps } from '../types/cartTypes';

const ShopPage = ({ toggleCart, openCart }: CartProps) => {
    return (
        <>
            <ExtendedHeader toggleCart={toggleCart} openCart={openCart} />
            <ProductCard products={products} />
            <FeatureShowcase />
            <Footer />
        </>
    );
};

export default ShopPage;
