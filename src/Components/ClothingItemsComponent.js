import React from "react";
import ClothingItem from "./ClothingItem";
import Header from "./Header";
import ViewSingle from "../Images/ViewSingle";
import ViewMultiple from "../Images/ViewMultiple";
const ClothingItemsComponent = ({toggle, searchTitle, storeImage, data}) => {
  return (
    <div style={{display:"flex",flexDirection:"column", alignItems:"flex-start"}}>
    <Header toggle={toggle}/>
  {storeImage && <img src={storeImage} style={{width:"55px", height:"40px", marginTop:"75px", paddingLeft:"40px"}}/> }
      <div style={{display:"flex", justifyContent:"space-between", width:"100vw", backgroundColor:"#E8E8E8", border: "1px solid #BABABA", borderLeft:"0px", borderRight:"0px", alignItems:"center", marginTop:storeImage ? "10px" : "95px"}}>
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
      <h3 className="SearchTitle"> {searchTitle} </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
      {data && data.map((elem) => <ClothingItem
          {...elem}
          />
      )}
      </div>
    </div>
  );
};

export default ClothingItemsComponent;
