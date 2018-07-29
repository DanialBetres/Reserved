import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'

class Title extends Component{
    constructor(props){
        super(props)
        this.state = {
            mount: false
        }
    }
    componentDidMount(){
        this.setState({ mount: true })
    }
    render(){
        if(this.state.mount) {
            return(
                <TransitionMotion
                    styles={
                        this.state.mount ? [{
                            key: 'someId',

                            style: {
                                transform: spring(0),
                                opacity: spring(1)
                            }
                        }] : []
                    }
                    willEnter={this.willEnter}
                    willLeave={this.willLeave}
                >
                    {(items) => {
                        const {key, data, style} = items[0];
                        const {AnotherComponent, props} = data;

                        return (
                            <div style={{
                                transform: `translate(${style.transform}%)`,
                                opacity: style.opacity
                            }}>
                                AHHHHHH
                            </div>
                        );
                    }}
                </TransitionMotion>
            
            )
        }
        return null
    }
}

export default Title

