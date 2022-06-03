import React from 'react'
import "./productList.css"
import Product from "../product/product"
import {products} from "../../../src/data"

const ProductList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
          <h1 className="pl-title">Projects and Works</h1>
          <p  className="pl-desc">
          Projects I've Worked On 
          </p> 
        </div>
        <div className="pl-list">
            {products.map((item)=>(
              <Product key={item.id} img={item.img} link={item.link} title={item.title}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList;