import React from 'react'

import CartDetailBuild from './CartDetailBuild'
import CartDiscountBuild from './CartDiscountBuild'

function CartListTable(props) {
  return (
    <>
      <div className="row col-12 px-0">
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
              <CartDetailBuild />
              <CartDetailBuild />
              <CartDiscountBuild />
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CartListTable
