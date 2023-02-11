import React from "react";
import "../Services/Services.css";
import pic1 from "../Assets/pic1.png"
import pic2 from "../Assets/pic2.png"
import pic3 from "../Assets/pic3.png"
import pic4 from "../Assets/pic4.png"
import pic5 from "../Assets/pic5.png"


function Services(){
  return (
    
    <div className="services-container" id="services">
              <h2 className="card-heading">TECH FOR TEENS - A RUBIXIE <span>&#174;</span>INITIATIVE  </h2>
              <div className="cards">
                  <div className="card-container">
                    <div className="card-top">
                      <div className="card-num">
                        <div className="card-specification" style={{ color: "rgb(51, 0, 102)" }}>01</div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <img className="card-img" src={pic1} alt="" />
                      <p className="card-info">
                        Introducing AI to children in an age appropriate  manner.
                      
                      </p>
                    </div>
                  </div>
                  <div className="card-container">
                    <div className="card-top"id="card-header" style={{ background: "rgb(187, 8, 121)" }}>
                      
                      
                      <div className="card-num">
                        <div className="card-specification" style={{transform: 'rotate(-180deg)' , color: "rgb(187, 8, 121)" }}>02</div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <img className="card-img" src={pic2} alt="" style={{transform: 'rotate(-180deg)'}} />
                      <p className="card-info" style={{transform: 'rotate(-180deg)'}}>
                        Gain awereness on AI and build an interactive story around it
                        
                      </p>
                    </div>
                  </div>
                  <div className="card-container">
                    <div className="card-top" style={{ background: "rgb(252, 94, 3)" }}>
                      <div className="card-num">
                        <div className="card-specification" style={{ color: "rgb(252, 94, 3)" }}>03</div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <img className="card-img" src={pic3} alt="" />
                      <p className="card-info">
                        Acquire programming skills in a user-friendly format
                        
                      </p>
                    </div>
                  </div>
                  <div className="card-container">
                    <div className="card-top" style={{ background: "rgb(13, 54, 10)" }}>
                      <div className="card-num">
                        <div className="card-specification" style={{transform: 'rotate(-180deg)', color: "rgb(13, 54, 10)"}}>04</div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <img className="card-img" src={pic4} alt=""  style={{transform: 'rotate(-180deg)'}}/>
                      <p className="card-info" style={{transform: 'rotate(-180deg)'}}>
                        Exposure to mini projects on diverse topics
                        
                      </p>
                    </div>
                  </div>
                  <div className="card-container">
                    <div className="card-top" style={{ background: "rgb(201, 171, 52)" }}>
                      <div className="card-num">
                        <div className="card-specification" style={{ color: "rgb(201, 171, 52)" }}>05</div>
                      </div>
                    </div>
                    <div className="card-bottom">
                      <img className="card-img" src={pic5} alt="" />
                      <p className="card-info">
                        Train the teachers programme
                        
                      </p>
                    </div>
                  </div>
                </div>
  </div>
);
}

  
  export default Services;