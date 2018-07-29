
import React, { Component } from 'react';
import loginPage from "../../src/Images/loginPage.jpg";

const MainTitle = ({title, subTitle}) => {
    console.log(title)
     return (
      <div className="MainTitleContainer"> 
        <h1 className="MainTitle">{title}</h1>
        <h3 className="SubTitle"> {subTitle} </h3>
      </div>
    )
  
  
}

export default MainTitle;