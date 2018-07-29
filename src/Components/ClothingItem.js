import React from "react";

const ClothingItem = ({itemImage,name,price, storeName}) => {

  return(
  <div className="clothingItemContainer">
    {storeName && <p className="storeName">{storeName}</p> }
    <div className="clothingImage" style={{ backgroundImage: `url(${itemImage})` }}
>
    </div>
    <p className="clothingName">{name}</p>
    <p className="clothingPrice">{price}</p>
  </div>
  )
}

export default ClothingItem;