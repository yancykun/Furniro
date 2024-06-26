import BreadcrumbHeader from "../components/Header/BreadcrumbHeader";
import Footer from "../components/HomePageSections/Footer";
import SingleProductCard from "../components/Product/SingleProductCard";
import PopularProducts from "../components/PopularProducts/PopularProducts";

const SingleProductPage = () => {
  return (
    <div>
      <BreadcrumbHeader />
      <SingleProductCard />
      <PopularProducts />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
