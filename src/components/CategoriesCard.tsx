import { Link } from "react-router-dom";
import { categories } from "../constants";

const CategoriesCard = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-8">
      {categories.map((item) => (
        <Link
          className="relative border-none outline-none"
          to={item.url}
          key={item.id}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-[21rem] w-[15rem] rounded-[20px] object-cover md:h-[25rem] md:w-[20rem]"
          />
          <button className="absolute bottom-[-2px] left-[-2px] rounded-tr-[20px] bg-color-1 px-[2rem] py-[1rem] font-poppins text-[1.25rem] font-semibold text-color-7 md:px-[2.5rem] md:text-[1.5rem]">
            {item.title}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesCard;
