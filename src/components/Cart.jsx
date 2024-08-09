import React, { useContext, useEffect, useRef, useState } from 'react';
import { CartContext } from './CartContext'; 
import { MdClose } from 'react-icons/md';

const Cart = ({ toggleCartVisibility }) => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const cartRef = useRef();
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    cartRef.current.style.transform = 'translateX(100%)';
    setTimeout(() => {
      cartRef.current.style.transform = 'translateX(0)';
    }, 0);
  }, []);

  const handleClose = () => {
    cartRef.current.style.transform = 'translateX(100%)';
    setTimeout(() => {
      toggleCartVisibility();
    }, 300);
  };

  const handleOrderPlace = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      handleClose();
    }, 2000); 
  };

  const handleIncrement = (item) => {
    updateQuantity(item.bikeName, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item.bikeName, item.quantity - 1);
    }
  };

  return (
    <div
      ref={cartRef}
      className="fixed z-50 top-0 right-0 h-full md:w-1/3 w-[80%] bg-white shadow-lg p-4 transition-transform overflow-scroll duration-300 transform"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button onClick={handleClose} className="text-gray-600 hover:text-gray-900">
          <MdClose size={24} />
        </button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.bikeName} className="flex justify-between items-center mb-4">
              <img src={item.img} alt={item.bikeName} className="w-20 h-20 object-contain" />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold">{item.bikeName}</h3>
                <p className="text-gray-600">{item.category}</p>
                <p>${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleDecrement(item)}
                    className="px-2 border rounded"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item)}
                    className="px-2 border rounded"
                  >
                    +
                  </button>
                </div>
                <p className="mt-2">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  onClick={() => removeFromCart(item.bikeName)}
                  className="text-red-500 mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleOrderPlace}
              className="bg-black text-white py-2 px-4 rounded"
            >
              Place Order
            </button>
          </div>
        </>
      )}
      {orderPlaced && (
        <div className="fixed h-screen inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Order Placed!</h2>
            <p>Your order has been placed successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
