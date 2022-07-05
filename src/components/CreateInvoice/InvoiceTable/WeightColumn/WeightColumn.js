import React from "react";

const WeightColumn = ({ packages, waightSum }) => {
  return (
    <div className="table-column">
      <p className="column-text"> Weight</p>
      <div className="table-items">
        {packages.map((pack,index) => (
          <p key={index} className="column-text text">
            {pack.weight}
          </p>
        ))}
      </div>
      <p className="column-text text"> total {waightSum}</p>
    </div>
  );
};
export default WeightColumn;
