import React from "react";
import ClothingItem from "./ClothingItem";
import Header from "./Header";
import shorts1 from "../Images/shorts1.jpeg";
import shorts2 from "../Images/shorts2.jpeg";
import short3 from "../Images/short3.jpeg";
import shorts4 from "../Images/shorts4.jpeg";
import shorts5 from "../Images/shorts5.jpeg";
import ViewSingle from "../Images/ViewSingle";
import ViewMultiple from "../Images/ViewMultiple";
import hm from "../Images/hm.jpg";
const ClothingItemsView = () => {
  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start"}}>
    <Header />
      <img src={hm} style={{width:"55px", height:"40px", marginTop:"75px", paddingLeft:"40px"}}/>
      <div style={{display:"flex", justifyContent:"space-between", width:"100vw", backgroundColor:"#E8E8E8", border: "1px solid #BABABA", borderLeft:"0px", borderRight:"0px", alignItems:"center", marginTop:"10px"}}>
        <div style={{paddingLeft:"40px", paddingTop:"5px", paddingBottom:"5px", fontSize:"18px"}} className="textFamilyLight"> Showing:</div>
        <div style={{paddingRight:"40px", paddingTop:"5px", paddingBottom:"5px", fontSize:"16px"}} className="textFamilyLight"> 6/20</div>
      </div>

      <div style={{display:"flex", justifyContent:"space-between", alignItems: "center",width:"100vw",paddingTop:"25px", paddingBottom:"25px"}}>
        <div style={{paddingLeft:"40px", paddingTop:"5px", paddingBottom:"5px", color: "#4621AD"}} className="textFamilyRegular"> Filters</div>
        <div style={{paddingRight: "40px"}}>
          <ViewSingle />
          <ViewMultiple />
        </div>
      </div>
      <h3 className="SearchTitle"> Shorts </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        <ClothingItem
          itemImage={shorts1}
          name={"Grey Jogger Shorts"}
          price={"$24.99"}
        />
        <ClothingItem
          itemImage={shorts2}
          name={"Light Grey Casual Shorts"}
          price={"$29.99"}
        />
        <ClothingItem
          itemImage={short3}
          name={"Navy Blue Shorts"}
          price={"$34.99"}
        />
        <ClothingItem
          itemImage={shorts4}
          name={"Light Denim Shorts"}
          price={"$45.99"}
        />
        <ClothingItem
          itemImage={shorts5}
          name={"Dark Denim Shorts"}
          price={"$45.99"}
        />
      </div>
    </div>
  );
};

export default ClothingItemsView;
