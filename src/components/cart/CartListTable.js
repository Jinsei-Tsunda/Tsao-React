import React, { useState, useEffect } from 'react'

import CartDetail from './CartDetail'
import CartDiscount from './CartDiscount'
import CartDelivery from './CartDelivery'
import CartOrderInfo from './CartOrderInfo'
import CartDetailEmpty from './CartDetailEmpty'

function CartListTable(props) {
  const [mycart, setMycart] = useState([])
  const [dataLoading, setDataLoading] = useState(false)
  const [mycartDisplay, setMycartDisplay] = useState([])

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }
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
                <th></th>
              </tr>
            </thead>
            <tbody>
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
