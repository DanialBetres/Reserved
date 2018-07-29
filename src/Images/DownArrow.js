import React from 'react'

const DownArrow = ({ styling, action }) => {	
	return(
		<svg x="0px" y="0px"
			onClick={action ? action : null}
			className={ styling ? styling : null}
			 width="24px" height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
			}
			<path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"/>
			<path fill="none" d="M0,0h24v24H0V0z"/>
		</svg>
	)

}

export default DownArrow