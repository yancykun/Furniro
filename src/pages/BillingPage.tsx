import Billing from "../components/Billing";
import ExtendedHeader from "../components/ExtendedHeader";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { CartSidebarProps } from "../types/types";

const BillingPage = ({ toggleCartSidebar, openCart }: CartSidebarProps) => {
  return (
    <Section>
      <ExtendedHeader
        toggleCartSidebar={toggleCartSidebar}
        openCart={openCart}
        customTitle="Billing"
      />
      <Billing />
      <FeatureShowcase />
      <Footer />
    </Section>
  );
};

export default BillingPage;
