import React, { useState } from 'react'
import './cart.css'

function Cart(props) {

  const [count,setcount] = useState(0);
  
  const increment = () => {
    setcount(count+1);
  }

  const decrement = () => {
    if (count>0) {
    setcount(count-1);
    }
  }

  return (
    
<>
  <link
    href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div className="container">
    <table id="cart" className="table table-hover table-condensed">
      <thead>
        <tr>
          <th style={{ width: "50%" }}>Product</th>
          <th style={{ width: "10%" }}>Price</th>
          <th style={{ width: "8%" }}>Quantity</th>
          <th style={{ width: "22%" }} className="text-center">
            Subtotal
          </th>
          <th style={{ width: "10%" }} />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs">
                <img
                  src={props.image}
                />
              </div>
              <div className="col-sm-10">
                <h4 className="nomargin">{props.name}</h4>
                <p>
                {props.descreption}
                  </p>
              </div>
            </div>
          </td>
          <td data-th="Price" className="price">{props.price}</td>

          <td data-th="Quantity">
        
          <button className="Add" onClick={increment}>+</button>
         <p className="Number">{count}</p>
          <button className="Sub" onClick={decrement}>-</button>
          

          </td>

          <td data-th="Subtotal" className="text-center">
          {props.subtotal}
          </td>

          <td className="actions" data-th="">
            <button className="btn btn-info btn-sm">
              <i className="fa fa-refresh" />
            </button>
            <button className="btn btn-danger btn-sm">
              <i className="fa fa-trash-o" />
            </button>
          
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </>

  )
}

export default Cart
