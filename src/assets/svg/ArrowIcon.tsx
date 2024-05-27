const ArrowIcon = ({ width = 13, height = 18, stroke = '#B88E2F' }) => (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
        <path
            d="m2 1 8 8-8 8"
            stroke={stroke}
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
        />
    </svg>
);

export default ArrowIcon;
