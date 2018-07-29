import React, { Component} from 'react'
import Header from '.././Header'
import HM from '../../Images/hm.jpg'
import DownArrow from '../../Images/DownArrow'
import Slider from "react-slick"
import AdOne from '../../Images/AdOne.jpg'
import AdTwo from '../../Images/AdTwo.png'
import AdThree from '../../Images/AdThree.jpg'
import Phone from './Phone'
import Email from '../../Images/Email'
import ClothingItemsView from "../ClothingItemsView";

class StorePage extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: ['Shirts', 'Pants', 'Shorts', 'Outerwear', 'Accessories', 'Jeans', 'Sweaters', 'Cardigans', 'Coats', 'Socks', 'Hats', 'Swimwear'],
			showItems: false
		
		}
	}

	toggle = () => {
		this.setState({ showItems : !this.state.showItems})
	}
	render(){
		if(!this.state.showItems){
			return(
				<div>
					<Header action={this.props.toggle}/>
					<div style={{position: 'relative'}}>
						<img className='storeLogo' src={HM}/>
						<Phone styling={'phone'}/>``
						<Email styling ={'email'} />
					</div>
						<h2 className='featured'>
							Featured
						</h2>
						<div>
							<Slider>
								<div 
									className='sliderImage'
								>
									<img src={AdOne} className='adImage'/>
								</div>
								<div
									className='sliderImage'
								>
									<img src={AdTwo} className='adImage'/>
								</div>
								<div
									className='sliderImage'
								>
									<img src={AdThree} className='adImage'/>
								</div>
							
							</Slider>
						</div>
						<h2 className='featured' style={{marginTop: '25px'}}>
							Women
						</h2>
						<div className='categoryContainer'>
							{this.state.data.map((category) => 
								<div className='productContainer'>
									<p className='category' key={category}>
										{category}
									</p>
									<DownArrow styling='navigationRightArrow'/>
								</div>
								)
							}
						</div>
						<h2 className='featured' style={{marginTop: '25px'}}>
							Men
						</h2>
						<div className='categoryContainer' onClick={this.toggle}>
							{this.state.data.map((category) => 
								<div className='productContainer'>
									<p className='category' key={category}>
										{category}
									</p>
									<DownArrow styling='navigationRightArrow'/>
								</div>
								)
							}
						</div>
					</div>
				
				)			
		}
		else{
			return (
				<ClothingItemsView back={this.toggle}/>
			)
		}
	}
}

export default StorePage