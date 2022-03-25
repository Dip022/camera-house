import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className="product">
      <div className="product-info">
        <img src={img} alt="Canera" />
        <h4>{name}</h4>
        <h5>
          price<span>$</span>
          {price}
        </h5>
      </div>
    </div>
  );
};

export default Product;
