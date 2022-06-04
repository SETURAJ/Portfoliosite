import React from 'react'
import "./About.css"
import setu from "../../img/pic2.webp"
const About = () => {
  return (
    <div className="a">
        <div className="a-left">
           
                <div className="a-card">
                    <img src={setu} alt="Picture of mine" className="a-img">
                    </img>
                </div>
            </div>
        <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          HELLO! I am Seturaj Matroja.
          I'm a Software Developer who builds software. My hobbies are Gaming and Coding.
          Currently I'm pursuing my Bachelors in Computer Engineering.
          I have built a lot of projects using various tech stacks. 


          
        </p>
        <p className="a-desc">
            
        </p>
        </div>
    </div>
  )
}

export default About