import CartTable from "../Cart/CartTable";
import Section from "../../Layout/Section";
import CartTotals from "./CartTotals";

const Cart = () => {
  return (
    <Section className="flex flex-col items-center justify-center gap-8 sm:px-8 lg:flex-row lg:items-start lg:px-[50px]">
      <CartTable />
      <CartTotals />
    </Section>
  );
};

export default Cart;
