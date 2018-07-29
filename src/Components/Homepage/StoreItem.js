import React, { Component } from "react";
import DownArrow from "../../Images/DownArrow";

class StoreItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      mounted: null
    }
  }

  componentDidMount(){
    this.setState({ mounted: 'animateInto'})
  }
  render(){
    const { storeName, address, priceScale, nextPage } = this.props
    return (
        <button className={`storeButton ${this.state.mounted}`} style={{display:"flex", alignItems:"flex-start"}} onClick={nextPage}>
          <div className="store-item-container">
            <div className="store-item-details">
              <h3 className="store-item-name">{storeName}</h3>
              <p className="store-item-address">{address}</p>
              <p className="store-item-price-scale">
                {priceScale.map(element => 
                  <p style={{color: element ? "#4621AD" : "#C4C4C4"}}> $ </p>
                )}
              </p>
            </div>
            <div className="store-item-chevron">
              <DownArrow styling={'navigationRightArrow'}/>
            </div>
          </div>
        </button>
    );
  }
};

export default StoreItem;