import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import SingleProductPage from "./pages/SingleProductPage";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import BillingPage from "./pages/BillingPage";
import { useState } from "react";
import Header from "./components/Header";
import CartSidebar from "./components/CartSidebar";

const App = () => {
  const [openCart, setOpenCart] = useState(false);

  const toggleCartSidebar = () => {
    const newState = !openCart;
    setOpenCart(newState);
  };

  return (
    <CartProvider>
      {openCart && <div className="fixed inset-0 z-40 bg-color-7/40"></div>}
      <Header openCart={openCart} toggleCartSidebar={toggleCartSidebar} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              toggleCartSidebar={toggleCartSidebar}
              openCart={openCart}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <ShopPage
              toggleCartSidebar={toggleCartSidebar}
              openCart={openCart}
            />
          }
        />
        <Route
          path="/categories"
          element={
            <CategoriesPage
              toggleCartSidebar={toggleCartSidebar}
              openCart={openCart}
            />
          }
        />
        <Route
          path="/categories/:category"
          element={
            <CategoryPage
              toggleCartSidebar={toggleCartSidebar}
              openCart={openCart}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <ContactPage
              toggleCartSidebar={toggleCartSidebar}
              openCart={openCart}
            />
          }
        />
        <Route
          path="/shop/:productId"
          element={
            <SingleProductPage
              toggleCartSidebar={toggleCartSidebar}
              openCart={openCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              toggleCartSidebar={toggleCartSidebar}
              openCart={openCart}
            />
          }
        />
        <Route
          path="/billing"
          element={
            <BillingPage
              toggleCartSidebar={toggleCartSidebar}
              openCart={openCart}
            />
          }
        />
      </Routes>
      {openCart && (
        <div className="fixed right-0 top-0 z-50 h-[550px] w-[80%] sm:w-[417px]">
          <CartSidebar toggleCartSidebar={toggleCartSidebar} />
        </div>
      )}
    </CartProvider>
  );
};

export default App;
