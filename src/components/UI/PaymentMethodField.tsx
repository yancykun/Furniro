import { FieldErrors, UseFormRegister } from "react-hook-form";
import FormField from "../UI/FormField";
import { BillingFormData } from "../../types/types";

type PaymentMethodFieldProps = {
  paymentMethod: string;
  handlePaymentMethod: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<BillingFormData>;
  errors: FieldErrors<BillingFormData>;
};

const PaymentMethodField = ({
  paymentMethod,
  handlePaymentMethod,
  register,
  errors,
}: PaymentMethodFieldProps) => (
  <div className="js flex w-full flex-col items-start max-sm:items-center">
    <div className="mb-2 mt-4">
      <FormField
        name="paymentMethod"
        error={errors.paymentMethod}
        register={register}
        label="Direct Bank Transfer"
        value="Direct Bank Transfer"
        checked={paymentMethod === "Direct Bank Transfer"}
        onChange={handlePaymentMethod}
        type="radio"
      />
    </div>
    <div className="mb-8">
      <FormField
        name="paymentMethod"
        type="radio"
        register={register}
        error={errors.paymentMethod}
        label="Cash On Delivery"
        value="Cash On Delivery"
        checked={paymentMethod === "Cash On Delivery"}
        onChange={handlePaymentMethod}
      />
    </div>
  </div>
);

export default PaymentMethodField;
