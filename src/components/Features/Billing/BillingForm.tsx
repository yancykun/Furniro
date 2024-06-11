import FormField from "../../UI/FormField";
import Button from "../../UI/Button";
import { useState } from "react";
import Radio from "../../UI/Radio";
import useFormHandler from "../../../hooks/useFormHandler";

import { BillingSchema, BillingFormData } from "../../../types/types";
import { useCartStore } from "../../../store/useCartStore";
import useFormStore from "../../../store/useFormStore";

const BillingForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("bankTransfer");
  const clearSuccessMessage = useFormStore(
    (state) => state.clearSuccessMessage,
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    successMessage,
    onSubmit,
  } = useFormHandler(BillingSchema);

  const cart = useCartStore((state) => state.cart);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  const handleBillingSubmit = (data: BillingFormData) => {
    console.log("Billing Success", data);
  };

  const handlePaymentMethod = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPaymentMethod(event.target.value);

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data, handleBillingSubmit))}
      className="flex flex-col items-center justify-center gap-8 px-4 lg:flex-row lg:items-start"
    >
      <div
        onInput={clearSuccessMessage}
        className="grid w-full justify-center md:w-[600px]"
      >
        <h3 className="mb-[2.35rem] font-poppins text-2xl font-semibold md:text-3xl lg:text-4xl">
          Billing details
        </h3>

        <div className="flex gap-2 sm:gap-6">
          <FormField
            className="h-[60px] w-[160px] sm:h-[75px] sm:w-[211px]"
            label="First Name"
            name="firstName"
            placeholder="Yancy Garret"
            register={register}
            error={errors.firstName}
          />
          <FormField
            className="h-[60px] w-[160px] sm:h-[75px] sm:w-[211px]"
            label="Last Name"
            name="lastName"
            placeholder="Saac"
            register={register}
            error={errors.lastName}
          />
        </div>
        <FormField
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Company Name (Optional)"
          name="company"
          register={register}
          error={errors.company}
        />
        <FormField
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Country/ Region"
          name="country"
          placeholder="Philippines"
          register={register}
          error={errors.country}
        />
        <FormField
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Street address"
          name="streetAddress"
          register={register}
          error={errors.streetAddress}
        />
        <FormField
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Town/ City"
          name="townCity"
          register={register}
          error={errors.townCity}
        />
        <FormField
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Province"
          name="province"
          placeholder="North Cotabato"
          register={register}
          error={errors.province}
        />
        <FormField
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Phone"
          name="phone"
          type="text"
          register={register}
          error={errors.phone}
        />
        <FormField
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Email address"
          name="email"
          register={register}
          error={errors.email}
        />
        <FormField
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Additional Information"
          name="additionalInfo"
          register={register}
          error={errors.additionalInfo}
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
          <div className="js flex w-full flex-col items-start max-sm:items-center">
            <div className="mb-2 mt-4">
              <Radio
                label="Direct Bank Transfer"
                value="bankTransfer"
                checked={paymentMethod === "bankTransfer"}
                handlePaymentMethod={handlePaymentMethod}
              />
            </div>
            <div className="mb-8">
              <Radio
                label="Cash On Delivery"
                value="cashOnDelivery"
                checked={paymentMethod === "cashOnDelivery"}
                handlePaymentMethod={handlePaymentMethod}
              />
            </div>
          </div>
          <p className="mb-6 max-w-[528px] text-justify font-poppins text-base text-color-7 lg:mb-8">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>
          </p>
          {errors.root && (
            <div className="mb-4 font-poppins font-semibold text-red-800">
              {errors.root.message}
            </div>
          )}
          {successMessage && (
            <div className="mb-4 font-poppins font-semibold text-green-800">
              {successMessage}
            </div>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            white
            className="rounded-[15px]text-xl h-[64px] w-[300px] font-medium"
          >
            {isSubmitting ? "Placing order" : "Place order"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BillingForm;
