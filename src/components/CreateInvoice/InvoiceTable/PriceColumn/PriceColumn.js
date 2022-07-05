import React, { useEffect } from "react";
import "./price-column.css";

const PriceColumn = ({ packages, priceSum }) => {
  useEffect(() => {}, [packages]);

  return (
    <div className="price-column table-column">
      <p className="price-column-text"> Price</p>
      <div className="table-items">
        {packages.map((pack,index) => (
          <p key={index} className="price-column-text text">
            {pack.price}
          </p>
        ))}
      </div>
      <h3 className="price-column-text total">Total: {priceSum}</h3>
    </div>
  );
};

export default PriceColumn;
