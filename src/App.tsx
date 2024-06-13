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
import ProfileSidebar from "./components/Features/Profile/ProfileSidebar";
import { useCartSidebarStore } from "./store/useCartSidebarStore";
import { useProfileSidebarStore } from "./store/useProfileSidebarStore";
const App = () => {
  const openCart = useCartSidebarStore((state) => state.openCart);
  const openProfile = useProfileSidebarStore((state) => state.openProfile);

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
      {openProfile && (
        <>
          <div className="fixed inset-0 z-40 bg-color-7/40"></div>
          <div className="fixed right-0 top-0 z-50 h-[250px] w-[80%] sm:w-[350px]">
            <ProfileSidebar />
          </div>
        </>
      )}
    </>
  );
};

export default App;
