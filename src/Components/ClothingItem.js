import React from "react";

const ClothingItem = ({itemImage,name,price, storeName}) => {
  return(
    <div style={{  
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      margin: "11px",
      marginTop: storeName ? "15px" : "0px"}} >
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