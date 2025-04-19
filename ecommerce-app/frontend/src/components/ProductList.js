import "./ProductList.css";
import React from "react";
import products from "../data/products";
import "./ProductList.css";

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h2>🛍️ Products</h2>
      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
