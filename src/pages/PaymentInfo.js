import React, { useState } from 'react'
import bootstrap from 'react-bootstrap'

import CartPayment from '../components/cart/CartPayment'

import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/cart/cart.css'

function PaymentInfo(props) {
  return (
    <div className="container">
      <CartPayment />
    </div>
  )
}

export default PaymentInfo
