import BreadcrumbHeader from "../components/Features/Header/BreadcrumbHeader";
import CategoryShowcase from "../components/Features/Categories/CategoryShowcase";
import FeatureShowcase from "../components/Features/Feature/FeatureShowcase";
import Footer from "../components/Section/Footer/Footer";

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
