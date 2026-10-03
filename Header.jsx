import { Link } from 'react-router-dom';
import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="site-header">
      <Link
        className="brand"
        to="/"
        aria-label={`${storeName} home`}
      >
        <span className="brand-mark">C</span>
        <span>{storeName}</span>
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <a href="#contact">Contact</a>
      </nav>

      <Link
        to="/cart"
        className="cart-container"
        aria-label={`Shopping cart with ${cartCount} items`}
      >
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </Link>
    </header>
  );
}

export default Header;
