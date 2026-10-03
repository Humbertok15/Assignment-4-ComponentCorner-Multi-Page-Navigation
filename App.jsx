import { useState } from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ProductDetailsPage from './pages/ProductDetailsPage.jsx';
import CartPage from './pages/CartPage.jsx';

function App() {
  const products = [
    {
      id: 1,
      name: 'Aurora Wireless Headphones',
      price: 89.99,
      image:
        'https://placehold.co/600x400/111827/ffffff?text=Wireless+Headphones',
      description:
        'Comfortable wireless headphones with rich sound and all-day battery life.'
    },
    {
      id: 2,
      name: 'Pulse Smartwatch',
      price: 129.99,
      image:
        'https://placehold.co/600x400/312e81/ffffff?text=Smartwatch',
      description:
        'A modern smartwatch for fitness tracking, notifications, and everyday style.'
    },
    {
      id: 3,
      name: 'Nova Mechanical Keyboard',
      price: 74.99,
      image:
        'https://placehold.co/600x400/0f766e/ffffff?text=Mechanical+Keyboard',
      description:
        'A responsive mechanical keyboard designed for productivity and gaming.'
    },
    {
      id: 4,
      name: 'Echo Bluetooth Speaker',
      price: 59.99,
      image:
        'https://placehold.co/600x400/7c3aed/ffffff?text=Bluetooth+Speaker',
      description:
        'Portable Bluetooth speaker with powerful sound and a compact design.'
    },
    {
      id: 5,
      name: 'Vision 4K Webcam',
      price: 99.99,
      image:
        'https://placehold.co/600x400/be123c/ffffff?text=4K+Webcam',
      description:
        'A high-quality webcam for video calls, streaming, and online meetings.'
    },
    {
      id: 6,
      name: 'Flex Laptop Stand',
      price: 44.99,
      image:
        'https://placehold.co/600x400/0369a1/ffffff?text=Laptop+Stand',
      description:
        'An adjustable laptop stand designed for a more comfortable workspace.'
    }
  ];

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('shoppingCart');

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    const updatedCart = [...cart, product];

    setCart(updatedCart);

    localStorage.setItem(
      'shoppingCart',
      JSON.stringify(updatedCart)
    );
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(
      (item) => item.id !== productId
    );

    setCart(updatedCart);

    localStorage.setItem(
      'shoppingCart',
      JSON.stringify(updatedCart)
    );
  };

  return (
    <BrowserRouter>
      <div className="app">
        <Header
          storeName="ComponentCorner"
          cartCount={cart.length}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/products"
            element={
              <ProductsPage
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/products/:id"
            element={
              <ProductDetailsPage
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>

        <Footer
          storeName="ComponentCorner"
          email="hello@componentcorner.com"
          phone="(555) 123-4567"
          address="123 Component Ave, Tech City"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
