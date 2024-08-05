import React, { useState, useEffect, useMemo } from 'react';
import CartCards from './CartCards';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';

const Carts = () => {

    const history = useNavigate();
  const {totalCartQuantity,productMap,clearCart ,cart,totalPrice ,clearCartitem, changeQuantityCart, totalQuantity } = useCart(); // Use the useCart hook
 const EventhandleCheck = () =>{
    clearCart();
    history('/Check');

 }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items p-2">
        {cart.map((item) => {
          const product = productMap[item.id]; // Use product lookup map

          if (product) {
            return (
              <CartCards key={product.id} product={product} item={item} clearCartitem={(productId)=>clearCartitem(productId)} changeQuantityCart={(productId, type) => changeQuantityCart(productId, type)} />
            );
          }

          return <p>Product not found</p>; // Handle undefined product
        })}
      </div>
      <div className="text-lg font-semibold hover:underline items-center justify-center p-4">Types of items: {totalQuantity}</div>
      <div className="text-lg font-semibold hover:underline items-center justify-center px-4 pb-4">Total Quantity: {totalCartQuantity}</div>
      <div className="text-lg font-semibold hover:underline items-center justify-center px-4 pb-4">Total Price: ${totalPrice.toFixed(2)}</div>
      <button onClick={() => EventhandleCheck()}
              className="flex ml-auto mr-auto px-2 text-white border-0 py-2 focus:outline-none  rounded bg-b-c">
                Check Out
         </button>
    </div>
  );
};

export default Carts;
