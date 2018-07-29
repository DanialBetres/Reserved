import React, {Component } from 'react'
import loginPage from "../../src/Images/loginPage.jpg";
import MainTitle from "./MainTitle";
import StoreItem from "./StoreItem";
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
						<StoreItem storeName={"Nike"} address={"2nd Floor, Unit 23"} priceScale={[true,true,false]} />
	          <button onClick={this.props.toggle} className="browse-yorkdale">Browse Yorkdale ></button>
	          
	        </div>
	      </div>
		)
	}
}

export default Landing