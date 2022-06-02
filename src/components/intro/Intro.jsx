import React from 'react'
import "./Intro.css"
import setu from "../../img/pic2.jpg"
const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
              <h2 className="i-intro">Hi! I am </h2>
              <h1 className="i-name">Seturaj Matroja,</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                      <div className="i-title-item">Intel Ai for Youth</div>  
                  </div>
                </div>  
            <p className="i-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende
            </p>
            </div>
          </div>
        <div className="i-right">
          <div className="i-bg"></div>
          
        </div>
    </div>
  )
}

export default Intro;
/*
<img src={setu} alt="" className="i-img">

</img>*/