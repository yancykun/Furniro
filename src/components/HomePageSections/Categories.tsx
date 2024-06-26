import Section from "../UI/Section";
import CategoriesCard from "../Category/CategoriesCard";

const Categories = () => {
  return (
    <Section
      id="categories"
      className="flex w-full flex-col items-center px-[1.5rem] xl:px-[7.5rem]"
    >
      <div className="mb-[35px]">
        <h2 className="h2 mb-[1.5rem] text-center">
          Browse Our Exclusive Collections
        </h2>
        <p className="text-center font-poppins text-base text-color-6 md:max-w-xl md:text-[1.25rem]">
          Dive into our curated categories and transform your house into a
          sanctuary of comfort and beauty.
        </p>
      </div>
      <CategoriesCard />
    </Section>
  );
};

export default Categories;
