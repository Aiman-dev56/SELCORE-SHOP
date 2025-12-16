import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
   

    // ADD TO CART
const addToCart = (product, qty) => {
  setCart(prev => {
    const existing = prev.find(item => item.id === product.id);
    if (existing) {
      return prev.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + qty }
          : item
      );
    }
    return [...prev, { 
      ...product, 
      price: parseFloat(product.price), // Ensure price is a number
      qty: parseInt(qty) || 1 // Ensure qty is a number
    }];
  });
};

    // REMOVE FROM CART
    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    // UPDATE QUANTITY
const updateQuantity = (id, qty) => {
  setCart(prev =>
    prev.map(item =>
      item.id === id ? { ...item, qty: parseInt(qty) || 1 } : item
    )
);
};

   // TOTAL PRICE
const totalPrice = cart.reduce(
  (sum, item) => sum + item.qty * parseFloat(item.price || 0),
  0
);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
