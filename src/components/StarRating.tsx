// StarRating.tsx
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type StarRatingProps = {
    rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div className="flex gap-1">
            {[...Array(fullStars)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
            ))}
            {halfStars === 1 && <FaStarHalfAlt className="text-yellow-500" />}
            {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={i} className="text-yellow-500" />
            ))}
        </div>
    );
};

export default StarRating;
