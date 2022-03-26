import React from "react";
import "./ShowChoose.css";

const ShowChoose = ({ chooseProduct }) => {
  const { img, name } = chooseProduct;
  return (
    <div className="choose-product">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default ShowChoose;
