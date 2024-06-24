import ExtendedHeader from "../components/Features/Header/ExtendedHeader";
import Footer from "../components/Section/Footer/Footer";
import FeatureShowcase from "../components/Features/Feature/FeaturesShowcase";
import CategoryShowcase from "../components/Features/Categories/CategoryShowcase";

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
