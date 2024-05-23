import { Link } from 'react-router-dom';
import { categories } from '../constants';

const CategoriesCard = () => {
    return (
        <div className="flex flex-wrap gap-8 items-center justify-center w-full">
            {categories.map((item) => (
                <Link
                    className="relative border-none outline-none "
                    to={item.url}
                    key={item.id}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-[15rem] h-[21rem] md:w-[20rem] md:h-[25rem]  object-cover rounded-[20px]"
                    />
                    <button className="absolute left-[-2px] bottom-[-2px] bg-color-1 text-color-7 font-poppins text-[1.25rem] md:text-[1.5rem] font-semibold px-[2rem] md:px-[2.5rem] py-[1rem] rounded-tr-[20px]">
                        {item.title}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default CategoriesCard;
