import React from 'react'
import "./Intro.css"

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
                    <div className="i-title-item">Machine Learning</div>  
                    <div className="i-title-item">Web Developer</div>  
                    <div className="i-title-item">Competitive Coder</div>  
                    <div className="i-title-item">Web3</div>  
                  </div>
                </div>  
            <p className="i-desc">
            I design and build softwares.
            Interested in Machine Learning and Web2 to Web3 transition.
            Love to explore new technologies.
            If debugging is the process of removing software bugs, then programming must be the process of putting them in.
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