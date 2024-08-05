// CartContext.js

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import ProductData from '../assets/Store.json';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
      });
  const [products, setProducts] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalCartQuantity, setTotalCartQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let quantity = 0;
    cart.forEach((index) => {
      quantity ++;
    });
    setTotalQuantity(quantity);

    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    let quantity2 = 0;
    let totalprices = 0;
    cart.forEach((item) => {
      const matchingProduct = products.find((productItem) => productItem.id === item.id);

    if (matchingProduct) {
      quantity2 += item.quantity;
      totalprices += item.quantity * matchingProduct.price;
    }
    });
    setTotalCartQuantity(quantity2);
    setTotalPrice(totalprices);

    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ProductData;
        if (JSON.stringify(products) !== JSON.stringify(data)) {
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [products]);
  
  const clearCart = () => {
    setCart([]);
    console.log("Cart cleared");
  };
  const clearCartitem = (productId) => {
    const positionInCart = cart.findIndex((item) => item.id === productId);
  
    if (positionInCart >= 0) {
      const productQuantity = cart[positionInCart].quantity;
  
      // Call changeQuantityCart based on the product's quantity
      for (let i = 0; i < productQuantity; i++) {
        changeQuantityCart(productId, 'minus');
      }
    }
  };
  const productMap = useMemo(() => {
    const map = {};
    for (const product of products) {
      map[product.id] = product;
    }
    return map;
  }, [products]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ProductData;
        if (JSON.stringify(products) !== JSON.stringify(data)) {
          setProducts(data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [products]);


  const addToCart = (productId) => {
    const positionInCart = cart.findIndex((item) => item.id === productId);

    if (positionInCart < 0) {
      setCart([...cart, { id: productId, quantity: 1 }]);
      console.log("Added to Cart");
    } else {
      const updatedCart = [...cart];
      updatedCart[positionInCart].quantity += 1;
      setCart(updatedCart);
      console.log("Added to Cart");
    }
  };

  const changeQuantityCart = (productId, type) => {
    const positionInCart = cart.findIndex((item) => item.id === productId);

    if (positionInCart >= 0) {
      const updatedCart = [...cart];

      if (type === 'plus') {
        updatedCart[positionInCart].quantity += 1;
      } else {
        const newQuantity = updatedCart[positionInCart].quantity - 1;

        if (newQuantity > 0) {
          updatedCart[positionInCart].quantity = newQuantity;
        } else {
          updatedCart.splice(positionInCart, 1);
        }
      }
      console.log("Changed Quantity");
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{clearCartitem,clearCart, totalCartQuantity, totalPrice,products,productMap ,cart, addToCart, changeQuantityCart, totalQuantity}}>
      {children}
    </CartContext.Provider>
  );
};
