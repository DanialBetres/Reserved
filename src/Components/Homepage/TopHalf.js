import React, { Component } from 'react'
import Title from './Title'
import CircleSvg from './CircleSvg'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
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
        return(
    	<div className='topHalf'> 
            <Carousel showThumbs={false}>
	          	<div>
	                {this.state.mounted && <Title/>}
	                <CircleSvg />
	        	</div>
            </Carousel>
	      </div>

        )
    }
}

export default TopHalf