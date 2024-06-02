import ExtendedHeader from '../components/ExtendedHeader';
import Contact from '../components/Contact';
import FeatureShowcase from '../components/FeatureShowcase';
import Footer from '../components/Footer';
import { CartProps } from '../types/cartTypes';

const ContactPage = ({ toggleCart, openCart }: CartProps) => {
    return (
        <div>
            <ExtendedHeader toggleCart={toggleCart} openCart={openCart} />
            <Contact />
            <FeatureShowcase />
            <Footer />
        </div>
    );
};

export default ContactPage;
