import React, { useContext } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { CartContext } from './CartContext';

const CartIcon = ({ toggleCartVisibility }) => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed bottom-[3.265rem] right-4 z-50">
      <button 
        onClick={toggleCartVisibility}
        className="relative bg-black text-white p-4 rounded-full shadow-lg focus:outline-none"
      >
        <MdShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartIcon;
