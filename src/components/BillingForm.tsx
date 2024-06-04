import { useCart } from "../hooks/useCart";
import LabeledInput from "./LabeledInput";
import Button from "./Button";
import { useState } from "react";

const BillingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
  };

  const { cart, getTotalPrice } = useCart();

  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 lg:flex-row lg:items-start">
      <div className="grid w-full justify-center md:w-[600px]">
        <h3 className="mb-[2.35rem] font-poppins text-2xl font-semibold md:text-3xl lg:text-4xl">
          Billing details
        </h3>
        <div className="flex gap-2 sm:gap-6">
          <LabeledInput
            className="h-[60px] w-[160px] sm:h-[75px] sm:w-[211px]"
            label="First Name"
            placeholder="Yancy Garret"
          />
          <LabeledInput
            className="h-[60px] w-[160px] sm:h-[75px] sm:w-[211px]"
            label="Last Name"
            placeholder="Saac"
          />
        </div>
        <LabeledInput
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Company Name (Optional)"
        />
        <LabeledInput
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Country/ Region"
          placeholder="Philippines"
        />
        <LabeledInput
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Street address"
        />
        <LabeledInput
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Town/ City"
        />
        <LabeledInput
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Province"
          placeholder="North Cotabato"
        />
        <LabeledInput
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Phone"
        />
        <LabeledInput
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Email address"
        />
        <LabeledInput
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          placeholder="Additional Information"
        />
      </div>

      <div className="flex w-full flex-col gap-2 sm:w-[608px] sm:px-[2.35rem] sm:py-[87px]">
        <div className="mb-2 flex justify-between">
          <span className="font-poppins text-2xl font-medium">Product</span>
          <span className="font-poppins text-2xl font-medium">Subtotal</span>
        </div>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="font-poppins text-base text-color-6">
                {item.title}
              </span>
              <span className="font-poppins text-xs font-medium">X</span>
              <span className="font-poppins text-xs font-medium">
                {item.quantity}
              </span>
            </div>
            <div>
              <span className="font-poppins text-base font-light">
                {(item.quantity * item.price).toFixed(2)}
              </span>
            </div>
          </div>
        ))}
        <div className="mt-1 border-b border-color-6 pb-6">
          <div className="flex justify-between">
            <span className="font-poppins text-base font-medium">Subtotal</span>
            <span className="font-poppins text-base font-medium">
              {getTotalPrice().toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-poppins text-base font-medium">Total</span>
            <span className="font-poppins text-2xl font-bold text-color-4">
              {getTotalPrice().toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center pt-4">
          {paymentMethod === "bankTransfer" && (
            <>
              <p className="max-w-[528px] text-justify font-poppins text-color-6">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
            </>
          )}
          {paymentMethod === "cashOnDelivery" && (
            <>
              <p className="max-w-[528px] text-justify font-poppins text-color-6">
                You can choose to pay with cash upon delivery. Please have the
                exact amount ready as our delivery personnel may not have
                change. Your order will be processed and shipped immediately.
              </p>
            </>
          )}
          <div className="flex w-full flex-col items-start max-sm:items-center">
            <div className="mb-2 mt-4">
              <LabeledInput
                value="bankTransfer"
                checked={paymentMethod === "bankTransfer"}
                onChange={handlePaymentMethod}
                label="Direct Bank Transfer"
                type="radio"
              />
            </div>
            <div className="mb-8">
              <LabeledInput
                value="cashOnDelivery"
                checked={paymentMethod === "cashOnDelivery"}
                onChange={handlePaymentMethod}
                label="Cash on delivery"
                type="radio"
              />
            </div>
          </div>
          <p className="mb-6 max-w-[528px] text-justify font-poppins text-base text-color-7">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>
          </p>
          <Button
            border
            white
            className="h-[64px] w-[300px] rounded-[15px] border-color-7 text-xl font-medium text-color-7"
          >
            Place order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
