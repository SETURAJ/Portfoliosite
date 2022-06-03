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
          HELLO! I am Seturaj Matroja currently working as an intern.
        </p>
        <p className="a-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende
        </p>
        </div>
    </div>
  )
}

export default About