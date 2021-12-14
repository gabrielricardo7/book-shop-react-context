import { useEffect } from "react";
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const bookCart = JSON.parse(localStorage.getItem("bookShopCart")) || [];

    const [cart, setCart] = useState(bookCart);

    useEffect(() => {
        localStorage.clear();
        localStorage.setItem("bookShopCart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        if (!cart.some(cartItem => item.id === cartItem.id)) {
            setCart([...cart, item]);
            toast.success(`${item.name} has been added to cart!`);
        } else {
            toast.error(`${item.name} is already in the cart!`);
        }
    };

    const removeFromCart = (item) => {
        const newCart = cart.filter(
            (itemOnCart) => itemOnCart.id !== item.id
        );
        setCart(newCart);
        toast.info(`${item.name} has been removed from the cart!`);
    };

    return (
        <CartContext.Provider
            value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}