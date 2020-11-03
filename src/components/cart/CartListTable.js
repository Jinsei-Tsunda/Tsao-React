import React from 'react'

import CartDetail from './CartDetail'
import CartDiscount from './CartDiscount'
import CartDelivery from './CartDelivery'
import CartOrderInfo from './CartOrderInfo'

function CartListTable(props) {
  return (
    <>
      <div className="row col-12 px-0">
        <h3 className="cart-title">購物車</h3>
        <div className="cart cart-item">
          <table>
            <thead>
              <tr>
                <th>商品名稱</th>
                <th>優惠</th>
                <th>單價</th>
                <th>數量</th>
                <th>小計</th>
              </tr>
            </thead>
            <tbody>
              <CartDetail />
              <CartDetail />
              <CartDiscount />
            </tbody>
          </table>
        </div>
      </div>
      <div className="row col-12 px-0">
        <CartDelivery />
        <CartOrderInfo />
      </div>
    </>
  )
}

export default CartListTable
