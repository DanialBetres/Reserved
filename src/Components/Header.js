import React, {Component} from 'react'
import DownArrow from '../Images/DownArrow'
import Search from '../Images/Search'
import SearchModal from './SearchModal'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            showSearch: false
        }
    }

    toggleSearch = () => {
        this.setState({ showSearch: !this.state.showSearch })
    }
    render(){
    	
        return(
            <div className='headerComp'>
            	<div className='headerCompTitle'>
                    <DownArrow styling={'backArrow'} action={this.props.action}/>
	                <div className='mallLocation'>
	                	YorkDale
	                </div>
	                <DownArrow styling={'navigationDownArrow'}/>
                </div>
                <Search styling={'searchIcon'} action={this.toggleSearch}/>
                { this.state.showSearch && <SearchModal toggle={this.toggleSearch}/>}
            </div>
        )
    }
}

export default Header