import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";


import HomePage from "./Components/Homepage/Homepage";
import Landing from './Components/Landing'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHomePage: false
    };
  }

  toggleShowHomePage = () => {
    this.setState({ showHomePage: !this.state.toggleShowHomePage })
  }

  render() {
    return (
      <div>
        {!this.state.showHomePage && <Landing toggle={this.toggleShowHomePage}/>}
        {this.state.showHomePage && <HomePage />}
      </div>
      
    );
  }
}

export default App;
