import React, {Component} from 'react'
import DownArrow from '../Images/DownArrow'
import Search from '../Images/Search'


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
                <Search styling={'searchIcon'}/>
            </div>
        )
    }
}

export default Header