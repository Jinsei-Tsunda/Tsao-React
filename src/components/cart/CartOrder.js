import React, { useState } from 'react'

import BackToShopBtn from './BackToShopBtn'

function CartOrder(props) {
  return (
    <>
      <div classNameName="row justify-content-center">
        <div className="step-wrap">
          <img src="./images/step3.png" alt="" />
        </div>
      </div>
      <div className="row col-12 pr-0 mb-5 justify-content-center">
        <BackToShopBtn />
      </div>
    </>
  )
}
export default CartOrder
