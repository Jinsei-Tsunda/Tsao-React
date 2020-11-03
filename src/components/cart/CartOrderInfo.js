import React from 'react'

function CartOrderInfo(props) {
  return (
    <>
      <div className="col-4">
        <div className="cart cart-info">
          <table>
            <thead>
              <tr>
                <th>
                  <h3 className="table-title">訂單資訊</h3>
                </th>
              </tr>
            </thead>
          </table>
          <div className="inner">
            <div className="d-flex justify-content-between">
              <p>小計：</p>
              <p>1000</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>運費：</p>
              <p>0</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>優惠：</p>
              <p></p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p>總計：</p>
              <p>1000</p>
            </div>
            <div className="d-flex justify-content-center">
              <input
                className="btn checkout"
                type="button"
                name="checkout"
                id="checkout"
                value="前往結帳"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartOrderInfo
