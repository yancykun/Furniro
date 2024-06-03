import Billing from "../components/Billing";
import ExtendedHeader from "../components/ExtendedHeader";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { CartProps } from "../types/cartTypes";

const BillingPage = ({ openCart, toggleCart }: CartProps) => {
  return (
    <Section>
      <ExtendedHeader openCart={openCart} toggleCart={toggleCart} />
      <Billing />
      <FeatureShowcase />
      <Footer />
    </Section>
  );
};

export default BillingPage;
