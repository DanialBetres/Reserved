import React, { Component } from "react";

const StoreItem = ({ storeName, address, priceScale }) => {
  return (
    <div>
      <button onClick={() => console.log("goToStorePage")}>
        <div>
          <div className="store-item-details">
            <h3 className="store-item-name">{storeName}</h3>
            <p className="store-item-address">{address}</p>
            <p className="price-item-scale">
              {priceScale.array.forEach(element => {
                <p>{element} </p>;
              })}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};
