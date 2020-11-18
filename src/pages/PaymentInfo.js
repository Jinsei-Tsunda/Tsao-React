import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bootstrap from 'react-bootstrap'

import PaymentContent from '../components/cart/PaymentContent'

import '../../node_modules/bootstrap/scss/bootstrap.scss'
import '../styles/cart/cart.css'

function PaymentInfo(props) {
  return (
    <>
      <PaymentContent />
    </>
  )
}

export default PaymentInfo
