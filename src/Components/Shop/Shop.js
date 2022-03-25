import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "./Cart/Cart";
import "./Shop.css";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("camera.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (addProduct) => {
    const exists = cart.find((product) => addProduct.id === product.id);
    if (!exists) {
      const newCart = [...cart, addProduct];
      setCart(newCart);
    }
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {Products.map((product) => (
          <Product
            product={product}
            key={product.id}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="select-product">
        <h2>Selected Products</h2>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
