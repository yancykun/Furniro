import OrderedProducts from "./OrderedProducts";
import PaymentDetails from "./PaymentDetails";

const OrderedProductDetails = () => {
  return (
    <div className="mx-auto flex justify-center pt-[3.5rem] md:pt-[6.5rem]">
      <div className="flex h-auto flex-col gap-x-6 gap-y-12 sm:flex-row">
        <OrderedProducts />
        <PaymentDetails />
      </div>
    </div>
  );
};

export default OrderedProductDetails;
