import { useEffect, useState } from 'react';

const [cart, setCart] = useState(() => {
  try {
    const savedCart = localStorage.getItem('shoppingCart');

    if (!savedCart) {
      return [];
    }

    const parsedCart = JSON.parse(savedCart);

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return [];
  }
});

useEffect(() => {
  try {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
  } catch (error) {
    console.error('Error saving cart to localStorage:', error);
  }
}, [cart]);
