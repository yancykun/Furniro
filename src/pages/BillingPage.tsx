import Billing from "../components/Billing/Billing";
import ExtendedHeader from "../components/Header/ExtendedHeader";
import FeatureShowcase from "../components/Features/FeaturesShowcase";
import Footer from "../components/HomePageSections/Footer";
import Section from "../components/UI/Section";

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
