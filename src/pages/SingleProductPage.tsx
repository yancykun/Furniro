import BreadcrumbHeader from "../components/BreadcrumbHeader";
import Footer from "../components/Footer";
import SingleProductCard from "../components/SingleProductCard";
import { CartProps } from "../types/cartTypes";

const SingleProductPage = ({ openCart, toggleCart }: CartProps) => {
  return (
    <div>
      <BreadcrumbHeader openCart={openCart} toggleCart={toggleCart} />
      <SingleProductCard />
      <Footer />
    </div>
  );
};

export default SingleProductPage;
