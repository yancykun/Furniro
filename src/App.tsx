import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import SingleProductPage from './pages/SingleProductPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:category" element={<CategoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/shop/:productId" element={<SingleProductPage />} />
        </Routes>
    );
};

export default App;
