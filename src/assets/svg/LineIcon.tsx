const LineIcon = ({ width = 150, height = 1, color = "#B88E2F" }) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="0" x2={width} y2="0" stroke={color} strokeWidth={height} />
  </svg>
);

export default LineIcon;
