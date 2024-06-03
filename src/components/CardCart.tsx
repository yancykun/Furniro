import React from "react";
import { cartClose, deleteItem } from "../assets";
import { useCart } from "../hooks/useCart";
import Button from "./Button";
import { Link } from "react-router-dom";

type CardCartProps = {
  toggleCart: () => void;
};

const CardCart = ({ toggleCart }: CardCartProps) => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div className="relative flex max-h-screen flex-col">
      <div className="border-b pb-6 pl-4">
        <h2 className="font-poppins text-base font-semibold md:pt-4 md:text-xl lg:text-2xl">
          Shopping Cart
        </h2>
        <img
          src={cartClose}
          alt="cart close icon"
          width={20}
          className="absolute right-[3.5rem] top-0 cursor-pointer md:right-[6rem] md:top-4 lg:right-[4rem]"
          onClick={toggleCart}
        />
      </div>
      <div className="max-h-[400px] flex-1 overflow-auto px-4 py-6">
        {cart.length === 0 ? (
          <p className="pl-4 font-poppins text-lg font-medium">
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
      <div className="border-b p-4">
        <div className="flex justify-between">
          <p className="font-poppins font-semibold">Subtotal</p>
          <p className="font-poppins font-semibold">
            ${getTotalPrice().toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex gap-4 px-4 py-4">
        <Link to="/cart">
          <Button
            white
            border
            className="h-[30px] w-[87px] rounded-[50px] border-color-7 font-poppins text-xs font-normal capitalize text-color-7"
          >
            Cart
          </Button>
        </Link>

        <Button
          white
          border
          className="h-[30px] w-[87px] rounded-[50px] border-color-7 font-poppins text-xs font-normal capitalize text-color-7"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CardCart;
