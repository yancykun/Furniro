import Header from './Header';
import { headerImage, next } from '../assets';
import { Link } from 'react-router-dom';

const ExtendedHeader = () => {
    return (
        <div className="pt-[3.5rem] md:pt-[5rem] mb-[50px] lg:mb-[60px]">
            <Header />
            <div className="relative">
                <img
                    className="w-full h-[310px] object-cover opacity-40"
                    src={headerImage}
                    alt="Header image"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                    <p className="h1 mb-4"> Shop</p>
                    <div className="flex justify-center items-center gap-4">
                        <Link to="/" className="font-poppins font-semibold">
                            Home
                        </Link>
                        <img
                            className="w-4 h-5"
                            src={next}
                            alt="greater than icon"
                        />
                        <p>Shop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtendedHeader;
