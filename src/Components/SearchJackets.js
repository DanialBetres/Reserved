import React, { Component } from "react";
import blackJacket from "../Images/blackJacket.jpeg";
import blackJacket2 from "../Images/blackJacket2.jpeg";
import checkJacket from "../Images/blackJacket.jpeg";
import coolJacket from "../Images/coolJacket.jpeg";
import jeanJacket2 from "../Images/jeanJacket2.jpeg";
import leatherJacket from "../Images/leatherJacket.jpeg";
import ClothingItemsComponent from "./ClothingItemsComponent";

const SearchJackets = ({ searchTitle, back }) => {
  const JacketsData = [
    {
      itemImage: blackJacket,
      name: "Grey Fleece Jacket",
      price: "$74.99",
      storeName: "Gap"
    },
    {
      itemImage: checkJacket,
      name: "Checkered Coat",
      price: "$59.99",
      storeName: "Zara"
    },
    {
      itemImage: coolJacket,
      name: "Quilted Baseball Jacket",
      price: "$69.99",
      storeName: "H & M"
    },
    {
      itemImage: jeanJacket2,
      name: "Peach Jean Jacket",
      price: "$59.99",
      storeName: "Jack and Jones"
    },
    {
      itemImage: blackJacket2,
      name: "WindProof Jacket",
      price: "$45.99",
      storeName: "Jack and Jones"
    },
    {
      itemImage: leatherJacket,
      name: "Leather Biker Jacket",
      price: "$99.99",
      storeName:"Zara"
    }
  ];
  return (
    <ClothingItemsComponent
      data={JacketsData}
      searchTitle={"Jackets"}
      back={back}
    />
  );
};

export default SearchJackets;
