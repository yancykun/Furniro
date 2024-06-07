import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import BillingPage from "./pages/BillingPage";
import { useState } from "react";
import Header from "./components/Header";
import CartSidebar from "./components/CartSidebar";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const [openCart, setOpenCart] = useState(false);

  const toggleCartSidebar = () => {
    if (openCart) {
      setOpenCart(false);
    } else {
      setOpenCart(true);
    }
  };

  const handleClick = () => {
    if (!openCart) return;
    setOpenCart(false);
  };

  return (
    <>
      {openCart && <div className="fixed inset-0 z-40 bg-color-7/40"></div>}
      <Header openCart={openCart} toggleCartSidebar={toggleCartSidebar} />
      <ScrollToTop />
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
          <CartSidebar
            toggleCartSidebar={toggleCartSidebar}
            openCart={openCart}
            handleClick={handleClick}
          />
        </div>
      )}
    </>
  );
};

export default App;
