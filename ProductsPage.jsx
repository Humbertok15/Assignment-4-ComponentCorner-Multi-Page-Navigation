import ProductCard from '../components/ProductCard.jsx';

function ProductsPage({ products, addToCart }) {
  return (
    <main>
      <section className="products-section">
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
    </main>
  );
}

export default ProductsPage;
