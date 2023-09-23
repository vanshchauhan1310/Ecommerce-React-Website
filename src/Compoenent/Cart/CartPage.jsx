import React from 'react'

function Cart() {
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
                  src="http://placehold.it/100x100"
                  alt="..."
                  className="img-responsive"
                />
              </div>
              <div className="col-sm-10">
                <h4 className="nomargin">T Shirt</h4>
                <p>
                 Branded Tshirt
                  </p>
              </div>
            </div>
          </td>
          <td data-th="Price">$5.11</td>
          <td data-th="Quantity">
            <input
              type="number"
              className="form-control text-center"
              defaultValue={1}
            />
          </td>
          <td data-th="Subtotal" className="text-center">
            $5.11
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
      <tfoot>
        <tr className="visible-xs">
          <td className="text-center">
            <strong>Total $ 5.11</strong>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#" className="btn btn-warning">
              <i className="fa fa-angle-left" /> Continue Shopping
            </a>
          </td>
          <td colSpan={2} className="hidden-xs" />
          <td className="hidden-xs text-center">
            <strong>Total $ 5.11</strong>
          </td>
          <td>
            <a href="#" className="btn btn-success btn-block">
              Checkout <i className="fa fa-angle-right" />
            </a>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>

  </>

  )
}

export default Cart
