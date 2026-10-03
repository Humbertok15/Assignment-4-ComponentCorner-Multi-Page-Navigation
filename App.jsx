import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductCard from './components/ProductCard.jsx';
import CartItem from './components/CartItem.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const products = [
    {
      id: 1,
      name: 'Aurora Wireless Headphones',
      price: 89.99,
      image: 'https://placehold.co/600x400/111827/ffffff?text=Wireless+Headphones',
      description:
        'Comfortable wireless headphones with rich sound and all-day battery life.'
    },
    {
      id: 2,
      name: 'Pulse Smartwatch',
      price: 129.99,
      image: 'https://placehold.co/600x400/312e81/ffffff?text=Smartwatch',
      description:
        'A modern smartwatch for fitness tracking, notifications, and everyday style.'
    },
    {
      id: 3,
      name: 'Nova Mechanical Keyboard',
      price: 74.99,
      image: 'https://placehold.co/600x400/0f766e/ffffff?text=Mechanical+Keyboard',
      description:
        'A responsive mechanical keyboard designed for productivity and gaming.'
    },
    {
      id: 4,
      name: 'Echo Bluetooth Speaker',
      price: 59.99,
      image: 'https://placehold.co/600x400/7c3aed/ffffff?text=Bluetooth+Speaker',
      description:
        'Portable Bluetooth speaker with powerful sound and a compact design.'
    },
    {
      id: 5,
      name: 'Vision 4K Webcam',
      price: 99.99,
      image: 'https://placehold.co/600x400/be123c/ffffff?text=4K+Webcam',
      description:
        'A high-quality webcam for video calls, streaming, and online meetings.'
    },
    {
      id: 6,
      name: 'Flex Laptop Stand',
      price: 44.99,
      image: 'https://placehold.co/600x400/0369a1/ffffff?text=Laptop+Stand',
      description:
        'An adjustable laptop stand designed for a more comfortable workspace.'
    }
  ];

  // Step 3: Shopping cart state
  const [cart, setCart] = useState([]);

  // Step 4: Add product to cart
  const addToCart = (product) => {
    console.log('Added to cart:', product);
    setCart([...cart, product]);
  };

  // Step 11: Remove product from cart using filter
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Step 12: Calculate cart total using reduce
  const cartTotal = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="app">
      <Header
        storeName="ComponentCorner"
        cartCount={cart.length}
      />

      <main>
        <Hero
          title="Tech that fits your world."
          subtitle="Discover carefully selected gadgets designed for work, play, and everything in between."
          ctaText="Shop Featured Products"
        />

        <section className="products-section" id="products">
          <div className="section-heading">
            <p className="eyebrow">Featured collection</p>
            <h2>Popular Tech Picks</h2>
            <p>
              Explore our latest favorites, all presented with reusable React
              components.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        {/* Steps 10 and 13: Shopping cart section */}
        <section className="cart-section" id="cart">
          <div className="section-heading">
            <p className="eyebrow">Your shopping cart</p>
            <h2>Shopping Cart</h2>
          </div>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            <div className="cart-content">
              <div className="cart-items">
                {cart.map((item, index) => (
                  <CartItem
                    key={`${item.id}-${index}`}
                    item={item}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>

              <div className="cart-total">
                <h3>Cart Total</h3>
                <p>${cartTotal.toFixed(2)}</p>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer
        storeName="ComponentCorner"
        email="hello@componentcorner.com"
        phone="(555) 123-4567"
        address="123 Component Ave, Tech City"
      />
    </div>
  );
}
export default App;
