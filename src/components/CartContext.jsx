import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.bikeName === item.bikeName);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.bikeName === item.bikeName
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (bikeName) => {
    setCart(cart.filter(cartItem => cartItem.bikeName !== bikeName));
  };

  const updateQuantity = (bikeName, quantity) => {
    setCart(cart.map(cartItem =>
      cartItem.bikeName === bikeName
        ? { ...cartItem, quantity }
        : cartItem
    ));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
