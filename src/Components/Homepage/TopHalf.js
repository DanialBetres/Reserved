import React, { Component } from 'react'
import Title from './Title'
import CircleSvg from './CircleSvg'
import SubText from './Subtext'
import Slider from "react-slick";
import Card from '../Card/Card'

class TopHalf extends Component{
	constructor(props){
		super(props)
		this.state ={
			mounted: false
		}
	}
	componentDidMount(){
		this.setState({ mounted: true })
	}
    render(){
	    var settings = {
	      dots: true,
	      infinite: true,
	      speed: 500,
	      slidesToShow: 1,
	      slidesToScroll: 1,
	      arrows: false
	    };
        return(
    
    		<Slider {...settings}>
		          	<div className='topHalf sliderHome'>
		                <Title/>
		                <CircleSvg />
		        		<SubText />
		        	</div>
		        	<div>
		        		<Card/>
		        	</div>
	        </Slider>

        )
    }
}

export default TopHalf