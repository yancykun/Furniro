import { ReactNode, createContext, useState } from 'react';

type CartProviderProps = {
    children: ReactNode;
};

type CartItem = {
    id: string;
    image: string;
    title: string;
    quantity: number;
    price: number;
};

type CartContextProps = {
    cart: CartItem[];
    addToCart: (product: CartItem) => void;
    removeFromCart: (id: string) => void;
};

export const CartContext = createContext<CartContextProps | undefined>(
    undefined
);

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: CartItem) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? {
                              ...item,
                              quantity: item.quantity + product.quantity,
                          }
                        : item
                );
            }
            return [...prevCart, product];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
