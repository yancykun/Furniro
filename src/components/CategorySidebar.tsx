import { Link } from 'react-router-dom';
import { categories } from '../constants';

const CategorySidebar = () => {
    return (
        <div className="flex flex-col w-full">
            <p className="font-poppins text-lg font-semibold bg-color-2 px-2 py-1 rounded-md">
                Category
            </p>
            <div className="flex flex-col gap-4 pt-4 pl-4">
                {categories.map((item) => (
                    <Link
                        to={item.url}
                        key={item.id}
                        className="font-poppins text-base"
                    >
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategorySidebar;
