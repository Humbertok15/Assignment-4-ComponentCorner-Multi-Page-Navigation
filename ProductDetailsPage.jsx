import { useParams } from 'react-router-dom';

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main>
        <section className="section-heading">
          <h2>Product Not Found</h2>
          <p>The product you are looking for does not exist.</p>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="product-details">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-content">
          <p className="eyebrow">Product Details</p>

          <h1>{product.name}</h1>

          <p>{product.description}</p>

          <h2>${product.price.toFixed(2)}</h2>

          <button
            type="button"
            className="product-button"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailsPage;
