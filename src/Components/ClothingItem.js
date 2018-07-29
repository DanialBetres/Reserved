import React, {Component} from "react";
import Add from '../Images/Add'
class ClothingItem extends Component {
      constructor(props){
        super(props)
        this.state = {
          animateInto: null
        }
      }
      componentDidMount(){
          this.setState({ animateInto: 'animateInto' })
      }
    render(){
      const {itemImage,name,price, storeName, action} = this.props
          return(
        <div 
            className={`storeButton ${this.state.animateInto}`}
            onClick={action}
            style={{  
          display:"flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          margin: "11px",
          marginTop: storeName ? "15px" : "0px"}} >
        {storeName && <p className="storeName">{storeName}</p> }
        <div className="clothingImage" style={{ backgroundImage: `url(${itemImage})` }}>
        </div>
        <p className="clothingName">{name}</p>
        <p className="clothingPrice">{price}</p>
        <Add styling={'AddButton'}/>
      </div>
    )
    }

}

export default ClothingItem;