import React, { Component } from "react";
import DownArrow from "../../Images/DownArrow";

const StoreItem = ({ storeName, address, priceScale, nextPage }) => {
  return (
      <button style={{display:"flex", alignItems:"flex-start"}} onClick={nextPage}>
        <div className="store-item-container">
          <div className="store-item-details">
            <h3 className="store-item-name">{storeName}</h3>
            <p className="store-item-address">{address}</p>
            <p className="store-item-price-scale">
              {priceScale.map(element => 
                <p style={{color: element ? "#4621AD" : "#C4C4C4"}}> $ </p>
              )}
            </p>
          </div>
          <div className="store-item-chevron">
          <DownArrow styling={'navigationRightArrow'}/>

          </div>
        </div>
      </button>
  );
};

export default StoreItem;