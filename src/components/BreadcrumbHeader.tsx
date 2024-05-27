import Header from './Header';
import ArrowIcon from '../assets/svg/ArrowIcon';

const BreadcrumbHeader = () => {
    return (
        <div className="pt-[3.5rem] md:pt-[5rem] mb-[50px] lg:mb-[60px] w-full relative">
            <Header />
            <div className="bg-color-2  py-10 px-10 md:px-20 w-full">
                <div className="flex justify-center md:justify-start items-center gap-8 ">
                    <p className="font-poppins text-color-6 text-base">Home</p>
                    <ArrowIcon stroke="#000000" />
                    <p className="font-poppins text-color-6 text-base">
                        Categories
                    </p>
                    <ArrowIcon stroke="#000000" />
                    <p className="font-poppins text-base font-medium">Dining</p>
                </div>
            </div>
        </div>
    );
};

export default BreadcrumbHeader;
