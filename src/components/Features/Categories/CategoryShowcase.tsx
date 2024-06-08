import CategorySidebar from "../../Features/Categories/CategorySidebar";
import CategoryGallery from "../../Features/Categories/CategoryGallery";

const CategoryShowcase = () => {
  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-center gap-12 px-[3rem] md:flex-row md:items-start md:gap-4 lg:mt-[60px]">
      <CategorySidebar />
      <CategoryGallery />
    </div>
  );
};

export default CategoryShowcase;
