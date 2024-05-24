import { useParams } from 'react-router-dom';
import { products } from '../constants';
import ProductCard from './ProductCard';

const CategoryGallery = () => {
    const { category } = useParams();

    const filteredProducts = products.filter(
        (product) => product.category === category
    );

    return <ProductCard products={filteredProducts} />;
};

export default CategoryGallery;
