import ExtendedHeader from "../components/Header/ExtendedHeader";
import Footer from "../components/Header/Footer";
import FeatureShowcase from "../components/Features/FeaturesShowcase";
import CategoryShowcase from "../components/Category/CategoryShowcase";

const CategoriesPage = () => {
  return (
    <>
      <ExtendedHeader />
      <CategoryShowcase />
      <FeatureShowcase />
      <Footer />
    </>
  );
};

export default CategoriesPage;
