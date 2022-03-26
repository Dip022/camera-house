import React from "react";
import "./SelectedProduct.css";

const SelectedProduct = ({ product }) => {
  const { img, name } = product;
  return (
    <div className="selected-product">
      <img src={img} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default SelectedProduct;
