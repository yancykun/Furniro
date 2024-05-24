import ExtendedHeader from '../components/ExtendedHeader';
import Footer from '../components/Footer';
import CategorySidebar from '../components/CategorySidebar';
import CategoryGallery from '../components/CategoryGallery';

const CategoriesPage = () => {
    return (
        <>
            <ExtendedHeader />
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6">
                <div className="w-1/5">
                    <CategorySidebar />
                </div>

                <div className="w-4/5">
                    <CategoryGallery />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CategoriesPage;
