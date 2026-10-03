import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img
          className="product-image"
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-card-content">
        <span className="product-badge">Featured</span>
        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="product-card-footer">
          <span className="product-price">
            ${product.price.toFixed(2)}
          </span>

          <button
            type="button"
            className="product-button"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
