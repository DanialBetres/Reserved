import React, { Component } from 'react'
import Title from './Title'


class TopHalf extends Component{
	constructor(props){
		super(props)
		this.state ={
			mounted: false
		}
	}
	componentDidMount(){
		console.log('ran')
		this.setState({ mounted: true })
	}
    render(){
        return(
            <div>
                {this.state.mounted && <Title/>}
            </div>
        )
    }
}

export default TopHalf