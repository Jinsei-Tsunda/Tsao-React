import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CartListTableBuild from './CartListTableBuild'
import CartReceive from './CartReceive'
import CartCreditCard from './CartCreditCard'
import CartRemarks from './CartRemarks'
import CartReceipt from './CartReceipt'

function CartPayment(props) {
  return (
    <>
      <div className="row justify-content-center">
        <div className="step-wrap">
          <img src="./images/step2.png" alt="" />
        </div>
      </div>
      <div className="row col-12 px-0 justify-content-center">
        <div className="cart-list w-100 mb-3">
          <div className="total-wrap">合計：NT$ 1000</div>
          <div className="cart-dropdown d-flex justify-content-center align-items-center">
            購物車：2件&ensp;
            <img
              className=""
              id="cart-dropdown-arrow"
              src="./images/expand-button.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <CartListTableBuild />
      <div className="row col-12 px-0">
        <CartReceive />
        <CartCreditCard />
      </div>
      <div className="row col-12 px-0">
        <CartRemarks />
        <CartReceipt />
      </div>
      <div className="row col-12 px-0 justify-content-between">
        <input className="btn" type="button" id="backToCart" value="回購物車" />
        <input
          className="btn"
          type="button"
          id="recheckOrder"
          value="確認訂單"
        />
      </div>
    </>
  )
}
export default CartPayment
