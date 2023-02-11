import React from "react";
import "../Form/Form.css";


function Form(){
    return(
      <div className="contact-form" id="form">
         <div className="contact-container">
            <h2>GET IN TOUCH</h2>
            <p>Please complete the form and we will </p>
            <p>get back to you</p>
        </div>
        <div className="contact-line"></div>
          <div className="form-data">
          
              <form >
                      <h5 className="contact-data">Name*</h5>
                        <div className="form-group"> 
                          <input
                            type="text"
                            placeholder="Enter Your Name"
                            name="name"
                            id="name"
                            required
                          />
                        </div>
                      <h5 className="contact-data">Email*</h5>
                    <div className="form-group">
                          <input
                            type="email"
                            placeholder="Enter Your Name"
                            name="email"
                            id="email"
                            required
                          />
                        </div>
                      <h5 className="contact-data">Mobile Number*</h5>
                    <div className="form-group">
                          <input
                            name="phone-number"
                            id="phone"
                            placeholder="Enter Your Mobile Number"
                            required
                          ></input>
                    </div>
                    <button> Register Now </button>
                </form>
        </div>
      </div>

    )
};

export default Form;