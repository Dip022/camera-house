import React, { useState } from "react";
import "./Cart.css";
import SelectedProduct from "../SelectedProduct/SelectedProduct";
import ShowChoose from "../ShowChoose/ShowChoose";

const Cart = ({ cart, resetProduct }) => {
  const [chooseProduct, setChooseProduct] = useState([]);
  const addChoose = () => {
    const index = Math.round(Math.random() * (cart.length - 1));
    const product = cart[index];
    setChooseProduct(product);
  };

  return (
    <div className="cart-container">
      <h2>Selected Products</h2>
      {cart.map((product) => (
        <SelectedProduct product={product} key={product.id}></SelectedProduct>
      ))}
      <ShowChoose chooseProduct={chooseProduct}></ShowChoose>
      <button className="choose" onClick={addChoose}>
        CHOOSE 1 FOR ME
      </button>
      <br />
      <button className="reset" onClick={resetProduct}>
        CHOOSE AGAIN
      </button>
    </div>
  );
};

export default Cart;
