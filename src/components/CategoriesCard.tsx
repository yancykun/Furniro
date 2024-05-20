import { category } from '../constants';

const CategoriesCard = () => {
    return (
        <div className="flex flex-wrap gap-6 items-center justify-center w-full">
            {category.map((item) => (
                <a className="relative " href="" key={item.id}>
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-[15rem] h-[21rem] md:w-[20rem] md:h-[25rem]  object-cover rounded-[20px]"
                    />
                    <button className="absolute shadow-sm left-0 bottom-0 bg-color-1 text-color-7 font-poppins text-[1.25rem] md:text-[1.5rem] font-semibold px-[2rem] md:px-[2.5rem] py-[1rem] rounded-tr-[20px]">
                        {item.title}
                    </button>
                </a>
            ))}
        </div>
    );
};

export default CategoriesCard;
