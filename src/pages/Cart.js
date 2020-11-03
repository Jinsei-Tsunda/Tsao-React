import React, { useState } from 'react'
import bootstrap from 'react-bootstrap'

import CartList from '../components/cart/CartList'
import CartPayment from '../components/cart/CartPayment'
import CartOrder from '../components/cart/CartOrder'

import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/cart/cart.css'

function Cart(props) {
  return (
    <div className="container">
      <CartList />
      <CartPayment />
      <CartOrder />
    </div>
  )
}

export default Cart
