// hooks/useCart.js
import { useCallback } from 'react';

export function useCart(cartItems, dispatch) {
  const addToCart = useCallback((product) => {
    const quantity = product.quantity || 1;
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      dispatch({ 
        type: 'UPDATE_CART_ITEM', 
        payload: { 
          id: product.id, 
          quantity: existingItem.quantity + quantity 
        } 
      });
    } else {
      dispatch({ 
        type: 'ADD_CART_ITEM', 
        payload: { ...product, quantity } 
      });
    }
  }, [cartItems, dispatch]);

  const removeFromCart = useCallback((productId) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: productId });
  }, [dispatch]);

  const updateQuantity = useCallback((productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      dispatch({ 
        type: 'UPDATE_CART_ITEM', 
        payload: { id: productId, quantity: newQuantity } 
      });
    }
  }, [dispatch, removeFromCart]);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  const getCartTotal = useCallback(() => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cartItems]);

  const getCartItemCount = useCallback(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  return {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount
  };
}