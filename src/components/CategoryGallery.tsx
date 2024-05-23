import { useParams } from 'react-router-dom';
import { products } from '../constants';

const CategoryGallery = () => {
    const { category } = useParams();

    const filteredProducts = products.filter(
        (product) => product.category === category
    );

    return (
        <div className="w-4/5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="p-4 border rounded-lg">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-auto mb-2"
                        />
                        <h3 className="text-lg font-semibold">
                            {product.name}
                        </h3>
                        <p className="text-gray-700">
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryGallery;
