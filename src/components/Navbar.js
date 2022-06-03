import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Navbar.css';

 function Navbar(){
 return(
 	<div className = "navbar">
 	<div className = "logo">
 	Metricks
 	</div>
  <nav className="listnav">
  <ul className= "ul">
  <li>
  <Link className="link" to='/'>Home</Link>
  </li>
  <li>
  <Link className="link" to='/about'>About Us</Link>
  </li>
  <li>
  <Link className="link" to='/blog'>BLOG</Link>
  </li>
  <li>
  <Link className="link" to='/contact'>Contact us</Link>
  </li>
  </ul>
  </nav>
 	</div>
 	)
 }




 export default Navbar;
