import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import BillingPage from "./pages/BillingPage";
import Header from "./components/Section/Header/Header";
import CartSidebar from "./components/Features/Cart/CartSidebar";
import ScrollToTop from "./components/Features/ScrollToTop/ScrollToTop";
import { useCartSidebarStore } from "./store/useCartSidebarStore";
const App = () => {
  const openCart = useCartSidebarStore((state) => state.openCart);

  return (
    <>
      {openCart && <div className="fixed inset-0 z-40 bg-color-7/40"></div>}
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop/:productId" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/billing" element={<BillingPage />} />
      </Routes>
      {openCart && (
        <div className="fixed right-0 top-0 z-50 h-[550px] w-[80%] sm:w-[417px]">
          <CartSidebar />
        </div>
      )}
    </>
  );
};

export default App;
