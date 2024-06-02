import React from 'react';
import { cartClose, deleteItem } from '../assets';
import { useCart } from '../hooks/useCart';
import Button from './Button';

type CardCartProps = {
    toggleCart: () => void;
};

const CardCart = ({ toggleCart }: CardCartProps) => {
    const { cart, removeFromCart, getTotalPrice } = useCart();

    return (
        <div className="relative flex flex-col max-h-screen">
            <div className="pb-6 border-b pl-4">
                <h2 className="font-poppins text-base md:text-xl lg:text-2xl font-semibold md:pt-4">
                    Shopping Cart
                </h2>
                <img
                    src={cartClose}
                    alt="cart close icon"
                    width={20}
                    className="cursor-pointer absolute top-0 md:top-4 right-[3.5rem] md:right-[6rem] lg:right-[4rem]"
                    onClick={toggleCart}
                />
            </div>
            <div className="flex-1 overflow-auto py-6 px-4 max-h-[400px]">
                {cart.length === 0 ? (
                    <p className="font-poppins font-medium text-lg pl-4">
                        Your cart is empty
                    </p>
                ) : (
                    cart.map((item) => (
                        <React.Fragment key={item.id}>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-[120px]">
                                    <img
                                        className="w-full h-[110px] object-cover rounded-xl"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="flex flex-col items-center sm:items-start gap-1 flex-1">
                                    <p className="font-poppins text-base">
                                        {item.title}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <p className="font-poppins text-base font-light">
                                            {item.quantity}
                                        </p>
                                        <p className="font-poppins text-xs">
                                            X
                                        </p>
                                        <p className="font-poppins text-color-4 text-sm">
                                            ${item.price}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-[40px] flex justify-center">
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
            <div className="p-4 border-b">
                <div className="flex justify-between">
                    <p className="font-poppins font-semibold">Subtotal</p>
                    <p className="font-poppins font-semibold">
                        ${getTotalPrice().toFixed(2)}
                    </p>
                </div>
            </div>
            <div className="flex gap-4 px-4 py-4">
                <Button
                    white
                    border
                    className="font-poppins capitalize font-normal text-xs text-color-7 border-color-7 rounded-[50px] h-[30px] w-[87px]"
                >
                    Cart
                </Button>
                <Button
                    white
                    border
                    className="font-poppins capitalize font-normal text-xs text-color-7 border-color-7 rounded-[50px] h-[30px] w-[87px]"
                >
                    Checkout
                </Button>
            </div>
        </div>
    );
};

export default CardCart;
