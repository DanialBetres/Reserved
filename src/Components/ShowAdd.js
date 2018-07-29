import React from 'react'
import shorts1 from "../Images/shorts1.jpeg"
const ShowAdd = ({ action }) =>{
	return(

		<div className = 'addingModal'>
			<h2 style={{fontFamily:"Montserrat", color:"#222"}}>
					Hold this item
			</h2>
				 <div className="clothingImage" style={{ backgroundImage: `url(${shorts1})` }}>
				 </div>

			<p style={{fontFamily:"Montserrat", color:"#222", fontWeight:"300"}}> Please select your waist size</p>
			<select>
    <option value="">30</option>
    <option value="dog">32</option>
    <option value="cat">34</option>
    <option value="hamster">36</option>
    <option value="parrot">38</option>
    <option value="spider">40</option>
    <option value="goldfish">42</option>
		</select>

		<p style={{marginTop:"40px",  fontFamily:"Montserrat", color:"#222", fontWeight:"300"}}> How long would you like to hold for?</p>
			<select style={{marginBottom:"50px", fontFamily:"Montserrat", color:"#222"}}>
    <option value="">1 hour</option>
    <option value="dog">2 hours</option>
    <option value="cat">4 hours</option>
    <option value="hamster">24 hours</option>
    <option value="parrot">48 hours</option>
		</select>

		<div style={{padding:"15px 20px", fontFamily:"Montserrat", color:"#4621AD"}} onClick={action}> Hold this item!</div>
		</div>
	)
}

export default ShowAdd