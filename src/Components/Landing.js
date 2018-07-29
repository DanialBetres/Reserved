import React, {Component } from 'react'
import loginPage from "../../src/Images/loginPage.jpg";
import MainTitle from "./MainTitle";

class Landing extends Component{
	render(){
		return(
		<div
	        className="Login-page"
	        style={{ backgroundImage: `url(${loginPage})` }}
	      >
	        <div className="Login-page-colour login-page-container">
	        
	        <div className = "login-page-title">
	          <MainTitle title={"Reserved"} subTitle={"skip the line"} />
	        </div>

	          <button onClick={this.props.toggle} className="browse-yorkdale">Browse Yorkdale ></button>
	          
	        </div>
	      </div>
		)
	}
}

export default Landing