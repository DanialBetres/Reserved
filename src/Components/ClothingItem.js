import React from "react";

const ClothingItem = ({itemImage,name,price}) => {
  return(
  <div className="clothingItemContainer">
    <div className="clothingImage" style={{ backgroundImage: `url(${itemImage})` }}
>
    </div>
    <p className="clothingName">{name}</p>
    <p className="clothingPrice">{price}</p>
  </div>
  )
}

export default ClothingItem;