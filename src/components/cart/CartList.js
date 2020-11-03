import React, { useState } from 'react'

import CartListTable from './CartListTable'

function CartList(props) {
  return (
    <>
      <div classNameName="row justify-content-center">
        <div className="step-wrap">
          <img src="./images/step1.png" alt="" />
        </div>
      </div>
      <CartListTable />
    </>
  )
}

export default CartList
