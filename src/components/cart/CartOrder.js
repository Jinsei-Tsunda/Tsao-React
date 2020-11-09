import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CartDropdown from './CartDropdown'
import CartListTableBuild from './CartListTableBuild'
import OrderListCard from './OrderListCard'
import PaymentInfoBtn from './PaymentInfoBtn'
import CheckoutBtn from './CheckoutBtn'

function CartOrder(props) {
  return (
    <>
      <div className="container">
        <div classNameName="row justify-content-center">
          <div className="step-wrap">
            <img src="./images/step3.png" alt="" />
          </div>
        </div>
        <CartDropdown />
        <CartListTableBuild />
        <OrderListCard />
        <div className="row col-12 mb-5 justify-content-between">
          <Link to="/order-check">
            <PaymentInfoBtn />
          </Link>
          <Link to="/order-done">
            <CheckoutBtn />
          </Link>
        </div>
      </div>
    </>
  )
}
export default CartOrder
