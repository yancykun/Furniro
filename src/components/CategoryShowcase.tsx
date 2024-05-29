import CategorySidebar from './CategorySidebar';
import CategoryGallery from './CategoryGallery';

const CategoryShowcase = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-4 w-full px-[3rem] mt-[50px] lg:mt-[60px]">
            <CategorySidebar />
            <CategoryGallery />
        </div>
    );
};

export default CategoryShowcase;
