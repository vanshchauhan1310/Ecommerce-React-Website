import React from 'react'
import './Product.css'

const product = (props) => {

  const {image,name,price,mrp} = props;

  return (
<>
<div className="catalogue">
  <div className="products">
    <img src={image} />
    <br />
    <h1 className="Name"><a href="#">{name}</a></h1>
    <span className="price">{price}</span>
    <span className="mrp">{mrp}</span>
   <button className="Cart">Add To Cart</button>
   <button className="Buy">Buy Now</button>

  </div>
  </div>
  </>

  )
}

export default product
