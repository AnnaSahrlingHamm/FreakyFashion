import React, { useState, createContext } from "react";

// Skapa en Context för varukorgen
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Funktion för att lägga till en produkt i varukorgen
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // Om produkten redan finns, öka antalet
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // Om produkten inte finns, lägg till den med antal 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Funktion för att uppdatera antal av en produkt i varukorgen
  const updateQuantity = (id, quantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Number(quantity) } : item
    );
    setCartItems(updatedCart);
  };

  // Funktion för att ta bort en produkt från varukorgen
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};