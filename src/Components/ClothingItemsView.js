import React, { Component } from "react";
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
import ClothingItemsComponent from "./ClothingItemsComponent";
import SearchJackets from './SearchJackets'

class ClothingItemsView extends Component {
  constructor(props){
    super(props)
    this.state = {
      showSearch: false
    }
  }

  toggle = () => {
    this.setState ({ showSearch: !this.state.showSearch})
  }

  render(){
    const ShortsData = [
      { itemImage: shorts1 , name: "Grey Jogger Shorts", price: "$24.99" },
      {
        itemImage: shorts2 ,
        name: "Light Grey Casual Shorts",
        price: "$29.99"
      },
      {
        itemImage: short3 ,
        name: "Navy Blue Shorts",
        price: "$34.99"
      },
      {
        itemImage: shorts4,
        name: "Light Denim Shorts",
        price: "$45.99"
      }, 
      {
        itemImage:shorts5,
        name:"Dark Denim Shorts",
        price:"$45.99"
      }
    ];
    if(!this.state.showSearch){
      return (
        <ClothingItemsComponent toggle={this.toggle} data={ShortsData} storeImage={hm} searchTitle={"Shorts"}/>
      );
    }
    else{
      return (
        <SearchJackets />
      )
    }

  }

};

export default ClothingItemsView;
