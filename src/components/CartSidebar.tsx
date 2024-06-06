import React from "react";
import { cartClose, deleteItem } from "../assets";
import { useCart } from "../hooks/useCart";
import Button from "./Button";
import { Link } from "react-router-dom";
import { CartSidebarProps } from "../types/types";

interface CartSidebar extends CartSidebarProps {
  handleClick: () => void;
}

const CartSidebar = ({ toggleCartSidebar, handleClick }: CartSidebar) => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="relative flex h-full flex-col bg-color-1 shadow-lg">
      <div className="m-6 flex justify-between border-b border-color-6/30 pb-6">
        <h2 className="font-poppins text-base font-semibold md:text-xl lg:text-2xl">
          Shopping Cart
        </h2>
        <img
          src={cartClose}
          alt="cart close icon"
          width={20}
          onClick={toggleCartSidebar}
          className="cursor-pointer"
        />
      </div>
      <div className="max-h-[400px] flex-1 overflow-auto px-4">
        {cart.length === 0 ? (
          <p className="px-4 pt-8 text-center font-poppins text-xl font-semibold">
            Your cart is empty
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
      <div className="mx-4 border-b border-color-6/30 pb-4">
        <div className="flex justify-between">
          <p className="font-poppins font-semibold">Subtotal</p>
          <p className="font-poppins font-semibold text-color-4">
            ${getTotalPrice().toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex gap-4 px-4 py-4">
        <Link to="/cart">
          <Button
            onClick={handleClick}
            white
            className="h-[30px] w-[87px] rounded-[50px] font-poppins text-xs font-normal capitalize"
          >
            Cart
          </Button>
        </Link>

        <Link to="/billing">
          <Button
            onClick={handleClick}
            white
            className="h-[30px] w-[87px] rounded-[50px] font-poppins text-xs font-normal capitalize"
          >
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
