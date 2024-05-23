import Section from './Section';
import CategoriesCard from './CategoriesCard';

const Categories = () => {
    return (
        <Section
            id="categories"
            className="px-[1.5rem] xl:px-[7.5rem] w-full flex flex-col items-center"
        >
            <div className="mb-[35px]">
                <h2 className="h2 text-center mb-[1.5rem]">
                    Browse Our Exclusive Collections
                </h2>
                <p className="font-poppins text-color-6 text-base md:text-[1.25rem] text-center md:max-w-xl">
                    Dive into our curated categories and transform your house
                    into a sanctuary of comfort and beauty.
                </p>
            </div>
            <CategoriesCard />
        </Section>
    );
};

export default Categories;
