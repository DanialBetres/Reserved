import React, { Component } from 'react'
import Title from './Title'
import CircleSvg from './CircleSvg'
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
	          	<div>
	                {this.state.mounted && <Title/>}
	                <CircleSvg />
	        	</div>
	      </div>

        )
    }
}

export default TopHalf