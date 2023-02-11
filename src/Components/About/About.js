import React from "react";
import "../About/About.css";
// import {FaLinkedinF,FaFacebookF} from "react-icons/Fa"
import facebook from "../Assets/facebook.png";
import linkedin from "../Assets/linkedin.png";

function About(){
    return(
        <div className="about" >
            <div className="about-container">
                <div className="child">
                    <h5>ABOUT US</h5>
          
                        <p>Rubixe™ is a global technology company specializing in disruptive</p>
                        <p>technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process</p>
                        <p>Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe</p>
                        <p>mission to enable businesses to leverage the full potential of disruptive </p> 
                        <p>technologies to stay competitive in the market.</p>
                </div>
                <div className="child">
                        <h5>MENUS</h5>
                        <p>Home</p>
                        <p>Services</p>
                        <p>Products</p>
                        <p>Career</p>

                </div>
                <div className="child1">
                        <h5>LEARN MORE</h5>
                        <p>About</p>
                        <p>Contact Us</p>
                </div>
                <div className="child1" >
                        <h5>ADDRESS</h5>
                        <p>Novel Tech Park, 1st Floor, Hosur Rd,</p>
                        <p> Kudlu gate, Bengaluru, Karnataka 560068</p>
                        <p>Phone: 0804-717-8999</p>
                        <p>Email: hi@rubixe.com</p>
                        <p>SOCIAL MEDIA</p>
                        <img src= {facebook} alt="image"  /> <img src= {linkedin} alt="image"  />
                      
        
                </div>
            </div>
        </div>
    
    );
}
export default About;