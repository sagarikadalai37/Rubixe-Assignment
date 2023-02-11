import React from "react";
import '../Details/Details.css';
import image1 from "../Assets/image1.jpeg";

function Details() {
    return (
        <div className="About">
        
            <div className="About-right">
              <h2 className="About-heading">WHO WE ARE</h2>
              <p>Rubixe™ is a global technology company specializing in disruptive technologies - Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain, and Internet of Things (IoT).</p>
              <p>Rubixe™ mission is to enable businesses to leverage the full potential of disruptive technologies and stay competitive in the market, turning complex challenges into solutions, providing a strategic competitive advantage that are more efficient, effective and predictable.</p>
            </div>
            <div className="About-left">
              <p className="About-line"></p>
              <img src={image1} className="left-img"></img>
              <p className="About-container"></p>
            </div>
      
         </div>
      
    );
}
  
export default Details;