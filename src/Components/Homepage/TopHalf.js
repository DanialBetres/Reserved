import React, { Component } from 'react'
import Title from './Title'
import CircleSvg from './CircleSvg'
import SubText from './Subtext'
import Slider from "react-slick";

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
	      slidesToScroll: 1
	    };
        return(
    	<div className='topHalf'> 
    		<Slider {...settings}>
	          	<div className='sliderHome'>
	                <Title/>
	                <CircleSvg />
	        		<SubText />
	        	</div>
	        	<div>
	        	test
	        	</div>
	        </Slider>

	      </div>

        )
    }
}

export default TopHalf