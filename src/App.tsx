import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import ContactPage from "./pages/ContactPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import BillingPage from "./pages/BillingPage";
import Header from "./components/HomePageSections/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SidebarOverlay from "./components/SidebarOverlay/SidebarOverlay";
import CartSidebarComponent from "./components/Cart/CartSidebarComponent";
import ProfileSidebarComponent from "./components/Profile/ProfileSidebarComponent";
import PageNotFound from "./components/UI/PageNotFound";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:productId" element={<SingleProductPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:category" element={<CategoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/signin" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <CartSidebarComponent />
      <ProfileSidebarComponent />
      <SidebarOverlay />
    </>
  );
};

export default App;
