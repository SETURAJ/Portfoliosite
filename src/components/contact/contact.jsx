import React from 'react'
import "./contact.css"
import linkedin from "../../img/linkedin.webp"
import Email from "../../img/email.png"
import github from "../../img/github.webp"
import instagram from "../../img/instagram.webp"
import resume from "../../img/resume.webp"

const Contact = () => {
  return (
    <div className="c">
        <div className="c-wrapper">
            <h1 className="c-title">Contact Me</h1>
                <div className="c-info">
                    <div className="c-info-item">
                    <a href="mailto:seturajmatroja@gmail.com"><img src={Email} alt="" className="c-icon" /> </a>
                    <a href="mailto:seturajmatroja@gmail.com"><h1 className="c-tag">seturajmatroja@gmail.com</h1></a>
                    </div>
                    <div className="c-info-item">
                    <a href="https://www.linkedin.com/in/seturaj-matroja-72153721a/" target="_blank" rel="noopener noreferrer" ><img src={linkedin} alt="" className="c-icon" /></a>
                    <a href="https://www.linkedin.com/in/seturaj-matroja-72153721a/" target="_blank" rel="noopener noreferrer" ><h1 className="c-tag">Linkedin</h1></a>
                    </div>
                    <div className="c-info-item">
                    <a href="https://github.com/SETURAJ" target="_blank" rel="noopener noreferrer" ><img src={github} alt="" className="c-icon" /></a>
                    <a href="https://github.com/SETURAJ" target="_blank" rel="noopener noreferrer" ><h1 className="c-tag">Github</h1></a>
                    </div>
                    <div className="c-info-item">
                    <a href="https://www.instagram.com/seturaj__28/" target="_blank" rel="noopener noreferrer" ><img src={instagram} alt="" className="c-icon" /></a>
                    <a href="https://www.instagram.com/seturaj__28/" target="_blank" rel="noopener noreferrer"><h1 className="c-tag">Instagram</h1></a>
                    </div>
                    <div className="c-info-item">
                    <a href="https://drive.google.com/file/d/185qianJkpTGhlElnh6ciH7nkmu7Mx-l4/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src={resume}  alt="" className="c-icon" /></a>
                    <a href="https://drive.google.com/file/d/185qianJkpTGhlElnh6ciH7nkmu7Mx-l4/view?usp=sharing" target="_blank" rel="noopener noreferrer"><h1 className="c-tag">Resume</h1></a>
                    
                    </div>
                </div>


        </div>
    </div>
  )
}

export default Contact;