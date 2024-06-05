import Header from "../components/Header";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Inspiration from "../components/Inspiration";
import Footer from "../components/Footer";
import { CartSidebarProps } from "../types/types";

const HomePage = ({ toggleCartSidebar, openCart }: CartSidebarProps) => {
  return (
    <div className="overflow-hidden pt-[3.5rem] md:pt-[5rem]">
      <Header toggleCartSidebar={toggleCartSidebar} openCart={openCart} />
      <Hero />
      <Categories />
      <Product />
      <Inspiration />
      <Footer />
    </div>
  );
};

export default HomePage;
