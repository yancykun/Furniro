import BreadcrumbHeader from "../components/Features/Header/BreadcrumbHeader";
import Footer from "../components/Section/Footer/Footer";
import SingleProductCard from "../components/Features/Product/SingleProductCard";
import PopularProducts from "../components/Features/Feature/PopularProducts";

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
