import { logo } from "../../assets";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="block w-32 md:w-48">
      <img
        src={logo}
        alt="Furnito logo"
        className="block h-auto w-auto max-w-full"
      />
    </Link>
  );
};

export default Logo;
