import ExtendedHeader from '../components/ExtendedHeader';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../constants';

const ShopPage = () => {
    return (
        <>
            <ExtendedHeader />
            <ProductCard products={products} />
            <Footer />
        </>
    );
};

export default ShopPage;
