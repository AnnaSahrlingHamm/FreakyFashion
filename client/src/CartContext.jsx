import React, { useState, useEffect, createContext, useMemo, useCallback } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [hasMounted, setHasMounted] = useState(false);

  console.log("cartItems initialt:", cartItems);

  
  const addToCart = useCallback((product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        { 
          ...product,
          quantity: 1,
          name: product.name || product.item || 'Namn saknas',
          price: product.price || 0
        }
      ];
    });
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    setCartItems(prevItems => 
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  }, []);

  const removeItem = useCallback((id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  const contextValue = useMemo(() => ({
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
  }), [cartItems, addToCart, updateQuantity, removeItem]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed) && !cartItems.length) {
          setCartItems(parsed);
        }
      } catch (error) {
        console.error("Fel vid inläsning av varukorg:", error);
      }
    }
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      const timer = setTimeout(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [cartItems, hasMounted]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};