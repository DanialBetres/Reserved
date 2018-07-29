import React, { Component } from 'react'
import { TransitionMotion, spring } from 'react-motion'

class Title extends Component{
    render(){
        return(
            <TransitionMotion
                styles={
                    true ? [{
                        key: 'someId',
                        data: {/*custom data (not related to animation) that you need for renderging. it can be component classes*/},
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
}

export default Title

