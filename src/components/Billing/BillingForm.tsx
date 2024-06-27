import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useBillingForm from "../../hooks/useBillingForm";
import FormField from "../UI/FormField";
import Button from "../UI/Button";
import ProductBill from "./ProductBill";
import PaymentMethodField from "../UI/PaymentMethodField";
import Alert from "@mui/material/Alert";

const BillingForm = () => {
  const user = useAuth();
  const [paymentMethod, setPaymentMethod] = useState("Direct Bank Transfer");

  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    setValue,
    successMessage,
    handleBillingSubmit,
    loginAlertMessage,
  } = useBillingForm(user, paymentMethod);

  const handlePaymentMethod = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value);
    setValue("paymentMethod", event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit(handleBillingSubmit)}
      className="flex flex-col items-center justify-center gap-8 px-4 lg:flex-row lg:items-start"
    >
      <div className="grid w-full justify-center md:w-[600px]">
        <h3 className="mb-[2.35rem] font-poppins text-2xl font-semibold md:text-3xl lg:text-4xl">
          Billing details
        </h3>

        <div className="flex gap-2 sm:gap-6">
          <FormField
            type="text"
            className="h-[60px] w-[160px] sm:h-[75px] sm:w-[211px]"
            label="First Name"
            name="firstName"
            placeholder="Yancy Garret"
            register={register}
            error={errors.firstName}
          />
          <FormField
            type="text"
            className="h-[60px] w-[160px] sm:h-[75px] sm:w-[211px]"
            label="Last Name"
            name="lastName"
            placeholder="Saac"
            register={register}
            error={errors.lastName}
          />
        </div>
        <FormField
          type="text"
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Company Name (Optional)"
          name="company"
          register={register}
          error={errors.company}
        />
        <FormField
          type="text"
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Country/ Region"
          name="country"
          placeholder="Philippines"
          register={register}
          error={errors.country}
        />
        <FormField
          type="text"
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Street address"
          name="streetAddress"
          register={register}
          error={errors.streetAddress}
        />
        <FormField
          type="text"
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Town/ City"
          name="townCity"
          register={register}
          error={errors.townCity}
        />
        <FormField
          type="text"
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Province"
          placeholder="North Cotabato"
          name="province"
          register={register}
          error={errors.province}
        />
        <FormField
          type="text"
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Phone"
          name="phone"
          register={register}
          error={errors.phone}
        />
        <FormField
          type="email"
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Email address"
          name="email"
          register={register}
          error={errors.email}
        />
        <FormField
          type="text"
          className="h-[60px] w-[328px] sm:h-[75px] sm:w-[453px]"
          label="Additional Information"
          name="additionalInfo"
          register={register}
          error={errors.additionalInfo}
        />
      </div>

      <div className="flex w-full flex-col gap-2 sm:w-[608px] sm:px-[2.35rem] sm:py-[87px]">
        <ProductBill />

        <div className="flex flex-col items-center pt-4">
          {paymentMethod === "Direct Bank Transfer" && (
            <p className="max-w-[528px] text-justify font-poppins text-color-6">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          )}
          {paymentMethod === "Cash On Delivery" && (
            <p className="max-w-[528px] text-justify font-poppins text-color-6">
              You can choose to pay with cash upon delivery. Please have the
              exact amount ready as our delivery personnel may not have change.
              Your order will be processed and shipped immediately.
            </p>
          )}
          <PaymentMethodField
            paymentMethod={paymentMethod}
            handlePaymentMethod={handlePaymentMethod}
            register={register}
            errors={errors}
          />
          <p className="mb-6 max-w-[528px] text-justify font-poppins text-base text-color-7 lg:mb-8">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>
          </p>
        </div>

        {successMessage && (
          <div className="mb-4">
            <Alert variant="filled" severity="success">
              {successMessage}
            </Alert>
          </div>
        )}

        {loginAlertMessage && (
          <div className="mb-4">
            <Alert variant="filled" severity="error">
              {loginAlertMessage}
            </Alert>
          </div>
        )}

        <div className="grid justify-center">
          <Button
            disabled={isSubmitting}
            type="submit"
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
