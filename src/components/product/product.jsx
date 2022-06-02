import React from 'react'
import "./product.css"
import setu from "../../img/pic2.jpg"
const Product = ({img,link,title}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>

        </div>
        <div className="p-title">
          {title}
        </div>
        <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img"></img>
        </a>
        
      </div>
  );
};

export default Product;