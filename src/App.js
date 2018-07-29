import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainTitle from "./Components/MainTitle";
import loginPage from "../src/Images/loginPage.jpg";
import HomePage from "./Components/Homepage/Homepage";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomePage: false
    };
  }

  render() {
    return (
      <div
        className="Login-page"
        style={{ backgroundImage: `url(${loginPage})` }}
      >
        <div className="Login-page-colour login-page-container">
        
        <div className = "login-page-title">
          <MainTitle title={"Reserved"} subTitle={"skip the line"} />
        </div>

          <button onClick={() => this.setState({showHomePage: true})} className="browse-yorkdale">Browse Yorkdale ></button>
          {this.state.showHomePage && <HomePage />}
        </div>
      </div>
    );
  }
}

export default App;
