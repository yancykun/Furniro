import CategorySidebar from "../../Features/Categories/CategorySidebar";
import CategoryGallery from "../../Features/Categories/CategoryGallery";
import { useProducts } from "../../../hooks/useProducts";
import ProductSkeletonLoading from "../../UI/ProductSkeletonLoading";

const CategoryShowcase = () => {
  const { isLoading } = useProducts();

  if (isLoading) {
    return (
      <div className="mt-[50px] flex w-full flex-col items-center justify-center gap-12 px-[3rem] md:flex-row md:items-start md:gap-4 lg:mt-[60px]">
        <CategorySidebar />
        <div className="mx-auto mb-5 grid w-fit grid-cols-1 justify-center justify-items-center gap-x-14 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <ProductSkeletonLoading key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[50px] flex w-full flex-col items-center justify-center gap-12 px-[3rem] md:flex-row md:items-start md:gap-4 lg:mt-[60px]">
      <CategorySidebar />
      <CategoryGallery />
    </div>
  );
};

export default CategoryShowcase;
