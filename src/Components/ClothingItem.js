import React from "react";
import Add from '../Images/Add'
const ClothingItem = ({itemImage,name,price, storeName, action}) => {

  return(
    <div 
        onClick={action}
        style={{  
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
    <Add styling={'AddButton'}/>
  </div>
  )
}

export default ClothingItem;