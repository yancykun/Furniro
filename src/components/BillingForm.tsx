import LabeledInput from "./LabeledInput";

const BillingForm = () => {
  return (
    <div>
      <h3>Billing details</h3>
      <div className="w-[600px]">
        <div className="flex gap-4">
          <LabeledInput
            className="w-[211px]"
            label="First Name"
            placeholder="Yancy Garret"
          />
          <LabeledInput label="Last Name" placeholder="Saac" />
        </div>
        <LabeledInput label="Company Name (Optional)" />
        <LabeledInput label="Country/ Region" placeholder="Philippines" />
        <LabeledInput label="Street address" />
        <LabeledInput label="Town/ City" />
        <LabeledInput label="Province" placeholder="North Cotabato" />
        <LabeledInput label="Phone" />
        <LabeledInput label="Email address" />
        <LabeledInput placeholder="Additional Information" />
      </div>

      <div>
        <div className="flex justify-between">
          <span>Product</span>
          <span>Subtotal</span>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
