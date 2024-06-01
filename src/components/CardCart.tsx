import React from 'react';
import { cartClose, deleteItem } from '../assets';
import { useCart } from '../hooks/useCart';

type CardCartProps = {
    toggleCart: () => void;
};

const CardCart = ({ toggleCart }: CardCartProps) => {
    const { cart, removeFromCart, getTotalPrice } = useCart();

    return (
        <div className="relative shadow-md h-[746px]">
            <div className="pb-6 pl-4 border-b">
                <h2 className="font-poppins text-base md:text-2xl font-semibold md:pt-4">
                    Shooping Cart
                </h2>
                <img
                    src={cartClose}
                    alt="cart close icon"
                    width={20}
                    className="cursor-pointer absolute top-0 md:top-4 right-[3.5rem] md:right-[6rem] lg:right-[4rem]  "
                    onClick={toggleCart}
                />
            </div>
            <div className="py-6 px-4 flex flex-col gap-4">
                {cart.length === 0 ? (
                    <p className="font-poppins font-medium text-lg pl-4">
                        Your cart is empty
                    </p>
                ) : (
                    cart.map((item) => (
                        <React.Fragment key={item.id}>
                            <div className="flex items-center gap-4">
                                <div className="w-full">
                                    <img
                                        className="w-[108px] h-[105px] object-cover rounded-xl"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>
                                <div className="w-full grid gap-1">
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
                                <div className="w-full">
                                    <img
                                        onClick={() => removeFromCart(item.id)}
                                        src={deleteItem}
                                        alt="delete icon"
                                    />
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                )}
                <div className="flex gap-20">
                    <p>Subtotal</p>
                    <p>${getTotalPrice().toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default CardCart;
