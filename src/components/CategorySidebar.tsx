import { Link, useLocation } from 'react-router-dom';
import { categories } from '../constants';

const CategorySidebar = () => {
    const { pathname } = useLocation();

    return (
        <div className="flex flex-col w-[200px]">
            <div className="flex flex-col gap-4 pt-4 pl-4">
                {categories.map((item) => (
                    <Link
                        to={item.url}
                        key={item.id}
                        className={`font-poppins text-base ${
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
