import React from'react';
import Navbar from './Navbar';
import './styles/About.css'

function About(){
	return(<div>
	<Navbar />
		<div className="text-white about">
	 <p className="abt">About Us</p>
	 <div className="for" ><h1>Built for Saas and E-Commerce</h1></div>
	 <div className="tools">
	 <p>our tools are easy to set up and use with a user
	 friendly dashboarf that enables you to set up,
	 launch, automate and manage multi-affiliate
	 campaigns in 5 minutes.</p>
	 </div>

	 <div className="purpose" >
	 <p className="why"> WHY US?</p>
	 <div>
	 we pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient 
	 touch points between advisers and affiliate
	 </div>
	 </div>
		</div>
		</div>
	)
}

export default About;
