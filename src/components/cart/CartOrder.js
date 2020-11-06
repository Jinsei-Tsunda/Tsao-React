import React, { useState } from 'react'

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
          <PaymentInfoBtn />
          <CheckoutBtn />
        </div>
      </div>
    </>
  )
}
export default CartOrder
