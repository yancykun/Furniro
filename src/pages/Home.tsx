import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Product from '../components/Product';
import Inspiration from '../components/Inspiration';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="pt-[3.5rem] md:pt-[5rem] overflow-hidden">
            <Header />
            <Hero />
            <Categories />
            <Product />
            <Inspiration />
            <Footer />
        </div>
    );
};

export default Home;
