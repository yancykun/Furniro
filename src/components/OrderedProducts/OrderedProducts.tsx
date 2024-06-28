import useAuth from "../../hooks/useAuth";
import useUserOrders from "../../hooks/useUserOrder";
import { Order, CartItem } from "../../types/types";
import Section from "../UI/Section";
import OrderedProductsLoading from "./OrderedProductsLoading";

const OrderedProducts = () => {
  const { data: user, isLoading: authLoading } = useAuth();
  const { data: orders = [], isLoading: ordersLoading } = useUserOrders(user);

  if (authLoading || ordersLoading)
    return (
      <Section>
        <h2 className="mb-4 font-poppins text-2xl font-semibold">
          Items Ordered
        </h2>
        <OrderedProductsLoading />
      </Section>
    );

  return (
    <div className="w-full sm:w-[300px]">
      {orders.length > 0 ? (
        <>
          <h2 className="mb-4 font-poppins text-2xl font-semibold">
            Items Ordered
          </h2>
          {orders.map((order: Order) => (
            <div className="mb-8 grid" key={order.id}>
              <h3 className="font-poppins font-semibold">
                Order ID: <span className="text-sm font-light">{order.id}</span>
              </h3>
              <div className="grid gap-4 border-b border-color-4 p-4">
                {order.cart.map((item: CartItem) => (
                  <div className="flex items-center gap-4" key={item.id}>
                    <img
                      className="h-[100px] w-[140px] rounded-md object-cover"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                    <div className="flex flex-1 flex-col gap-1">
                      <p className="font-poppins text-base">{item.title}</p>
                      <div className="flex items-center gap-4">
                        <p className="font-poppins text-base font-light">
                          {item.quantity}
                        </p>
                        <p className="font-poppins text-xs">X</p>
                        <p className="font-poppins text-sm text-color-4">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="p-2 font-poppins text-2xl font-bold">
          No orders found :/
        </p>
      )}
    </div>
  );
};

export default OrderedProducts;
