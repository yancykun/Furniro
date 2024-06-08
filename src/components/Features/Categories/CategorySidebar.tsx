import { Link, useLocation } from "react-router-dom";
import { categories } from "../../../constants/index";

const CategorySidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex w-[200px] flex-col">
      <div className="flex flex-col gap-4 pl-4 pt-4">
        <h5 className="mb-1 font-poppins text-[1.5rem] font-semibold">
          Categories
        </h5>
        {categories.map((item) => (
          <Link
            to={item.url}
            key={item.id}
            className={`pl-2 font-poppins text-base ${
              item.url === pathname ? "text-color-4" : ""
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;
