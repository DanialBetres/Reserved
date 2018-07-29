import React, {Component} from 'react'
import Header from '.././Header'
import TopHalf from './TopHalf'
import StoreItem from './StoreItem'
import StorePage from '../StorePage/StorePage'
import DropDown from '../../Images/DownArrow'
class HomePage extends Component{
	constructor(props){
		super(props)
		this.state = {
			data: [{
				storeName: 'H&M',
				address: '2nd Floor Unit 23',
				priceScale: [true, false, false]
			},
			{
				storeName: 'Zara',
				address: '2nd Floor Unit 13',
				priceScale: [true, false, false]
			},
			{
				storeName: 'Aldo',
				address: '1st Floor Unit 23',
				priceScale: [true, true, false]
			},
			{
				storeName: 'Apple Store',
				address: '2nd Floor Unit 02',
				priceScale: [true, true, false]
			},
			{
				storeName: 'H&M',
				address: '2nd Floor Unit 23',
				priceScale: [true, false, false]
			},
			{
				storeName: 'H&M',
				address: '2nd Floor Unit 23',
				priceScale: [true, false, false]
			}],
			showStore: false
		}
	}

	nextPage = () => {
		this.setState({showStore : !this.state.showStore })
	}
    render(){
    	if(!this.state.showStore){
	        return (
	            <div>
	                <Header />
	                <TopHalf />
                	<h2 className='featured' style={{marginTop: '20px', marginBottom: '5px'}}>
						<span style ={{
							fontSize: '16px',
    						fontWeight: 300,
    						marginRight: '5px'
						}}> Showing:</span> <span 
						style ={{
							color: '#4621AD'
						}}>
						Stores</span>
						<DropDown styling={'downStore'}/>
					</h2>
	                {this.state.data.map((store) => <StoreItem key={store.storeName} nextPage={this.nextPage} {...store} />)}
	            </div>
	        )   		
    	}
    	else{
    		return (
    			<StorePage toggle={this.nextPage}/>
    		)
    	}

    }
}

export default HomePage