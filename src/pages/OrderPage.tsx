import FeatureShowcase from "../components/Features/FeaturesShowcase";
import Footer from "../components/Header/Footer";
import OrderedProductDetails from "../components/OrderedProducts/OrderedProductDetails";
import Section from "../components/UI/Section";

const OrderPage = () => {
  return (
    <Section>
      <OrderedProductDetails />
      <FeatureShowcase />
      <Footer />
    </Section>
  );
};

export default OrderPage;
