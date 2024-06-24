import Billing from "../components/Features/Billing/Billing";
import ExtendedHeader from "../components/Features/Header/ExtendedHeader";
import FeatureShowcase from "../components/Features/Feature/FeaturesShowcase";
import Footer from "../components/Section/Footer/Footer";
import Section from "../components/Layout/Section";

const BillingPage = () => {
  return (
    <Section>
      <ExtendedHeader customTitle="Billing" />
      <Billing />
      <FeatureShowcase />
      <Footer />
    </Section>
  );
};

export default BillingPage;
