import { trashcan } from "../../../assets";
import { useCartStore } from "../../../store/useCartStore";

const CartTable = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="w-full lg:w-[800px]">
      <table className="min-w-full bg-white">
        <thead className="h-[55px] bg-color-2">
          <tr>
            <th className="w-[40%] text-center font-poppins text-sm font-medium sm:text-base">
              Product
            </th>
            <th className="w-[15%] text-center font-poppins text-sm font-medium sm:text-base">
              Price
            </th>
            <th className="w-[15%] text-center font-poppins text-sm font-medium sm:text-base">
              Quantity
            </th>
            <th className="w-[15%] text-center font-poppins text-sm font-medium sm:text-base">
              Subtotal
            </th>
            <th className="w-[15%]"></th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="px-4 py-2 text-center font-poppins text-xl font-semibold"
              >
                Your cart is empty
              </td>
            </tr>
          ) : (
            cart.map((item) => (
              <tr key={item.id}>
                <td className="flex flex-col items-center gap-2 px-4 py-2 lg:flex-row lg:gap-6">
                  <img
                    className="h-[80px] w-[80px] rounded-xl lg:h-[105px] lg:w-[105px]"
                    src={item.image}
                    alt={item.title}
                  />
                  <span className="text-center font-poppins text-sm text-color-6 md:text-start lg:text-base">
                    {item.title}
                  </span>
                </td>
                <td className="text-center font-poppins text-sm text-color-6 lg:text-base">
                  ${item.price.toFixed(2)}
                </td>
                <td className="px-4 py-2 text-center">
                  <span className="h-[32px] w-[32px] rounded-[5px] border border-color-6 px-2 py-1 text-center font-poppins text-sm text-color-7 lg:px-3 lg:text-base">
                    {item.quantity}
                  </span>
                </td>
                <td className="px-4 py-2 text-center font-poppins text-sm font-normal text-color-7 lg:text-base">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="flex h-full items-center justify-center">
                    <img
                      onClick={() => removeFromCart(item.id)}
                      src={trashcan}
                      alt="delete icon"
                      className="cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
