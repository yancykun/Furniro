import { Link } from 'react-router-dom';
import { categories } from '../constants';

const CategorySidebar = () => {
    return (
        <div className="flex flex-col w-full">
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
