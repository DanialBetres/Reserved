import React, { Component } from "react";
import loginPage from "../../src/Images/loginPage.jpg";
import MainTitle from "./MainTitle";
import StoreItem from "./StoreItem";
import DownArrow from "../Images/DownArrow";
import ClothingItemsView from "./ClothingItemsView";
class Landing extends Component {
  render() {
    return (
      <div
        className="Login-page"
        style={{ backgroundImage: `url(${loginPage})` }}
      >
        <div className="Login-page-colour login-page-container">
          <div className="login-page-title">
            <MainTitle title={"Reserved"} subTitle={"skip the line"} />
          </div>
          <button onClick={this.props.toggle} className="browse-yorkdale">
            Browse Yorkdale
            <DownArrow styling={"navigationRightArrow-loginPage"} />
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
