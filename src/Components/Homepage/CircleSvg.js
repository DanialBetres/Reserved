import React from 'react'

const CircleSvg = () => {
	return (
		<div className='circleContainer'>
			<svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width="180" height="180" xmlns="http://www.w3.org/2000/svg">
			  <circle className="circle-chart__background" stroke="transparent" stroke-width="2" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
			  <circle className="circle-chart__circle" stroke="white" stroke-width="2" stroke-dasharray="64,100" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
			</svg>
			<div className='points'>
				<h2 style={{
					margin: 0,
					fontSize: '20px',
					fontWeight: 600
				}}>7600</h2>
				<p style={{
					fontSize: '14px',
					fontWeight: 300,
					marginTop: 0,
				}}>
					points
				</p>
			</div>
		</div>
	)
}

export default CircleSvg