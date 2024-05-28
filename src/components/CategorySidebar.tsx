import { Link, useLocation } from 'react-router-dom';
import { categories } from '../constants';

const CategorySidebar = () => {
    const { pathname } = useLocation();

    return (
        <div className="flex flex-col w-[200px]">
            <div className="flex flex-col gap-4 pt-4 pl-4">
                <h5 className="font-poppins font-semibold text-[1.5rem] mb-1">
                    Categories
                </h5>
                {categories.map((item) => (
                    <Link
                        to={item.url}
                        key={item.id}
                        className={`font-poppins text-base pl-2 ${
                            item.url === pathname ? 'text-color-4' : ''
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
