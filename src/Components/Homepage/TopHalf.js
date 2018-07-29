import React, { Component } from 'react'
import Title from './Title'
import CircleSvg from './CircleSvg'
<<<<<<< HEAD
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import SubText from './Subtext'
import Slider from "react-slick";

=======
>>>>>>> 875b800c8e09f639288bcc1cf1f589aa2f7c1baa
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
	          	<div>
	                <Title/>
	                <CircleSvg />
	        		<SubText />
	        	</div>
	        </Slider>

	      </div>

        )
    }
}

export default TopHalf