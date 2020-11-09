import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CartDropdown from './CartDropdown'
import CartListTableBuild from './CartListTableBuild'
import CartReceive from './CartReceive'
import CartCreditCard from './CartCreditCard'
import CartRemarks from './CartRemarks'
import CartReceipt from './CartReceipt'
import BackToCartBtn from './BackToCartBtn'
import RecheckOrderBtn from './RecheckOrderBtn'

function CartPayment(props) {
  return (
    <>
      <div className="row justify-content-center">
        <div className="step-wrap">
          <img src="./images/step2.png" alt="" />
        </div>
      </div>
      <CartDropdown />
      <CartListTableBuild />
      <div className="row col-12 px-0">
        <CartReceive />
        <CartCreditCard />
      </div>
      <div className="row col-12 px-0">
        <CartRemarks />
        <CartReceipt />
      </div>
      <div className="row col-12 justify-content-between mb-5">
        <Link to="/cart">
          <BackToCartBtn />
        </Link>
        <Link to="/order-check">
          <RecheckOrderBtn />
        </Link>
      </div>
    </>
  )
}
export default CartPayment
