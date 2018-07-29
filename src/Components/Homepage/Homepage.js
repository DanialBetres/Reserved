import React, {Component} from 'react'
import Header from '.././Header'
import TopHalf from './TopHalf'
import StoreItem from './StoreItem'
import StorePage from '../StorePage/StorePage'
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
	                {this.state.data.map((store) => <StoreItem key={store.storeName} nextPage={this.nextPage} {...store} />)}
	            </div>
	        )   		
    	}
    	else{
    		return (
    			<StorePage />
    		)
    	}

    }
}

export default HomePage