import './Header.css';

function Header({ storeName, cartCount }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${storeName} home`}>
        <span className="brand-mark">C</span>
        <span>{storeName}</span>
      </a>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#top">Home</a>
        <a href="#products">Products</a>
        <a href="#cart">Cart</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="cart-container" aria-label={`Shopping cart with ${cartCount} items`}>
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
