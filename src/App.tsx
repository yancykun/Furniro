import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopPage from './pages/ShopPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryShowcase from './components/CategoryShowcase';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route
                path="/categories/:category"
                element={<CategoryShowcase />}
            />
        </Routes>
    );
};

export default App;
