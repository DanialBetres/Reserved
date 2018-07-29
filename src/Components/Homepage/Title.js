import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'

class Title extends Component{
    constructor(props){
        super(props)
        this.state = {
            mounted: false
        }
    }
    componentDidMount(){
        this.setState({ mounted: !this.state.mounted })
    }
    render(){
        return(
            <h1 className={`titleHomepage ${this.state.mounted ? '' : ''}`}>
                Welcome Back, Dan!
            </h1>
        )
    }
}

export default Title

