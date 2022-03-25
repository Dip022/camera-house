import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    fetch("camera.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {Products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
      <div className="select-product">
        <h1>Select Product</h1>
      </div>
    </div>
  );
};

export default Shop;
