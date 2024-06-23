import Hero from "../components/Section/Hero/Hero";
import Categories from "../components/Section/Categories/Categories";
import Product from "../components/Section/Product/Product";
import Inspiration from "../components/Section/Inspiration/Inspiration";
import Footer from "../components/Section/Footer/Footer";

const HomePage = () => {
  return (
    <div className="overflow-hidden pt-[3.5rem] md:pt-[5rem]">
      <Hero />
      <Categories />
      <Product />
      <Inspiration />
      <Footer />
    </div>
  );
};

export default HomePage;
