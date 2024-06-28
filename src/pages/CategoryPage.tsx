import BreadcrumbHeader from "../components/Header/BreadcrumbHeader";
import CategoryShowcase from "../components/Category/CategoryShowcase";
import FeatureShowcase from "../components/Features/FeaturesShowcase";
import Footer from "../components/Header/Footer";

const CategoryPage = () => {
  return (
    <div>
      <BreadcrumbHeader />
      <CategoryShowcase />
      <FeatureShowcase />
      <Footer />
    </div>
  );
};

export default CategoryPage;
