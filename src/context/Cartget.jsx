import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

export const Cartget = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    const addToCart = (product) => {
        const itemInCart = cartItem.find((item) => item.id === product.id);

        if (itemInCart) {
            const newCart = cartItem.map((item) => {
                return item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
            });
            setCartItem(newCart);
            toast.success("Product quantity increased ")
        } else {
            setCartItem([...cartItem, { ...product, quantity: 1 }]);
            toast.success("Product is added to Cart")
        }

        // console.log(cartItem);
    };


    const updateQuantity = (productId, action) => {
        const updatedCart = cartItem
            .map(item => {
                if (item.id === productId) {
                    let newUnit = item.quantity;
                    if (action === 'increase') {
                        newUnit += 1;
                        toast.success("Quantity is increased")
                    } else if (action === 'decrease') {
                        newUnit -= 1;
                        toast.success("Quantity is decreased")
                    }
                    return newUnit > 0 ? { ...item, quantity: newUnit } : null;
                }
                return item;
            })
            .filter(item => item !== null);

        setCartItem(updatedCart);
    };
    const deleteItem = (productId) => {
        setCartItem(cartItem.filter(item => item.id !== productId))
        toast.success("Product is Deleted from Cart")
    }



    return (
        <Cartget.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}>
            {children}
        </Cartget.Provider>
    );
};

export const useCart = () => useContext(Cartget);
