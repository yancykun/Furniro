import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import SingleProductPage from './pages/SingleProductPage';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CardCart from './components/CardCart';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const App = () => {
    const [openCart, setOpenCart] = useState(false);

    const toggleCart = () => {
        const newState = !openCart;

        setOpenCart(newState);

        if (newState) {
            disablePageScroll();
        } else {
            enablePageScroll();
        }
    };

    return (
        <CartProvider>
            <Header toggleCart={toggleCart} openCart={openCart} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <HomePage toggleCart={toggleCart} openCart={openCart} />
                    }
                />
                <Route
                    path="/shop"
                    element={
                        <ShopPage toggleCart={toggleCart} openCart={openCart} />
                    }
                />
                <Route
                    path="/categories"
                    element={
                        <CategoriesPage
                            toggleCart={toggleCart}
                            openCart={openCart}
                        />
                    }
                />
                <Route
                    path="/categories/:category"
                    element={
                        <CategoryPage
                            toggleCart={toggleCart}
                            openCart={openCart}
                        />
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <ContactPage
                            toggleCart={toggleCart}
                            openCart={openCart}
                        />
                    }
                />
                <Route
                    path="/shop/:productId"
                    element={
                        <SingleProductPage
                            toggleCart={toggleCart}
                            openCart={openCart}
                        />
                    }
                />
            </Routes>
            {openCart && (
                <>
                    <div
                        className="fixed inset-0 bg-color-6 bg-opacity-70 z-40"
                        onClick={toggleCart}
                    ></div>
                    <div className="absolute top-0 right-0 w-[90%] sm:w-[417px] h-[700px] z-50 bg-color-1 pt-4">
                        <CardCart toggleCart={toggleCart} />
                    </div>
                </>
            )}
        </CartProvider>
    );
};

export default App;
