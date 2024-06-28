import Hero from "../components/HomePageSections/Hero";
import Categories from "../components/HomePageSections/Categories";
import Product from "../components/HomePageSections/Product";
import Inspiration from "../components/HomePageSections/Inspiration";
import Footer from "../components/Header/Footer";

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
