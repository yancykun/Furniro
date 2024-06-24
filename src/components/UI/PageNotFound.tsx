import { pageNotFound } from "../../assets";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="h-[100vh]"
        src={pageNotFound}
        alt="Page not found image"
      />
    </div>
  );
};

export default PageNotFound;
