import React, { useState } from 'react'

import CartListTable from './CartListTable'
import BackToShopBtn from './BackToShopBtn'
import { Link } from 'react-router-dom'

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
        <Link to="/ShopList">
          <BackToShopBtn />
        </Link>
      </div>
    </>
  )
}

export default CartList
