import { useCartStore } from "../../../store/useCartStore";
import React from "react";
import { deleteItem } from "../../../assets";

const CartSidebarProducts = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="max-h-[400px] flex-1 overflow-auto px-4">
      {cart.length === 0 ? (
        <p className="px-4 pt-8 text-center font-poppins text-xl font-semibold">
          Your cart is empty.
        </p>
      ) : (
        cart.map((item) => (
          <React.Fragment key={item.id}>
            <div className="mb-4 flex items-center gap-4">
              <div className="w-[120px]">
                <img
                  className="h-[110px] w-full rounded-xl object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="flex flex-1 flex-col items-center gap-1 sm:items-start">
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
              <div className="flex w-[40px] justify-center">
                <img
                  onClick={() => removeFromCart(item.id)}
                  src={deleteItem}
                  alt="delete icon"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default CartSidebarProducts;
