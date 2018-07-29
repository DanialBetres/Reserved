import React, {Component} from 'react'
import DownArrow from '../Images/DownArrow'
class Header extends Component{
    render(){
        return(
            <div className='headerComp'>
            	<div className='headerCompTitle'>
	                <div className='mallLocation'>
	                	YorkDale
	                </div>
	                <DownArrow styling={'navigationDownArrow'}/>
                </div>
            </div>
        )
    }
}

export default Header