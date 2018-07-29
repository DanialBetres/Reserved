import React, { Component } from 'react'
import barcode from '../../Images/barcode.png'
class Card extends Component{
	render(){
		return(
			<div className='cardContainer'>
				<div className='card'>
					<div className='topCardPart'>	
					<svg style={{width: '30px', height:'30px', fill: 'white'}} width="24" height="24" viewBox="0 0 24 24">
					    <path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
					    <path fill="none" d="M0 0h24v24H0V0z"/>
					    <path d="M3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"/>
					</svg>
						<div style={{display: 'flex', flexDirection: 'column'}}>
							<p className='cardTitle'>Reserved Card</p>
							<p className='cardSub'> Elite Status </p>
						</div>
					</div>
					<div className='bottomCardPart'>
						<div className='barcodeContainer'>
							<img className='barcode' src={barcode}/>
						</div>
						<div className='nameCard'>
							Dan Kim
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Card