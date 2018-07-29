import React from "react";
import Add from '../Images/Add'
const ClothingItem = ({itemImage,name,price, storeName}) => {

  return(
  <div className="clothingItemContainer">
    {storeName && <p className="storeName">{storeName}</p> }
    <div className="clothingImage" style={{ backgroundImage: `url(${itemImage})` }}
>
    </div>
    <p className="clothingName">{name}</p>
    <p className="clothingPrice">{price}</p>
    <Add />
  </div>
  )
}

export default ClothingItem;