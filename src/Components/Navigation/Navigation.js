import React from "react";
import "../Navigation/Navigation.css"
import logo from"../Assets/logo.png";


function Navigation(){
return (
		<header>
			<img src={logo} alt="logo" id="logo"/>
			<nav >
				<a href="#main">HOME</a>
				<a href="#services">SERVICES</a>
				<a href="#main">PRODUCTS</a>
                <a href="#main">AI INTERNSHIP</a>
                <a href="#main">CAREER</a>
                <a href="#main">BLOG</a>
                <a href="#form">CONTACT US</a>

			</nav>
			
		</header>
	);
}
export default Navigation; 

