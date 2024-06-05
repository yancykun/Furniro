import ExtendedHeader from "../components/ExtendedHeader";
import Contact from "../components/Contact";
import FeatureShowcase from "../components/FeatureShowcase";
import Footer from "../components/Footer";
import { CartSidebarProps } from "../types/types";

const ContactPage = ({ openCart, toggleCartSidebar }: CartSidebarProps) => {
  return (
    <div>
      <ExtendedHeader
        toggleCartSidebar={toggleCartSidebar}
        openCart={openCart}
      />
      <Contact />
      <FeatureShowcase />
      <Footer />
    </div>
  );
};

export default ContactPage;
