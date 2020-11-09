import React, { useState } from 'react'
import bootstrap from 'react-bootstrap'

import CartListTable from '../components/cart/CartListTable'
import BackToShopBtn from '../components/cart/BackToShopBtn'
import { Link } from 'react-router-dom'

import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/cart/cart.css'

function Cart(props) {
  return (
    <div className="container">
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
    </div>
  )
}

export default Cart
