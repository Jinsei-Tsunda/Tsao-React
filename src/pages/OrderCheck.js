import React, { useState } from 'react'
import bootstrap from 'react-bootstrap'

import CartOrder from '../components/cart/CartOrder'

import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/cart/cart.css'

function OrderCheck(props) {
  return (
    <div className="container">
      <CartOrder />
    </div>
  )
}

export default OrderCheck
