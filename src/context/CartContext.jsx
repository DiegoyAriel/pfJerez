// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])


  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.nombre === item.nombre)
      if (existingItem) {
        return prevItems.map((i) =>
          i.nombre === item.nombre
            ? { ...i, cantidad: i.cantidad + 1 } 
            : i
        )
      } else {
        return [...prevItems, { ...item, cantidad: 1 }]
      }
    })
  }

  const incrementQuantity = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.nombre === itemName ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    )
  }

  const decrementQuantity = (itemName) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.nombre === itemName
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )


      return updatedItems.filter((item) => item.cantidad > 0)
    })
  }
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, incrementQuantity, decrementQuantity,clearCart}}>
      {children}
    </CartContext.Provider>
  )
}
