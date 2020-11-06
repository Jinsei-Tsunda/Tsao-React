import React, { useState } from 'react'

import CartListTable from './CartListTable'
import BackToShopBtn from './BackToShopBtn'

function CartList(props) {
  return (
    <>
      <div classNameName="row justify-content-center">
        <div className="step-wrap">
          <img src="./images/step1.png" alt="" />
        </div>
      </div>
      <CartListTable />
      <div className="row col-12 pr-0 mb-5">
        <BackToShopBtn />
      </div>
    </>
  )
}

export default CartList
