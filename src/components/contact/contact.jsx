import React from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
const Contact = () => {
  return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            
                <h1 className="c-title">Contact Me</h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <img src={Phone} alt="" className="c-icon" />
                    +91 9081489780
                    </div>
                    <div className="c-info-item">
                    <img src={Email} alt="" className="c-icon" />
                   seturajmatroja@gmail.com
                    </div>
                </div>


        </div>
    </div>
  )
}

export default Contact;