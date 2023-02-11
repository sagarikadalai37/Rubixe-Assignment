import React from "react";
import "../Main/Main.css";
import main from "../Assets/main.jpeg";


function Main() {
    
    return(
        <div className="main" id="main">
          <img src= {main} alt="image" id="image" />
        </div>
    )
};

export default Main;