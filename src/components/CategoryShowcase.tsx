import Section from './Section';
import CategorySidebar from './CategorySidebar';
import CategoryGallery from './CategoryGallery';

const CategoryShowcase = () => {
    return (
        <Section>
            <div className="px-[2rem]">
                <h2 className="h2 text-center mb-[1.5rem]">
                    Browse Our Exclusive Collections
                </h2>
                <div className="flex">
                    <div className="w-1/5 pr-4">
                        <CategorySidebar />
                    </div>
                    <div className="w-4/5">
                        <CategoryGallery />
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CategoryShowcase;
