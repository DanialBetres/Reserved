import React from 'react'

const SearchModal = ({ submit, toggle,resultToggle }) => {
	const submitHandler = (e) => {
		e.preventDefault()
		toggle(e.target.value)
		resultToggle()
	}
	return(
		<div className='searchContainer' >
			<div className='search'>
				<form style={{height: '100%'}} onSubmit={submitHandler}>
					<input className='searchInput' placeholder= {'Search for item or store'} />
				</form>
			</div>
		</div>
	)
}

export default SearchModal
