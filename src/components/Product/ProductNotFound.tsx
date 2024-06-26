import { productNotFound } from "../../assets";

const ProductNotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="h-[100vh]"
        src={productNotFound}
        alt="Product not found image"
      />
    </div>
  );
};

export default ProductNotFound;
