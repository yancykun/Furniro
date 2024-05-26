import CategorySidebar from './CategorySidebar';
import CategoryGallery from './CategoryGallery';

const CategoryShowcase = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-8 w-full mx-auto">
            <CategorySidebar />
            <CategoryGallery />
        </div>
    );
};

export default CategoryShowcase;
