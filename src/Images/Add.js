import React from 'react'


const Add = ({ styling }) => {
	return(
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center'
		}}>
			<svg className={styling ? styling : null} width="24" height="24" viewBox="0 0 24 24">
			    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
			    <path d="M0 0h24v24H0z" fill="none"/>
			</svg>
			Add
		</div>
	)
}

export default Add