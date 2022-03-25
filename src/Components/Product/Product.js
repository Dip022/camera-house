import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  const { img, name, price } = product;
  return (
    <div className="product">
      <div className="product-info">
        <img src={img} alt="Canera" />
        <h4>{name}</h4>
        <h5>
          price: <span>$</span>
          {price}
        </h5>
      </div>
      <button onClick={() => addToCart(product)} className="add-btn">
        <p>Add to cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
