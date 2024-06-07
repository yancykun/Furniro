import Billing from "../components/Billing";
import ExtendedHeader from "../components/ExtendedHeader";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";
import Section from "../components/Section";

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
