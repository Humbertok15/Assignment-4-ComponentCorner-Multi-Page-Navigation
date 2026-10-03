import CartItem from '../components/CartItem.jsx';

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <main>
      <section className="cart-section">
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
  );
}

export default CartPage;
