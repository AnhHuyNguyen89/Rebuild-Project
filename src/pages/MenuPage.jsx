import { Link } from "react-router";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { useState } from "react";
export function MenuPage() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart
  const addToCart = (foodItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === foodItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === foodItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...foodItem, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    if (typeof window !== "undefined") {
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    }
  };

  // Calculate total items in cart
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  return (
    <>
      <Header
        cartCount={cartItemCount}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />
      <Menu
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        isCartOpen={isCartOpen}
        toggleCart={() => setIsCartOpen(!isCartOpen)}
      />
      <Footer />
    </>
  );
}
