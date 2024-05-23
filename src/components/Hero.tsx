import { hero } from '../assets';
import Button from './Button';
import Section from './Section';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <Section id="home">
            <div className="max-md:px-[0.5rem] max-md:pt-[50px]">
                <img
                    className="relative hidden md:flex w-full h-[100vh] object-cover opacity-90"
                    src={hero}
                    alt="Hero image"
                />
                <div className="flex flex-col items-center md:items-start md:absolute md:top-[10%] lg:right-[57px] md:right-[30px] w-full md:max-w-[400px] lg:max-w-[643px] bg-color-2 py-4 md:px-[1.5rem] lg:px-[2.375rem] lg:pt-[3.875rem] rounded-xl">
                    <h6 className="h6 mb-2 text-color-5">New Arrival</h6>
                    <h1 className="h1 mb-4 text-center md:text-start text-color-4">
                        Discover Our New Collection
                    </h1>
                    <p className="font-poppins text-color-5 font-medium text-center md:text-start max-md:max-w-[300px] text-lg lg:max-w-lg mb-8">
                        Introducing our new collection: Elevate your space with
                        style. Explore now!
                    </p>
                    <Link to="/shop">
                        <Button className="h-[3.375rem] md:h-[4.375rem] ">
                            Shop now
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default Hero;
